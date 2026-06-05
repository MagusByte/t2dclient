import { ContactDto } from "./dto";

export interface ContactSearchRequest {
  pageIndex: number;
  pageSize: number;
}

export interface ContactSearchResponse {
  pageIndex: number;
  pageSize: number;
  totalCount: number;
  items: ContactDto[];
}
