export interface OrganizationInvitePreviewRequest {
  inviteCode: string;
  secret?: string;
}
export interface OrganizationInvitePreviewResponse {
  organizationName: string;
  secretRequired: boolean;
}
