
export interface MapItemDto {
  id: string;
  workspaceId: string;
  name: string;
  version: number;
  sortKey: string;
  backgroundColor: string;
}


export interface MapUpdatedValueDto {
  name?: string;
  sortKey?: string;
  backgroundColor?: string;
}
