import { IApiClient } from "../IApiClient";
import { PlacementCreateRequest, PlacementCreateResponse } from "./PlacementCreateRequest";
import { PlacementDeleteRequest, PlacementDeleteResponse } from "./PlacementDeleteRequest";
import { PlacementSearchRequest, PlacementSearchResponse } from "./PlacementSearchRequest";
import { PlacementUpdateRequest, PlacementUpdateResponse } from "./PlacementUpdateRequest";

export class PlacementApi {
  readonly #prefix = '/api/v1/placement';

  constructor(readonly http: IApiClient) { }

  create(request: PlacementCreateRequest) {
    return this.http.postJson<PlacementCreateResponse>(`${this.#prefix}`, request);
  }

  update(request: PlacementUpdateRequest) {
    return this.http.putJson<PlacementUpdateResponse>(`${this.#prefix}`, request);
  }

  delete(request: PlacementDeleteRequest) {
    // NOTE: Requesting a body is done on purpose so that the interfaces are consistent
    // with the WorkHubClient.
    return this.http.deleteJson<PlacementDeleteResponse>(
      `${this.#prefix}/${request.id}`,
    );
  }

  search(request: PlacementSearchRequest) {
    return this.http.postJson<PlacementSearchResponse>(
      `${this.#prefix}/search`,
      request,
    );
  }
}
