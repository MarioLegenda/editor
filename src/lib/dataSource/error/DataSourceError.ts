export class DataSourceError<T> extends Error {
  constructor(message: string, public data: T) {
    super(message);
  }
}
