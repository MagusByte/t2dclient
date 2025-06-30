import { WorkspaceTokenItemDto } from "./dto";

export interface WorkspaceTokenCreateRequest {
  workspaceId: string;
  scopes: string[];
  expiresAt: string | null; // ISO date string or null
}

export interface WorkspaceTokenCreateResponse {
  /** The secret token to be stored securely by the client */
  token: string;
  /** The details of the created token */
  item: WorkspaceTokenItemDto;
}
