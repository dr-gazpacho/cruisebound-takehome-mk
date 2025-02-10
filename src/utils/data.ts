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
            const response = await fetch('https://sandbox.cruisebound-qa.com/sailings', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Origin': 'https://cruisebound-takehome-mk.vercel.app/',
                    'Access-Control-Request-Method': 'GET',
                    'Access-Control-Request-Headers': 'Content-Type,Accept'
                }
          });
  
            if (!response.ok) {
                //Throw typed error - ideally the real world APIs send more semantic codes/status/text
                //Would add some sort of logger here - push to something like Datadog
                throw new FetchError(
                    `HTTP error! status: ${response.status}`,
                    response.status,
                    await response.text()
                );
            }
  
            const data = await response.json();
            return {data, error: null} ;
        } catch (err: unknown) {
    
            //Same as above in the catch block - forward error messaging to some type of logger
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

            //Same as above
            if (err instanceof Error) {
                return {
                    data: null,
                    error: {
                        message: err.message
                    }
                };
            }
            // for truly unknown errors
            return {
                data: null,
                error: {
                    message: 'An unknown error occurred'
                }
            };

        }
}