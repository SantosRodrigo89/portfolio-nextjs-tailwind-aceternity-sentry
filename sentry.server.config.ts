import * as Sentry from "@sentry/nextjs";

export function initServerSentry() {
  Sentry.init({
    dsn: "https://fc1259a06b1bdfca579bd36a3c0328b1@o4507800550899712.ingest.us.sentry.io/4507800565383168",

    // Adjust this value in production, or use tracesSampler for greater control
    tracesSampleRate: 1,

    // Setting this option to true will print useful information to the console while you're setting up Sentry.
    debug: false,

    // Uncomment the line below to enable Spotlight (https://spotlightjs.com)
    // spotlight: process.env.NODE_ENV === 'development',
  });
}
try {
  initServerSentry();
} catch (error) {
  console.error("Failed to initialize Sentry on the server:", error);
}
