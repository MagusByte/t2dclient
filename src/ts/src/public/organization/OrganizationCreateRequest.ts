import { OrganizationItemDto } from "./dto";

export interface OrganizationCreateRequest {
  name: string;
}

export interface OrganizationCreateResponse {
  item: OrganizationItemDto;
}
