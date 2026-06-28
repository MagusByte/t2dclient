import {
  SubscribeToMapResponse,
  SubscribeToWorkspaceResponse,
} from "./hub-only-events";
import {
  InviteCreateRequest,
  InviteCreateResponse,
  InviteListRequest,
  InviteListResponse,
  InviteRevokeRequest,
  InviteRevokeResponse,
  InvitePreviewRequest,
  InvitePreviewResponse,
  InviteAcceptRequest,
  InviteAcceptResponse,
} from "./invite";
import {
  LinkCreateRequest,
  LinkCreateResponse,
  LinkCreatePreviewRequest,
  LinkCreatePreviewResponse,
  LinkDeleteRequest,
  LinkDeleteResponse,
  LinkDeletedEvent,
  LinkSetEvent,
} from "./link";
import {
  MapCreateRequest,
  MapCreateResponse,
  MapUpdateRequest,
  MapUpdateResponse,
  MapDeleteRequest,
  MapDeleteResponse,
  MapDeletedEvent,
  MapSetEvent,
} from "./map";
import {
  PlacementCreateRequest,
  PlacementCreateResponse,
  PlacementUpdateRequest,
  PlacementUpdateResponse,
  PlacementDeleteRequest,
  PlacementDeleteResponse,
  PlacementDeletedEvent,
  PlacementSetEvent,
} from "./placement";
import {
  TaskCreateRequest,
  TaskCreateResponse,
  TaskUpdateRequest,
  TaskUpdateResponse,
  TaskDeleteRequest,
  TaskDeleteResponse,
  TaskDeletedEvent,
  TaskSetEvent,
} from "./task";
import {
  TaskPropertyDefinitionCreateRequest,
  TaskPropertyDefinitionCreateResponse,
  TaskPropertyDefinitionDeleteRequest,
  TaskPropertyDefinitionDeleteResponse,
} from "./task-property-definition";
import { VersionDto } from "./version";
import {
  WorkspaceCreateRequest,
  WorkspaceCreateResponse,
  WorkspaceUpdateRequest,
  WorkspaceUpdateResponse,
  WorkspaceDeleteRequest,
  WorkspaceDeleteResponse,
  WorkspaceSubscriptionRequest,
  WorkspaceSubscriptionResponse,
  WorkspaceMemberAddRequest,
  WorkspaceMemberAddResponse,
  WorkspaceRemoveMemberRequest,
  WorkspaceRemoveMemberResponse,
  WorkspaceCreateTutorialRequest,
  WorkspaceCreateTutorialResponse,
  WorkspaceMarkAsTutorialTemplateRequest,
  WorkspaceMarkAsTutorialTemplateResponse,
  WorkspaceDeletedEvent,
  WorkspaceSetEvent,
} from "./workspace";
import {
  WorkspaceTokenCreateRequest,
  WorkspaceTokenCreateResponse,
  WorkspaceTokenListRequest,
  WorkspaceTokenListResponse,
  WorkspaceTokenRevokeRequest,
  WorkspaceTokenRevokeResponse,
  WorkspaceTokenVerifyRequest,
  WorkspaceTokenVerifyResponse,
} from "./workspace-token";
import {
  ChecklistDeletedEvent,
  ChecklistSetEvent,
  ChecklistAddItemRequest,
  ChecklistAddItemResponse,
  ChecklistChangeOrderRequest,
  ChecklistChangeOrderResponse,
  ChecklistCreateRequest,
  ChecklistCreateResponse,
  ChecklistDeleteRequest,
  ChecklistDeleteResponse,
  ChecklistRemoveItemRequest,
  ChecklistRemoveItemResponse,
} from "./checklist";
import { SystemConfigSetEvent } from "./system-config";
import {
  PersonalGoalsGetRequest,
  PersonalGoalsGetResponse,
  PersonalGoalsSetEvent,
  PersonalGoalsUpdateRequest,
  PersonalGoalsUpdateResponse,
} from "./personal-goals";
import {
  TimeTrackerCreateRequest,
  TimeTrackerCreateResponse,
  TimeTrackerDeletedEvent,
  TimeTrackerDeleteRequest,
  TimeTrackerDeleteResponse,
  TimeTrackerListRequest,
  TimeTrackerListResponse,
  TimeTrackerSetEvent,
  TimeTrackerUpdateRequest,
  TimeTrackerUpdateResponse,
} from "./time-tracker";

