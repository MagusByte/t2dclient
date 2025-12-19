export interface ChecklistDto {
  id: string;
  workspaceId: string;
  version: number;
  createdAt: string; // Date+Time
  updatedAt: string; // Date+Time
  items: ChecklistItemDto[];
}

export interface ChecklistItemDto {
  taskId: string;
}
