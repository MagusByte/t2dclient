# Todo2d.com TypeScript Client

This TypeScript client provides a comprehensive set of types, DTOs, and API interfaces for interacting with the Todo2d.com backend services. It is designed to enable developers to build custom automations, integrations, and backend services that communicate with the Todo2d platform in a type-safe and maintainable way.

## Purpose
- **Automation**: Build scripts or backend services that automate workflows using Todo2d.com APIs.
- **Integration**: Integrate Todo2d.com with other systems or services using a strongly-typed client.
- **Type Safety**: Leverage TypeScript types and interfaces for robust, error-resistant development.

## API Change Management
We are committed to maintaining backward compatibility for the v1 API. You can safely use this library as we continue to add new features and endpoints to v1. If a breaking change is required that would cause the client to stop functioning, we will introduce a new API path (e.g., v2) rather than breaking existing integrations.

For a detailed list of all changes and updates, please refer to our changelog: [https://docs.todo2d.com/reference/changelog/](https://docs.todo2d.com/reference/changelog/)

## Important Notes
1. Not all API calls are allowed; some require elevated access levels.
2. The origin of the call is inspected, so this library is not intended for frontend/browser use.

## Getting started

Within the library you will find a set of interfaces and types that define the API endpoints, request and response structures.
There are two versions of the client:
- **ApiClient**: This is a client that can be used to make API calls. It requires you to implement the `IApiClient` interface to provide the actual HTTP request logic, such as using `fetch`.
- **HubClient**: This is a client that can be used to connect with the signalr backend. It requires you to implement the `IHubClient`.

### First things first,

Login in to the Todo2d.com website and create a workspace token. This token can be used to authenticate API calls.

> **NOTE**  
> You can only use the workspace token to interact with a single workspace.

Store it somewhere safe.

### Implement the IApiClient and IHubClient

See the example at the end of this file. We recomend you copy it.

### Wrap the ApiClient and HubClient

```typescript
import { formatToken, WorkHub, WorkspaceApi } from "@magusbyte/t2dclient";

import { ApiClient } from "./ApiClient"; // See the example at the end
import { HubClient } from "./HubClient"; 

const apiClient = new ApiClient(formatToken(process.env.WORKSPACE_TOKEN, "workspace"));
const hubClient = new HubClient(formatToken(process.env.WORKSPACE_TOKEN, "workspace"));

const workHub = new WorkHub(hubClient);
const workspaceClient = new WorkspaceApi(apiClient);

// Use the hub for live updates
workHub.addEventHandler("OnTaskSet", (ev) => {
  if (ev.item.version == 0) {
    console.log(`Task created: ${ev.item.name} (id: ${ev.item.id})`);
  } else {
   console.log(`Task updated: ${ev.item.name} (id: ${ev.item.id}, version: ${ev.item.version})`);
  }
});

hubClient.start().then(async ()=>{
  // Retrieve the workspace
  var workspace = (await workspaceClient.list()).items[0]!;
  // Tell the hub subscribe to the workspace
  await workHub.subscribeToWorkspace(workspace.id);
  
  // Create a task (the Workhub is faster than using the TaskApi)
  await workHub.createTask({
    name: "My first task",
    workspaceId: workspace.id,        
    properties: [],
    attributes: []
  });
});
```

## Demo

You can find the full demo at https://github.com/MagusByte/t2d-cli-demo

## Example implementation

### HubClient

```typescript
import { type IHubClient } from "@magusbyte/t2dclient";
const signalr = require("@microsoft/signalr");

// An example implementation of the HubClient
export class HubClient implements IHubClient {
  constructor(private readonly token: string) {}
  private readonly prefix = "https://app.todo2d.com/api/hubs/work";
  private readonly connection = new signalr.HubConnectionBuilder()
    .withUrl(this.prefix, {
      accessTokenFactory: () => Promise.resolve(this.token),
    })
    .build();

  async start() {
    await this.connection.start();
  }

  invoke<T>(methodName: string, ...args: any[]): Promise<T> {
    return this.connection.invoke(methodName, ...args);
  }

  on(methodName: string, newMethod: (...args: any[]) => any): void {
    return this.connection.on(methodName, newMethod);
  }
}
```

### ApiClient

```typescript
import {
  ApiDeleteConfig,
  ApiFetchConfig,
  ApiGetConfig,
  ApiPatchConfig,
  ApiPostConfig,
  ApiPutConfig,
  formatToken,
  type IApiClient,
} from "@magusbyte/t2dclient";

export class ApiClient implements IApiClient {
  prefix: string = "https://app.todo2d.com";
  constructor(private token: string) {}

  async getJson<R>(
    url: string,
    config?: Partial<ApiGetConfig & ApiFetchConfig>,
  ): Promise<R> {
    const response = await fetch(this.prefix + url, {
      method: "GET",
      headers: this.createHeaders(),
    });

    return this.getData<R>(response);
  }

  async postJson<R, T = object>(
    url: string,
    body: T,
    config?: Partial<ApiPostConfig & ApiFetchConfig>,
  ): Promise<R> {
    const response = await fetch(this.prefix + url, {
      method: "POST",
      headers: this.createHeaders(),
      body: JSON.stringify(body),
    });

    return this.getData<R>(response);
  }

  async putJson<R, T = object>(
    url: string,
    body: T,
    config?: Partial<ApiPutConfig & ApiFetchConfig>,
  ): Promise<R> {
    const response = await fetch(this.prefix + url, {
      method: "PUT",
      headers: this.createHeaders(),
      body: JSON.stringify(body),
    });

    return this.getData<R>(response);
  }

  async patchJson<R, T = object>(
    url: string,
    body: T,
    config?: Partial<ApiPatchConfig & ApiFetchConfig>,
  ): Promise<R> {
    const response = await fetch(this.prefix + url, {
      method: "PATCH",
      headers: this.createHeaders(),
      body: JSON.stringify(body),
    });
    return this.getData<R>(response);
  }

  async deleteJson<R>(
    url: string,
    config?: Partial<ApiDeleteConfig & ApiFetchConfig>,
  ): Promise<R> {
    const response = await fetch(this.prefix + url, {
      method: "DELETE",
      headers: this.createHeaders(),
    });
    return this.getData<R>(response);
  }

  private async getData<R>(response: Response) {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return (await response.json()) as R;
  }

  private createHeaders(): HeadersInit | undefined {
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.token}`,
    };
  }
}
```
