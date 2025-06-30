import { WorkspaceTokenItemDto } from "./dto";


export interface WorkspaceTokenListRequest {
  workspaceId: string;
}

export interface WorkspaceTokenListResponse {
  items: WorkspaceTokenItemDto[];
}
