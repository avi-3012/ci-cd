module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testPathIgnorePatterns: [
      '/node_modules/',
      '/build/'
    ],
    collectCoverageFrom: [
      'src/**/*.{js,jsx}',
      '!src/index.jsx',
      '!src/serviceWorker.js'
    ],
    extensionsToTreatAsEsm: ['.jsx'],
    transform: {
      "^.+\\.[t|j]sx?$": "babel-jest"
    }
  };