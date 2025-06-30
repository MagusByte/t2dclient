export interface WorkspaceSubscriptionRequest {
  id: string;
}

export interface WorkspaceSubscriptionResponse {
  cancelUrl: string;
  updatePaymentUrl: string;
}
