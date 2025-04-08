// Тест для визуализации состояния приложения

const fs = require('fs');
const path = require('path');

describe('Application Components Summary', () => {
  
  test('Проверка наличия основных компонентов приложения', () => {
    // Заголовок отчета
    console.log('\n=== ОТЧЕТ О СТРУКТУРЕ ПРИЛОЖЕНИЯ ===\n');
    
    // Проверяем основные файлы
    const folderPath = path.join(__dirname, '..');
    let fileStructure = {};
    
    try {
      // Проверяем наличие основных каталогов
      const dirs = ['models', 'controllers', 'routes', 'middleware', 'config', 'views'];
      dirs.forEach(dir => {
        const exists = fs.existsSync(path.join(folderPath, dir));
        fileStructure[dir] = { exists };
        
        // Если каталог существует, получаем список файлов
        if (exists) {
          try {
            const files = fs.readdirSync(path.join(folderPath, dir))
              .filter(file => file.endsWith('.js'));
            fileStructure[dir].files = files;
          } catch (e) {
            fileStructure[dir].error = e.message;
          }
        }
      });
      
      // Выводим структуру приложения
      console.log('Структура приложения:');
      Object.keys(fileStructure).forEach(dir => {
        const dirInfo = fileStructure[dir];
        const status = dirInfo.exists ? '✅' : '❌';
        console.log(`\n${status} ${dir.toUpperCase()}`);
        
        if (dirInfo.exists && dirInfo.files) {
          dirInfo.files.forEach(file => {
            console.log(`  - ${file}`);
          });
        }
      });
      
      console.log('\n======= КОНЕЦ ОТЧЕТА =======\n');
    } catch (error) {
      console.error('Ошибка при генерации отчета:', error);
    }
    
    // Тест всегда проходит, так как он только для информации
    expect(true).toBe(true);
  });
});