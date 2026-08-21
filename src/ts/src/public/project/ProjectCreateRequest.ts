import { ProjectItemDto } from "./dto";

export interface ProjectCreateRequest {
  name: string;
}
export interface ProjectCreateResponse {
  item: ProjectItemDto;
}
