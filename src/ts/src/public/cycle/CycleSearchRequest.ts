import { CycleItemDto } from "./dto";

export interface CycleSearchRequest {
  /**
   * If provided will limit the cycles to those that end after this date time
   */
  since?: string;
}

export interface CycleSearchResponse {
  items: CycleItemDto[];
}
