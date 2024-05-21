const createTransform = require("tailwindcss-multiple-classes");

/**
 * @type {import('postcss').PluginCreator}
 */
module.exports = ({
  separator = ",",
  opBracket = "(",
  clBracket = ")",
} = {}) => {
  const transformMultipleClasses = createTransform({
    separator,
    opBracket,
    clBracket,
  });

  return {
    postcssPlugin: "postcss-tailwindcss-multiple-classes",
    Once(root) {
      root.walkAtRules((atrule) => {
        if (atrule.name === "apply") {
          atrule.params = transformMultipleClasses(atrule.params);
        }
      });
    },
  };
};

module.exports.postcss = true;
