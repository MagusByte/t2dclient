export interface OrganizationInviteDto {
  /** Unique identifier for the invite. (Required string) */
  Id: string;

  /** Identifier of the organization. (Required string) */
  OrganizationId: string;

  /** Indicates whether the invite contains a secret key. (Required boolean) */
  HasSecret: boolean;

  /** Indicates whether the invite has been consumed. (Required boolean) */
  Consumed: boolean;

  /** Indicates whether the invite has been revoked. (Required boolean) */
  Revoked: boolean;

  /** Timestamp when the invite was created. (Required Date) */
  CreatedAt: Date;

  /** Timestamp when the invite expires. (Required Date) */
  ExpiresAt: Date;

  /** Timestamp when the invite was revoked (optional). (Nullable Date) */
  RevokedAt?: string;

  /** Timestamp when the invite was consumed (optional). (Nullable Date) */
  ConsumedAt?: string;
}
