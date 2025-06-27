import { PlacementItemDto } from "./dto";

export interface PlacementUpdateRequest {
  id: string;
  x: number;
  y: number;
  z: number;
  width: number;
  height: number;
}

export interface PlacementUpdateResponse {
  item: PlacementItemDto;
}
