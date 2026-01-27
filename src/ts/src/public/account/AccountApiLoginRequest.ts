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
  /**
   * When true the server wants you to change the password as soon as possible. This usually happens when you login with an temporary password.
   */
  askPasswordChange: boolean;
}
