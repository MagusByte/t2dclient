import { WithToken } from "./dto";

export interface AccountApiMigrateAuth0Request {
  email: string;
  password: string;
}

export interface AccountApiMigrateAuth0Response extends WithToken {
  accountId: string;
}
