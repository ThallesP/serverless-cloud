import { BaseException } from "../../../shared/http/utils/BaseException";

export class CodeBinNotFoundException extends BaseException {
  constructor() {
    super("CodeBinNotFound", "Code bin not found", 404);
  }
}

