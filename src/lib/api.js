import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN, // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
  apiKey: process.env.API_KEY,
});
