# Changelog

## [v1.0.0-rc1]
- Initial release

## [v1.0.0-rc1.1] - 2025-007-28
- Changed `WorkspaceFeaturesDto` to a dictionary instead of a strong typed.
  - Reason: This object contains various feature flags that are enforced on the server, it's mostly diagnostic and should be ignored.
