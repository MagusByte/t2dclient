export interface ApiFetchConfig { }

export interface ApiGetConfig { }
export interface ApiPostConfig { }
export interface ApiPatchConfig { }
export interface ApiPutConfig { }
export interface ApiDeleteConfig { }

/**
 * Interface for an API client that can make HTTP requests.
 * It provides methods for making GET, POST, PUT, PATCH, and DELETE requests,
 * and allows setting and retrieving an authentication token.
 * 
 * The user of the library should implement the `IApiClient` interface
 * to provide the actual HTTP request logic, such as using `fetch`.
 */
export interface IApiClient<FetchConfig = ApiFetchConfig> {
  getJson<R>(url: string, config?: Partial<ApiGetConfig & FetchConfig>): Promise<R>;
  postJson<R, T = object>(url: string, body: T, config?: Partial<ApiPostConfig & FetchConfig>): Promise<R>;
  putJson<R, T = object>(url: string, body: T, config?: Partial<ApiPutConfig & FetchConfig>): Promise<R>;
  patchJson<R, T = object>(url: string, body: T, config?: Partial<ApiPatchConfig & FetchConfig>): Promise<R>;
  deleteJson<R>(url: string, config?: Partial<ApiDeleteConfig & FetchConfig>): Promise<R>;
}
