import { OrganizationItemDto, OrganizationUpdatedValueDto } from "./dto";

export interface OrganizationUpdateRequest {
  id: string;
  values: OrganizationUpdatedValueDto;
}

export interface OrganizationUpdateResponse {
  item: OrganizationItemDto;
}
