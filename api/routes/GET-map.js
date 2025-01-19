import { RouteHandler } from "gadget-server";

/**
 * Route handler for GET map
 *
 * @type { RouteHandler } route handler - see: https://docs.gadget.dev/guides/http-routes/route-configuration#route-context
 */
const route = async ({ reply }) => {
  await reply.redirect(302, "/draw-map");
};

export default route;