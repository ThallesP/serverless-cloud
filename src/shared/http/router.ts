import "express-async-errors";
import { api } from "@serverless/cloud";
import SaveCodeBinSchema from "../../../src/modules/codeBin/useCases/saveCodeBin/SaveCodeBinSchema";
import { schemaValidationMiddleware } from "../../../src/shared/http/middlewares/SchemaValidationMiddleware";
import { FindCodeBinController } from "../../modules/codeBin/useCases/findCodeBin/FindCodeBinController";
import { SaveCodeBinController } from "../../modules/codeBin/useCases/saveCodeBin/SaveCodeBinController";
import { errorHandlerMiddleware } from "./middlewares/ErrorHandlerMiddleware";

const saveCodeBinController = new SaveCodeBinController();
const findCodeBinController = new FindCodeBinController();

api.get("/code/:id", findCodeBinController.handle);
api.post(
  "/code",
  schemaValidationMiddleware(SaveCodeBinSchema),
  saveCodeBinController.handle
);

api.use(errorHandlerMiddleware);

