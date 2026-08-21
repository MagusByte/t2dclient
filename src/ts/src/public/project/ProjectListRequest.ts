// NOTE: No request version of ProjectList exists since it fetches all projects.

import { ProjectItemDto } from "./dto";

export interface ProjectListResponse {
  items: ProjectItemDto[];
}
