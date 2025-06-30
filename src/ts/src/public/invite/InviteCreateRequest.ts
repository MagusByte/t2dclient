import { InviteItemDto } from "./dto";

export interface InviteCreateRequest {
  workspaceId: string;
  secret: string;
  expireInMinutes: number;
}


export interface InviteCreateResponse {
  item: InviteItemDto;
}
