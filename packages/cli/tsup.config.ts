import fs from "fs-extra";
import path from "path";
import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  dts: true,
  entry: ["src/index.ts"],
  format: ["esm"],
  sourcemap: true,
  minify: true,
  target: "esnext",
  outDir: "dist",
  treeshake: true,
  onSuccess: async () => {
    // Copy templates to dist folder
    const templatesSource = path.resolve("../templates/src");
    const templatesDestination = path.resolve("dist/templates");

    try {
      fs.copySync(templatesSource, templatesDestination);
      console.log("✅ Templates copied to dist/templates");
    } catch (error) {
      console.error("❌ Failed to copy templates:", error);
    }
  },
});
