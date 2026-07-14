// Экспортируем функцию useTheme — она будет управлять темой сайта
export const useTheme = () => {
  // Находим элемент, к которому будем применять тему (в данном случае — body)
  const themeTarget = document.body;

  // Находим переключатель темы по атрибуту data-theme-swither (например, наш чекбокс)
  const themeSwitcher = document.querySelector('[data-theme-swither]');

  // Проверяем, существует ли переключатель
  if (!themeSwitcher) {
    console.warn('Переключатель темы не найден на странице');
    return; // Если не найден — выходим из функции
  }

  // Проверяем, сохранена ли предыдущая тема в localStorage
  if (localStorage.getItem('theme') === 'dark') {
    // Если тема была "dark", устанавливаем её и ставим галочку на чекбоксе
    themeTarget.setAttribute('data-theme', 'dark');
    themeSwitcher.checked = true;
  } else {
    // Иначе явно устанавливаем светлую тему
    themeTarget.setAttribute('data-theme', 'light');
    themeSwitcher.checked = false;
  }

  // Добавляем обработчик события изменения состояния чекбокса
  themeSwitcher.addEventListener('change', () => {
    // Проверяем текущее состояние чекбокса
    if (themeSwitcher.checked) {
      // Если чекбокс активен — устанавливаем dark-тему
      themeTarget.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark'); // Сохраняем тему в localStorage
    } else {
      // Если чекбокс не отмечен — устанавливаем light-тему
      themeTarget.setAttribute('data-theme', 'light');
      localStorage.removeItem('theme'); // Убираем тему из localStorage
    }
  });
};
