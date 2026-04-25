import { TimeEntryDto, TimeEntryUpdateValues } from "./dto";

export interface TimeEntryUpdateRequest {
  id: string;
  values: TimeEntryUpdateValues;
}

export interface TimeEntryUpdateResponse {
  item: TimeEntryDto;
}
