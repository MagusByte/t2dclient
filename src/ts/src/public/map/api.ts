import { IApiClient } from "../ApiClient";
import { MapCreateRequest, MapCreateResponse } from "./MapCreateRequest";
import { MapDeleteRequest, MapDeleteResponse } from "./MapDeleteRequest";
import { MapGetResponse } from "./MapGetRequest";
import { MapSearchRequest, MapSearchResponse } from "./MapSearchRequest";
import { MapUpdateRequest, MapUpdateResponse } from "./MapUpdateRequest";

export class MapApi {
  constructor(private readonly http: IApiClient) { }
  readonly #prefix = '/api/v1/map';

  create(request: MapCreateRequest) {
    return this.http.postJson<MapCreateResponse>(this.#prefix, request);
  }

  update(request: MapUpdateRequest) {
    return this.http.patchJson<MapUpdateResponse>(`${this.#prefix}`, request);
  }

  delete(request: MapDeleteRequest) {
    return this.http.deleteJson<MapDeleteResponse>(`${this.#prefix}/${request.id}`);
  }

  get(id: string) {
    return this.http.getJson<MapGetResponse>(`${this.#prefix}/${id}`);
  }

  search(body: MapSearchRequest) {
    return this.http.postJson<MapSearchResponse>(`${this.#prefix}/search`, body);
  }
}
