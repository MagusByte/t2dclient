import { IApiClient } from "../IApiClient";
import { CycleCreateRequest, CycleCreateResponse } from "./CycleCreateRequest";
import { CycleDeleteRequest, CycleDeleteResponse } from "./CycleDeleteRequest";
import { CycleGetResponse } from "./CycleGetRequest";
import { CycleSearchRequest, CycleSearchResponse } from "./CycleSearchRequest";
import { CycleUpdateRequest, CycleUpdateResponse } from "./CycleUpdateRequest";

export class CycleApi {
  constructor(private readonly http: IApiClient) {}
  readonly #prefix = "/api/v1/personal/cycle";

  create(request: CycleCreateRequest) {
    return this.http.postJson<CycleCreateResponse>(this.#prefix, request);
  }

  update(request: CycleUpdateRequest) {
    return this.http.patchJson<CycleUpdateResponse>(`${this.#prefix}`, request);
  }

  delete(request: CycleDeleteRequest) {
    return this.http.deleteJson<CycleDeleteResponse>(
      `${this.#prefix}/${request.cycleId}`,
    );
  }

  get(id: string) {
    return this.http.getJson<CycleGetResponse>(`${this.#prefix}/${id}`);
  }

  search(request: CycleSearchRequest) {
    return this.http.postJson<CycleSearchResponse>(
      `${this.#prefix}/search`,
      request,
    );
  }
}
