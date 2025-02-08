// Error utility class for fetch method
export class FetchError extends Error {
    constructor(
      message: string,
      public statusCode?: number,
      public body?: unknown
    ) {
      super(message);
      this.name = 'FetchError';
    }
  }