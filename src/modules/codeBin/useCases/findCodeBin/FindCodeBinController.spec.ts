import { api } from "@serverless/cloud";
import { container } from "tsyringe";
import { createCodeBinFactory } from "../../../../../__test__/factories/CreateCodeBinFactory";
import { ICodeBinRepository } from "../../repositories/ICodeBinRepository";
import crypto from "node:crypto";
import { CodeBinNotFoundException } from "../../exceptions/CodeBinNotFoundException";

let codeBinRepository: ICodeBinRepository;
describe("FindCodeBinController", () => {
  beforeEach(() => {
    codeBinRepository =
      container.resolve<ICodeBinRepository>("CodeBinRepository");
  });

  it("should be able to find a code bin", async () => {
    const randomCodeBin = await createCodeBinFactory();

    await api.get(`/code/${randomCodeBin.id}`).invoke();

    const codeBin = await codeBinRepository.findById(randomCodeBin.id);

    expect(codeBin).toBeDefined();
    expect(codeBin).not.toBeNull();
    expect(codeBin?.id).toEqual(randomCodeBin.id);
  });

  it("should not be able to find a non-existent code bin", async () => {
    const { body: codeBinBody } = await api
      .get(`/code/${crypto.randomUUID()}`)
      .invoke();

    expect(codeBinBody.message).toEqual(new CodeBinNotFoundException().message);
  });
});

