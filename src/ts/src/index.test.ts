import { describe, it, expect } from "vitest";
import { formatWorkspaceToken, formatToken } from "./index";

describe("formatWorkspaceToken", () => {
  it("should format a workspace token with default prefix", () => {
    expect(formatWorkspaceToken("abc123")).toBe("X-API-Key abc123");
  });
});


describe("formatToken", () => {
  it("Using `account` should format a token as an account token", () => {
    expect(formatToken("abc123", "account")).toBe("X-API-Key at_v2_abc123");
  });

  it("Using `workspace` should format a token as an workspace token", () => {
    expect(formatToken("abc123", "workspace")).toBe("X-API-Key ws_v2_abc123");
  });

  it("Using `system` should format a token as an system token", () => {
    expect(formatToken("abc123", "system")).toBe("X-API-Key sys_v2_abc123");
  });
});
