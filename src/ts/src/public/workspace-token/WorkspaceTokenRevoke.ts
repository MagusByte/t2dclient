import { WorkspaceTokenItemDto } from "./WorkspaceTokenItemDto";

export interface WorkspaceTokenRevokeRequest {
  workspaceId: string;
  tokenId: string;
}

export interface WorkspaceTokenRevokeResponse {
  item: WorkspaceTokenItemDto;
}
