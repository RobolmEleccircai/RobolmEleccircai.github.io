# Personal Academic Homepage Project

Welcome to my personal academic homepage project hosted on GitHub Pages.

## Project Overview

This project is a modular, maintainable personal homepage designed for academic and professional presentation.It supports:

- Dynamic content loading via JavaScript
- Dark mode toggle for better readability
- Fault-tolerant resource loading with placeholders for missing images
- Clear file/folder structure for easy maintenance

## Directory Structure


your-project/

├── index.html              # Main page with sidebar and navigation

├── assets/

│   ├── css/

│   │   └── style.css       # CSS styles including dark mode

│   ├── js/

│   │   ├── main.js         # Main JS (dark mode toggle, etc.)

│   │   └── router.js       # Router JS (dynamic page loading)

│   ├── img/

│   │   ├── profile.jpg     # Profile photo (replace as needed)

│   │   ├── cycling.jpg     # Hobby image (optional)

│   │   └── photography.jpg # Hobby image (optional)

│   └── files/

│       └── cv.pdf          # Resume PDF (replace as needed)

├── sections/

│   ├── about.html          # About Me content

│   ├── research.html       # Research/Publications content

│   ├── projects.html       # Projects content

│   ├── awards.html         # Awards content

│   ├── hobbies.html        # Hobbies content

│   └── blogs.html          # Blogs content


## How to Use

- Open `index.html` in a browser or deploy on GitHub Pages
- Navigate via the sidebar or navbar to load different sections
- Toggle dark mode with the moon icon button
- Replace placeholder images and files in `assets/img` and `assets/files` with your own

## Notes

- Ensure the images referenced exist, or the placeholders will appear
- Modify content inside `sections/*.html` for your personal info
- Styles and scripts are modularized under `assets/` for maintainability

---

If you prefer to read this in Chinese, please see the [中文说明](README_CN.md).
