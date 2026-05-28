import { OrganizationMemberDto } from "./dto";

export interface OrganizationMemberRemoveRequest {
  organizationId: string;
  memberId: string;
}

export interface OrganizationMemberRemoveResponse {
  /* Empty on purpose */
}
