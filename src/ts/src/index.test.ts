import { describe, it, expect } from "vitest";
import { formatWorkspaceToken } from "./index";

describe("formatWorkspaceToken", () => {
  it("should format a workspace token with default prefix", () => {
    expect(formatWorkspaceToken("abc123")).toBe("X-API-Key abc123");
  });
});
