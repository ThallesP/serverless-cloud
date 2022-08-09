import { v4 as uuidV4 } from "uuid";
import utc from "dayjs/plugin/utc";
import dayjs from "dayjs";
dayjs.extend(utc);

interface ICodeBinProps {
  id?: string;

  code_text: string;

  language_name: string;

  created_at?: Date;
  updated_at?: Date | null;
}

export class CodeBin {
  constructor({
    id,
    code_text,
    language_name,
    created_at,
    updated_at,
  }: ICodeBinProps) {
    Object.assign(this, {
      id: id || uuidV4(),
      code_text,
      language_name,
      created_at: created_at || dayjs().utc().toDate().toString(),
      updated_at: updated_at || dayjs().utc().toDate().toString(),
    });
  }

  id: string;

  code_text: string;

  language_name: string;

  created_at: string;

  updated_at: string;
}
