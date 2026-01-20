export * from "./public";

const TOKEN_FORMATS = Object.freeze({
  system: "sys_v2_",
  workspace: "ws_v2_",
  account: "at_v2_",
});


/**
 * Format the API-key token so it can be consumed with the Authorization header
 * using `Bearer` token or as `access_token` when using it for WorkHub.
 *
 * @param src The plain token (provided by the login)
 * @param type The intended format.
 * @returns A formatted token that can be used for authorization
 */
export function formatToken(raw: string, type: keyof typeof TOKEN_FORMATS) {
  return `X-API-Key ${TOKEN_FORMATS[type]}${raw}`;
}

/**
 * Format the API-key token so it can be consumed with the Authorization header
 * using `Bearer` token or as `access_token` when using it for WorkHub.
 *
 * @param src The plain API-key token
 * @returns A formatted token that can be used for authorization
 * @deprecated Use {@linkcode formatToken} instead
 */
export function formatWorkspaceToken(src: string) {
  return "X-API-Key " + src;
}
