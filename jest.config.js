module.exports = {
  // Автоматически очищать моки между тестами
  clearMocks: true,
  
  // Указываем директорию для покрытия кода
  collectCoverageFrom: [
    'controllers/**/*.js',
    'middleware/**/*.js',
    'models/**/*.js',
    'routes/**/*.js',
    'utils/**/*.js'
  ],
  
  // Директория с отчетами о покрытии
  coverageDirectory: 'coverage',
  
  // Расширенный вывод отчета 
  verbose: true,
  
  // Показывать индивидуальный результат для каждого теста
  testLocationInResults: true,
  
  // Показать вывод консоли в тестах
  silent: false,
  
  // Добавляем настройки для покрытия тестами
  coverageThreshold: {
    global: {
      statements: 50,
      branches: 40,
      functions: 40,
      lines: 50,
    },
  },
  
  // Игнорировать определенные файлы при расчете покрытия
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/__tests__/'
  ],
  
  // Максимальное время выполнения теста (в миллисекундах)
  testTimeout: 30000,
  
  // Запускать тесты в параллельных потоках
  maxWorkers: '50%',
  
  // Мониторинг изменений файлов и автозапуск тестов
  watchPathIgnorePatterns: ['/node_modules/', '/dist/', '/coverage/'],
  
  // Генерация отчета о покрытии в формате JSON для SonarQube
  coverageReporters: ["lcov", "text", "clover", "json"],
  
  // Настройка Jest для тестирования Express приложений
  testEnvironment: 'node',
  
  // Добавляем reporter для более наглядного отображения
  reporters: [
    'default',
    ['./node_modules/jest-html-reporter', {
      'pageTitle': 'Отчет о тестировании',
      'outputPath': 'test-report.html',
      'includeFailureMsg': true
    }],
    // Добавляем JUnit репортер для CI/CD систем
    ['jest-junit', {
      outputDirectory: './reports/junit',
      outputName: 'jest-junit.xml',
    }]
  ],

  // Настройка для SonarQube
  testResultsProcessor: "jest-sonar-reporter",

  // Корневые директории для тестов
  roots: [
    '<rootDir>/__tests__'
  ],

  // Шаблон для поиска тестов
  testMatch: [
    '**/__tests__/**/*.test.js'
  ],

  // Обнаружение открытых дескрипторов
  detectOpenHandles: true,

  // Принудительное завершение тестов
  forceExit: true
};

// npm run test:coverage