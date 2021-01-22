module.exports = {
  css: ["src/tailwind.css"],
  content: ["client/main.html", "src/**/*.svelte", ],
  output: "public/",
  extractors: [
    {
      extractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
      extensions: ["svelte"],
    },
  ],
};
