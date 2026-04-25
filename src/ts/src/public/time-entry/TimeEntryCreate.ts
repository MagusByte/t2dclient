import { TimeEntryDto } from "./dto";

export interface TimeEntryCreateRequest {
  start: Date;
  end: Date;
  description: string;
}

export interface TimeEntryCreateResponse {
  item: TimeEntryDto;
}
