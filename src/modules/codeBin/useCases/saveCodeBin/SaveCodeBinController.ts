import { Response } from "@serverless/cloud";
import { SaveCodeBinUseCase } from "./SaveCodeBinUseCase";
import { SchemaTypeWithRequest } from "../../../../shared/http/utils/SchemaType";
import SaveCodeBinSchema from "./SaveCodeBinSchema";
import { container } from "tsyringe";

export class SaveCodeBinController {
  async handle(
    request: SchemaTypeWithRequest<typeof SaveCodeBinSchema>,
    response: Response
  ) {
    const repo = container.resolve("CodeBinRepository");

    console.log(repo);

    const saveCodeBinUseCase =
      container.resolve<SaveCodeBinUseCase>("SaveCode");

    const codeBin = await saveCodeBinUseCase.execute(request.body);

    return response.json(codeBin);
  }
}
