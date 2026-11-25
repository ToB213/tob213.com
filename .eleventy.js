module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addPassthroughCopy({
    "src/images/default_ogp.jpg": "images/default_ogp.jpg",
  });

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
