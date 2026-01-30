import { rayxiom } from "@rayxiom/eslint-config";
import pluginAntfu from "eslint-plugin-antfu";

export default rayxiom({ pnpm: true }).append({
  name: "tests",
  files: ["**/*.test.ts"],
  plugins: {
    antfu: pluginAntfu,
  },
  rules: {
    "antfu/indent-unindent": "error",
  },
});
