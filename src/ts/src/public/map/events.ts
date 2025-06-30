import { MapItemDto } from "./dto";

export interface MapDeletedEvent {
  workspaceId: string;
  mapId: string;
}

export interface MapSetEvent{
  item: MapItemDto;
}
