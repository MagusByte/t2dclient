import { TaskPropertyValueUsage, ValueDisplayType } from "./values";

export interface TaskPropertyDefinitionDto {
  key: string;
  type: ValueDisplayType;
  usage: TaskPropertyValueUsage;

  /**
   * Is required if `usage` is `Required`.
   */
  fallbackValue: any | null;
}
