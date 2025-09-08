document.addEventListener("DOMContentLoaded", () => {
  // 获取 hash 路由并加载对应页面
  const section = window.location.hash.slice(1) || 'about'; // 默认加载 'about'
  showSection(section); // 加载该页面内容

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

// 加载指定的页面内容
function showSection(sectionId) {
  const contentEl = document.getElementById('content');
  
  // 添加loading类触发淡出动画
  contentEl.classList.add('loading');
  
  // 延迟一小段时间让动画开始
  setTimeout(() => {
    fetch(`sections/${sectionId}.html`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        return response.text();
      })
      .then(html => {
        contentEl.innerHTML = html; // 插入页面内容
        
        // 移除loading类并添加loaded类触发淡入动画
        contentEl.classList.remove('loading');
        contentEl.classList.add('loaded');
        
        // 清理loaded类
        setTimeout(() => {
          contentEl.classList.remove('loaded');
        }, 250);
        
        restoreScrollPosition(sectionId); // 恢复滚动位置
      })
      .catch(err => {
        contentEl.innerHTML = `
          <div style="text-align: center; padding: 60px 20px; color: #e74c3c;">
            <i class="fas fa-exclamation-triangle" style="font-size: 3rem; margin-bottom: 20px;"></i>
            <h2 style="margin-bottom: 15px;">页面加载失败</h2>
            <p style="margin-bottom: 25px;">无法加载 "${sectionId}" 页面内容</p>
            <button onclick="showSection('${sectionId}')" style="
              background: #4CAF50; 
              color: white; 
              border: none; 
              padding: 12px 24px; 
              border-radius: 6px; 
              cursor: pointer;
              font-size: 1rem;
              transition: all 0.3s ease;
            " onmouseover="this.style.background='#45a049'" onmouseout="this.style.background='#4CAF50'">
              重试加载
            </button>
          </div>
        `;
        contentEl.classList.remove('loading');
        console.error("加载失败：", err);
      });
  }, 120); // 120ms延迟让淡出动画进行
}

// 恢复滚动位置
function restoreScrollPosition(sectionId) {
  const lastScroll = localStorage.getItem(sectionId + '-scrollPosition');
  if (lastScroll) {
    setTimeout(() => {
      window.scrollTo(0, lastScroll); // 延迟恢复，确保内容已渲染
    }, 0);
  }
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
