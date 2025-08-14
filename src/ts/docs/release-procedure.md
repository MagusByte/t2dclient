## Release Procedure

1. **Update the version:**
	- For a regular release, run `npm version <new-version>` (e.g., `npm version 1.2.3`).
	- For a prerelease (e.g., `v1.0.0-rc1`, `v1.0.0-rc1.1`), specify the full version: `npm version 1.0.0-rc1.2`.
	- This updates `package.json` and creates a git tag.

2. **Publish to npm:**
	- For a regular release, run `npm publish`.
	- For a prerelease, run `npm publish --tag next` to avoid overwriting the latest stable version on npm.

3. **Push changes and tags to git:**
	- Run `git push` to push commits.
	- Run `git push --tags` to push the new version tag.

### Notes on prereleases
- Prerelease versions follow the format used in the changelog, e.g., `v1.0.0-rc1`, `v1.0.0-rc1.1`.
- Use the `--tag next` flag when publishing prereleases to npm.


