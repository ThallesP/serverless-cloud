import "reflect-metadata";

import { ICodeBinRepository } from "../../modules/codeBin/useCases/repositories/ICodeBinRepository";
import { InMemoryCodeBinRepository } from "../../modules/codeBin/useCases/repositories/inMemory/InMemoryCodeBinRepository";
import { container } from "tsyringe";
import { SaveCodeBinUseCase } from "../../modules/codeBin/useCases/saveCodeBin/SaveCodeBinUseCase";

container.registerSingleton<ICodeBinRepository>(
  "CodeBinRepository",
  InMemoryCodeBinRepository
);

container.register<SaveCodeBinUseCase>("SaveCode", SaveCodeBinUseCase);
