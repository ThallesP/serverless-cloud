export default {
    type: "object",
    properties: {
      id: { type: "string" },
    },
    required: ["id"],
    additionalProperties: false,
  } as const;
  