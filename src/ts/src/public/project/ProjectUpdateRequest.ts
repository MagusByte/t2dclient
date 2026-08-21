import { ProjectItemDto, ProjectUpdatedValueDto } from "./dto";

export interface ProjectUpdateRequest {
  id: string;
  values: ProjectUpdatedValueDto;
}
export interface ProjectUpdateResponse {
  item: ProjectItemDto;
}
