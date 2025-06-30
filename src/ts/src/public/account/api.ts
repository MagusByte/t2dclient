import { IApiClient } from "../ApiClient";
import { AccountApiGetResponse } from "./AccountApiGetRequest";
import { AccountApiSetupRequest, AccountApiSetupResponse } from "./AccountApiSetupRequest";
import { AccountIsOnboardResponse } from "./AccountIsOnboardRequest";

export class AccountApi {
  constructor(private readonly http: IApiClient) { }
  readonly #prefix = '/api/v1/account';

  get() {
    return this.http.getJson<AccountApiGetResponse>(`${this.#prefix}`);
  }

  setup(request: AccountApiSetupRequest) {
    return this.http.postJson<AccountApiSetupResponse>(
      `${this.#prefix}/setup`,
      request,
    );
  }

  isOnboard() {
    return this.http.getJson<AccountIsOnboardResponse>(
      `${this.#prefix}/is-onboard`,
    );
  }
}
