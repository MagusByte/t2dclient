import { UpdateRequest, UpdateResponse } from "../../internal";
import { TaskComponent, TaskItemDto } from "./dto";
import { PinType } from "./values";
import { ValueDisplayType } from "../task-property-definition";

type TaskPropertyChangeType = 'Clear' | 'Set';

interface TaskPropertyChangeSet {
  type: TaskPropertyChangeType & "Set";
  key: string;
  valueType: ValueDisplayType;
  value: any;
}

interface TaskPropertyChangeUnset {
  type: TaskPropertyChangeType & "Clear";
  key: string;
}

export type TaskPropertyChange = TaskPropertyChangeSet | TaskPropertyChangeUnset;

export type TaskAttributeChangeType = 'Unset' | 'Set';

export interface TaskAttributeChange {
  type: TaskAttributeChangeType;
  key: string;
  value?: any; // Using 'any' as it can hold different data types (primitives, DTO-objects and lists)
}


export type TaskPinChangeType = 'Remove' | 'Add';


export interface TaskPinChange {
  type: TaskPinChangeType;
  pinType: PinType;
  remoteId: string;
  displayName: string;
}

export interface TaskUpdatedValueDto {
  name?: string;
  description?: string;
  done?: boolean;
  attributeChanges?: TaskAttributeChange[];
  propertyChanges?: TaskPropertyChange[];
  pinChanges?: TaskPinChange[];
  components?: TaskComponent[];
}


export interface TaskUpdateRequest extends UpdateRequest<TaskUpdatedValueDto> { }
export interface TaskUpdateResponse extends UpdateResponse<TaskItemDto> { }
