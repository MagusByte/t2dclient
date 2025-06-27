export interface WorkspaceTokenItemDto {
  id: string;
  workspaceId: string;
  scopes: string[];
  createdAt: string; // ISO date string
  expiresAt: string | null; // ISO date string or null
  revokedAt: string | null; // ISO date string or null
  tokenHint: string;
}
