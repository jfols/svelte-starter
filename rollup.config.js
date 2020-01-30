import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import buble from "@rollup/plugin-buble";
import commonjs from "@rollup/plugin-commonjs";
import postcssImport from "postcss-import";
import postcss from "rollup-plugin-postcss";
import cssnano from "cssnano";
import autoprefixer from "autoprefixer";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";

import tailwind from "tailwindcss";
import purgecss from "@fullhuman/postcss-purgecss";
import { terser } from "rollup-plugin-terser";

const removeUnusedCss = purgecss({
  // Specify the paths to all of the template files in your project
  content: ["./public/**/*.html", "./src/**/*.html", "./src/**/*.svelte"],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

const production = !process.env.ROLLUP_WATCH;

console.log("is prod:", production);
export default {
  input: "src/main.js",
  output: {
    sourcemap: true,
    format: "iife",
    name: "app",
    compact: true,
    file: production ? "dist/bundle.js" : "public/bundle.js"
  },
  plugins: [
    svelte({
      // enable run-time checks when not in production
      dev: !production,
      emitCss: true,
      // we'll extract any component CSS out into
      // a separate file — better for performance
      css: css => {
        css.write(production ? "dist/bundle.css" : "public/bundle.css");
      }
    }),

    postcss({
      plugins: [
        postcssImport,
        autoprefixer,
        tailwind(),
        production && removeUnusedCss,
        cssnano()
      ].filter(Boolean),
      extract: production ? "dist/bundle.css" : "public/bundle.css"
    }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration —
    // consult the documentation for details:
    // https://github.com/rollup/rollup-plugin-commonjs
    resolve({
      browser: true,
      dedupe: importee =>
        importee === "svelte" || importee.startsWith("svelte/")
    }),
    commonjs(),
    buble({
      transforms: { forOf: false }
    }),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser(),
    !production && serve("public"),
    !production && livereload()
  ],
  watch: {
    clearScreen: true
  }
};
