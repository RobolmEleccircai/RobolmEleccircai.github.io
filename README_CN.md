[English Version](README.md)

---

# 现代化学术个人主页模板

一个零依赖、配置驱动、易于维护的现代化个人主页。专为学者、研究人员和学生设计，可一键部署到 GitHub Pages。

**[查看 Demo](https://your-github-username.github.io/your-repo-name/)**  _(请替换为你的链接)_

## ✨ 项目特色

- **配置驱动**: 在 `config.js` 文件中修改个人信息、链接和导航，无需接触复杂HTML。
- **内容模块化**: 每个页面的内容都存放在独立的 `sections/*.html` 文件中，管理清晰。
- **单页应用体验**: 异步加载页面内容，切换流畅，无需刷新。
- **暗黑模式**: 内置一键切换的暗黑/明亮主题，并能记忆用户选择。
- **无需编译**: 纯 HTML/CSS/JS，无任何依赖，下载即用。
- **桌面优先布局**: 专为桌面端优化，移动端通过缩放保持布局一致，确保内容不变形。
- **容错设计**: 当图片等资源缺失时，会自动显示占位图，避免页面错乱。

---

## 🚀 快速上手

1. **Fork 或下载**: Fork 本仓库到你的 GitHub 账户，或直接下载 ZIP 压缩包到本地。
2. **（推荐）开启 GitHub Pages**:
   - 在你的仓库页面，点击 `Settings` -> `Pages`。
   - 在 `Build and deployment` 下，将 `Source` 设置为 `Deploy from a branch`。
   - 将 `Branch` 设置为 `main`，文件夹保持 `/ (root)`，然后点击 `Save`。
   - 几分钟后，你的个人主页就可以通过 `https://<你的用户名>.github.io/<仓库名>/` 访问了。
3. **开始定制**: 根据下面的指南修改内容，然后提交 (commit & push) 到你的仓库即可看到更新。

---

## 🛠️ 核心定制指南

**核心理念：你几乎所有的修改都将在 `assets/js/config.js` 和 `sections/` 文件夹中进行。**

### 1. 修改基础信息（头像、名字、侧边栏链接）

所有这些信息都在 **`assets/js/config.js`** 文件中控制。

```javascript
const config = {
    // 个人资料
    profile: {
      name: "Your Name", // 在这里修改你的名字
      photo: "assets/img/profile.jpg", // 你的头像路径
    },

    // 侧边栏的联系方式和文件链接
    contact: [
      {
        name: "Email",
        icon: "fas fa-envelope",
        url: "mailto:your@email.com",
      },
      // ... 其他链接
    ],
    // ...
};
```

- **修改名字**: 直接修改 `profile.name` 的值。
- **更换头像**: 将你的头像图片（如 `my-photo.png`）放入 `assets/img/` 文件夹，然后将 `profile.photo` 的路径修改为 `"assets/img/my-photo.png"`。
- **修改简历**: 将你的简历 PDF 文件放入 `assets/files/` 文件夹，然后更新 `contact` 数组中 CV 条目的 `url`。

### 2. 如何在侧边栏增加一个新链接？ (例如：领英)

1. 打开 **`assets/js/config.js`** 文件。
2. 在 `contact` 数组中，仿照现有格式添加一个新的对象。
3. 你可以在 [Font Awesome 官网](https://fontawesome.com/search?m=free) 寻找你需要的免费图标。

**示例：添加领英 (LinkedIn) 链接**

```javascript
// ...
contact: [
  // ... 已有链接
  {
    name: "GitHub",
    icon: "fab fa-github",
    url: "https://github.com/yourgithub",
    target: "_blank",
  },
  // 在这里添加新的一行
  {
    name: "LinkedIn",
    icon: "fab fa-linkedin", // 从 Font Awesome 找到的图标
    url: "https://www.linkedin.com/in/yourprofile", // 你的领英链接
    target: "_blank", // 在新标签页打开
  },
],
// ...
```

### 3. 如何在顶部导航栏增加一个新页面？ (例如：教学经历)

这是一个两步过程：

**第一步：在 `config.js` 中添加导航条目**

打开 **`assets/js/config.js`**，在 `navigation` 数组中添加一行。`section` 的值将作为 HTML 文件的名字（例如，`teaching` 对应 `teaching.html`）。

```javascript
// ...
navigation: [
    { name: "About Me", section: "about" },
    { name: "Research", section: "research" },
    // 在这里添加新的一行
    { name: "Teaching", section: "teaching" },
    { name: "Projects", section: "projects" },
    // ...
],
//...
```

**第二步：创建对应的 HTML 内容文件**

在 **`sections/`** 文件夹中，创建一个名为 **`teaching.html`** 的新文件，并写入你的内容。你可以从其他 `sections/*.html` 文件中复制基础结构。

**`sections/teaching.html` 文件内容示例：**

```html
<section>
    <h1>教学经历 (Teaching)</h1>
    <p>以下是我的教学和助教经历：</p>
    <ul>
        <li><strong>课程 A 助教</strong>, [大学名称], 2023年秋季</li>
        <li><strong>课程 B 助教</strong>, [大学名称], 2024年春季</li>
    </ul>
</section>
```

**完成！** 提交你的修改，刷新主页，新的“Teaching”链接就会自动出现在导航栏中，并能正确加载内容。

### 4. 如何编辑页面内容和添加图片？

- **编辑文字**: 直接打开 `sections/` 文件夹下对应的 HTML 文件（如 `about.html`, `projects.html`）进行修改。你可以使用标准的 HTML 标签，如 `<h2>`, `<p>`, `<ul>`, `<li>`, `<strong>` 等。
- **添加图片**:

  1. 将你的图片文件（如 `my-project-image.jpg`）放入 **`assets/img/`** 文件夹。
  2. 在你想要插入图片的 HTML 文件中（例如 `sections/projects.html`），使用标准的 `<img>` 标签。

  **示例：在项目中添加图片**

  ```html
  <h2>1. 智能家居中心</h2>
  <p>项目描述...</p>
  <!-- 在这里插入图片 -->
  <img src="assets/img/my-project-image.jpg" alt="智能家居中心演示图">
  ```
