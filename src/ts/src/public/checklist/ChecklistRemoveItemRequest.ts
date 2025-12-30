import { ChecklistDto } from "./dto";
export interface ChecklistRemoveItemRequest {
  checklistId: string;
  taskId: string;
}
export interface ChecklistRemoveItemResponse {
  item: ChecklistDto;
}
