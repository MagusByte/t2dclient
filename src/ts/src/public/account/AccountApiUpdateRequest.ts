import { AccountItemDto } from "./dto";

export interface AccountApiUpdateRequest {
  displayName?: string;
}

export interface AccountApiUpdateResponse {
  item: AccountItemDto;
}
