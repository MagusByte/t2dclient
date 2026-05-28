import { OrganizationItemDto } from "../dto";

export interface OrganizationInviteAcceptRequest {
  inviteCode: string;
  secret?: string;
}

export interface OrganizationInviteAcceptResponse {
  item: OrganizationItemDto;
}
