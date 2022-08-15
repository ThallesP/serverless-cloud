import { CodeBin } from "../../entities/CodeBin";
import { ICodeBinRepository } from "../../repositories/ICodeBinRepository";
import { InMemoryCodeBinRepository } from "../../repositories/inMemory/InMemoryCodeBinRepository";
import { FindCodeBinUseCase } from "./FindCodeBinUseCase";

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

    const sut = await findCodeBinUseCase.execute({ id: codeBin.id });

    expect(sut);
  });
});

