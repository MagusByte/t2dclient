import { IApiClient } from "../IApiClient";
import { SystemConfigGetResponse } from "./SystemConfigGetRequest";

export class SystemConfigApi {
  constructor(private readonly http: IApiClient) { }
  #prefix = '/api/v1/system-config';

  get() {
    return this.http.getJson<SystemConfigGetResponse>(`${this.#prefix}`);
  }
}
