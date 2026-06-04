import { OrganizationMemberDto } from "./dto";

export interface OrganizationMemberSearchRequest {
  organizationIds: string[];
  query?: string;
  page?: number;
  pageSize?: number;
}

export interface OrganizationMemberSearchResponse {
  page: number;
  pageSize: number;
  totalCount: number;
  items: OrganizationMemberDto[];
}
