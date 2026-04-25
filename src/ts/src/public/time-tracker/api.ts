import { IApiClient } from "../IApiClient";
import {
  TimeTrackerCreateRequest,
  TimeTrackerCreateResponse,
} from "./TimeTrackerCreate";
import { TimeTrackerDeleteResponse } from "./TimeTrackerDelete";
import { TimeTrackerListResponse } from "./TimeTrackerList";
import {
  TimeTrackerUpdateRequest,
  TimeTrackerUpdateResponse,
} from "./TimeTrackerUpdate";

export class TimeTrackerApi {
  constructor(private readonly http: IApiClient) {}
  readonly #prefix = "/api/v1/personal/time-tracker";

  create(request: TimeTrackerCreateRequest) {
    return this.http.postJson<TimeTrackerCreateResponse>(
      `${this.#prefix}`,
      request,
    );
  }

  update(request: TimeTrackerUpdateRequest) {
    return this.http.patchJson<TimeTrackerUpdateResponse>(
      `${this.#prefix}`,
      request,
    );
  }

  delete(id: string) {
    return this.http.deleteJson<TimeTrackerDeleteResponse>(
      `${this.#prefix}/${id}`,
    );
  }

  list() {
    return this.http.getJson<TimeTrackerListResponse>(`${this.#prefix}`);
  }
}
