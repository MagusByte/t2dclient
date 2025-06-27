import { WorkspaceItemDto } from "./dto";

export interface WorkspaceCreateRequest {
  name: string;
  emojiIcon: string;
}

export interface WorkspaceCreateResponse {
  item: WorkspaceItemDto;
}
