export * from "./public";

/**
 * Format the API-key token so it can be consumed with the Authorization header using `Bearer` token or as `access_token` when using it for WorkHub
 * @param src The plain API-key token
 * @returns A formatted token that can be used for authorization
 */
export function formatWorkspaceToken(src: string) {
  return "X-API-Key " + src;
}
