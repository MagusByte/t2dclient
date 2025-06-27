import { IApiClient } from "../ApiClient";
import { VersionDto } from "./dto";

export class VersionApi {
  constructor(private readonly http: IApiClient) { }
  #prefix = '/api/v1/version';


  getVersion(): Promise<VersionDto> {
    return this.http.getJson<VersionDto>(this.#prefix, { authenticate: false });
  }
}
