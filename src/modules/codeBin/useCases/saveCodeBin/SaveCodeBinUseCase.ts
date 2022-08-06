import { inject, injectable } from "tsyringe";
import { SchemaType } from "../../../../shared/http/utils/SchemaType";
import { CodeBin } from "../entities/CodeBin";
import { ICodeBinRepository } from "../repositories/ICodeBinRepository";
import { InMemoryCodeBinRepository } from "../repositories/inMemory/InMemoryCodeBinRepository";
import SaveCodeBinSchema from "./SaveCodeBinSchema";

interface ISaveCodeBinUseCaseResponse extends CodeBin {}

@injectable()
export class SaveCodeBinUseCase {
  constructor(
    @inject(InMemoryCodeBinRepository)
    private codeBinRepository: ICodeBinRepository
  ) {}

  async execute({
    code_text,
    language_name,
  }: SchemaType<typeof SaveCodeBinSchema>) {
    const codeBin = new CodeBin({ code_text, language_name });

    await this.codeBinRepository.create(codeBin);

    return codeBin;
  }
}
