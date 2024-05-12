import { Integrations } from '@sentry/tracing';
import * as Sentry from '@sentry/browser';

export default defineNuxtPlugin((nuxtApp) => {
  const environment = nuxtApp.$config.public.ENV;

  Sentry.init({
    dsn: 'https://becca5618d364a798fba91fa88b84a44@o427078.ingest.sentry.io/4506002458148864',
    environment,
    integrations: [new Integrations.BrowserTracing()],
    sampleRate: 1,
    tracesSampleRate: 1,
  });
});