/**
 * All the events the client can receive.
 */
export interface WorkHubEventsMap {
  OnVersion: VersionDto;
  OnSystemConfigSet: SystemConfigSetEvent;
  OnLinkDeleted: LinkDeletedEvent;
  OnLinkSet: LinkSetEvent;
  OnMapDeleted: MapDeletedEvent;
  OnMapSet: MapSetEvent;
  OnPlacementDeleted: PlacementDeletedEvent;
  OnPlacementSet: PlacementSetEvent;
  OnTaskDeleted: TaskDeletedEvent;
  OnTaskSet: TaskSetEvent;
  OnWorkspaceDeleted: WorkspaceDeletedEvent;
  OnWorkspaceSet: WorkspaceSetEvent;
  OnChecklistSet: ChecklistSetEvent;
  OnChecklistDeleted: ChecklistDeletedEvent;
  OnPersonalGoalsSet: PersonalGoalsSetEvent;
  OnTimeTrackerSet: TimeTrackerSetEvent;
  OnTimeTrackerDeleted: TimeTrackerDeletedEvent;
}

export type WorkhubEventMethods = keyof WorkHubEventsMap;
export type WorkhubEventHandler<This, K extends WorkhubEventMethods> = (
  this: This,
  ev: WorkHubEventsMap[K],
) => void;

// This is an interface that matches the workhub in the backend
export interface IWorkHub {
  addEventHandler<K extends WorkhubEventMethods>(
    event: K,
    listener: (event: WorkHubEventsMap[K]) => void,
  ): void;
  removeEventHandler<K extends WorkhubEventMethods>(
    event: K,
    listener: (event: WorkHubEventsMap[K]) => void,
  ): void;

  subscribeToWorkspace(
    workspaceId: string,
  ): Promise<SubscribeToWorkspaceResponse>;
  unsubscribeFromWorkspace(workspaceId: string): Promise<void>;

  /**
   * @deprecated No longer needed, you only need to subscribe to a workspace
   */
  subscribeToMap(
    workspaceId: string,
    mapId: string,
  ): Promise<SubscribeToMapResponse>;
  /**
   * @deprecated No longer needed, you only need to subscribe to a workspace
   */
  unsubscribeFromMap(workspaceId: string, mapId: string): Promise<void>;

  // Workspaces
  createWorkspace(
    request: WorkspaceCreateRequest,
  ): Promise<WorkspaceCreateResponse>;
  updateWorkspace(
    request: WorkspaceUpdateRequest,
  ): Promise<WorkspaceUpdateResponse>;
  deleteWorkspace(
    request: WorkspaceDeleteRequest,
  ): Promise<WorkspaceDeleteResponse>;
  getWorkspaceSubscription(
    request: WorkspaceSubscriptionRequest,
  ): Promise<WorkspaceSubscriptionResponse>;
  addWorkspaceMember(
    request: WorkspaceMemberAddRequest,
  ): Promise<WorkspaceMemberAddResponse>;
  removeWorkspaceMember(
    request: WorkspaceRemoveMemberRequest,
  ): Promise<WorkspaceRemoveMemberResponse>;
  createTutorial(
    request: WorkspaceCreateTutorialRequest,
  ): Promise<WorkspaceCreateTutorialResponse>;
  markAsTutorial(
    request: WorkspaceMarkAsTutorialTemplateRequest,
  ): Promise<WorkspaceMarkAsTutorialTemplateResponse>;

