import { OrganizationMemberDto } from "./dto";

export interface OrganizationMemberMyRequest {
  organizationId: string;
}

export interface OrganizationMemberMyResponse {
  item: OrganizationMemberDto;
}
