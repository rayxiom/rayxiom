import fs from "node:fs/promises";

import { builtinRules } from "eslint/use-at-your-own-risk";
import { flatConfigsToRulesDTS } from "eslint-typegen/core";

import { rayxiom } from "../src";

const configs = await rayxiom(
  // @keep-sorted
  {
    astro: true,
    formatting: true,
    html: true,
    jsonc: true,
    mdx: true,
    perfectionist: true,
    pnpm: true,
    solid: true,
    test: true,
    toml: true,
    typescript: true,
    vue: true,
    yaml: true,
  },
).prepend({
  plugins: {
    "": {
      rules: Object.fromEntries(builtinRules.entries()),
    },
  },
});

const configNames = configs.map((i) => i.name).filter(Boolean) as string[];

let dts = await flatConfigsToRulesDTS(configs, {
  includeAugmentation: false,
});

dts += `
// Names of all the configs
export type ConfigNames = ${configNames.map((i) => `'${i}'`).join(" | ")}
`;

await fs.writeFile("src/typegen.d.ts", dts);
