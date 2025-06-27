export interface LinkItemDto {
  id: string;
  version: number;
  srcWorkspaceId: string;
  srcTaskId: string;
  dstWorkspaceId: string;
  dstTaskId: string;
  srcIsDone: boolean;
  dstIsDone: boolean;
}
