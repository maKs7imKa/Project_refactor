module.exports = {
  clearMocks: true,
  collectCoverageFrom: [
    'controllers/**/*.js',
    'middleware/**/*.js',
    'models/**/*.js',
    'routes/**/*.js',
    'utils/**/*.js'
  ],
  coverageDirectory: 'coverage',
  verbose: true,
  testLocationInResults: true,
  silent: false,
  coverageThreshold: {
    global: {
      statements: 50,
      branches: 40,
      functions: 40,
      lines: 50,
    },
  },
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/__tests__/'
  ],
  testTimeout: 30000,
  maxWorkers: '50%',
  watchPathIgnorePatterns: ['/node_modules/', '/dist/', '/coverage/'],
  coverageReporters: ["lcov", "text", "clover", "json"],
  testEnvironment: 'node',
  reporters: [
    'default',
    ['./node_modules/jest-html-reporter', {
      'pageTitle': 'Отчет о тестировании',
      'outputPath': 'test-report.html',
      'includeFailureMsg': true
    }],
    ['jest-junit', {
      outputDirectory: './reports/junit',
      outputName: 'jest-junit.xml',
    }]
  ],
  testResultsProcessor: "jest-sonar-reporter",
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.js$", // ← Ось зміна
  detectOpenHandles: true,
  forceExit: true
};
