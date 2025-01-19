import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "user" model, go to https://what-the-crops.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "dcl7q3DMwIrB",
  fields: {
    email: {
      type: "email",
      validations: { required: true, unique: true },
      storageKey: "Tob9CanXgrfh",
    },
    emailVerificationToken: {
      type: "string",
      storageKey: "3rNZzcg17o1N",
    },
    emailVerificationTokenExpiration: {
      type: "dateTime",
      includeTime: true,
      storageKey: "Fi82cHKLkNZE",
    },
    emailVerified: {
      type: "boolean",
      default: false,
      storageKey: "g1NvsFHUTY3n",
    },
    firstName: { type: "string", storageKey: "or1fB9ad465W" },
    googleImageUrl: { type: "url", storageKey: "tRln_MEVcHDY" },
    googleProfileId: { type: "string", storageKey: "weZ7VjM_N2R2" },
    lastName: { type: "string", storageKey: "7U0Hr9_Jsg6F" },
    lastSignedIn: {
      type: "dateTime",
      includeTime: true,
      storageKey: "tVzsGasyy6kw",
    },
    password: {
      type: "password",
      validations: { strongPassword: true },
      storageKey: "Kl9keLj2oVuB",
    },
    resetPasswordToken: {
      type: "string",
      storageKey: "xqHB0q9iya9_",
    },
    resetPasswordTokenExpiration: {
      type: "dateTime",
      includeTime: true,
      storageKey: "5nCFzwxXy5jg",
    },
    roles: {
      type: "roleList",
      default: ["unauthenticated"],
      storageKey: "kZxuAEUjN18i",
    },
  },
};
