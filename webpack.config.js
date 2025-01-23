const path = require("path");

module.exports = {
  // Entry point: Where Webpack starts bundling
  entry: "./src/index.js", // Point to your main JS file inside the src folder

  // Output configuration: Where the bundled files will be placed
  output: {
    filename: "bundle.js", // The output file name
    path: path.resolve(__dirname, "dist"), // Output directory (dist folder)
  },

  // Other configurations like loaders, plugins, etc., can be added here
};
