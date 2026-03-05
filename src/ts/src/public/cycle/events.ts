import { CycleItemDto } from "./dto";

export interface CycleDeletedEvent {
  workspaceId: string;
  mapId: string;
}

export interface CycleSetEvent {
  item: CycleItemDto;
}
