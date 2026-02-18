import { WebhookDto, WebhookUpdateValues } from "./dto";

export interface WebhookUpdateRequest {
  webhookId: string;
  values: WebhookUpdateValues;
}

export interface WebhookUpdateResponse {
  item: WebhookDto;
}
