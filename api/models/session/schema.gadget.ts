import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "session" model, go to https://what-the-crops.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "jeoSKYC4ti91",
  fields: {
    user: {
      type: "belongsTo",
      parent: { model: "user" },
      storageKey: "thDwfiOU9e2E",
    },
  },
};
