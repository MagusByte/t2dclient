export interface InviteItemDto {
  id: string;
  inviteCode: string;
  hasSecret: boolean;
  consumed: boolean;
  revoked: boolean;
  createdAt: string; // Date
  expiresAt: string; // Date
  revokedAt?: string; // Date
  consumedAt?: string; // Date
}
