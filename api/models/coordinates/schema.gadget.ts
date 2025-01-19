import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "coordinates" model, go to https://what-the-crops.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "shJYkI2Y-ayD",
  fields: {
    Vertex: {
      type: "belongsTo",
      parent: { model: "fields" },
      storageKey: "qa-J2GB0eb0y",
    },
    latitude: { type: "number", storageKey: "MpcNBjfNPNNn" },
    longitude: { type: "number", storageKey: "q2ICw_tNmZJk" },
  },
};
