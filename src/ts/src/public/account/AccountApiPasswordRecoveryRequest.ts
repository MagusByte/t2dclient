/**
 * DTO send to create an account
 *
 * *Can be performed without authorization*
 */
export interface AccountApiPasswordRecoveryRequest {
  email: string;
}

export interface AccountApiPasswordRecoveryResponse {
  /* Empty on purpose */
}
