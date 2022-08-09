import { CodeBin } from "../entities/CodeBin";

export interface ICodeBinRepository {
  create(codeBin: CodeBin): Promise<CodeBin>;
  findById(id: string): Promise<CodeBin | undefined | null>;
}
