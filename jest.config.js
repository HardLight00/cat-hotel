// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  moduleNameMapper: {
    "\\.(png|svg|jpg|jpeg)$": "<rootDir>/__mocks__/imageTransformer.js",
    "^@/(.*)$": "<rootDir>/src/$1",
    "@ijl.cli": "<rootDir>/__mocks__/cli.js",
  },
  snapshotSerializers: [
    'enzyme-to-json/serializer'
  ],
  modulePathIgnorePatterns: [
    "<rootDir>/cypress/"
  ]
};
