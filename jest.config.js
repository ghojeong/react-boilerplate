const { resolve } = require("path");

module.exports = {
  verbose: true,
  testRegex: [".*\\.spec\\.(ts|tsx)$"],
  testPathIgnorePatterns: ["/node_modules/"],
  setupFiles: ["./jest.setup.js"],
  transform: {
    "^.+\\.(ts)x?$": "ts-jest"
  },
  moduleFileExtensions: ["js", "ts", "tsx"],
  moduleDirectories: ["node_modules"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less|scss)$": "<rootDir>/__mocks__/styleMock.js",
    "^app/(.*)$": resolve(__dirname, "./src/app/$1")
  },
  globals: {
    "ts-jest": {
      tsConfig: "./tsconfig.json",
      diagnostics: false
    }
  },
  preset: "ts-jest",
  testMatch: null,
  testEnvironment: "node"
};
