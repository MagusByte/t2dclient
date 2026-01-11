# Changelog

## [v1.1.0] - 2026-01-11
- Add `SystemConfig` and events
- Remove `WorkspacePlan`
- Change `WorkspaceType.Special` to `WorkspaceType.Temp`
- Remove `WorkspaceStatus.Paused`
- Add `SystemTokenItemDto` to `WorkspaceItemDto`

## [v1.0.4] - 2026-01-02
- Fixed typos

## [v1.0.3] - 2025-12-19 

- Add `TaskComponent`
- Add `ChecklistDto`

## [v1.0.2] - 2025-11-11
- Add PriorityMatrix to MapDto

## [v1.0.1] - 2025-11-06
- Add IsArchived bit to Map

## [v1.0.0-rc4] - 2025-10-31
- Introduced MapDisplaySettings

## [v1.0.0-rc3] - 2025-10-14
- Add description to task

## [v1.0.0-rc2] - 2025-8-14
- Add placementItems to SubscribeToWorkspaceResponse
- Deprecate subscribeToMap methods

## [v1.0.0-rc1]
- Initial release

## [v1.0.0-rc1.1] - 2025-07-28
- Changed `WorkspaceFeaturesDto` to a dictionary instead of a strong typed.
  - Reason: This object contains various feature flags that are enforced on the server, it's mostly diagnostic and should be ignored.

## [v1.0.0-rc2] - 2025-08-14

- Changed `SubscribeToWorkspaceResponse` so that it contains `placementItems`, this due to a change in the API to always return placements when subscribing.
- **NOTE:** Subscribing to a map is no longer needed
