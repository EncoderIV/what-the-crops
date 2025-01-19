// Sets up the API client for interacting with your backend. 
// For your API reference, visit: https://docs.gadget.dev/api/what-the-crops
import { Client } from "@gadget-client/what-the-crops";

export const api = new Client({ environment: window.gadgetConfig.environment });
