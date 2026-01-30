import { pluginPromise } from "../plugins";
import type { TypedFlatConfigItem } from "../types";

export const promise = (): TypedFlatConfigItem[] => [
  {
    name: "rayxiom/promise/setup",
    plugins: {
      promise: pluginPromise,
    },
  },
  {
    name: "rayxiom/promise/rules",
    rules: { "promise/param-names": "error" },
  },
];
