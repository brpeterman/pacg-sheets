import { App, Duration, RemovalPolicy, Stack, StackProps } from "monocdk";
import {
  Certificate,
  CertificateValidation,
} from "monocdk/lib/aws-certificatemanager";
import {
  Distribution,
  PriceClass,
  ViewerProtocolPolicy,
} from "monocdk/lib/aws-cloudfront";
import { S3Origin } from "monocdk/lib/aws-cloudfront-origins";
import { HostedZone } from "monocdk/lib/aws-route53";
import { Bucket } from "monocdk/lib/aws-s3";
import {
  BucketDeployment,
  CacheControl,
  Source,
} from "monocdk/lib/aws-s3-deployment";

export interface WebsiteStackProps extends StackProps {
  readonly domainName: string;
  readonly useHostedZone: boolean;
}

export class AppStack extends Stack {
  constructor(app: App, id: string, props: WebsiteStackProps) {
    super(app, id);

    const bucket = new Bucket(this, "AssetBucket", {
      publicReadAccess: true,
      removalPolicy: RemovalPolicy.DESTROY,
      websiteIndexDocument: "index.html",
    });

    let hostedZone;
    if (props.useHostedZone) {
      hostedZone = new HostedZone(this, "HostedZone", {
        zoneName: props.domainName,
      });
    }

    const cert = new Certificate(this, "Cert", {
      domainName: props.domainName,
      validation: CertificateValidation.fromDns(hostedZone),
    });

    const cloudfront = new Distribution(this, "Distribution", {
      defaultBehavior: {
        origin: new S3Origin(bucket),
        viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      },
      certificate: cert,
      domainNames: [props.domainName],
      priceClass: PriceClass.PRICE_CLASS_100,
    });

    new BucketDeployment(this, "DeployWebsite", {
      sources: [Source.asset("../app/build")],
      destinationBucket: bucket,
      retainOnDelete: false,
      cacheControl: [
        CacheControl.setPublic(),
        CacheControl.maxAge(Duration.hours(1)),
      ],
      distribution: cloudfront,
      distributionPaths: ["/*"],
    });
  }
}
