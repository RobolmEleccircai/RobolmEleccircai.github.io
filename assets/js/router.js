document.addEventListener("DOMContentLoaded", () => {
    function showSection(sectionId) {
      fetch(`sections/${sectionId}.html`)
        .then(res => {
          if (!res.ok) throw new Error('Failed to load ' + sectionId);
          return res.text();
        })
        .then(html => {
          document.getElementById('content').innerHTML = html;
          document.querySelectorAll('.navbar a').forEach(link => link.classList.remove('active'));
          const activeLink = document.querySelector(`.navbar a[data-section="${sectionId}"]`);
          if (activeLink) activeLink.classList.add('active');
        })
        .catch(err => {
          document.getElementById('content').innerHTML = '<p class="error-message">内容加载失败，请检查文件是否存在。</p>';
          console.error(err);
        });
    }
  
    document.querySelectorAll(".navbar a").forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const section = link.dataset.section;
        showSection(section);
      });
    });
  
    showSection('about');
  });
  