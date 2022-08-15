import { container } from "tsyringe";
import { CodeBin } from "../../src/modules/codeBin/entities/CodeBin";
import { ICodeBinRepository } from "../../src/modules/codeBin/repositories/ICodeBinRepository";
import crypto from "node:crypto";

export async function createCodeBinFactory(
  codeBin?: CodeBin
): Promise<CodeBin> {
  const codeBinRepository =
    container.resolve<ICodeBinRepository>("CodeBinRepository");

  return codeBinRepository.create(
    codeBin ||
      new CodeBin({
        code_text: crypto.randomBytes(8).toString("hex"),
        language_name: "ascii",
      })
  );
}

