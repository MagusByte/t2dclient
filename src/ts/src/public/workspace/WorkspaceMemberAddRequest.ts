import { WorkspaceItemDto } from "./dto";

export interface WorkspaceMemberAddRequest {
  /** The workspace id */
  id: string;
  accountId: string;
}

export interface WorkspaceMemberAddResponse {
  item: WorkspaceItemDto;
}
