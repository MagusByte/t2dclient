import { WorkspaceItemDto } from "../workspace/dto";
import { InviteAcceptFailure } from "./values";

export interface InviteAcceptRequest {
  inviteCode: string;
  secret?: string;
}

export interface InviteAcceptResponse {
  item?: WorkspaceItemDto;
  /**
   * If set then `item` will be undefined and the invite has failed due to a constraint
   */
  failure?: InviteAcceptFailure;
}
