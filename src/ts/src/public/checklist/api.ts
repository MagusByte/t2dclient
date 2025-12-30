import { IApiClient } from "../IApiClient";
import { ChecklistAddItemRequest, ChecklistAddItemResponse } from "./ChecklistAddItemRequest";
import { ChecklistChangeOrderRequest, ChecklistChangeOrderResponse } from "./ChecklistChangeOrderRequest";
import { ChecklistCreateRequest, ChecklistCreateResponse } from "./ChecklistCreateRequest";
import { ChecklistDeleteRequest, ChecklistDeleteResponse } from "./ChecklistDeleteRequest";
import { ChecklistGetResponse } from "./ChecklistGetRequest";
import { ChecklistRemoveItemRequest, ChecklistRemoveItemResponse } from "./ChecklistRemoveItemRequest";

export class ChecklistApi {
  readonly #prefix = '/api/v1/checklist';

  constructor(readonly http: IApiClient) { }
  create(request: ChecklistCreateRequest) {
    return this.http.postJson<ChecklistCreateResponse>(this.#prefix, request);
  }


  get(id: string) {
    return this.http.getJson<ChecklistGetResponse>(`${this.#prefix}/${id}`);
  }

  delete(request: ChecklistDeleteRequest) {
    return this.http.deleteJson<ChecklistDeleteResponse>(`${this.#prefix}/${request.checklistId}`);
  }

  addItem(request: ChecklistAddItemRequest) {
    return this.http.postJson<ChecklistAddItemResponse>(`${this.#prefix}/add-item`, request);
  }
  removeItem(request: ChecklistRemoveItemRequest): Promise<ChecklistRemoveItemResponse> {
    return this.http.postJson<ChecklistRemoveItemResponse>(`${this.#prefix}/remove-item`, request);
  }
  changeOrder(request: ChecklistChangeOrderRequest): Promise<ChecklistChangeOrderResponse> {
    return this.http.postJson<ChecklistRemoveItemResponse>(`${this.#prefix}/change-order`, request);

  }


}
