import { Request, Response } from "@serverless/cloud";
import Ajv, { AnySchema } from "ajv";

export function schemaValidationMiddleware(schema: AnySchema) {
  return (request: Request, response: Response, next: any) => {
    const ajv = new Ajv();

    const isValid = ajv.validate(schema, request.body);

    if (!isValid) {
      return response.status(400).json({
        message: ajv.errors?.shift()?.message,
        error: "InvalidSchema",
      });
    }

    return next();
  };
}

