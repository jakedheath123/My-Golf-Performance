import type {Config} from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
};

module.exports = {
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  setupFiles: ['<rootDir>/setupTests.ts'],
  verbose: true,
  preset: "ts-jest",
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest"
  }
};

export default config;
