import { pluginOnlyError } from "../plugins";
import type { TypedFlatConfigItem } from "../types";

export const onlyError = (): TypedFlatConfigItem[] => [
  {
    name: "rayxiom/only-error",
    plugins: {
      "only-error": pluginOnlyError,
    },
  },
];
