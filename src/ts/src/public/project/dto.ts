import { ProjectPotentialResourceLimit } from "./values";

export type ProjectResourceKind = "organization" | "workspace";

export interface ProjectResourceDto {
  id: string;
  resourceId: string;
  resourceKind: ProjectResourceKind;
  resourceName: string;
}

export interface ProjectAdministratorDto {
  id: string;
  accountId: string;
  name: string;
}

export interface ProjectItemDto {
  id: string;
  name: string;
  resources: ProjectResourceDto[];
  administrators: ProjectAdministratorDto[];
  version: number;
}

export interface ProjectUpdatedValueDto {
  name?: string;
}

export interface ProjectPotentialResourceItemDto {
  /**
   * The id of the resource (e.g. a WorkspaceId or OrganizationId)
   */
  id: string;
  /**
   * The type of resource
   */
  kind: ProjectResourceKind;
  /**
   * The name of the resource
   */
  name: string;
  /** Describes limiting factors of why a potential limit can't be used. If no
   * limiting factors are described then the resource is available to be used
   * in a project */
  limits: ProjectPotentialResourceLimit[];
}
