import { WorkspaceTokenItemDto } from "./dto";

export interface WorkspaceTokenRevokeRequest {
  workspaceId: string;
  tokenId: string;
}

export interface WorkspaceTokenRevokeResponse {
  item: WorkspaceTokenItemDto;
}
