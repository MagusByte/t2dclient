import { IApiClient } from "../IApiClient";
import {
  ProjectAddAdministratorRequest,
  ProjectAddAdministratorResponse,
} from "./ProjectAddAdministratorRequest";
import { ProjectAttachResourceRequest } from "./ProjectAttachResourceRequest";
import {
  ProjectCreateRequest,
  ProjectCreateResponse,
} from "./ProjectCreateRequest";
import {
  ProjectDeleteRequest,
  ProjectDeleteResponse,
} from "./ProjectDeleteRequest";
import { ProjectDetachResourceRequest } from "./ProjectDetachResourceRequest";
import { ProjectGetResponse } from "./ProjectGetRequest";
import { ProjectListResponse } from "./ProjectListRequest";
import { ProjectPotentialResourceListResponse } from "./ProjectPotentialResourceListRequest";
import {
  ProjectRemoveAdministratorRequest,
  ProjectRemoveAdministratorResponse,
} from "./ProjectRemoveAdministratorRequest";
import {
  ProjectUpdateRequest,
  ProjectUpdateResponse,
} from "./ProjectUpdateRequest";

export class ProjectApi {
  readonly #prefix = "/api/v1/project";

  constructor(readonly http: IApiClient) {}

  create(request: ProjectCreateRequest) {
    return this.http.postJson<ProjectCreateResponse>(this.#prefix, request);
  }

  get(id: string) {
    return this.http.getJson<ProjectGetResponse>(`${this.#prefix}/${id}`);
  }

  list() {
    return this.http.getJson<ProjectListResponse>(`${this.#prefix}`);
  }

  update(request: ProjectUpdateRequest) {
    return this.http.patchJson<ProjectUpdateResponse>(this.#prefix, request);
  }

  delete(request: ProjectDeleteRequest) {
    return this.http.deleteJson<ProjectDeleteResponse>(
      `${this.#prefix}/${request.id}`,
    );
  }

  addAdministrator(request: ProjectAddAdministratorRequest) {
    return this.http.postJson<ProjectAddAdministratorResponse>(
      `${this.#prefix}/add-administrator`,
      request,
    );
  }

  removeAdministrator(request: ProjectRemoveAdministratorRequest) {
    return this.http.postJson<ProjectRemoveAdministratorResponse>(
      `${this.#prefix}/remove-administrator`,
      request,
    );
  }

  attachResource(request: ProjectAttachResourceRequest) {
    return this.http.postJson<ProjectAttachResourceRequest>(
      `${this.#prefix}/attach-resource`,
      request,
    );
  }

  detachResource(request: ProjectDetachResourceRequest) {
    return this.http.postJson<ProjectDetachResourceRequest>(
      `${this.#prefix}/detach-resource`,
      request,
    );
  }

  listPotentialResources() {
    return this.http.getJson<ProjectPotentialResourceListResponse>(
      `${this.#prefix}/potential-resources`,
    );
  }
}
