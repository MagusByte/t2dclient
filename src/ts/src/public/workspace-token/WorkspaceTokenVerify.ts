import { WorkspaceTokenItemDto } from "./WorkspaceTokenItemDto";

export interface WorkspaceTokenVerifyRequest {
  token: string;
}

export interface WorkspaceTokenVerifyResponse {
  item: WorkspaceTokenItemDto;
}
