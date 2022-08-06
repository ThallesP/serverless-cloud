import { Request } from "@serverless/cloud";
import { JTDDataType } from "ajv/dist/core";

export type SchemaType<K> = JTDDataType<K>;

export type SchemaTypeWithRequest<K> = Request & { body: JTDDataType<K> };
