// sanity.cli.js
import path from "path";
import { defineCliConfig } from "sanity/cli";

// Exact match so nested `is-hotkey/...` imports are left alone.
function withMediaHotkeyFix(config) {
  const alias = config.resolve?.alias;
  const aliases = Array.isArray(alias)
    ? [...alias]
    : Object.entries(alias || {}).map(([find, replacement]) => ({
        find,
        replacement,
      }));

  aliases.push({
    find: /^is-hotkey$/,
    replacement: path.resolve(process.cwd(), "shims/is-hotkey.js"),
  });

  return {
    ...config,
    resolve: {
      ...config.resolve,
      alias: aliases,
    },
  };
}

export default defineCliConfig({
  api: {
    projectId: "y716vocf",
  },
  vite: withMediaHotkeyFix,
  graphql: [
    {
      workspace: "production-workspace",
      dataset: "production",
      id: "production",
    },
    {
      workspace: "development-workspace",
      dataset: "development",
      id: "development",
    },
  ],
});
