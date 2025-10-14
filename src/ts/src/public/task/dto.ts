import { PinType } from "./values";
import { ValueDisplayType } from "../task-property-definition";



export interface TaskPropertyDto {
  key: string;
  type: ValueDisplayType;
  value: any;
}


export interface TaskItemDto {
  id: string;
  workspaceId: string;
  version: number;
  name: string;
  description: string;
  done: boolean;
  attributes?: TaskAttributeDto[];
  properties: TaskPropertyDto[];
  pins: PinDto[];
}

export interface PinDto {
  type: PinType;
  remoteId: string;
  displayName: string;
}



export interface TaskConnectionDto {
  workspaceId: string;
  taskId: string;
}


export interface TaskAttributeDto {
  key: string;
  value: any;
}
export interface TaskFilterDto {
  done?: boolean;
}
