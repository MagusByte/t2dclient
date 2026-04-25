import { TimeTrackerDto } from "./dto";

export interface TimeTrackerSetEvent {
  item: TimeTrackerDto;
}

export interface TimeTrackerDeletedEvent {
  timeTrackerId: string;
  accountId: string;
}
