


export interface InvitePreviewRequest {
  inviteCode: string;
  secret?: string;
}

export interface InvitePreviewResponse {
  invitedByUserDisplayName: string;
  workspaceDisplayName: string;
}
