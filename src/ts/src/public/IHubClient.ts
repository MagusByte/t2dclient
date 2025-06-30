/**
 * This interface partially matches the `signalr.HubConnection` so you can use it direclty.
 */
export interface IHubClient {
  invoke<T>(methodName: string, ...args: any[]): Promise<T>;
  on(methodName: string, newMethod: (...args: any[]) => any): void;
}
