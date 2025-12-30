export interface ChecklistDto {
  id: string;
  workspaceId: string;
  version: number;
  createdAt: string;
  updatedAt: string;
  items: ChecklistItemDto[];
}
export interface ChecklistItemDto {
  taskId: string;
}
