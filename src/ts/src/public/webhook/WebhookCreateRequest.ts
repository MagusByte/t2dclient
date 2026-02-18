import { WebhookDto } from "./dto";

export interface WebhookCreateRequest {
  workspaceId: string;
  destination: string;
}

export interface WebhookCreateResponse {
  item: WebhookDto;
}
