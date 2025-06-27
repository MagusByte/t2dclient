import { TaskAttributeDto, TaskItemDto, TaskPropertyDto } from "./dto";



export interface TaskCreateRequest {
  workspaceId: string;
  name: string;
  attributes?: TaskAttributeDto[]; // Using 'any' as it can hold different data types (primitives, DTO-objects and lists)
  properties: TaskPropertyDto[];
}


export interface TaskCreateResponse {
  item: TaskItemDto;
}
