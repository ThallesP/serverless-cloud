import { Response } from "@serverless/cloud";
import { SaveCodeBinUseCase } from "./SaveCodeBinUseCase";
import { SchemaTypeWithRequest } from "../../../../shared/http/utils/SchemaType";
import SaveCodeBinSchema from "./SaveCodeBinSchema";
import { InMemoryCodeBinRepository } from "../repositories/inMemory/InMemoryCodeBinRepository";

export class SaveCodeBinController {
  private saveCodeBinUseCase: SaveCodeBinUseCase;
  constructor() {
    this.saveCodeBinUseCase = new SaveCodeBinUseCase(
      new InMemoryCodeBinRepository()
    );
  }

  async handle(
    request: SchemaTypeWithRequest<typeof SaveCodeBinSchema>,
    response: Response
  ) {
    const codeBin = await this.saveCodeBinUseCase.execute(request.body);

    return response.json(codeBin);
  }
}
