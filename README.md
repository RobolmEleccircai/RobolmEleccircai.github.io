
# Modern Academic Personal Homepage Template

👉 **[中文版说明 →](README_CN.md)** _(Please replace with your actual link)_

## ✨ Features

- **Config-Driven**: Easily modify all personal info, links, and page sections from `config.js`.
- **Modular Content**: Each section is written as an independent HTML file under `/sections/`.
- **Single-Page Experience**: Smooth page transitions using asynchronous loading, no reloads.
- **Dark Mode**: Built-in toggleable light/dark theme, remembers user preferences.
- **No Build Required**: Pure HTML/CSS/JS, no frameworks or dependencies. Just download and go.
- **Desktop-First Design**: Optimized for desktop viewing; mobile users will see the full layout via scaling (not reflow).
- **Fail-Safe UI**: Missing images automatically show fallback placeholders to prevent layout breakage.

## 📁 Project Structure

```
PROJECT_ROOT/
├── assets/
│   ├── css/
│   │   └── style.css         # Main stylesheet
│   ├── files/
│   │   └── (e.g. cv.pdf)     # Your resume and downloadable files
│   ├── img/
│   │   └── (e.g. profile.jpg) # Profile picture and project images
│   └── js/
│       ├── config.js         # ★ Core configuration: your data & links
│       ├── app.js            # Applies data to DOM
│       ├── router.js         # Handles SPA-like navigation
│       └── main.js           # Theme switch, initialization
├── sections/
│   ├── about.html
│   ├── awards.html
│   ├── projects.html
│   └── ... (other pages)
├── index.html                # Entry point
├── README.md                 # English README
└── README_CN.md              # Chinese README
```

## 🚀 Quick Start

1. **Fork or Download** this repository.
2. **Enable GitHub Pages**:
   - Go to your repo → `Settings` → `Pages`
   - Under `Build and deployment`, choose:
     - Source: `Deploy from a branch`
     - Branch: `main`
     - Folder: `/ (root)`
   - Click `Save`. In a few minutes, your homepage will be live at:
     ```
     https://<your-username>.github.io/<your-repo-name>/
     ```
3. **Start Customizing**:
   - Modify `assets/js/config.js` for your profile & links
   - Edit content in `sections/*.html`

## 🛠️ Core Customization

**Edit only `assets/js/config.js` and `sections/` to personalize your site.**

### 1. Basic Profile Info

Open `assets/js/config.js`:

```js
const config = {
  profile: {
    name: "Your Name",              // Your name
    photo: "assets/img/profile.jpg" // Your profile image
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

> 🔧 You can add more links using [Font Awesome Icons](https://fontawesome.com/search?m=free)

### 2. Navigation Bar

To add a new section like “Teaching”:

**Step 1: Add to navigation**

```js
navigation: [
  { name: "About Me", section: "about" },
  { name: "Research", section: "research" },
  { name: "Teaching", section: "teaching" },  // New item
  { name: "Projects", section: "projects" }
]
```

**Step 2: Create a new file**
Create `sections/teaching.html` with your content:

```html
<section>
  <h1>Teaching</h1>
  <ul>
    <li><strong>Course A TA</strong>, University Name, Fall 2023</li>
    <li><strong>Course B TA</strong>, University Name, Spring 2024</li>
  </ul>
</section>
```

### 3. Editing Page Content & Adding Images

- Edit `sections/*.html` with basic HTML: `<h1>`, `<p>`, `<ul>`, `<img>`, etc.
- Place your images in `assets/img/`
- Use image tags like:

```html
<img src="assets/img/my-project.jpg" alt="Project Screenshot">
```

## 💡 Tips

- ⚠️ Avoid putting mobile-specific layout code. This template scales down desktop layout on mobile (by design).
- All styles are in `assets/css/style.css`
- No frameworks. Pure HTML + CSS + JS

## License

This project is licensed under the MIT License. Free to use and modify.
