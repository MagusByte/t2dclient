import { IApiClient } from "../IApiClient";
import { InviteAcceptRequest, InviteAcceptResponse } from "./InviteAcceptRequest";
import { InviteCreateRequest, InviteCreateResponse } from "./InviteCreateRequest";
import { InviteListRequest, InviteListResponse } from "./InviteListRequest";
import { InvitePreviewRequest, InvitePreviewResponse } from "./InvitePreviewRequest";
import { InviteRevokeRequest, InviteRevokeResponse } from "./InviteRevokeRequest";

export class InviteApiService {
  constructor(readonly http: IApiClient) { }
  readonly #prefix = '/api/v1/invite';

  create(request: InviteCreateRequest) {
    return this.http.postJson<InviteCreateResponse>(`${this.#prefix}/create`, request);
  }

  list(request: InviteListRequest) {
    return this.http.getJson<InviteListResponse>(`${this.#prefix}/list?workspaceId=${request.workspaceId}`);
  }

  revoke(request: InviteRevokeRequest) {
    return this.http.postJson<InviteRevokeResponse>(`${this.#prefix}/revoke`, request);
  }

  preview(request: InvitePreviewRequest) {
    return this.http.postJson<InvitePreviewResponse>(`${this.#prefix}/preview`, request);
  }

  accept(request: InviteAcceptRequest) {
    return this.http.postJson<InviteAcceptResponse>(`${this.#prefix}/accept`, request);
  }
}
