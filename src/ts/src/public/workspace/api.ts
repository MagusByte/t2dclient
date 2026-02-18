import { IApiClient } from "../IApiClient";
import { WebhookListResponse } from "../webhook/WebhookListRequest";
import { WorkspaceCreateRequest, WorkspaceCreateResponse } from "./WorkspaceCreateRequest";
import { WorkspaceCreateTutorialRequest, WorkspaceCreateTutorialResponse } from "./WorkspaceCreateTutorialRequest";
import { WorkspaceDeleteRequest, WorkspaceDeleteResponse } from "./WorkspaceDeleteRequest";
import { WorkspaceGetResponse } from "./WorkspaceGetRequest";
import { WorkspaceListRequest } from "./WorkspaceListRequest";
import { WorkspaceMarkAsTutorialTemplateRequest, WorkspaceMarkAsTutorialTemplateResponse } from "./WorkspaceMarkAsTutorialTemplateRequest";
import { WorkspaceRemoveMemberRequest, WorkspaceRemoveMemberResponse } from "./WorkspaceRemoveMemberRequest";
import { WorkspaceSubscriptionRequest, WorkspaceSubscriptionResponse } from "./WorkspaceSubscriptionRequest";
import { WorkspaceUpdateRequest, WorkspaceUpdateResponse } from "./WorkspaceUpdateRequest";

export class WorkspaceApi {
  constructor(private readonly http: IApiClient) { }
  #prefix = '/api/v1/workspace';

  list() {
    return this.http.getJson<WorkspaceListRequest>(this.#prefix);
  }

  create(request: WorkspaceCreateRequest) {
    return this.http.postJson<WorkspaceCreateResponse>(this.#prefix, request);
  }

  update(request: WorkspaceUpdateRequest) {
    return this.http.patchJson<WorkspaceUpdateResponse>(this.#prefix, request);
  }

  get(id: string) {
    return this.http.getJson<WorkspaceGetResponse>(`${this.#prefix}/${id}`);
  }

  delete(request: WorkspaceDeleteRequest) {
    return this.http.deleteJson<WorkspaceDeleteResponse>(`${this.#prefix}/${request.id}`);
  }
  getSubscription(request: WorkspaceSubscriptionRequest) {
    return this.http.getJson<WorkspaceSubscriptionResponse>(`${this.#prefix}/${request.workspaceId}/subscription`)
  }

  removeMember(request: WorkspaceRemoveMemberRequest) {
    return this.http.postJson<WorkspaceRemoveMemberResponse>(`${this.#prefix}/remove-member`, request);
  }

  createTutorial(request: WorkspaceCreateTutorialRequest) {
    return this.http.postJson<WorkspaceCreateTutorialResponse>(`${this.#prefix}/tutorial/create`, request);
  }

  setTutorialTemplate(request: WorkspaceMarkAsTutorialTemplateRequest) {
    return this.http.postJson<WorkspaceMarkAsTutorialTemplateResponse>(`${this.#prefix}/tutorial/set-template`, request);
  }

  listWebhooks(id: string) {
    return this.http.getJson<WebhookListResponse>(`${this.#prefix}/${id}/webhooks`);
  }
}
