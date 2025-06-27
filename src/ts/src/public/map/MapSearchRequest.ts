import { SearchRequest } from "../../internal/SearchRequest";
import { SearchResponse } from "../../internal/SearchResponse";
import { MapItemDto } from "./dto";


export interface MapFilterDto {
}

export interface MapSearchRequest extends SearchRequest<MapFilterDto> { }
export interface MapSearchResponse extends SearchResponse<MapItemDto> { }
