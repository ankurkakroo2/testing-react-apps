module.exports = {
  roots: ["<rootDir>/src"],
  verbose: true,
  testPathIgnorePatterns: ["/node_modules/"],
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
  }
};
