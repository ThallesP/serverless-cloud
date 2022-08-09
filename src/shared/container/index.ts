import { container } from "tsyringe";
import { ICodeBinRepository } from "../../modules/codeBin/repositories/ICodeBinRepository";
import { SlsDataCodeBinRepository } from "../../modules/codeBin/repositories/slsData/SlsDataCodeBinRepository";

container.registerSingleton<ICodeBinRepository>(
  "CodeBinRepository",
  SlsDataCodeBinRepository
);
