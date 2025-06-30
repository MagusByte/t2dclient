import { SubscribeToWorkspaceResponse, SubscribeToMapResponse } from "./hub-only-events";
import { IHubClient } from "./IHubClient";
import { IWorkHub, WorkhubEventHandler, WorkhubEventMethods, WorkHubEventsMap } from "./IWorkHub";
import { InviteCreateRequest, InviteCreateResponse, InviteListRequest, InviteListResponse, InviteRevokeRequest, InviteRevokeResponse, InvitePreviewRequest, InvitePreviewResponse, InviteAcceptRequest, InviteAcceptResponse } from "./invite";
import { LinkCreateRequest, LinkCreateResponse, LinkCreatePreviewRequest, LinkCreatePreviewResponse, LinkDeleteRequest, LinkDeleteResponse } from "./link";
import { MapCreateRequest, MapCreateResponse, MapUpdateRequest, MapUpdateResponse, MapDeleteRequest, MapDeleteResponse } from "./map";
import { PlacementCreateRequest, PlacementCreateResponse, PlacementUpdateRequest, PlacementUpdateResponse, PlacementDeleteRequest, PlacementDeleteResponse } from "./placement";
import { TaskCreateRequest, TaskCreateResponse, TaskUpdateRequest, TaskUpdateResponse, TaskDeleteRequest, TaskDeleteResponse } from "./task";
import { TaskPropertyDefinitionCreateRequest, TaskPropertyDefinitionCreateResponse, TaskPropertyDefinitionDeleteRequest, TaskPropertyDefinitionDeleteResponse } from "./task-property-definition";
import { WorkspaceCreateRequest, WorkspaceCreateResponse, WorkspaceUpdateRequest, WorkspaceUpdateResponse, WorkspaceDeleteRequest, WorkspaceDeleteResponse, WorkspaceSubscriptionRequest, WorkspaceSubscriptionResponse, WorkspaceRemoveMemberRequest, WorkspaceRemoveMemberResponse, WorkspaceCreateTutorialRequest, WorkspaceCreateTutorialResponse, WorkspaceMarkAsTutorialTemplateRequest, WorkspaceMarkAsTutorialTemplateResponse } from "./workspace";
import { WorkspaceTokenCreateRequest, WorkspaceTokenCreateResponse, WorkspaceTokenListRequest, WorkspaceTokenListResponse, WorkspaceTokenRevokeRequest, WorkspaceTokenRevokeResponse, WorkspaceTokenVerifyRequest, WorkspaceTokenVerifyResponse } from "./workspace-token";

