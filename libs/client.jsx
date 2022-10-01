import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "beer-site",
  apiKey: process.env.API_KEY,
});

export const client00 = createClient({
  serviceDomain: "beer-blog",
  apiKey: process.env.API_KEY00,
});
