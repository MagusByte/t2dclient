import { TimeTrackerDto } from "./dto";

export interface TimeTrackerCreateRequest {
  start?: Date;
  description?: string;
}

export interface TimeTrackerCreateResponse {
  item: TimeTrackerDto;
}