export class WorkHub implements IWorkHub {
  #handlers: {
    [K in WorkhubEventMethods]?: WorkhubEventHandler<this, K>[];
  } = {};

  constructor(private connection: IHubClient) {
    this.connection.on('OnVersion', (item) => this.invokeHandler("OnVersion", item));
    this.connection.on('OnLinkDeleted', (item) => this.invokeHandler("OnLinkDeleted", item));
    this.connection.on('OnLinkSet', (item) => this.invokeHandler("OnLinkSet", item));
    this.connection.on('OnMapDeleted', (item) => this.invokeHandler("OnMapDeleted", item));
    this.connection.on('OnMapSet', (item) => this.invokeHandler("OnMapSet", item));
    this.connection.on('OnPlacementDeleted', (item) => this.invokeHandler("OnPlacementDeleted", item));
    this.connection.on('OnPlacementSet', (item) => this.invokeHandler("OnPlacementSet", item));
    this.connection.on('OnTaskDeleted', (item) => this.invokeHandler("OnTaskDeleted", item));
    this.connection.on('OnTaskSet', (item) => this.invokeHandler("OnTaskSet", item));
    this.connection.on('OnWorkspaceDeleted', (item) => this.invokeHandler("OnWorkspaceDeleted", item));
    this.connection.on('OnWorkspaceSet', (item) => this.invokeHandler("OnWorkspaceSet", item));
  }

  private invokeHandler<K extends WorkhubEventMethods>(event: K, ev: WorkHubEventsMap[K]) {
    const handlers = this.#handlers[event];
    if (handlers) {
      for (const handler of handlers) {
        handler.call(this, ev);
      }
    }
  }

  addEventHandler<K extends WorkhubEventMethods>(event: K, listener: (event: WorkHubEventsMap[K]) => void) {
    this.#handlers[event] = this.#handlers[event] || [];
    this.#handlers[event].push(listener);
  }

  removeEventHandler<K extends WorkhubEventMethods>(event: K, listener: (event: WorkHubEventsMap[K]) => void) {
    const handlers = this.#handlers[event];
    if (handlers) {
      let index = handlers.indexOf(listener);
      while (index !== -1) {
        handlers.splice(index, 1);
        index = handlers.indexOf(listener); // Check for duplicates
      }
    }
  }

  async subscribeToWorkspace(workspaceId: string): Promise<SubscribeToWorkspaceResponse> {
    return await this.connection.invoke<SubscribeToWorkspaceResponse>('subscribeToWorkspace', workspaceId);
  }

  async unsubscribeFromWorkspace(workspaceId: string): Promise<void> {
    await this.connection.invoke('unsubscribeFromWorkspace', workspaceId);
  }

  async subscribeToMap(workspaceId: string, mapId: string): Promise<SubscribeToMapResponse> {
    return await this.connection.invoke<SubscribeToMapResponse>('subscribeToMap', workspaceId, mapId);
  }

  async unsubscribeFromMap(workspaceId: string, mapId: string): Promise<void> {
    await this.connection.invoke('unsubscribeFromMap', workspaceId, mapId);
  }

  async createTask(request: TaskCreateRequest): Promise<TaskCreateResponse> {
    return await this.connection.invoke<TaskCreateResponse>('createTask', request);
  }

  async updateTask(request: TaskUpdateRequest): Promise<TaskUpdateResponse> {
    return await this.connection.invoke<TaskUpdateResponse>('updateTask', request);
  }

  async deleteTask(request: TaskDeleteRequest): Promise<TaskDeleteResponse> {
    return await this.connection.invoke<TaskDeleteResponse>('deleteTask', request);
  }

  async createMap(request: MapCreateRequest): Promise<MapCreateResponse> {
    return await this.connection.invoke<MapCreateResponse>('createMap', request);
  }

  async updateMap(request: MapUpdateRequest): Promise<MapUpdateResponse> {
    return await this.connection.invoke<MapUpdateResponse>('updateMap', request);
  }

  async deleteMap(request: MapDeleteRequest): Promise<MapDeleteResponse> {
    return await this.connection.invoke<MapDeleteResponse>('deleteMap', request);
  }

  async createPlacement(request: PlacementCreateRequest): Promise<PlacementCreateResponse> {
    return await this.connection.invoke<PlacementCreateResponse>('createPlacement', request);
  }

  async updatePlacement(request: PlacementUpdateRequest): Promise<PlacementUpdateResponse> {
    return await this.connection.invoke<PlacementUpdateResponse>('updatePlacement', request);
  }

  async deletePlacement(request: PlacementDeleteRequest): Promise<PlacementDeleteResponse> {
    return await this.connection.invoke<PlacementDeleteResponse>('deletePlacement', request);
  }

  async createLink(request: LinkCreateRequest): Promise<LinkCreateResponse> {
    return await this.connection.invoke<LinkCreateResponse>('createLink', request);
  }

  async previewLinkCreate(request: LinkCreatePreviewRequest): Promise<LinkCreatePreviewResponse> {
    return await this.connection.invoke<LinkCreatePreviewResponse>('previewLinkCreate', request);
  }

  async deleteLink(request: LinkDeleteRequest): Promise<LinkDeleteResponse> {
    return await this.connection.invoke<LinkDeleteResponse>('deleteLink', request);
  }

  async createWorkspace(request: WorkspaceCreateRequest): Promise<WorkspaceCreateResponse> {
    return await this.connection.invoke<WorkspaceCreateResponse>('createWorkspace', request);
  }

  async updateWorkspace(request: WorkspaceUpdateRequest): Promise<WorkspaceUpdateResponse> {
    return await this.connection.invoke<WorkspaceUpdateResponse>('updateWorkspace', request);
  }

  async getWorkspaceSubscription(request: WorkspaceSubscriptionRequest): Promise<WorkspaceSubscriptionResponse> {
    return await this.connection.invoke<WorkspaceSubscriptionResponse>('getWorkspaceSubscription', request);
  }

  async deleteWorkspace(request: WorkspaceDeleteRequest): Promise<WorkspaceDeleteResponse> {
    return await this.connection.invoke<WorkspaceDeleteRequest>('deleteWorkspace', request);
  }

  async removeWorkspaceMember(request: WorkspaceRemoveMemberRequest): Promise<WorkspaceRemoveMemberResponse> {
    return await this.connection.invoke<WorkspaceRemoveMemberResponse>('removeWorkspaceMember', request);
  }

  async createTutorial(request: WorkspaceCreateTutorialRequest): Promise<WorkspaceCreateTutorialResponse> {
    return await this.connection.invoke<WorkspaceCreateTutorialResponse>('createTutorial', request);
  }

  async markAsTutorial(request: WorkspaceMarkAsTutorialTemplateRequest): Promise<WorkspaceMarkAsTutorialTemplateResponse> {
    return await this.connection.invoke<WorkspaceMarkAsTutorialTemplateResponse>('markAsTutorial', request);
  }

  async createTaskPropertyDefinition(request: TaskPropertyDefinitionCreateRequest): Promise<TaskPropertyDefinitionCreateResponse> {
    return await this.connection.invoke<TaskPropertyDefinitionCreateResponse>('createTaskPropertyDefinition', request);
  }

  async deleteTaskPropertyDefinition(request: TaskPropertyDefinitionDeleteRequest): Promise<TaskPropertyDefinitionDeleteResponse> {
    return await this.connection.invoke<TaskPropertyDefinitionDeleteResponse>('deleteTaskPropertyDefinition', request);
  }

  async createInvite(request: InviteCreateRequest): Promise<InviteCreateResponse> {
    return await this.connection.invoke<InviteCreateResponse>('createInvite', request);
  }
  async listInvites(request: InviteListRequest): Promise<InviteListResponse> {
    return await this.connection.invoke<InviteListResponse>('listInvites', request);
  }
  async revokeInvite(request: InviteRevokeRequest): Promise<InviteRevokeResponse> {
    return await this.connection.invoke<InviteRevokeResponse>('revokeInvite', request);
  }
  async previewInvite(request: InvitePreviewRequest): Promise<InvitePreviewResponse> {
    return await this.connection.invoke<InvitePreviewResponse>('previewInvite', request);
  }
  async acceptInvite(request: InviteAcceptRequest): Promise<InviteAcceptResponse> {
    return await this.connection.invoke<InviteAcceptResponse>('acceptInvite', request);
  }

  async createWorkspaceToken(request: WorkspaceTokenCreateRequest): Promise<WorkspaceTokenCreateResponse> {
    return await this.connection.invoke<WorkspaceTokenCreateResponse>('createWorkspaceToken', request);
  }
  async listWorkspaceTokens(request: WorkspaceTokenListRequest): Promise<WorkspaceTokenListResponse> {
    return await this.connection.invoke<WorkspaceTokenListResponse>('listWorkspaceTokens', request);
  }
  async revokeWorkspaceToken(request: WorkspaceTokenRevokeRequest): Promise<WorkspaceTokenRevokeResponse> {
    return await this.connection.invoke<WorkspaceTokenRevokeResponse>('revokeWorkspaceToken', request);
  }
  async verifyWorkspaceToken(request: WorkspaceTokenVerifyRequest): Promise<WorkspaceTokenVerifyResponse> {
    return await this.connection.invoke<WorkspaceTokenVerifyResponse>('verifyWorkspaceToken', request);
  }
}
