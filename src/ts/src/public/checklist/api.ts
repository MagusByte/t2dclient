import { IApiClient } from "../IApiClient";
import {
  ChecklistCreateRequest,
  ChecklistCreateResponse,
} from "./ChecklistCreateRequest";
import {
  ChecklistDeleteRequest,
  ChecklistDeleteResponse,
} from "./ChecklistDeleteRequest";
import { ChecklistGetResponse } from "./ChecklistGetRequest";
import {
  ChecklistAddItemRequest,
  ChecklistAddItemResponse,
} from "./ChecklistAddItemRequest";
import {
  ChecklistRemoveItemRequest,
  ChecklistRemoveItemResponse,
} from "./ChecklistRemoveItemRequest";
import {
  ChecklistChangeOrderRequest,
  ChecklistChangeOrderResponse,
} from "./ChecklistChangeOrderRequest";

export class ChecklistApi {
  readonly #prefix = "/api/v1/checklist";

  constructor(readonly http: IApiClient) {}

  create(request: ChecklistCreateRequest) {
    return this.http.postJson<ChecklistCreateResponse>(this.#prefix, request);
  }

  delete(request: ChecklistDeleteRequest) {
    return this.http.deleteJson<ChecklistDeleteResponse>(
      `${this.#prefix}/${request.checklistId}`,
    );
  }

  get(id: string) {
    return this.http.getJson<ChecklistGetResponse>(`${this.#prefix}/${id}`);
  }

  addItem(request: ChecklistAddItemRequest) {
    return this.http.postJson<ChecklistAddItemResponse>(
      `${this.#prefix}/add-item`,
      request,
    );
  }
  removeItem(request: ChecklistRemoveItemRequest) {
    return this.http.postJson<ChecklistRemoveItemResponse>(
      `${this.#prefix}/remove-item`,
      request,
    );
  }

  changeOrder(request: ChecklistChangeOrderRequest) {
    return this.http.postJson<ChecklistChangeOrderResponse>(
      this.#prefix,
      request,
    );
  }
}
