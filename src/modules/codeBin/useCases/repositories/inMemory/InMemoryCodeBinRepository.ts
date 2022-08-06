import { injectable } from "tsyringe";
import { CodeBin } from "../../entities/CodeBin";
import { ICodeBinRepository } from "../ICodeBinRepository";

@injectable()
export class InMemoryCodeBinRepository implements ICodeBinRepository {
  private codeBins: CodeBin[] = [];

  async findById(id: string): Promise<CodeBin | null | undefined> {
    return this.codeBins.find((codeBin) => codeBin.id === id);
  }

  async create(codeBin: CodeBin): Promise<CodeBin> {
    this.codeBins.push(codeBin);
    return codeBin;
  }
}
