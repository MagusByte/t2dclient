import { AccountRole } from "./values";

export interface AccountItemDto {
  id: string;
  displayName: string;
  roles: AccountRole[];
}

export interface WithToken {
  token: string;
}
