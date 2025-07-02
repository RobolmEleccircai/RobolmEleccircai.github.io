# 个人学术主页项目

欢迎使用基于 GitHub Pages 的个人学术主页项目。

## 项目简介

这是一个模块化、便于维护的个人主页项目，适合用于展示学术和职业信息。功能包括：

- 通过 JavaScript 动态加载内容
- 支持暗黑模式切换，提升阅读体验
- 缺失资源自动使用占位图，保证页面完整
- 结构清晰的文件夹与文件布局，方便后期维护

## 目录结构


your-project/

├── index.html              # 主页面，包含侧边栏和导航

├── assets/

│   ├── css/

│   │   └── style.css       # 样式文件（含暗黑模式样式）

│   ├── js/

│   │   ├── main.js         # 主要脚本（暗黑模式切换等）

│   │   └── router.js       # 路由脚本（动态加载页面内容）

│   ├── img/

│   │   ├── profile.jpg     # 头像图片（请替换）

│   │   ├── cycling.jpg     # 兴趣图片（可选）

│   │   └── photography.jpg # 兴趣图片（可选）

│   └── files/

│       └── cv.pdf          # 简历 PDF 文件（请替换）

├── sections/

│   ├── about.html          # 关于我 内容

│   ├── research.html       # 研究与发表 内容

│   ├── projects.html       # 项目 内容

│   ├── awards.html         # 奖项 内容

│   ├── hobbies.html        # 兴趣爱好 内容

│   └── blogs.html          # 博客 内容


## 使用说明

- 直接打开 `index.html` 或部署到 GitHub Pages
- 通过侧边栏或导航栏切换不同页面内容
- 点击右上角月亮图标切换暗黑模式
- 替换 `assets/img` 和 `assets/files` 中的占位文件为你的素材

## 注意事项

- 确保所有引用图片存在，否则会显示占位图
- 修改 `sections/` 目录下对应 HTML 文件以填写个人信息
- 样式和脚本均模块化存放于 `assets/`，方便维护

---

如果你想阅读英文版本，请点击 [English Version](README.md)。
