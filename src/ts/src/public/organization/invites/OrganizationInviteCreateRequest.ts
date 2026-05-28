import { OrganizationInviteDto } from "./dto";

export interface OrganizationInviteCreateRequest {
  organizationId: string;
  secret?: string;
  expireInMinutes: number;
}

export interface OrganizationInviteCreateResponse {
  item: OrganizationInviteDto;
}
