import { ChecklistDto } from "./dto";
export interface ChecklistChangeOrderRequest {
  checklistId: string;
  targetId: string;
  placement: ChecklistOrderPlacement;
  subjectIds: string[];
}
export interface ChecklistChangeOrderResponse {
  item: ChecklistDto;
}
export type ChecklistOrderPlacement = "Before" | "After";
