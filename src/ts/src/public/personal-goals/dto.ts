export interface PersonalGoalsDto {
  accountId: string;
  goals: PersonalGoal[];
  /** The order in which tasks (including goals) should be displayed */
  order: PersonalGoal[];
}

export interface PersonalGoalsUpdateValues {
  goals?: PersonalGoal[];
  /** The order in which tasks (including goals) should be displayed */
  order?: PersonalGoal[];
}

export interface PersonalGoal {
  workspaceId: string;
  taskId: string;
}
