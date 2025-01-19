import { RouteHandler } from "gadget-server";

/**
 * Route handler for GET map
 *
 * @type { RouteHandler } route handler - see: https://docs.gadget.dev/guides/http-routes/route-configuration#route-context
 */
const route = async ({ request, reply, api, logger, connections }) => {
  try {
    // Example: Fetch some data from your API or database
    const data = await api.someModel.findMany();

    // Send the data as a JSON response
    reply.send({ success: true, data });
  } catch (error) {
    logger.error("Error fetching data:", error);
    reply.code(500).send({ success: false, message: "Internal Server Error" });
  }
};

export default route;