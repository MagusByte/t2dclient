import { ProjectItemDto, ProjectResourceKind } from "./dto";

export interface ProjectResourceSpec {
  id: string;
  kind: ProjectResourceKind;
}

export interface ProjectAttachResourceRequest {
  id: string;
  resource: ProjectResourceSpec;
}
export interface ProjectAttachResourceResponse {
  item: ProjectItemDto;
}
