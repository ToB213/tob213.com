module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/CNAME");

  eleventyConfig.addCollection("work", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/work/*.md")
      .filter((item) => item.inputPath !== "./src/work/index.md")
      .filter((item) => item.data.work)
      .sort((a, b) => {
        const aOrder = a.data.work.order ?? 0;
        const bOrder = b.data.work.order ?? 0;

        if (aOrder !== bOrder) {
          return bOrder - aOrder;
        }

        return a.data.title.localeCompare(b.data.title, "ja");
      });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
