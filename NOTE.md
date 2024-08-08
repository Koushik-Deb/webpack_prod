1. npx webpack --mode=production/development

2. Default config - webpack.config.js in root

   const path = require("path");
   const config = {
   entry: "./src/index.js",
   output: {
   path: path.resolve(\_\_dirname, "dist"),
   filename: "main.js",
   },
   mode: "production",
   };

   module.exports = config;

3. Seperated common code to different webpack config.
   - Merged with webpack-merge
4. Added webpack-dev-server
