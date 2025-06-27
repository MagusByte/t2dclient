import { LinkCreationIssue } from "./values";

export interface LinkCreatePreviewRequest {
  srcTaskId: string;
  dstTaskId: string;
}

export interface LinkCreatePreviewResponse {
  issues: LinkCreationIssue[];
}
