import {
  SubscribeToWorkspaceResponse,
  SubscribeToMapResponse,
} from "./hub-only-events";
import { IHubClient } from "./IHubClient";
import {
  IWorkHub,
  WorkhubEventHandler,
  WorkhubEventMethods,
  WorkHubEventsMap,
} from "./IWorkHub";
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
} from "./link";
import {
  MapCreateRequest,
  MapCreateResponse,
  MapUpdateRequest,
  MapUpdateResponse,
  MapDeleteRequest,
  MapDeleteResponse,
} from "./map";
import {
  PlacementCreateRequest,
  PlacementCreateResponse,
  PlacementUpdateRequest,
  PlacementUpdateResponse,
  PlacementDeleteRequest,
  PlacementDeleteResponse,
} from "./placement";
import {
  TaskCreateRequest,
  TaskCreateResponse,
  TaskUpdateRequest,
  TaskUpdateResponse,
  TaskDeleteRequest,
  TaskDeleteResponse,
} from "./task";
import {
  TaskPropertyDefinitionCreateRequest,
  TaskPropertyDefinitionCreateResponse,
  TaskPropertyDefinitionDeleteRequest,
  TaskPropertyDefinitionDeleteResponse,
} from "./task-property-definition";
import {
  WorkspaceCreateRequest,
  WorkspaceCreateResponse,
  WorkspaceUpdateRequest,
  WorkspaceUpdateResponse,
  WorkspaceDeleteRequest,
  WorkspaceDeleteResponse,
  WorkspaceSubscriptionRequest,
  WorkspaceSubscriptionResponse,
  WorkspaceRemoveMemberRequest,
  WorkspaceRemoveMemberResponse,
  WorkspaceCreateTutorialRequest,
  WorkspaceCreateTutorialResponse,
  WorkspaceMarkAsTutorialTemplateRequest,
  WorkspaceMarkAsTutorialTemplateResponse,
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
  ChecklistCreateRequest,
  ChecklistCreateResponse,
  ChecklistDeleteRequest,
  ChecklistDeleteResponse,
  ChecklistAddItemRequest,
  ChecklistAddItemResponse,
  ChecklistRemoveItemRequest,
  ChecklistRemoveItemResponse,
  ChecklistChangeOrderRequest,
  ChecklistChangeOrderResponse,
} from "./checklist";
import {
  PersonalGoalsUpdateRequest,
  PersonalGoalsGetResponse,
  PersonalGoalsUpdateResponse,
  PersonalGoalsGetRequest,
} from "./personal-goals";
import {
  TimeTrackerCreateRequest,
  TimeTrackerCreateResponse,
  TimeTrackerDeleteRequest,
  TimeTrackerDeleteResponse,
  TimeTrackerListRequest,
  TimeTrackerListResponse,
  TimeTrackerUpdateRequest,
  TimeTrackerUpdateResponse,
} from "./time-tracker";

