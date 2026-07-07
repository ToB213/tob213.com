module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addPassthroughCopy({ "src/blog/images": "blog/images" });

  eleventyConfig.addFilter("dateIso", function (date) {
    return date.toISOString().slice(0, 10);
  });

  eleventyConfig.addFilter("dateDisplay", function (date) {
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const day = String(date.getUTCDate()).padStart(2, "0");
    return `${year}.${month}.${day}`;
  });

  eleventyConfig.addCollection("blog", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/blog/*.md")
      .filter((item) => item.inputPath !== "./src/blog/index.md")
      .sort((a, b) => b.date - a.date);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
