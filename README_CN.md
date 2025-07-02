
# 现代学术个人主页模板

一个**零依赖**、**配置驱动**、**易于维护**的个人主页模板，专为研究人员、学者和学生设计。只需一键即可部署到 GitHub Pages。

👉 **[在线演示](https://your-github-username.github.io/your-repo-name/)** _(请替换为你的实际链接)_

---

## ✨ 特性

- **配置驱动**：通过修改 `config.js` 即可轻松更改所有个人信息、链接和页面部分。
- **模块化内容**：每个部分作为独立的 HTML 文件存放在 `/sections/` 目录下。
- **单页体验**：异步加载实现页面平滑切换，无需页面刷新。
- **暗黑模式**：内置可切换的亮色/暗色主题，自动记住用户偏好。
- **无需构建**：纯 HTML/CSS/JS，无框架、无依赖。下载即可使用。
- **桌面优先设计**：为桌面浏览优化，移动端通过缩放展示完整布局（不进行重排）。
- **稳健 UI**：缺失图片会自动显示占位符，防止布局错位。

---

## 📁 项目结构

```
PROJECT_ROOT/
├── assets/
│   ├── css/
│   │   └── style.css         # 主样式表
│   ├── files/
│   │   └── (例如 cv.pdf)     # 简历或其他可下载文件
│   ├── img/
│   │   └── (例如 profile.jpg) # 头像和项目图片
│   └── js/
│       ├── config.js         # ★ 核心配置：你的数据和链接
│       ├── app.js            # 将数据应用到 DOM
│       ├── router.js         # 处理 SPA 导航
│       └── main.js           # 主题切换、初始化
├── sections/
│   ├── about.html
│   ├── awards.html
│   ├── projects.html
│   └── ... (其他页面)
├── index.html                # 入口文件
├── README.md                 # 英文说明
└── README_CN.md              # 中文版说明
```

---

## 🚀 快速开始

1. **Fork 或下载** 本仓库。
2. **启用 GitHub Pages**：
   - 打开你的仓库 → `Settings` → `Pages`
   - 在 `Build and deployment` 下选择：
     - Source: `Deploy from a branch`
     - Branch: `main`
     - Folder: `/ (root)`
   - 点击 `Save`。几分钟后，你的主页将上线：
     ```
     https://<your-username>.github.io/<your-repo-name>/
     ```
3. **开始自定义**：
   - 修改 `assets/js/config.js` 配置你的个人信息和链接
   - 编辑 `sections/*.html` 内容文件

---

## 🛠️ 核心自定义

**只需编辑 `assets/js/config.js` 和 `sections/` 文件夹即可完成个性化定制。**

### 1. 基本个人信息

打开 `assets/js/config.js`：

```js
const config = {
  profile: {
    name: "Your Name",              // 你的名字
    photo: "assets/img/profile.jpg" // 你的头像
  },
  contact: [
    {
      name: "Email",
      icon: "fas fa-envelope",
      url: "mailto:you@example.com"
    },
    {
      name: "GitHub",
      icon: "fab fa-github",
      url: "https://github.com/yourusername",
      target: "_blank"
    },
    {
      name: "LinkedIn",
      icon: "fab fa-linkedin",
      url: "https://linkedin.com/in/yourprofile",
      target: "_blank"
    }
  ]
}
```

> 🔧 你可以使用 [Font Awesome 图标](https://fontawesome.com/search?m=free) 增加更多链接。

### 2. 导航栏

例如新增“教学”页面：

**步骤 1：添加导航项**

```js
navigation: [
  { name: "About Me", section: "about" },
  { name: "Research", section: "research" },
  { name: "Teaching", section: "teaching" },  // 新增项
  { name: "Projects", section: "projects" }
]
```

**步骤 2：创建新文件**  
新建 `sections/teaching.html` 文件，填入内容：

```html
<section>
  <h1>Teaching</h1>
  <ul>
    <li><strong>Course A 助教</strong>，大学名称，2023 秋季学期</li>
    <li><strong>Course B 助教</strong>，大学名称，2024 春季学期</li>
  </ul>
</section>
```

---

### 3. 编辑页面内容 & 添加图片

- 用基本 HTML 编辑 `sections/*.html`：`<h1>`、`<p>`、`<ul>`、`<img>` 等。
- 图片放入 `assets/img/`。
- 使用如下标签插入图片：

```html
<img src="assets/img/my-project.jpg" alt="项目截图">
```

---

## 💡 小贴士

- ⚠️ 不要添加移动端专用布局代码。本模板设计为桌面缩放到移动端。
- 所有样式集中在 `assets/css/style.css`
- 无框架，纯 HTML + CSS + JS

---

## 许可协议

本项目基于 MIT 协议，免费使用和修改。
