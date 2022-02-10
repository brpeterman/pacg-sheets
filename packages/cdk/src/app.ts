import { App } from "monocdk";
import { AppStack } from "./website-stack";

const domainName = process.env.PACG_DOMAIN_NAME;
const accountId = process.env.AWS_ACCOUNT_ID;
const region = process.env.AWS_REGION;

if (!domainName) {
  throw new Error("Missing PACG_DOMAIN_NAME environment variable");
}
if (!accountId) {
  throw new Error("Missing AWS_ACCOUNT_ID environment variable");
}
if (!region) {
  throw new Error("Missing AWS_REGION environment variable");
}

const app = new App();

new AppStack(app, "PacgWebsite", {
  env: {
    account: accountId,
    region,
  },
  domainName,
  useHostedZone: false,
});

app.synth();
