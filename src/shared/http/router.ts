import "reflect-metadata";
import { api } from "@serverless/cloud";
import SaveCodeBinSchema from "../../../src/modules/codeBin/useCases/saveCodeBin/SaveCodeBinSchema";
import { schemaValidationMiddleware } from "../../../src/shared/http/middlewares/SchemaValidationMiddleware";
import { SaveCodeBinController } from "../../modules/codeBin/useCases/saveCodeBin/SaveCodeBinController";
import { container } from "tsyringe";

const saveCodeBinController = container.resolve(SaveCodeBinController);

api.post(
  "/code",
  schemaValidationMiddleware(SaveCodeBinSchema),
  saveCodeBinController.handle
);
