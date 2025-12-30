import { ChecklistDto } from "./dto";
export interface ChecklistAddItemRequest {
  checklistId: string;
  taskId: string;
}
export interface ChecklistAddItemResponse {
  item: ChecklistDto;
}
