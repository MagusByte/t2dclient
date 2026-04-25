import { IApiClient } from "../IApiClient";
import {
  TimeEntryCreateRequest,
  TimeEntryCreateResponse,
} from "./TimeEntryCreate";
import { TimeEntryGetResponse } from "./TimeEntryGet";
import {
  TimeEntrySearchRequest,
  TimeEntrySearchResponse,
} from "./TimeEntrySearch";
import {
  TimeEntryUpdateRequest,
  TimeEntryUpdateResponse,
} from "./TimeEntryUpdate";

export class TimeEntryApi {
  constructor(private readonly http: IApiClient) {}
  readonly #prefix = "/api/v1/personal/time-entry";

  create(request: TimeEntryCreateRequest) {
    return this.http.postJson<TimeEntryCreateResponse>(
      `${this.#prefix}`,
      request,
    );
  }

  update(request: TimeEntryUpdateRequest) {
    return this.http.patchJson<TimeEntryUpdateResponse>(
      `${this.#prefix}`,
      request,
    );
  }

  get(id: string, now?: Date) {
    var uri = `${this.#prefix}/${id}`;
    if (now) {
      uri += `?now=${encodeURIComponent(now.toISOString())}`;
    }

    return this.http.getJson<TimeEntryGetResponse>(uri);
  }

  search(request: TimeEntrySearchRequest) {
    var uri = `${this.#prefix}/search`;

    const parameters: string[] = [];
    if (request.from) {
      parameters.push(`from=${encodeURIComponent(request.from.toISOString())}`);
    }
    if (request.until) {
      parameters.push(
        `until=${encodeURIComponent(request.until.toISOString())}`,
      );
    }
    if (request.now) {
      parameters.push(`now=${encodeURIComponent(request.now.toISOString())}`);
    }
    if (request.page) {
      parameters.push(`page=${request.page}`);
    }
    if (request.pageSize) {
      parameters.push(`pageSize=${request.pageSize}`);
    }
    if (request.includeDeleted) {
      parameters.push(`includeDeleted=${request.includeDeleted}`);
    }

    if (parameters.length > 0) {
      var parameterQuery = parameters.join("&");
      uri += "?" + parameterQuery;
    }

    return this.http.getJson<TimeEntrySearchResponse>(uri);
  }
}
