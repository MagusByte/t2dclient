import { TimeTrackerDto } from "./dto";

export interface TimeTrackerListRequest {
  /* Empty */
}
export interface TimeTrackerListResponse {
  items: TimeTrackerDto[];
}
