import { PersonalGoalsDto, PersonalGoalsUpdateValues } from "./dto";

export interface PersonalGoalsUpdateRequest {
  values: PersonalGoalsUpdateValues;
}
export interface PersonalGoalsUpdateResponse {
  item: PersonalGoalsDto;
}
