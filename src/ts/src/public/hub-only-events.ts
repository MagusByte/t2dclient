import { LinkSetEvent } from "./link";
import { MapSetEvent } from "./map";
import { PlacementSetEvent } from "./placement";
import { TaskSetEvent } from "./task";

export interface SubscribeToWorkspaceResponse {
  taskItems: TaskSetEvent[];
  linkItems: LinkSetEvent[];
  mapItems: MapSetEvent[];

}
export interface SubscribeToMapResponse {
  placementItems: PlacementSetEvent[];
}
