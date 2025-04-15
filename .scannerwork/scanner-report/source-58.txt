const { Sequelize } = require('sequelize');

// Создаем мок для Sequelize
jest.mock('sequelize', () => {
  const mockSequelize = {
    authenticate: jest.fn().mockResolvedValue(true),
  };
  
  return {
    Sequelize: jest.fn(() => mockSequelize)
  };
});

describe('Database configuration', () => {
  test('should create Sequelize instance with correct parameters', () => {
    const sequelize = require('../../config/database');
    
    // Проверяем, что объект создан
    expect(sequelize).toBeDefined();
    
    // Проверяем, что конструктор Sequelize был вызван
    expect(Sequelize).toHaveBeenCalledWith(
      'refactor', 
      'root', 
      '2005', 
      expect.objectContaining({
        host: 'localhost',
        dialect: 'mysql',
        logging: false
      })
    );
  });
});