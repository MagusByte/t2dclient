export interface TimeTrackerDto {
  id: string;
  accountId: string;
  startedAt: string;
  data: TimeTrackerData;
}

export interface TimeTrackerUpdateValues {
  start?: Date;
  description?: string;
}

export interface TimeTrackerData {
  description: string;
}
