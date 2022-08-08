import { container } from "tsyringe";
import { ICodeBinRepository } from "../../modules/codeBin/useCases/repositories/ICodeBinRepository";
import { SlsDataCodeBinRepository } from "../../modules/codeBin/useCases/repositories/slsData/SlsDataCodeBinRepository";

container.registerSingleton<ICodeBinRepository>(
  "CodeBinRepository",
  SlsDataCodeBinRepository
);
