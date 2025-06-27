import { UpdateRequest } from "../../internal/UpdateRequest";
import { UpdateResponse } from "../../internal/UpdateResponse";
import { MapItemDto, MapUpdatedValueDto } from "./dto";

export interface MapUpdateRequest extends UpdateRequest<MapUpdatedValueDto> { }
export interface MapUpdateResponse extends UpdateResponse<MapItemDto> { }
