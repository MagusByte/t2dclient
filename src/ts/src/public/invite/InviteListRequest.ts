import { InviteItemDto } from "./dto";


export interface InviteListRequest {
  workspaceId: string;
}

export interface InviteListResponse {
  items: InviteItemDto[];
}
