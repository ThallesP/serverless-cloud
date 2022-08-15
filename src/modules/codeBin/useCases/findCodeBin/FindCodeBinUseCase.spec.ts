import { CodeBin } from "../../entities/CodeBin";
import { CodeBinNotFoundException } from "../../exceptions/CodeBinNotFoundException";
import { ICodeBinRepository } from "../../repositories/ICodeBinRepository";
import { InMemoryCodeBinRepository } from "../../repositories/inMemory/InMemoryCodeBinRepository";
import { FindCodeBinUseCase } from "./FindCodeBinUseCase";
import { randomUUID } from "node:crypto";

let inMemoryCodeBinRepository: ICodeBinRepository;
let findCodeBinUseCase: FindCodeBinUseCase;
describe("FindCodeBinUseCase", () => {
  beforeEach(() => {
    inMemoryCodeBinRepository = new InMemoryCodeBinRepository();
    findCodeBinUseCase = new FindCodeBinUseCase(inMemoryCodeBinRepository);
  });

  it("should be able to find a code bin", async () => {
    const codeBin = await inMemoryCodeBinRepository.create(
      new CodeBin({
        code_text: "console.log('hello_world')",
        language_name: "javascript",
      })
    );

    const sut = await findCodeBinUseCase.execute(codeBin.id);

    expect(sut);
  });

  it("should not be able to find a non-existent code bin", async () => {
    await expect(async () => {
      await findCodeBinUseCase.execute(randomUUID());
    }).rejects.toBeInstanceOf(CodeBinNotFoundException);
  });
});

