import { OrganizationInviteDto } from "./dto";

export interface OrganizationInviteSearchRequest {
  organizationId: string;
}
export interface OrganizationInviteSearchResponse {
  items: OrganizationInviteDto[];
}
