import { inject, injectable } from "tsyringe";
import { CodeBin } from "../../entities/CodeBin";
import { CodeBinNotFoundException } from "../../exceptions/CodeBinNotFoundException";
import { ICodeBinRepository } from "../../repositories/ICodeBinRepository";

@injectable()
export class FindCodeBinUseCase {
  constructor(
    @inject("CodeBinRepository")
    private codeBinRepository: ICodeBinRepository
  ) {}

  async execute(id: string): Promise<CodeBin> {
    const codeBin = await this.codeBinRepository.findById(id);

    if (!codeBin) throw new CodeBinNotFoundException();

    return codeBin;
  }
}

