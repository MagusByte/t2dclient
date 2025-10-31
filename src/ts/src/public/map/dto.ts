
export interface MapItemDto {
  id: string;
  workspaceId: string;
  name: string;
  version: number;
  sortKey: string;
  displaySettings: MapDisplaySettings;
}


export interface MapUpdatedValueDto {
  name?: string;
  sortKey?: string;
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
