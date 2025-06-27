import { WorkspaceTokenItemDto } from "./WorkspaceTokenItemDto";


export interface WorkspaceTokenListRequest {
  workspaceId: string;
}

export interface WorkspaceTokenListResponse {
  items: WorkspaceTokenItemDto[];
}
