import { MapItemDto } from "./dto";

export interface MapCreateRequest {
  workspaceId: string;
  name: string;
}


export interface MapCreateResponse {
  item: MapItemDto;
}