export class WorkHub<HubClient extends IHubClient> implements IWorkHub {
  #handlers: {
    [K in WorkhubEventMethods]?: WorkhubEventHandler<this, K>[];
  } = {};

  constructor(private hubClient: HubClient) {
    this.hubClient.on("OnVersion", (item) =>
      this.invokeHandler("OnVersion", item),
    );
    this.hubClient.on("OnSystemConfigSet", (item) =>
      this.invokeHandler("OnSystemConfigSet", item),
    );

    this.hubClient.on("OnLinkDeleted", (item) =>
      this.invokeHandler("OnLinkDeleted", item),
    );
    this.hubClient.on("OnLinkSet", (item) =>
      this.invokeHandler("OnLinkSet", item),
    );
    this.hubClient.on("OnMapDeleted", (item) =>
      this.invokeHandler("OnMapDeleted", item),
    );
    this.hubClient.on("OnMapSet", (item) =>
      this.invokeHandler("OnMapSet", item),
    );
    this.hubClient.on("OnPlacementDeleted", (item) =>
      this.invokeHandler("OnPlacementDeleted", item),
    );
    this.hubClient.on("OnPlacementSet", (item) =>
      this.invokeHandler("OnPlacementSet", item),
    );
    this.hubClient.on("OnTaskDeleted", (item) =>
      this.invokeHandler("OnTaskDeleted", item),
    );
    this.hubClient.on("OnTaskSet", (item) =>
      this.invokeHandler("OnTaskSet", item),
    );
    this.hubClient.on("OnWorkspaceDeleted", (item) =>
      this.invokeHandler("OnWorkspaceDeleted", item),
    );
    this.hubClient.on("OnWorkspaceSet", (item) =>
      this.invokeHandler("OnWorkspaceSet", item),
    );
    this.hubClient.on("OnChecklistSet", (item) =>
      this.invokeHandler("OnChecklistSet", item),
    );
    this.hubClient.on("OnChecklistDeleted", (item) =>
      this.invokeHandler("OnChecklistDeleted", item),
    );
    this.hubClient.on("OnPersonalGoalsSet", (item) =>
      this.invokeHandler("OnPersonalGoalsSet", item),
    );

    this.hubClient.on("OnTimeTrackerSet", (item) =>
      this.invokeHandler("OnTimeTrackerSet", item),
    );
    this.hubClient.on("OnTimeTrackerDeleted", (item) =>
      this.invokeHandler("OnTimeTrackerDeleted", item),
    );
  }
  private invokeHandler<K extends WorkhubEventMethods>(
    event: K,
    ev: WorkHubEventsMap[K],
  ) {
    const handlers = this.#handlers[event];
    if (handlers) {
      for (const handler of handlers) {
        handler.call(this, ev);
      }
    }
  }

  addEventHandler<K extends WorkhubEventMethods>(
    event: K,
    listener: (event: WorkHubEventsMap[K]) => void,
  ) {
    this.#handlers[event] = this.#handlers[event] || [];
    this.#handlers[event].push(listener);
  }

  removeEventHandler<K extends WorkhubEventMethods>(
    event: K,
    listener: (event: WorkHubEventsMap[K]) => void,
  ) {
    const handlers = this.#handlers[event];
    if (handlers) {
      let index = handlers.indexOf(listener);
      while (index !== -1) {
        handlers.splice(index, 1);
        index = handlers.indexOf(listener); // Check for duplicates
      }
    }
  }

  async subscribeToWorkspace(
    workspaceId: string,
  ): Promise<SubscribeToWorkspaceResponse> {
    return await this.hubClient.invoke<SubscribeToWorkspaceResponse>(
      "subscribeToWorkspace",
      workspaceId,
    );
  }

  async unsubscribeFromWorkspace(workspaceId: string): Promise<void> {
    await this.hubClient.invoke("unsubscribeFromWorkspace", workspaceId);
  }

  /**
   * @deprecated No longer needed, you only need to subscribe to a workspace
   */
  async subscribeToMap(
    workspaceId: string,
    mapId: string,
  ): Promise<SubscribeToMapResponse> {
    return await this.hubClient.invoke<SubscribeToMapResponse>(
      "subscribeToMap",
      workspaceId,
      mapId,
    );
  }

  /**
   * @deprecated No longer needed, you only need to subscribe to a workspace
   */
  async unsubscribeFromMap(workspaceId: string, mapId: string): Promise<void> {
    await this.hubClient.invoke("unsubscribeFromMap", workspaceId, mapId);
  }

  async createTask(request: TaskCreateRequest): Promise<TaskCreateResponse> {
    return await this.hubClient.invoke<TaskCreateResponse>(
      "createTask",
      request,
    );
  }

  async updateTask(request: TaskUpdateRequest): Promise<TaskUpdateResponse> {
    return await this.hubClient.invoke<TaskUpdateResponse>(
      "updateTask",
      request,
    );
  }

  async deleteTask(request: TaskDeleteRequest): Promise<TaskDeleteResponse> {
    return await this.hubClient.invoke<TaskDeleteResponse>(
      "deleteTask",
      request,
    );
  }

  async createMap(request: MapCreateRequest): Promise<MapCreateResponse> {
    return await this.hubClient.invoke<MapCreateResponse>("createMap", request);
  }

  async updateMap(request: MapUpdateRequest): Promise<MapUpdateResponse> {
    return await this.hubClient.invoke<MapUpdateResponse>("updateMap", request);
  }

  async deleteMap(request: MapDeleteRequest): Promise<MapDeleteResponse> {
    return await this.hubClient.invoke<MapDeleteResponse>("deleteMap", request);
  }

  async createPlacement(
    request: PlacementCreateRequest,
  ): Promise<PlacementCreateResponse> {
    return await this.hubClient.invoke<PlacementCreateResponse>(
      "createPlacement",
      request,
    );
  }

  async updatePlacement(
    request: PlacementUpdateRequest,
  ): Promise<PlacementUpdateResponse> {
    return await this.hubClient.invoke<PlacementUpdateResponse>(
      "updatePlacement",
      request,
    );
  }

  async deletePlacement(
    request: PlacementDeleteRequest,
  ): Promise<PlacementDeleteResponse> {
    return await this.hubClient.invoke<PlacementDeleteResponse>(
      "deletePlacement",
      request,
    );
  }

  async createLink(request: LinkCreateRequest): Promise<LinkCreateResponse> {
    return await this.hubClient.invoke<LinkCreateResponse>(
      "createLink",
      request,
    );
  }

  async previewLinkCreate(
    request: LinkCreatePreviewRequest,
  ): Promise<LinkCreatePreviewResponse> {
    return await this.hubClient.invoke<LinkCreatePreviewResponse>(
      "previewLinkCreate",
      request,
    );
  }

  async deleteLink(request: LinkDeleteRequest): Promise<LinkDeleteResponse> {
    return await this.hubClient.invoke<LinkDeleteResponse>(
      "deleteLink",
      request,
    );
  }

  async createWorkspace(
    request: WorkspaceCreateRequest,
  ): Promise<WorkspaceCreateResponse> {
    return await this.hubClient.invoke<WorkspaceCreateResponse>(
      "createWorkspace",
      request,
    );
  }

  async updateWorkspace(
    request: WorkspaceUpdateRequest,
  ): Promise<WorkspaceUpdateResponse> {
    return await this.hubClient.invoke<WorkspaceUpdateResponse>(
      "updateWorkspace",
      request,
    );
  }

  async getWorkspaceSubscription(
    request: WorkspaceSubscriptionRequest,
  ): Promise<WorkspaceSubscriptionResponse> {
    return await this.hubClient.invoke<WorkspaceSubscriptionResponse>(
      "getWorkspaceSubscription",
      request,
    );
  }

  async deleteWorkspace(
    request: WorkspaceDeleteRequest,
  ): Promise<WorkspaceDeleteResponse> {
    return await this.hubClient.invoke<WorkspaceDeleteRequest>(
      "deleteWorkspace",
      request,
    );
  }

  async removeWorkspaceMember(
    request: WorkspaceRemoveMemberRequest,
  ): Promise<WorkspaceRemoveMemberResponse> {
    return await this.hubClient.invoke<WorkspaceRemoveMemberResponse>(
      "removeWorkspaceMember",
      request,
    );
  }

  async createTutorial(
    request: WorkspaceCreateTutorialRequest,
  ): Promise<WorkspaceCreateTutorialResponse> {
    return await this.hubClient.invoke<WorkspaceCreateTutorialResponse>(
      "createTutorial",
      request,
    );
  }

  async markAsTutorial(
    request: WorkspaceMarkAsTutorialTemplateRequest,
  ): Promise<WorkspaceMarkAsTutorialTemplateResponse> {
    return await this.hubClient.invoke<WorkspaceMarkAsTutorialTemplateResponse>(
      "markAsTutorial",
      request,
    );
  }

  async createTaskPropertyDefinition(
    request: TaskPropertyDefinitionCreateRequest,
  ): Promise<TaskPropertyDefinitionCreateResponse> {
    return await this.hubClient.invoke<TaskPropertyDefinitionCreateResponse>(
      "createTaskPropertyDefinition",
      request,
    );
  }

  async deleteTaskPropertyDefinition(
    request: TaskPropertyDefinitionDeleteRequest,
  ): Promise<TaskPropertyDefinitionDeleteResponse> {
    return await this.hubClient.invoke<TaskPropertyDefinitionDeleteResponse>(
      "deleteTaskPropertyDefinition",
      request,
    );
  }

  async createInvite(
    request: InviteCreateRequest,
  ): Promise<InviteCreateResponse> {
    return await this.hubClient.invoke<InviteCreateResponse>(
      "createInvite",
      request,
    );
  }
  async listInvites(request: InviteListRequest): Promise<InviteListResponse> {
    return await this.hubClient.invoke<InviteListResponse>(
      "listInvites",
      request,
    );
  }
  async revokeInvite(
    request: InviteRevokeRequest,
  ): Promise<InviteRevokeResponse> {
    return await this.hubClient.invoke<InviteRevokeResponse>(
      "revokeInvite",
      request,
    );
  }
  async previewInvite(
    request: InvitePreviewRequest,
  ): Promise<InvitePreviewResponse> {
    return await this.hubClient.invoke<InvitePreviewResponse>(
      "previewInvite",
      request,
    );
  }
  async acceptInvite(
    request: InviteAcceptRequest,
  ): Promise<InviteAcceptResponse> {
    return await this.hubClient.invoke<InviteAcceptResponse>(
      "acceptInvite",
      request,
    );
  }

  async createWorkspaceToken(
    request: WorkspaceTokenCreateRequest,
  ): Promise<WorkspaceTokenCreateResponse> {
    return await this.hubClient.invoke<WorkspaceTokenCreateResponse>(
      "createWorkspaceToken",
      request,
    );
  }
  async listWorkspaceTokens(
    request: WorkspaceTokenListRequest,
  ): Promise<WorkspaceTokenListResponse> {
    return await this.hubClient.invoke<WorkspaceTokenListResponse>(
      "listWorkspaceTokens",
      request,
    );
  }
  async revokeWorkspaceToken(
    request: WorkspaceTokenRevokeRequest,
  ): Promise<WorkspaceTokenRevokeResponse> {
    return await this.hubClient.invoke<WorkspaceTokenRevokeResponse>(
      "revokeWorkspaceToken",
      request,
    );
  }
  async verifyWorkspaceToken(
    request: WorkspaceTokenVerifyRequest,
  ): Promise<WorkspaceTokenVerifyResponse> {
    return await this.hubClient.invoke<WorkspaceTokenVerifyResponse>(
      "verifyWorkspaceToken",
      request,
    );
  }

  async checklistCreate(
    request: ChecklistCreateRequest,
  ): Promise<ChecklistCreateResponse> {
    return await this.hubClient.invoke<ChecklistCreateResponse>(
      "checklistCreate",
      request,
    );
  }

  async checklistDelete(
    request: ChecklistDeleteRequest,
  ): Promise<ChecklistDeleteResponse> {
    return await this.hubClient.invoke<ChecklistDeleteResponse>(
      "checklistDelete",
      request,
    );
  }

  async checklistAddItem(
    request: ChecklistAddItemRequest,
  ): Promise<ChecklistAddItemResponse> {
    return await this.hubClient.invoke<ChecklistAddItemResponse>(
      "checklistAddItem",
      request,
    );
  }

  async checklistRemoveItem(
    request: ChecklistRemoveItemRequest,
  ): Promise<ChecklistRemoveItemResponse> {
    return await this.hubClient.invoke<ChecklistRemoveItemResponse>(
      "checklistRemoveItem",
      request,
    );
  }

  async checklistChangeOrder(
    request: ChecklistChangeOrderRequest,
  ): Promise<ChecklistChangeOrderResponse> {
    return await this.hubClient.invoke<ChecklistChangeOrderResponse>(
      "checklistChangeOrder",
      request,
    );
  }

  async personalGoalsGet(
    request: PersonalGoalsGetRequest,
  ): Promise<PersonalGoalsGetResponse> {
    return await this.hubClient.invoke<PersonalGoalsGetResponse>(
      "personalGoalsGet",
      request,
    );
  }

  async personalGoalsUpdate(
    request: PersonalGoalsUpdateRequest,
  ): Promise<PersonalGoalsUpdateResponse> {
    return await this.hubClient.invoke<PersonalGoalsUpdateResponse>(
      "personalGoalsUpdate",
      request,
    );
  }

  async timeTrackerList(
    request: TimeTrackerListRequest,
  ): Promise<TimeTrackerListResponse> {
    return await this.hubClient.invoke<TimeTrackerListResponse>(
      "timeTrackerList",
      request,
    );
  }

  async timeTrackerCreate(
    request: TimeTrackerCreateRequest,
  ): Promise<TimeTrackerCreateResponse> {
    return await this.hubClient.invoke<TimeTrackerCreateResponse>(
      "timeTrackerCreate",
      request,
    );
  }

  async timeTrackerDelete(
    request: TimeTrackerDeleteRequest,
  ): Promise<TimeTrackerDeleteResponse> {
    return await this.hubClient.invoke<TimeTrackerDeleteResponse>(
      "timeTrackerDelete",
      request,
    );
  }

  async timeTrackerUpdate(
    request: TimeTrackerUpdateRequest,
  ): Promise<TimeTrackerUpdateResponse> {
    return await this.hubClient.invoke<TimeTrackerUpdateResponse>(
      "timeTrackerUpdate",
      request,
    );
  }
}
