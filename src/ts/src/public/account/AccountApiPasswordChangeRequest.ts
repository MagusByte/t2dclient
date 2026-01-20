import { WithToken } from "./dto";

export interface AccountApiPasswordChangeRequest {
  password: string;
  newPassword: string;
}

export interface AccountApiPasswordChangeResponse {
  /* Empty on purpose */
}
