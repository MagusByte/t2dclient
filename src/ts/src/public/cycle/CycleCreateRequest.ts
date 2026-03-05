import { CycleItemDto } from "./dto";

export interface CycleCreateRequest {
  start: string;
  end: string;
}

export interface CycleCreateResponse {
  item: CycleItemDto;
}
