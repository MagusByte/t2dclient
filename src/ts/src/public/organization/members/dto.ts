export interface OrganizationMemberDto {
  organizationId: string;
  memberId: string;
  accountId: string;
  name: string;
  isAdmin: boolean;
}

export interface OrganizationMemberUpdatedValues {
  name?: string;
  isAdmin?: boolean;
}
