import { TaskPropertyDefinitionDto } from "./dto";

export interface TaskPropertyDefinitionCreateRequest {
  workspaceId: string;
  item: TaskPropertyDefinitionDto;
}

export interface TaskPropertyDefinitionCreateResponse {
  workspaceId: string;
  item: TaskPropertyDefinitionDto;
}
