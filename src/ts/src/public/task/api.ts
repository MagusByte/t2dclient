import { IApiClient } from "../IApiClient";
import { TaskCreateRequest, TaskCreateResponse } from "./TaskCreateRequest";
import { TaskDeleteRequest, TaskDeleteResponse } from "./TaskDeleteRequest";
import { TaskGetResponse } from "./TaskGetRequest";
import { TaskSearchRequest, TaskSearchResponse } from "./TaskSearchRequest";
import { TaskUpdateRequest, TaskUpdateResponse } from "./TaskUpdateRequest";

export class TaskApi {
  readonly #prefix = '/api/v1/task';

  constructor(readonly http: IApiClient) { }

  create(request: TaskCreateRequest) {
    return this.http.postJson<TaskCreateResponse>(this.#prefix, request);
  }

  update(request: TaskUpdateRequest) {
    return this.http.patchJson<TaskUpdateResponse>(this.#prefix, request);
  }

  get(id: string) {
    return this.http.getJson<TaskGetResponse>(`${this.#prefix}/${id}`);
  }

  delete(request: TaskDeleteRequest) {
    return this.http.deleteJson<TaskDeleteResponse>(`${this.#prefix}/${request.id}`);
  }

  search(request: TaskSearchRequest) {
    return this.http.postJson<TaskSearchResponse>(`${this.#prefix}/search`, request);
  }
}
