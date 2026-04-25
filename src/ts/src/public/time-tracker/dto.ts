export interface TimeTrackerDto {
  id: string;
  accountId: string;
  startedAt: Date;
  data: TimeTrackerData;
}

export interface TimeTrackerUpdateValues {
  start?: Date;
  description?: string;
}

export interface TimeTrackerData {
  description: string;
}
