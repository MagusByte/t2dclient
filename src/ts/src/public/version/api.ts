import { IApiClient } from "../IApiClient";
import { VersionDto } from "./dto";

export class VersionApi {
  constructor(private readonly http: IApiClient) { }
  #prefix = '/api/v1/version';

  getVersion() {
    return this.http.getJson<VersionDto>(this.#prefix, { authenticate: false });
  }
}
