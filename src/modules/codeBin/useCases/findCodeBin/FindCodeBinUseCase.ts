import { inject } from "tsyringe";
import { SchemaType } from "../../../../shared/http/utils/SchemaType";
import { CodeBin } from "../../entities/CodeBin";
import { CodeBinNotFoundException } from "../../exceptions/CodeBinNotFoundException";
import { ICodeBinRepository } from "../../repositories/ICodeBinRepository";
import FindCodeBinSchema from "./FindCodeBinSchema";

export class FindCodeBinUseCase {
  constructor(
    @inject("CodeBinRepository")
    private codeBinRepository: ICodeBinRepository
  ) {}

  async execute({
    id,
  }: SchemaType<typeof FindCodeBinSchema>): Promise<CodeBin> {
    const codeBin = await this.codeBinRepository.findById(id);

    if (!codeBin) throw new CodeBinNotFoundException();

    return codeBin;
  }
}