  // Workspace API Tokens
  createWorkspaceToken(
    request: WorkspaceTokenCreateRequest,
  ): Promise<WorkspaceTokenCreateResponse>;
  listWorkspaceTokens(
    request: WorkspaceTokenListRequest,
  ): Promise<WorkspaceTokenListResponse>;
  revokeWorkspaceToken(
    request: WorkspaceTokenRevokeRequest,
  ): Promise<WorkspaceTokenRevokeResponse>;
  verifyWorkspaceToken(
    request: WorkspaceTokenVerifyRequest,
  ): Promise<WorkspaceTokenVerifyResponse>;

  // TaskPropertyDefinitions
  createTaskPropertyDefinition(
    request: TaskPropertyDefinitionCreateRequest,
  ): Promise<TaskPropertyDefinitionCreateResponse>;
  deleteTaskPropertyDefinition(
    request: TaskPropertyDefinitionDeleteRequest,
  ): Promise<TaskPropertyDefinitionDeleteResponse>;

  // Invites
  createInvite(request: InviteCreateRequest): Promise<InviteCreateResponse>;
  listInvites(request: InviteListRequest): Promise<InviteListResponse>;
  revokeInvite(request: InviteRevokeRequest): Promise<InviteRevokeResponse>;
  previewInvite(request: InvitePreviewRequest): Promise<InvitePreviewResponse>;
  acceptInvite(request: InviteAcceptRequest): Promise<InviteAcceptResponse>;

  // Maps
  createMap(request: MapCreateRequest): Promise<MapCreateResponse>;
  updateMap(request: MapUpdateRequest): Promise<MapUpdateResponse>;
  deleteMap(request: MapDeleteRequest): Promise<MapDeleteResponse>;

  // Tasks
  createTask(request: TaskCreateRequest): Promise<TaskCreateResponse>;
  updateTask(request: TaskUpdateRequest): Promise<TaskUpdateResponse>;
  deleteTask(request: TaskDeleteRequest): Promise<TaskDeleteResponse>;

  // Placements
  createPlacement(
    request: PlacementCreateRequest,
  ): Promise<PlacementCreateResponse>;
  updatePlacement(
    request: PlacementUpdateRequest,
  ): Promise<PlacementUpdateResponse>;
  deletePlacement(
    request: PlacementDeleteRequest,
  ): Promise<PlacementDeleteResponse>;

  // Links
  createLink(request: LinkCreateRequest): Promise<LinkCreateResponse>;
  previewLinkCreate(
    request: LinkCreatePreviewRequest,
  ): Promise<LinkCreatePreviewResponse>;
  deleteLink(request: LinkDeleteRequest): Promise<LinkDeleteResponse>;

  // Checklist
  checklistCreate(
    request: ChecklistCreateRequest,
  ): Promise<ChecklistCreateResponse>;
  checklistDelete(
    request: ChecklistDeleteRequest,
  ): Promise<ChecklistDeleteResponse>;
  checklistAddItem(
    request: ChecklistAddItemRequest,
  ): Promise<ChecklistAddItemResponse>;
  checklistRemoveItem(
    request: ChecklistRemoveItemRequest,
  ): Promise<ChecklistRemoveItemResponse>;
  checklistChangeOrder(
    request: ChecklistChangeOrderRequest,
  ): Promise<ChecklistChangeOrderResponse>;

  personalGoalsGet(
    request: PersonalGoalsGetRequest,
  ): Promise<PersonalGoalsGetResponse>;

  personalGoalsUpdate(
    request: PersonalGoalsUpdateRequest,
  ): Promise<PersonalGoalsUpdateResponse>;

  timeTrackerList(
    request: TimeTrackerListRequest,
  ): Promise<TimeTrackerListResponse>;
  timeTrackerCreate(
    request: TimeTrackerCreateRequest,
  ): Promise<TimeTrackerCreateResponse>;
  timeTrackerUpdate(
    request: TimeTrackerUpdateRequest,
  ): Promise<TimeTrackerUpdateResponse>;
  timeTrackerDelete(
    request: TimeTrackerDeleteRequest,
  ): Promise<TimeTrackerDeleteResponse>;
}
