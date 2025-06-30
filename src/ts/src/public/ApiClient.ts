export interface ApiFetchConfig {
  /**
   * Should the request be made with or without authentication?
   * Defaults to true.
   */
  authenticate: boolean;
}

/** The defaults unless overridden */
export const ApiFetchConfigDefault: ApiFetchConfig = {
  authenticate: true,
};

interface ApiGetConfig extends ApiFetchConfig { }
interface ApiPostConfig extends ApiFetchConfig { }
interface ApiPatchConfig extends ApiFetchConfig { }
interface ApiPutConfig extends ApiFetchConfig { }
interface ApiDeleteConfig extends ApiFetchConfig { }

export interface HttpError extends Error {
  status: number;
  statusText: string;
  response?: string;
}

/**
 * Interface for an API client that can make HTTP requests.
 * It provides methods for making GET, POST, PUT, PATCH, and DELETE requests,
 * and allows setting and retrieving an authentication token.
 * 
 * The user of the library should implement the `IApiClient` interface
 * to provide the actual HTTP request logic, such as using `fetch` or `axios`.
 * 
 * If the request fails, the methods should throw an `HttpError` with
 * the status code and status text from the response.
 */
export interface IApiClient {
  getJson<R>(url: string, config?: Partial<ApiGetConfig>): Promise<R>;
  postJson<R, T = object>(url: string, body: T, config?: Partial<ApiPostConfig>): Promise<R>;
  putJson<R, T = object>(url: string, body: T, config?: Partial<ApiPutConfig>): Promise<R>;
  patchJson<R, T = object>(url: string, body: T, config?: Partial<ApiPatchConfig>): Promise<R>;
  deleteJson<R>(url: string, config?: Partial<ApiDeleteConfig>): Promise<R>;

  setAuthToken(token: string): void;
  getAuthToken(): string | null;
}
