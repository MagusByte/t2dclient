
export interface MapItemDto {
  id: string;
  workspaceId: string;
  name: string;
  version: number;
  sortKey: string;
  displaySettings: MapDisplaySettings;
  priorityMatrix: PriorityMatrix;
  isArchived: boolean;
}


export interface MapUpdatedValueDto {
  name?: string;
  sortKey?: string;
  isArchived?: boolean;
  priorityMatrix?: PriorityMatrix;
  displaySettings?: MapDisplaySettings;
}

export interface MapDisplaySettings {
  backgroundColor: string;
  displayGrids: DisplayGrid[];
}

export interface DisplayGrid {
  originX: number;
  originY: number;
  spacingX: number;
  spacingY: number;
  color: string;
  isVisible: boolean;
}

export interface PriorityDirection {
  name: string;
  backgroundColor: string;
}

export interface PriorityQuad {
  name: string;
  color: string;
  textColor: string;
}

export type PriorityTextDisplayMode = "Hidden" | "Straight" | "Round" | "Star";

export interface PriorityMatrix {
  enabled: boolean;
  directions: {
    north: PriorityDirection;
    south: PriorityDirection;
    west: PriorityDirection;
    east: PriorityDirection;
  };

  quads: {
    northWest: PriorityQuad;
    northEast: PriorityQuad;
    southWest: PriorityQuad;
    southEast: PriorityQuad;
    textDisplayMode: PriorityTextDisplayMode;
    /** The text height in pixels  */
    textSize: number;
    /** How wide a label should be */
    labelSize: number;
  };
}
