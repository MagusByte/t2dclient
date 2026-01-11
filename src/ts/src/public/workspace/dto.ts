import {
  WorkspaceMemberRole,
  WorkspaceType,
  WorkspaceStatus,
} from "./values";
import {
  TaskPropertyDefinitionDto,
  ValueDisplayType,
} from "../task-property-definition";
import { MapDisplaySettings } from "../map";

export interface WorkspaceMemberItem {
  accountId: string;
  displayName: string;
  role: WorkspaceMemberRole;
  since: Date;
}

export interface TaskFormulaDefinitionDto {
  key: string;
  formula: string;
  valueDisplay: ValueDisplayType;
}

export type WorkspaceFeaturesDto = Record<string, any>;

export interface WorkspaceItemDto {
  id: string;
  ownerAccountId: string;
  name: string;
  version: number;
  features: WorkspaceFeaturesDto;
  type: WorkspaceType;
  status: WorkspaceStatus;
  primaryMapId: string;
  emojiIcon: string;
  defaultMapDisplaySettings: MapDisplaySettings;
  /** Date-time string (UTC) */
  deleteAfter?: string;
  members: WorkspaceMemberItem[];
  taskPropertyDefinitions: TaskPropertyDefinitionDto[];
  taskFormulaDefinitions: TaskFormulaDefinitionDto[];
  topRailConfigs: WorkspaceTaskCardLabelConfig[];
  bottomRailConfigs: WorkspaceTaskCardLabelConfig[];
  systemTokens: SystemTokenAccessDto[];
}

export interface WorkspaceTaskCardLabelConfig {
  propertyKey: string;
  prefix: string;
}

export interface WorkspaceUpdatedValuesDto {
  name?: string;
  primaryMapId?: string;
  emojiIcon?: string;
  defaultMapDisplaySettings?: MapDisplaySettings;
  topRailConfigs?: WorkspaceTaskCardLabelConfig[];
  bottomRailConfigs?: WorkspaceTaskCardLabelConfig[];
  taskFormulaDefinitions?: TaskFormulaDefinitionDto[];
}

export interface SystemTokenAccessDto {
  systemTokenId: string;
  tokenHint: string;
  /** Date-time string (UTC) */
  expiresAt?: string;
}
