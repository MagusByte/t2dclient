import { WorkspaceItemDto, WorkspaceUpdatedValuesDto } from "./dto";


export interface WorkspaceUpdateRequest {
  id: string;
  values: WorkspaceUpdatedValuesDto;
}

export interface WorkspaceUpdateResponse {
  item: WorkspaceItemDto;
}
