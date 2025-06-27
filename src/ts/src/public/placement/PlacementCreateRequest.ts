import { PlacementItemDto } from "./dto";



export interface PlacementCreateRequest {
  taskId: string;
  mapId: string;
  x: number;
  y: number;
  z: number;
  width: number;
  height: number;
}

export interface PlacementCreateResponse {
  item: PlacementItemDto;
}
