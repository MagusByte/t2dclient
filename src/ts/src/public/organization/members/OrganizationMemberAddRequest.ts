import { OrganizationMemberDto } from "./dto";

export interface OrganizationMemberAddRequest {
  organizationId: string;
  accountId: string;
}

export interface OrganizationMemberAddResponse {
  item: OrganizationMemberDto;
}
