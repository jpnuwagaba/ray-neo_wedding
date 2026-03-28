export const siteName = "Raymond + Neoline Wedding";

const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : null;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  productionHost ??
  "https://ray-neo-wedding.vercel.app";
