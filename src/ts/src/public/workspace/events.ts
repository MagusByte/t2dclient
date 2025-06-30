import { WorkspaceItemDto } from "./dto";

export interface WorkspaceSetEvent {
  item: WorkspaceItemDto;
}

export interface WorkspaceDeletedEvent {
  item: WorkspaceItemDto;
}
