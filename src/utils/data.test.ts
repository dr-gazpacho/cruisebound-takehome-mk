import { fetchTrips, FetchError } from './data';
import fetchMock from 'jest-fetch-mock';

describe('fetchTrips', () => {
    beforeAll(() => {
        fetchMock.enableMocks();
    });

    beforeEach(() => {
        fetchMock.resetMocks();
    });

    afterAll(() => {
        fetchMock.disableMocks();
    });

    it('should successfully fetch trips data', async () => {
        const mockData = [{ id: 1, destination: 'Caribbean' }];
        fetchMock.mockResponseOnce(JSON.stringify(mockData));

        const result = await fetchTrips();

        expect(result).toEqual({
            data: mockData,
            error: null
        });
        expect(fetch).toHaveBeenCalledWith(
        '/api/cruises',
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }
        }
        );
  });

  it('should handle HTTP errors with FetchError', async () => {
        const errorBody = 'Service Unavailable';
        fetchMock.mockResponseOnce(errorBody, { status: 503 });

        const result = await fetchTrips();

        expect(result).toEqual({
        data: null,
        error: {
            message: 'HTTP error! status: 503',
            statusCode: 503,
            body: errorBody
        }
        });
    });

  it('should handle network errors', async () => {
        const networkError = new Error('Network failure');
        fetchMock.mockReject(networkError);

        const result = await fetchTrips();

        expect(result).toEqual({
            data: null,
            error: {
                message: 'Network failure'
            }
        });
    });

    it('should handle JSON parsing errors', async () => {
        fetchMock.mockResponseOnce('invalid json');

        const result = await fetchTrips();

        expect(result).toEqual({
            data: null,
            error: {
                message: expect.stringContaining('JSON')
            }
        });
    });

  describe('FetchError', () => {
        it('should create FetchError with all properties', () => {
            const error = new FetchError('Test error', 404, 'Not Found');

            expect(error).toBeInstanceOf(Error);
            expect(error).toBeInstanceOf(FetchError);
            expect(error.name).toBe('FetchError');
            expect(error.message).toBe('Test error');
            expect(error.statusCode).toBe(404);
            expect(error.body).toBe('Not Found');
        });

        it('should create FetchError with only message', () => {
            const error = new FetchError('Test error');

            expect(error.message).toBe('Test error');
            expect(error.statusCode).toBeUndefined();
            expect(error.body).toBeUndefined();
        });
    });
});