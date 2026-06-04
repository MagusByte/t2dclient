import { IApiClient } from "../../IApiClient";
import {
  OrganizationMemberAddRequest,
  OrganizationMemberAddResponse,
} from "./OrganizationMemberAddRequest";
import {
  OrganizationMemberMyRequest,
  OrganizationMemberMyResponse,
} from "./OrganizationMemberMyRequest";
import {
  OrganizationMemberRemoveRequest,
  OrganizationMemberRemoveResponse,
} from "./OrganizationMemberRemoveRequest";
import {
  OrganizationMemberSearchRequest,
  OrganizationMemberSearchResponse,
} from "./OrganizationMemberSearchRequest";
import {
  OrganizationMemberUpdateRequest,
  OrganizationMemberUpdateResponse,
} from "./OrganizationMemberUpdateRequest";

export class OrganizationMemberApi {
  constructor(private readonly http: IApiClient) {}
  readonly #prefix = "/api/v1/organization/member";

  add(request: OrganizationMemberAddRequest) {
    return this.http.postJson<OrganizationMemberAddResponse>(
      `${this.#prefix}/add`,
      request,
    );
  }

  remove(request: OrganizationMemberRemoveRequest) {
    return this.http.postJson<OrganizationMemberRemoveResponse>(
      `${this.#prefix}/remove`,
      request,
    );
  }

  update(request: OrganizationMemberUpdateRequest) {
    return this.http.patchJson<OrganizationMemberUpdateResponse>(
      `${this.#prefix}/update`,
      request,
    );
  }

  search(request: OrganizationMemberSearchRequest) {
    return this.http.postJson<OrganizationMemberSearchResponse>(
      `${this.#prefix}/search`,
      request,
    );
  }

  myMembership(request: OrganizationMemberMyRequest) {
    return this.http.getJson<OrganizationMemberMyResponse>(
      `${this.#prefix}/my-membership?organizationId=${request.organizationId}`,
    );
  }
}
