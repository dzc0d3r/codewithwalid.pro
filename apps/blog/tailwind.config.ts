// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import uiConfig from "@codewithwalid/ui/tailwind.config";

const config: Pick<Config, "content" | "presets"> = {
  content: ["./src/app/**/*.tsx"],
  presets: [uiConfig],
};

export default config;
