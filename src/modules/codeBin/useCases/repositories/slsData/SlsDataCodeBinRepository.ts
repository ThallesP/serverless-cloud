import { data } from "@serverless/cloud";
import { CodeBin } from "../../entities/CodeBin";
import { ICodeBinRepository } from "../ICodeBinRepository";

export class SlsDataCodeBinRepository implements ICodeBinRepository {
  async create(codeBin: CodeBin): Promise<CodeBin> {
    await data.set(`codebin:${codeBin.id}`, codeBin);

    return codeBin;
  }

  async findById(id: string): Promise<CodeBin | null | undefined> {
    return data.get<CodeBin>(`codebin:${id}`);
  }
}
