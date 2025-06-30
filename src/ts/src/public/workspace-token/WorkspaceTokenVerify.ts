import { WorkspaceTokenItemDto } from "./dto";

export interface WorkspaceTokenVerifyRequest {
  token: string;
}

export interface WorkspaceTokenVerifyResponse {
  item: WorkspaceTokenItemDto;
}
