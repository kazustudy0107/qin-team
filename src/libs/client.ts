import { createClient } from "microcms-js-sdk"; //ES6

// Initialize Client SDK.
export const client = createClient({
  serviceDomain: "team-develop-blog", // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
  apiKey: "e7be35280a6944bfb21b484c280a172f7906",
});
