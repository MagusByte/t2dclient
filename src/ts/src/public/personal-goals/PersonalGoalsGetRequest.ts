import { PersonalGoalsDto } from "./dto";

export interface PersonalGoalsGetRequest {
  /* Empty on purpose */
}
export interface PersonalGoalsGetResponse {
  item: PersonalGoalsDto;
}
