import { pluginNode } from "../plugins";
import type { TypedFlatConfigItem } from "../types";

export const node = (): TypedFlatConfigItem[] => [
  {
    name: "rayxiom/node/setup",
    plugins: {
      node: pluginNode,
    },
  },
  {
    name: "rayxiom/node/rules",
    // @keep-sorted
    rules: {
      "node/handle-callback-err": ["error", "^(err|error)$"],
      "node/no-callback-literal": "off",
      "node/no-deprecated-api": "error",
      "node/no-exports-assign": "error",
      "node/no-new-require": "error",
      "node/no-path-concat": "error",
      "node/process-exit-as-throw": "error",
    },
  },
];
