import { CycleItemDto } from "./dto";

export interface CycleDeletedEvent {
  cycleId: string;
  accountId: string;
}

export interface CycleSetEvent {
  item: CycleItemDto;
}
