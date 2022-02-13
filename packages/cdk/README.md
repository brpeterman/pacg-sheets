# CDK Application

This package is the optional CDK application definition.
If you'd prefer not to deploy this app to AWS, you
can just ignore it!

## Environment variables

The following environment variables are required to make
this work:

* `PACG_DOMAIN_NAME`: Domain where the website will be hosted.
* `AWS_ACCOUNT_ID`: ID of your AWS account.
* `AWS_REGION`: Region to deploy to (such as `us-east-1`).

## Authentication

CDK uses the standard AWS CLI credential search mechanism:
https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html

## Deployment

1. Install `aws-cli`: `npm install -g aws-cli`
1. (Only needed once) Bootstrap the environment: `npm run cdk bootstrap`
1. In the `cdk` directory, run `npm run deploy`.
1. After a while, Cloudformation will create an ACM certificate record.
    You will need to open the Certificate Manager in the AWS console
    for instructions on how to validate your domain.
1. A short time after validating the certificate, the stack will
    continue deploying automatically.

Thereafter, just run `npm run deploy` to deploy updates.
It will be much faster after the stack has been set up once.
