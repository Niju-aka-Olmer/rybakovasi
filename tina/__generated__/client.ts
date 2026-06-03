import { createClient } from "tinacms/dist/client";
import { queries } from "./types.js";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '0deb2ace4f73d528c4e34fe75a45947cfae4d26e', queries,  });
export default client;
  