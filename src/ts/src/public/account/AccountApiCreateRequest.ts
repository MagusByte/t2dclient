/**
 * DTO send to create an account
 *
 * *Can be performed without authorization*
 */
export interface AccountApiCreateRequest {
  email: string;
  password: string;
}

export interface AccountApiCreateResponse {
  /* Empty on purpose */
}
