import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "fields" model, go to https://what-the-crops.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "Fh64gvepN8eR",
  fields: {
    Vertices: {
      type: "hasMany",
      children: { model: "coordinates", belongsToField: "Vertex" },
      storageKey: "z9sYuxBGAL-s",
    },
    typeOfCrop: { type: "string", storageKey: "N9RBiyKZPLkS" },
  },
};
