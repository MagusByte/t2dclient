import { IApiClient } from "../IApiClient";
import { WebhookCreateRequest, WebhookCreateResponse } from "./WebhookCreateRequest";
import { WebhookDeleteRequest, WebhookDeleteResponse } from "./WebhookDeleteRequest";
import { WebhookGetResponse } from "./WebhookGetRequest";
import { WebhookListResponse } from "./WebhookListRequest";
import { WebhookUpdateRequest, WebhookUpdateResponse } from "./WebhookUpdateRequest";

export class WebhookApi {
  constructor(private readonly http: IApiClient) { }
  #prefix = '/api/v1/webhook';
  #prefixWorkspace = '/api/v1/workspace';

  /** Retrieves a list of webhooks */
  list(workspaceId: string) {
    return this.http.getJson<WebhookListResponse>(`${this.#prefixWorkspace}/${workspaceId}/webhooks`);
  }

  get(id: string) {
    return this.http.getJson<WebhookGetResponse>(`${this.#prefix}/${id}`);
  }

  create(request: WebhookCreateRequest) {
    return this.http.postJson<WebhookCreateResponse>(this.#prefix, request);
  }

  update(request: WebhookUpdateRequest) {
    return this.http.patchJson<WebhookUpdateResponse>(this.#prefix, request);
  }

  delete(request: WebhookDeleteRequest) {
    return this.http.deleteJson<WebhookDeleteResponse>(`${this.#prefix}/${request.webhookId}`);
  }
}
