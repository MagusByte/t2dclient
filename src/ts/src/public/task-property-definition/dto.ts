import { TaskPropertyValueUsage, ValueDisplayType } from "./values";

export interface TaskPropertyDefinitionDto {
  key: string;
  type: ValueDisplayType;
  /**
   * @deprecated Can be ignored,  determined by `fallbackValue`
   */
  usage: TaskPropertyValueUsage;

  /**
   * Is required if `usage` is `Required`.
   */
  fallbackValue: any | null;
}
