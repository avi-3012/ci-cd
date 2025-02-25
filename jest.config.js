module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testPathIgnorePatterns: [
      '/node_modules/',
      '/build/',
      '__mocks__'
    ],
    moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/src/__mocks__/fileMock.js',
      "\\.(css|less|scss|sass)$": "<rootDir>/src/__mocks__/styleMock.js"
    },
    collectCoverageFrom: [
      'src/**/*.{js,jsx}',
      '!src/index.jsx',
      '!src/serviceWorker.js'
    ],
    moduleFileExtensions: ["js", "jsx"],
    transform: {
      "^.+\\.[t|j]sx?$": "babel-jest"
    }
  };