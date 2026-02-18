import { WebhookDto } from "./dto";

export interface WebhookListRequest {
  id: string;
}

export interface WebhookListResponse {
  items: WebhookDto[];
}
