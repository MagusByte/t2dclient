export interface TimeEntryDto {
  id: string;
  description: string;
  start: Date;
  end: Date;
  deleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface TimeEntryUpdateValues {
  start?: Date;
  end?: Date;
  description?: string;
  deleted?: boolean;
}
