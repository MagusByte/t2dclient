import { WithToken } from "./dto";

/**
 * DTO send to login
 *
 * *Can be performed without authorization*
 */
export interface AccountApiLoginRequest {
  email: string;
  password: string;
}

export interface AccountApiLoginResponse extends WithToken {
  accountId: string;
}
