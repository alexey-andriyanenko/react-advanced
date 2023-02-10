/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  coverageProvider: "v8",
  moduleDirectories: ["node_modules", "src"],
  moduleFileExtensions: ["js", "ts", "tsx"],
  testMatch: ["<rootDir>/**/*.spec.(ts|tsx)"],
  rootDir: "./src",
  roots: ["<rootDir>"],
  preset: "ts-jest",
  testEnvironment: "node",
};
