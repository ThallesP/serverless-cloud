import { Response } from "@serverless/cloud";
import { SaveCodeBinUseCase } from "./SaveCodeBinUseCase";
import { SchemaTypeWithRequest } from "../../../../shared/http/utils/SchemaType";
import SaveCodeBinSchema from "./SaveCodeBinSchema";
import { InMemoryCodeBinRepository } from "../repositories/inMemory/InMemoryCodeBinRepository";

export class SaveCodeBinController {
  async handle(
    request: SchemaTypeWithRequest<typeof SaveCodeBinSchema>,
    response: Response
  ) {
    const saveCodeBinUseCase = new SaveCodeBinUseCase(
      new InMemoryCodeBinRepository()
    );

    const codeBin = await saveCodeBinUseCase.execute(request.body);

    return response.json(codeBin);
  }
}
