
# Modern Academic Personal Homepage Template

👉 **[中文版说明 →](README_CN.md)** _(Please replace with your actual link)_

## ✨ Features

- **Config-Driven**: Easily modify all personal info, links, and page sections from `config.js`.
- **Modular Content**: Each section is written as an independent HTML file under `/sections/`.
- **Smooth Animations**: GPU-accelerated page transitions with fade-in/fade-out effects.
- **Unified Card Layout**: Modern card-based design across all sections with hover effects and gradients.
- **Dark Mode**: Built-in toggleable light/dark theme with dynamic icon switching, remembers user preferences.
- **Performance Optimized**: GPU acceleration, will-change hints, and optimized CSS for 60fps animations.
- **Interactive Elements**: Hover effects, tech tags, skill badges, and smooth micro-interactions.
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
│   ├── about.html             # Personal info with card layout
│   ├── research.html          # Research projects with tech tags
│   ├── projects.html          # Project showcase with enhanced cards
│   ├── awards.html            # Awards and certifications
│   ├── hobbies.html           # Hobbies with skill badges
│   └── blogs.html             # Blog section (coming soon)
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

## 🎨 UI Components

### Card Layouts
The template now uses unified card layouts across all sections:
- **Info Cards** (`about.html`): Personal information in organized cards
- **Research Cards** (`research.html`): Research projects with tech tags
- **Award Cards** (`awards.html`): Achievements with icons and details
- **Hobby Cards** (`hobbies.html`): Hobbies with skill badges

### Interactive Elements
- **Tech Tags**: Colorful badges for technologies and skills
- **Hover Effects**: Cards lift up with enhanced shadows on hover
- **Progress Bars**: Top green gradient bars appear on hover
- **Dark Mode**: Seamless theme switching with icon changes

### Example Card Structure
```html
<div class="info-card">
  <h2>Card Title</h2>
  <p>Your content here...</p>
</div>

<div class="research-card">
  <h2>Research Title</h2>
  <div class="tech-stack">
    <span class="tech-tag">Technology</span>
    <span class="tech-tag">Framework</span>
  </div>
  <p>Description...</p>
</div>
```

## 💡 Tips

- ⚠️ Avoid putting mobile-specific layout code. This template scales down desktop layout on mobile (by design).
- All styles are in `assets/css/style.css`
- No frameworks. Pure HTML + CSS + JS

## License

This project is licensed under the MIT License. Free to use and modify.
