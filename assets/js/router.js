// assets/js/router.js

document.addEventListener("DOMContentLoaded", () => {
  // 如果有 hash 路由，直接加载对应的页面
  const section = window.location.hash.slice(1) || 'about'; // 获取 hash 后的部分，如果没有则默认加载 'about'
  showSection(section); // 显示该页面内容

  // 更新导航栏选中的链接
  updateActiveNavLink(section);

  // 监听导航栏点击事件
  document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const section = e.target.getAttribute("data-section");

      showSection(section); // 加载新页面
      window.location.hash = section; // 更新 hash 值，触发路由变化

      updateActiveNavLink(section); // 更新导航栏选中的链接
    });
  });
});

function showSection(sectionId) {
  fetch(`sections/${sectionId}.html`)
    .then(response => response.text())
    .then(html => {
      document.getElementById('content').innerHTML = html;  // 插入页面内容
      restoreScrollPosition(sectionId); // 加载后恢复滚动位置
    })
    .catch(err => {
      document.getElementById('content').innerHTML = "<p>内容加载失败，请检查文件是否存在。</p>";
      console.error("加载失败：", err);
    });
}

// 恢复滚动位置
function restoreScrollPosition(sectionId) {
  const lastScroll = sessionStorage.getItem(sectionId + '-scrollPosition');
  if (lastScroll) {
    window.scrollTo(0, lastScroll); // 恢复滚动位置
  }

  window.addEventListener('beforeunload', () => {
    sessionStorage.setItem(sectionId + '-scrollPosition', window.scrollY); // 保存滚动位置
  });
}

// 更新导航栏选中的链接
function updateActiveNavLink(sectionId) {
  document.querySelectorAll(".navbar a").forEach(link => {
    link.classList.remove("active"); // 移除所有的 active 类
    if (link.getAttribute("data-section") === sectionId) {
      link.classList.add("active"); // 为当前页面添加 active 类
    }
  });
}
