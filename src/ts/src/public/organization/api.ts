import { IApiClient } from "../IApiClient";
import {
  OrganizationCreateRequest,
  OrganizationCreateResponse,
} from "./OrganizationCreateRequest";
import {
  OrganizationDeleteRequest,
  OrganizationDeleteResponse,
} from "./OrganizationDeleteRequest";
import { OrganizationGetResponse } from "./OrganizationGetRequest";
import { OrganizationListResponse } from "./OrganizationListRequest";
import {
  OrganizationUpdateRequest,
  OrganizationUpdateResponse,
} from "./OrganizationUpdateRequest";

export class OrganizationApi {
  constructor(private readonly http: IApiClient) {}
  readonly #prefix = "/api/v1/organization";

  create(request: OrganizationCreateRequest) {
    return this.http.postJson<OrganizationCreateResponse>(
      this.#prefix,
      request,
    );
  }

  update(request: OrganizationUpdateRequest) {
    return this.http.patchJson<OrganizationUpdateResponse>(
      `${this.#prefix}`,
      request,
    );
  }

  delete(request: OrganizationDeleteRequest) {
    return this.http.deleteJson<OrganizationDeleteResponse>(
      `${this.#prefix}/${request.id}`,
    );
  }

  get(id: string) {
    return this.http.getJson<OrganizationGetResponse>(`${this.#prefix}/${id}`);
  }

  getAll() {
    return this.http.getJson<OrganizationListResponse>(`${this.#prefix}`);
  }
}
