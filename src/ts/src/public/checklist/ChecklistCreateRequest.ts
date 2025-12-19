import { ChecklistDto, ChecklistItemDto } from "./dto";

export interface ChecklistCreateRequest {
  workspaceId: string;
}

export interface ChecklistCreateResponse {
  item: ChecklistDto;
}
