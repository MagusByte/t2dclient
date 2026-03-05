export interface CycleItemDto {
  id: string;
  accountId: string;
  version: number;
  start: string;
  end: string;
  targets: CycleTargetDto[];
  subTargets: CycleTargetDto[];
  createdAt: string;
  updatedAt: string;
}

export interface CycleUpdateValues {
  start?: string;
  end?: string;
  targets?: CycleTargetDto[];
  subTargets?: CycleTargetDto[];
}

export interface CycleTargetDto {
  workspaceId: string;
  taskId: string;
}
