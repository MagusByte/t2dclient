import { IApiClient } from "../IApiClient";
import {
  AccountApiCreateRequest,
  AccountApiCreateResponse,
} from "./AccountApiCreateRequest";
import { AccountApiGetResponse } from "./AccountApiGetRequest";
import {
  AccountApiLoginRequest,
  AccountApiLoginResponse,
} from "./AccountApiLoginRequest";
import {
  AccountApiMigrateAuth0Request,
  AccountApiMigrateAuth0Response,
} from "./AccountApiMigrateAuth0Request";
import {
  AccountApiPasswordChangeRequest,
  AccountApiPasswordChangeResponse,
} from "./AccountApiPasswordChangeRequest";
import {
  AccountApiUpdateRequest,
  AccountApiUpdateResponse,
} from "./AccountApiUpdateRequest";
import { AccountIsOnboardResponse } from "./AccountIsOnboardRequest";

export class AccountApi {
  constructor(private readonly http: IApiClient) {}
  readonly #prefix = "/api/v1/account";

  get() {
    return this.http.getJson<AccountApiGetResponse>(`${this.#prefix}`);
  }

  create(request: AccountApiCreateRequest) {
    return this.http.postJson<AccountApiCreateResponse>(
      `${this.#prefix}/create`,
      request,
    );
  }

  login(request: AccountApiLoginRequest) {
    return this.http.postJson<AccountApiLoginResponse>(
      `${this.#prefix}/login`,
      request,
    );
  }

  changePassword(request: AccountApiPasswordChangeRequest) {
    return this.http.postJson<AccountApiPasswordChangeResponse>(
      `${this.#prefix}/change-password`,
      request,
    );
  }

  update(request: AccountApiUpdateRequest) {
    return this.http.postJson<AccountApiUpdateResponse>(
      `${this.#prefix}/update`,
      request,
    );
  }

  migrateAuth0(request: AccountApiMigrateAuth0Request) {
    return this.http.postJson<AccountApiMigrateAuth0Response>(
      `${this.#prefix}/migrate/auth0`,
      request,
    );
  }

  isOnboard() {
    return this.http.getJson<AccountIsOnboardResponse>(
      `${this.#prefix}/is-onboard`,
    );
  }
}
