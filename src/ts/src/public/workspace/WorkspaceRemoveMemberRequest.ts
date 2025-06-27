import { WorkspaceItemDto } from "./dto";

export interface WorkspaceRemoveMemberRequest {
  id: string;
  accountId: string;
}

export interface WorkspaceRemoveMemberResponse {
  item: WorkspaceItemDto;
}
