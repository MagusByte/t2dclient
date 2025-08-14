import { LinkSetEvent } from "./link";
import { MapSetEvent } from "./map";
import { PlacementSetEvent } from "./placement";
import { TaskSetEvent } from "./task";

export interface SubscribeToWorkspaceResponse {
  taskItems: TaskSetEvent[];
  linkItems: LinkSetEvent[];
  mapItems: MapSetEvent[];
  placementItems: PlacementSetEvent[];
}

/**
 * @deprecated Will be removed in the near future
 */
export interface SubscribeToMapResponse {
  placementItems: PlacementSetEvent[];
}
