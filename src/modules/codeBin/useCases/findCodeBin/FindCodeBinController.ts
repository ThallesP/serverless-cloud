import { Response } from "express";
import { container } from "tsyringe";
import { SchemaTypeWithRequest } from "../../../../shared/http/utils/SchemaType";
import { FindCodeBinUseCase } from "./FindCodeBinUseCase";

export class FindCodeBinController {
  async handle(request: SchemaTypeWithRequest<any>, response: Response) {
    const findCodeBinUseCase = container.resolve(FindCodeBinUseCase);

    const codeBin = await findCodeBinUseCase.execute(request.params["id"]);

    return response.json(codeBin);
  }
}

