import { ProjectItemDto } from "./dto";

export interface ProjectAddAdministratorRequest {
  id: string;
  accountId: string;
}
export interface ProjectAddAdministratorResponse {
  item: ProjectItemDto;
}
