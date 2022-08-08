import { Response } from "@serverless/cloud";
import { SaveCodeBinUseCase } from "./SaveCodeBinUseCase";
import { SchemaTypeWithRequest } from "../../../../shared/http/utils/SchemaType";
import SaveCodeBinSchema from "./SaveCodeBinSchema";
import { InMemoryCodeBinRepository } from "../repositories/inMemory/InMemoryCodeBinRepository";
import { container } from "tsyringe";

export class SaveCodeBinController {
  async handle(
    request: SchemaTypeWithRequest<typeof SaveCodeBinSchema>,
    response: Response
  ) {
    const saveCodeBinUseCase = container.resolve(SaveCodeBinUseCase);

    const codeBin = await saveCodeBinUseCase.execute(request.body);

    return response.json(codeBin);
  }
}
