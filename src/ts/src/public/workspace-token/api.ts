import { IApiClient } from "../IApiClient";
import { WorkspaceTokenCreateRequest, WorkspaceTokenCreateResponse } from "./WorkspaceTokenCreate";
import { WorkspaceTokenListRequest, WorkspaceTokenListResponse } from "./WorkspaceTokenList";
import { WorkspaceTokenRevokeRequest, WorkspaceTokenRevokeResponse } from "./WorkspaceTokenRevoke";
import { WorkspaceTokenVerifyRequest, WorkspaceTokenVerifyResponse } from "./WorkspaceTokenVerify";

export class WorkspaceTokenApi {
  constructor(private readonly http: IApiClient) { }
  #prefix = '/api/v1/workspace-token';

  list(request: WorkspaceTokenListRequest) {
    return this.http.getJson<WorkspaceTokenListResponse>(`${this.#prefix}/${request.workspaceId}`);
  }

  create(request: WorkspaceTokenCreateRequest) {
    return this.http.postJson<WorkspaceTokenCreateResponse>(`${this.#prefix}/create`, request);
  }


  revoke(request: WorkspaceTokenRevokeRequest) {
    return this.http.postJson<WorkspaceTokenRevokeResponse>(`${this.#prefix}/revoke`, request);
  }


  verify(request: WorkspaceTokenVerifyRequest) {
    return this.http.postJson<WorkspaceTokenVerifyResponse>(`${this.#prefix}/verify`, request);
  }



}
