module.exports = {
  extends: ["react-app"],
  env: {
    browser: true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module"
  },
  plugins: ["@typescript-eslint/eslint-plugin", "react"],
  env: {
    browser: true,
    jest: true
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
      },
      webpack: {
        config: "./webpack.config.js"
      }
    }
  }
};
