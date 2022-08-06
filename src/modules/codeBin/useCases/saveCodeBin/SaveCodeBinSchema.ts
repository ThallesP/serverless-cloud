export default {
  type: "object",
  properties: {
    code_text: { type: "string" },
    language_name: { type: "string" },
  },
  required: ["code_text", "language_name"],
  additionalProperties: false,
} as const;
