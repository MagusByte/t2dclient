import { LinkItemDto } from "./dto";

export interface LinkCreateRequest {
  srcTaskId: string;
  dstTaskId: string;
}

export interface LinkCreateResponse {
  item: LinkItemDto;
}
