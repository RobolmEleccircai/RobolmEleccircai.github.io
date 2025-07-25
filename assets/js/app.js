document.addEventListener("DOMContentLoaded", () => {
  // 检查 config.js 是否加载成功
  if (typeof config === "undefined") {
    console.error("错误：config.js 文件未加载或 config 对象不存在。");
    return;
  }

  // 恢复页面滚动位置
  const currentSection = window.location.hash.slice(1) || 'about'; // 获取当前页面ID
  const savedScrollPosition = localStorage.getItem(currentSection + '-scrollPosition');
  if (savedScrollPosition) {
    window.scrollTo(0, savedScrollPosition); // 恢复滚动位置
  }

  // 监听页面滚动，保存当前滚动位置
  window.addEventListener("beforeunload", () => {
    localStorage.setItem(currentSection + '-scrollPosition', window.scrollY); // 保存滚动位置
  });

  // 填充个人资料
  const profileContainer = document.getElementById("profile-container");
  if (profileContainer) {
    profileContainer.innerHTML = `
      <div class="profile">
        <img src="${config.profile.photo}" alt="Your Photo" class="profile-pic"
             onerror="this.onerror=null; this.src='https://via.placeholder.com/150?text=No+Profile+Image'; console.warn('⚠️ profile.jpg not found. Showing placeholder.')">
      </div>
      <h2 class="profile-name">${config.profile.name}</h2>
    `;
  }

  // 填充侧边栏链接
  const sidebarLinksList = document.getElementById("sidebar-links-list");
  if (sidebarLinksList) {
    let linksHTML = "";
    config.contact.forEach((link) => {
      const targetAttr = link.target ? `target="${link.target}"` : "";
      linksHTML += `
        <li>
          <a href="${link.url}" ${targetAttr}>
            <i class="${link.icon}"></i> <span>${link.name}</span>
          </a>
        </li>
      `;
    });
    sidebarLinksList.innerHTML = linksHTML;
  }

  // 填充顶部导航栏
  const navbarLinksList = document.getElementById("navbar-links-list");
  if (navbarLinksList) {
    let navHTML = "";
    config.navigation.forEach((navItem, index) => {
      const activeClass = index === 0 ? "active" : "";
      navHTML += `
        <li>
          <a href="#" data-section="${navItem.section}" class="${activeClass}">${navItem.name}</a>
        </li>
      `;
    });
    navbarLinksList.innerHTML = navHTML;
  }
});
