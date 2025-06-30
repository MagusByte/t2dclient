import { IApiClient } from "../IApiClient";
import { TaskPropertyDefinitionCreateRequest, TaskPropertyDefinitionCreateResponse } from "./TaskPropertyDefinitionCreateRequest";
import { TaskPropertyDefinitionDeleteRequest, TaskPropertyDefinitionDeleteResponse } from "./TaskPropertyDefinitionDeleteRequest";

export class TaskPropertyDefinitionApi {
  readonly #prefix = '/api/v1/task-property-definition';

  constructor(readonly http: IApiClient) { }

  create(request: TaskPropertyDefinitionCreateRequest) {
    return this.http.postJson<TaskPropertyDefinitionCreateResponse>(this.#prefix, request);
  }

  delete(request: TaskPropertyDefinitionDeleteRequest) {
    return this.http.deleteJson<TaskPropertyDefinitionDeleteResponse>(`${this.#prefix}/${request.workspaceId}/${request.key}`);
  }
}
