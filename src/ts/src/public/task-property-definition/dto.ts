import { ValueDisplayType } from "./values";

export interface TaskPropertyDefinitionDto {
  key: string;
  type: ValueDisplayType;
  /**
   * Is required if `usage` is `Required`.
   */
  fallbackValue: any | null;
}
