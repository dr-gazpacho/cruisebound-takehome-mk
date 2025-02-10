import { CruiseApiResponse } from "../types";

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

export async function fetchTrips(): Promise<CruiseApiResponse> {
        try {
            const response = await fetch('/api/cruises', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            });
  
            if (!response.ok) {
                throw new FetchError(
                    `HTTP error! status: ${response.status}`,
                    response.status,
                    await response.text()
                );
            }
  
            const data = await response.json();
            return {data, error: null};
        } catch (err: unknown) {
            if (err instanceof FetchError) {
                return {
                    data: null,
                    error: {
                        message: err.message,
                        statusCode: err.statusCode,
                        body: err.body
                    }
                };
            }

            if (err instanceof Error) {
                return {
                    data: null,
                    error: {
                        message: err.message
                    }
                };
            }

            return {
                data: null,
                error: {
                    message: 'An unknown error occurred'
                }
            };
        }
}