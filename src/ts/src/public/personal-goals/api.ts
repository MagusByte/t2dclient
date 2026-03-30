import { IApiClient } from "../IApiClient";
import { PersonalGoalsGetResponse } from "./PersonalGoalsGetRequest";
import {
  PersonalGoalsUpdateRequest,
  PersonalGoalsUpdateResponse,
} from "./PersonalGoalsUpdateRequest";

export class PersonalGoalsApi {
  constructor(private readonly http: IApiClient) {}
  readonly #prefix = "/api/v1/personal/goals";

  update(request: PersonalGoalsUpdateRequest) {
    return this.http.patchJson<PersonalGoalsUpdateResponse>(
      `${this.#prefix}`,
      request,
    );
  }

  get() {
    return this.http.getJson<PersonalGoalsGetResponse>(`${this.#prefix}`);
  }
}
