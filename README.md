# 个人学术主页项目

这是一个基于 GitHub Pages 的个人主页项目，支持模块化内容加载、暗黑模式切换以及资源容错。

---

## 目录结构


your-project/

├── index.html               # 主页面，包含侧边栏和导航，动态加载内容

├── assets/

│   ├── css/

│   │   └── style.css        # 样式文件，包含整体和暗黑模式样式

│   ├── js/

│   │   ├── main.js          # 主要脚本（暗黑模式切换等）

│   │   └── router.js        # 路由脚本，动态加载页面内容

│   ├── img/

│   │   ├── profile.jpg      # 头像图片（请自行替换）

│   │   ├── cycling.jpg      # 兴趣图片（可选）

│   │   └── photography.jpg  # 兴趣图片（可选）

│   └── files/

│       └── cv.pdf           # 简历 PDF 文件（请自行替换）

├── sections/

│   ├── about.html           # About Me 内容文件

│   ├── research.html        # Research/Publications 内容文件

│   ├── projects.html        # Projects 内容文件

│   ├── awards.html          # Awards 内容文件

│   ├── hobbies.html         # Hobbies 内容文件

│   └── blogs.html           # Blogs 内容文件


---
## 功能说明

- **模块化内容加载**  
  主页导航栏点击不同选项时，自动从 `sections/` 目录加载对应页面内容，实现无刷新动态切换。

- **暗黑模式切换**  
  点击右上角月亮按钮，可以在明亮模式和暗黑模式间切换，并记忆用户选择。

- **图片资源容错**  
  对头像和兴趣相关图片设置了加载失败自动替换占位图，防止因缺失图片导致页面错乱。

- **统一资源管理**  
  所有样式文件、JavaScript 文件、图片和其他资源统一放置于 `assets/` 文件夹下，便于维护。
---
## 使用指南

1. **克隆或下载仓库**，确保目录结构完整。
2. **替换个人信息**
   - 修改 `index.html` 中的姓名、联系方式等个人信息。
   - 替换 `assets/img/profile.jpg` 及兴趣图片为你的个人照片或相关图片。
   - 更新 `assets/files/cv.pdf` 为你的简历文件。
3. **编辑内容页面**修改 `sections/` 目录下各 `.html` 文件，填入你的个人介绍、科研成果、项目经验等内容。
4. **预览效果**本地可直接打开 `index.html` 预览（建议使用支持 fetch 的浏览器）。上传到 GitHub 并启用 GitHub Pages，即可在线访问个人主页。
5. **故障排查**
   - 确保所有资源路径正确。
   - 缺失图片时，页面会显示占位图和控制台警告。
   - 若内容加载失败，会显示友好错误提示。

---

## 贡献指南

欢迎提交 issue 和 pull request，提出建议或改进。

---

## 许可协议

本项目采用 [MIT 许可证](LICENSE)。

---

感谢使用！
