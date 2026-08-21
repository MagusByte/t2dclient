import { ProjectItemDto } from "./dto";

export interface ProjectRemoveAdministratorRequest {
  id: string;
  administratorId: string;
}
export interface ProjectRemoveAdministratorResponse {
  item: ProjectItemDto;
}
