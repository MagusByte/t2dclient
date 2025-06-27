import { SearchResponse } from "../../internal/SearchResponse";
import { PlacementItemDto } from "./dto";



export interface PlacementSearchRequest {
  mapId: string;
}
export interface PlacementSearchResponse extends SearchResponse<PlacementItemDto> { }
