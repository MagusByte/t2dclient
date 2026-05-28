import { OrganizationMemberDto, OrganizationMemberUpdatedValues } from "./dto";

export interface OrganizationMemberUpdateRequest {
  organizationId: string;
  memberId: string;
  values: OrganizationMemberUpdatedValues;
}

export interface OrganizationMemberUpdateResponse {
  item: OrganizationMemberDto;
}
