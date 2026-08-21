import { ProjectItemDto } from "./dto";

export interface ProjectDetachResourceRequest {
  id: string;
  resourceId: string;
}
export interface ProjectDetachResourceResponse {
  item: ProjectItemDto;
}
