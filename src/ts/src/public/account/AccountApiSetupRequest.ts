
export interface AccountApiSetupRequest {
  userDisplayName: string;
  primaryWorkspaceName: string;
}

export interface AccountApiSetupResponse {
  primaryWorkspaceId: string;
}
