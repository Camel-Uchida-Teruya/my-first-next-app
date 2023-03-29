// libs/client.js
import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'o3i1mh5udi',
  apiKey: process.env.API_KEY,
});
