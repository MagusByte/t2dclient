import { TimeEntryDto } from "./dto";

export interface TimeEntrySearchRequest {
  from?: Date;
  until?: Date;
  now?: Date;
  page?: number;
  pageSize?: number;
  includeDeleted?: boolean;
}
export interface TimeEntrySearchResponse {
  page: number;
  pageSize: number;
  totalCount: number;
  items: TimeEntryDto[];
}
