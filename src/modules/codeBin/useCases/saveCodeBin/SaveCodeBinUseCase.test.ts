import { InMemoryCodeBinRepository } from "../../repositories/inMemory/InMemoryCodeBinRepository";
import { SaveCodeBinUseCase } from "./SaveCodeBinUseCase";

let inMemoryCodeBinRepository: InMemoryCodeBinRepository;
let saveCodeBinUseCase: SaveCodeBinUseCase;
describe("SaveCodeBinUseCase", () => {
  beforeEach(() => {
    inMemoryCodeBinRepository = new InMemoryCodeBinRepository();
    saveCodeBinUseCase = new SaveCodeBinUseCase(inMemoryCodeBinRepository);
  });

  it("should be able to save a code bin", async () => {
    const sut = await saveCodeBinUseCase.execute({
      code_text: "console.log('hello world')",
      language_name: "javascript",
    });

    const codeBin = await inMemoryCodeBinRepository.findById(sut.id);

    expect(codeBin?.id).toEqual(sut.id);
    expect(codeBin?.language_name).toEqual(sut.language_name);
  });
});
