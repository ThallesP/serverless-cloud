import { api } from "@serverless/cloud";

describe("SaveCodeBinController", () => {
  it("should be able to save a code bin", async () => {
    const { body } = await api.post("/code").invoke({
      code_text: "console.log('hello world')",
      language_name: "javascript",
    });

    expect(body.language_name).toEqual("javascript");
  });
});
