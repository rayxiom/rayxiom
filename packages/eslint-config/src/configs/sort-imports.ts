import type { TypedFlatConfigItem } from "../types";

export const sortImports = (): TypedFlatConfigItem[] => [
  {
    name: "rayxiom/sort-imports/rules",
    rules: {
      "rayxiom/sort-imports": "error",
      "rayxiom/sort-exports": "error",
    },
  },
];
