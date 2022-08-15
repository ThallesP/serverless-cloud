export class BaseException extends Error {
  constructor(
    public name: string,
    public message: string,
    public statusCode: number
  ) {
    super();
  }

  toString(): string {
    return `[${this.name}] - ${this.message}`;
  }
}

