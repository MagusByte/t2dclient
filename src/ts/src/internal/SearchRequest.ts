import { PagingDto } from "./PagingDto";
import { SearchDto } from "./SearchDto";


export interface SearchRequest<TFilterDto> {
  workspaceIds: string[];
  search?: SearchDto;
  paging?: PagingDto;
  filter?: TFilterDto;
}
