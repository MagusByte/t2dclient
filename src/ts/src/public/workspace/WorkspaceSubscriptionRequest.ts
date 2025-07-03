export interface WorkspaceSubscriptionRequest {
  workspaceId: string;
}

export interface WorkspaceSubscriptionResponse {
  cancelUrl: string;
  updatePaymentUrl: string;
}
