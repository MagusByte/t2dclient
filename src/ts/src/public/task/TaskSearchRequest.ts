import { SearchRequest, SearchResponse } from "../../internal";
import { TaskFilterDto, TaskItemDto } from "./dto";

export interface TaskSearchRequest extends SearchRequest<TaskFilterDto> { }

export interface TaskSearchResponse extends SearchResponse<TaskItemDto> { }
