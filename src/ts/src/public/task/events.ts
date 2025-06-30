import { TaskItemDto } from "./dto";

export interface TaskDeletedEvent {
  taskId: string;
  workspaceId: string;
}

export interface TaskSetEvent {
  item: TaskItemDto;
}
