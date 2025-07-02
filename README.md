[中文版说明](README_CN.md)

---

# Modern Academic Personal Homepage

A zero-dependency, configuration-driven, and easy-to-maintain modern personal homepage. Designed for academics, researchers, and students. Ready to be deployed on GitHub Pages with a single click.

**[Live Demo](https://your-github-username.github.io/your-repo-name/)**  _(Replace with your link)_

## ✨ Features

- **Configuration-Driven**: Edit your personal info, links, and navigation in a single `config.js` file without touching complex HTML.
- **Modular Content**: Each page's content is stored in a separate `sections/*.html` file for clean management.
- **SPA-like Experience**: Asynchronously loads page content for a smooth, no-refresh navigation experience.
- **Dark Mode**: Built-in toggle for dark/light themes with user preference persistence.
- **Zero-Dependency**: Pure HTML/CSS/JS. No build process needed. Just download and use.
- **Desktop-First Layout**: Optimized for desktop viewing. The layout is preserved on mobile via scaling to ensure content does not reflow.
- **Fault-Tolerant**: Automatically displays placeholders for missing images to prevent broken layouts.

---

## 🚀 Quick Start

1. **Fork or Download**: Fork this repository to your GitHub account, or download the ZIP file.
2. **Enable GitHub Pages (Recommended)**:
   - In your repository's page, go to `Settings` -> `Pages`.
   - Under `Build and deployment`, set the `Source` to `Deploy from a branch`.
   - Set the `Branch` to `main`, the folder to `/ (root)`, and click `Save`.
   - After a few minutes, your homepage will be live at `https://<your-username>.github.io/<your-repo-name>/`.
3. **Start Customizing**: Follow the guide below to edit your content. Commit & push your changes to see the updates.

---

## 🛠️ The Ultimate Customization Guide

**The Core Concept: Almost all your changes will happen in the `assets/js/config.js` file and the `sections/` folder.**

### 1. Editing Basic Information (Photo, Name, Sidebar Links)

All this information is controlled by the **`assets/js/config.js`** file.

```javascript
const config = {
    // Profile
    profile: {
      name: "Your Name", // Change your name here
      photo: "assets/img/profile.jpg", // Path to your photo
    },

    // Sidebar links
    contact: [
      {
        name: "Email",
        icon: "fas fa-envelope",
        url: "mailto:your@email.com",
      },
      // ... other links
    ],
    // ...
};
```

- **Change Name**: Simply edit the value of `profile.name`.
- **Change Photo**: Place your photo (e.g., `my-photo.png`) into the `assets/img/` folder, then change the `profile.photo` path to `"assets/img/my-photo.png"`.
- **Update CV**: Place your PDF resume in the `assets/files/` folder and update the `url` for the CV entry in the `contact` array.

### 2. How to Add a New Sidebar Link (e.g., LinkedIn)

1. Open the **`assets/js/config.js`** file.
2. In the `contact` array, add a new object following the existing format.
3. You can find free icons on the [Font Awesome website](https://fontawesome.com/search?m=free).

**Example: Adding a LinkedIn link**

```javascript
// ...
contact: [
  // ... existing links
  {
    name: "GitHub",
    icon: "fab fa-github",
    url: "https://github.com/yourgithub",
    target: "_blank",
  },
  // Add the new entry here
  {
    name: "LinkedIn",
    icon: "fab fa-linkedin", // Icon from Font Awesome
    url: "https://www.linkedin.com/in/yourprofile", // Your LinkedIn URL
    target: "_blank", // Opens in a new tab
  },
],
// ...
```

### 3. How to Add a New Page to the Top Navigation Bar (e.g., "Teaching")

This is a two-step process:

**Step 1: Add the navigation entry in `config.js`**

Open **`assets/js/config.js`** and add a new entry to the `navigation` array. The `section` value will be the name of the HTML file (e.g., `teaching` corresponds to `teaching.html`).

```javascript
// ...
navigation: [
    { name: "About Me", section: "about" },
    { name: "Research", section: "research" },
    // Add the new entry here
    { name: "Teaching", section: "teaching" },
    { name: "Projects", section: "projects" },
    // ...
],
//...
```

**Step 2: Create the corresponding HTML content file**

In the **`sections/`** folder, create a new file named **`teaching.html`** and write your content inside. You can copy the basic structure from any other `sections/*.html` file.

**Example content for `sections/teaching.html`:**

```html
<section>
    <h1>Teaching Experience</h1>
    <p>Below is a summary of my teaching and TA experience:</p>
    <ul>
        <li><strong>Teaching Assistant for Course A</strong>, [Your University], Fall 2023</li>
        <li><strong>Teaching Assistant for Course B</strong>, [Your University], Spring 2024</li>
    </ul>
</section>
```

**Done!** Commit your changes, refresh your homepage, and the new "Teaching" link will appear in the navigation bar and load the content correctly.

### 4. How to Edit Page Content and Add Images

- **Editing Text**: Simply open the corresponding HTML file in the `sections/` folder (e.g., `about.html`, `projects.html`) and edit it. You can use standard HTML tags like `<h2>`, `<p>`, `<ul>`, `<li>`, and `<strong>`.
- **Adding an Image**:

  1. Place your image file (e.g., `my-project-image.jpg`) into the **`assets/img/`** folder.
  2. In the HTML file where you want the image to appear (e.g., `sections/projects.html`), use a standard `<img>` tag.

  **Example: Adding an image to a project description**

  ```html
  <h2>1. Smart Home Automation Hub</h2>
  <p>Project description...</p>
  <!-- Insert the image here -->
  <img src="assets/img/my-project-image.jpg" alt="A demo of the Smart Home Hub">
  ```
