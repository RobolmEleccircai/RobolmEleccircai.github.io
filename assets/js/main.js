function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  
  // 更新按钮图标
  updateThemeIcon(isDark);
}

function updateThemeIcon(isDark) {
  const themeIcon = document.querySelector('.toggle-theme i');
  if (themeIcon) {
    if (isDark) {
      themeIcon.className = 'fas fa-sun'; // 暗色模式显示太阳图标
    } else {
      themeIcon.className = 'fas fa-moon'; // 亮色模式显示月亮图标
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem('theme');
  const isDark = savedTheme === 'dark';
  
  if (isDark) {
    document.body.classList.add('dark-mode');
  }
  
  // 设置正确的图标
  updateThemeIcon(isDark);
});
