import { TimeTrackerDto, TimeTrackerUpdateValues } from "./dto";

export interface TimeTrackerUpdateRequest {
  id: string;
  values: TimeTrackerUpdateValues;
}

export interface TimeTrackerUpdateResponse {
  item: TimeTrackerDto;
}
