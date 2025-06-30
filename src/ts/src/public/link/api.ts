import { IApiClient } from "../IApiClient";
import { LinkCreatePreviewRequest, LinkCreatePreviewResponse } from "./LinkCreatePreviewRequest";
import { LinkCreateRequest, LinkCreateResponse } from "./LinkCreateRequest";
import { LinkDeleteRequest, LinkDeleteResponse } from "./LinkDeleteRequest";

export class LinkApi {
  constructor(private readonly http: IApiClient) { }
  readonly #prefix = '/api/v1/link';

  create(body: LinkCreateRequest) {
    return this.http.postJson<LinkCreateResponse>(this.#prefix, body);
  }

  previewCreate(body: LinkCreatePreviewRequest) {
    return this.http.postJson<LinkCreatePreviewResponse>(
      `${this.#prefix}/preview-create`,
      body,
    );
  }

  delete(body: LinkDeleteRequest) {
    return this.http.deleteJson<LinkDeleteResponse>(`${this.#prefix}/${body.id}`);
  }
}
