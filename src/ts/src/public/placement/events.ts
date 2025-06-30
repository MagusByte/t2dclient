import { PlacementItemDto } from "./dto";

export interface PlacementDeletedEvent {
  mapId: string;
  placementId: string;
}

export interface PlacementSetEvent {
  item: PlacementItemDto;
}
