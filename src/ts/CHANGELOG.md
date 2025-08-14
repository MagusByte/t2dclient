# Changelog

## [v1.0.0-rc1]
- Initial release

## [v1.0.0-rc1.1] - 2025-07-28
- Changed `WorkspaceFeaturesDto` to a dictionary instead of a strong typed.
  - Reason: This object contains various feature flags that are enforced on the server, it's mostly diagnostic and should be ignored.

## [v1.0.0-rc2] - 2025-08-14

- Changed `SubscribeToWorkspaceResponse` so that it contains `placementItems`, this due to a change in the API to always return placements when subscribing.
- **NOTE:** Subscribing to a map is no longer needed
