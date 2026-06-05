import { IApiClient } from "../IApiClient";
import {
  ContactSearchRequest,
  ContactSearchResponse,
} from "./ContactSearchRequest";

export class ContactApi {
  constructor(private readonly http: IApiClient) {}
  readonly #prefix = "/api/v1/contact";

  search(body: ContactSearchRequest) {
    return this.http.postJson<ContactSearchResponse>(
      `${this.#prefix}/search`,
      body,
    );
  }
}
