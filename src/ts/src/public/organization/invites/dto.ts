export interface OrganizationInviteDto {
  /** Unique identifier for the invite. (Required string) */
  id: string;

  /** Identifier of the organization. (Required string) */
  organizationId: string;

  /** Indicates whether the invite contains a secret key. (Required boolean) */
  hasSecret: boolean;

  /** Indicates whether the invite has been consumed. (Required boolean) */
  consumed: boolean;

  /** Indicates whether the invite has been revoked. (Required boolean) */
  revoked: boolean;

  /** Timestamp when the invite was created. (Required Date) */
  createdAt: Date;

  /** Timestamp when the invite expires. (Required Date) */
  expiresAt: Date;

  /** Timestamp when the invite was revoked (optional). (Nullable Date) */
  revokedAt?: string;

  /** Timestamp when the invite was consumed (optional). (Nullable Date) */
  consumedAt?: string;
}
