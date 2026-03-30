import { PersonalGoalsDto, PersonalGoalsUpdateValues } from "./dto";

export interface PersonalGoalsUpdateRequest {
  cycleId: string;
  values: PersonalGoalsUpdateValues;
}
export interface PersonalGoalsUpdateResponse {
  item: PersonalGoalsDto;
}
