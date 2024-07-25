globalThis.ngJest = {
  skipNgcc: true,
  tsconfig: "tsconfig.spec.json",
};

module.exports = {
  preset: "jest-preset-angular",
  globalSetup: "jest-preset-angular/global-setup",
  moduleNameMapper: {
    "@base/(.*)$": "<rootDir>/src/base/$1",
    "@base/": "<rootDir>/src/base/",
    "@data/(.*)$": "<rootDir>/src/data/$1",
    "@data/": "<rootDir>/src/data/",
    "@domain/(.*)$": "<rootDir>/src/domain/$1",
    "@domain/": "<rootDir>/src/domain/",
    "@presentation/(.*)$": "<rootDir>/src/presentation/$1",
    "@presentation/": "<rootDir>/src/presentation/",
  },
  modulePaths: ["<rootDir>"],
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
};
