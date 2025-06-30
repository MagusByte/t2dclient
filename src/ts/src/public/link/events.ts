import { LinkItemDto } from "./dto";

export interface LinkSetEvent {
  item: LinkItemDto;
}

export interface LinkDeletedEvent {
  id: string;
  workspaceIds: string[];
}
