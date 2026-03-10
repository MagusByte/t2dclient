export interface CycleItemDto {
  id: string;
  accountId: string;
  version: number;
  start: string;
  end: string;
  goals: CycleTaskDto[];
  /** The order in which tasks should be displayed */
  order: CycleTaskDto[];
  createdAt: string;
  updatedAt: string;
}

export interface CycleUpdateValues {
  start?: string;
  end?: string;
  goals?: CycleTaskDto[];
  /** The order in which tasks should be displayed */
  order?: CycleTaskDto[];
}

export interface CycleTaskDto {
  workspaceId: string;
  taskId: string;
}
