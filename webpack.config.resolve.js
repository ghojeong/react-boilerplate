const path = require("path");

module.exports = {
  extensions: [".ts", ".tsx", ".js", ".jsx"],
  modules: [path.resolve(__dirname, "src"), "node_modules"],
  alias: { "react-dom": "@hot-loader/react-dom" }
};
