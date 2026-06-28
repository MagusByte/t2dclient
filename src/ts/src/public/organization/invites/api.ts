import { IApiClient } from "../../IApiClient";
import {
  OrganizationInviteCreateRequest,
  OrganizationInviteCreateResponse,
} from "./OrganizationInviteCreateRequest";
import {
  OrganizationInviteRevokeRequest,
  OrganizationInviteRevokeResponse,
} from "./OrganizationInviteRevokeRequest";
import {
  OrganizationInviteSearchRequest,
  OrganizationInviteSearchResponse,
} from "./OrganizationInviteSearchRequest";
import {
  OrganizationInviteAcceptRequest,
  OrganizationInviteAcceptResponse,
} from "./OrganizationInviteAcceptRequest";
import {
  OrganizationInvitePreviewRequest,
  OrganizationInvitePreviewResponse,
} from "./OrganizationInvitePreviewRequest";

export class OrganizationInviteApi {
  constructor(private readonly http: IApiClient) {}
  readonly #prefix = "/api/v1/organization/invite";

  create(request: OrganizationInviteCreateRequest) {
    return this.http.postJson<OrganizationInviteCreateResponse>(
      `${this.#prefix}/create`,
      request,
    );
  }

  search(request: OrganizationInviteSearchRequest) {
    return this.http.postJson<OrganizationInviteSearchResponse>(
      `${this.#prefix}/search`,
      request,
    );
  }

  revoke(request: OrganizationInviteRevokeRequest) {
    return this.http.postJson<OrganizationInviteRevokeResponse>(
      `${this.#prefix}/revoke`,
      request,
    );
  }

  preview(request: OrganizationInvitePreviewRequest) {
    return this.http.postJson<OrganizationInvitePreviewResponse>(
      `${this.#prefix}/preview`,
      request,
    );
  }

  accept(request: OrganizationInviteAcceptRequest) {
    return this.http.postJson<OrganizationInviteAcceptResponse>(
      `${this.#prefix}/accept`,
      request,
    );
  }
}
