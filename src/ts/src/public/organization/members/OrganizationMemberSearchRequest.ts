import { OrganizationItemDto } from "../dto";

export interface OrganizationMemberSearchRequest {
  organizationIds: string[];
  query?: string;
  page?: number;
  pageSize?: number;
}

export interface OrganizationMemberSearchResponse {
  items: OrganizationItemDto[];
}
