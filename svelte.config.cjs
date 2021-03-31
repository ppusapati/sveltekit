const sveltePreprocess = require("svelte-preprocess");
const node = require("@sveltejs/adapter-node");
const pkg = require("./package.json");
const path = require("path");
/** @type {import('@sveltejs/kit').Config} */
module.exports = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess(),
  kit: {
    // By default, `npm run build` will create a standard Node app.
    // You can create optimized builds for different platforms by
    // specifying a different adapter
    adapter: node(),

    vite: {
      build: {
        lib: { entry: path.resolve(__dirname, "lib/index.ts"), name: "Icon", formats: "es" | "cjs" },
        outDir: "dist",
      },
      ssr: {
        noExternal: Object.keys(pkg.dependencies || {}),
      },
    },
  },
};
