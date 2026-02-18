export interface WebhookDto {
  id: string;
  workspaceId: string;
  isEnabled: boolean;
  signKey: string;
  destination: string;
  recentEvents: WebhookEvent[];
  disableReason?: string;
  skipUntil?: string; // DATETIME (UTC)
}

export interface WebhookEvent {
  at: string; // DATETIME (UTC)
  success: boolean;
  cause?: string;
}

export interface WebhookUpdateValues {
  destination?: string;
  isEnabled?: boolean;
  clearSkipUntil?: boolean;
}
