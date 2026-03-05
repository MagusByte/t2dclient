import { CycleItemDto, CycleUpdateValues } from "./dto";

export interface CycleUpdateRequest {
  cycleId: string;
  values: CycleUpdateValues;
}
export interface CycleUpdateResponse {
  item: CycleItemDto;
}
