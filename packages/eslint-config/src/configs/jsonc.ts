import { GLOB_ESLINTRC, GLOB_JSON, GLOB_JSON5, GLOB_JSONC } from "../globs";
import type { TypedFlatConfigItem } from "../types";
import { interopDefault } from "../utils";

export async function jsonc(): Promise<TypedFlatConfigItem[]> {
  const pluginJsonc = await interopDefault(import("eslint-plugin-jsonc"));

  return [
    {
      name: "rayxiom/jsonc/setup",
      plugins: {
        jsonc: pluginJsonc,
      },
    },
    {
      name: "rayxiom/jsonc/rules",
      files: [GLOB_JSON, GLOB_JSON5, GLOB_JSONC, GLOB_ESLINTRC],
      language: "jsonc/x",
      // @keep-sorted
      rules: {
        ...(pluginJsonc.configs.base.overrides[0].rules as any),
        ...(pluginJsonc.configs["recommended-with-jsonc"].rules as any),
        "jsonc/no-octal-escape": "error",
        "jsonc/quotes-props": "off",
        "jsonc/quotes": "off",
      },
    },
  ];
}
