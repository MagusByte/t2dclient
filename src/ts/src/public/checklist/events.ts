import { ChecklistDto } from "./dto";
export interface ChecklistSetEvent {
  item: ChecklistDto;
}
export interface ChecklistDeletedEvent {
  checklistId: string;
  workspaceId: string;
}
