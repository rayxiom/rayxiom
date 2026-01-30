import createCommand from "eslint-plugin-command/config";

import type { TypedFlatConfigItem } from "../types";

export const command = async (): Promise<TypedFlatConfigItem[]> => [
  {
    ...createCommand(),
    name: "rayxiom/command",
  },
];
