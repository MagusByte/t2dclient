import { WorkspaceMemberRole, WorkspaceType, WorkspaceStatus } from "./values";
import {
  TaskPropertyDefinitionDto,
  ValueDisplayType,
} from "../task-property-definition";
import { MapDisplaySettings } from "../map";

export interface WorkspaceMemberAuthorizationItem {
  /**
   * If set to `true` then this member is directly part of this project.
   */
  direct: boolean;

  /**
   * List of projectIds that give this member indirect access to this project.
   */
  byProjectIds: string[];
}

export interface WorkspaceMemberItem {
  accountId: string;
  displayName: string;
  role: WorkspaceMemberRole;
  since: Date;
  authorization: WorkspaceMemberAuthorizationItem;
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
  projectMemberships: WorkspaceProjectMembershipItem[];
  taskPropertyDefinitions: TaskPropertyDefinitionDto[];
  taskFormulaDefinitions: TaskFormulaDefinitionDto[];
  topRailConfigs: WorkspaceTaskCardLabelConfig[];
  bottomRailConfigs: WorkspaceTaskCardLabelConfig[];
  systemTokens: SystemTokenAccessDto[];
}

export interface WorkspaceProjectMembershipItem {
  projectId: string;
  projectName: string;
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
