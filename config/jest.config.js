module.exports = {
  rootDir: "../",
  verbose: true,
  moduleDirectories: ["node_modules"],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  // setupFilesAfterEnv: ["<rootDir>/config/jest.setup.js"],
  testPathIgnorePatterns: ["/node_modules/"],
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50
    },
    "./src/components/": {
      branches: 80,
      statements: 80
    }
  },
  testMatch: ["<rootDir>/src/**/*.test.js"],
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  coveragePathIgnorePatterns: ["/node_modules/"],
  coverageReporters: ["lcov", "json", "text-summary"],
  transform: {
    "\\.(js|jsx)?$": "babel-jest"
  },
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/src/styleMock.js"
  }
};
