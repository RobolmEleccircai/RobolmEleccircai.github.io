// assets/js/config.js

const config = {
    // 个人资料
    profile: {
      name: "Cheng Liao", // 在这里修改你的名字
      photo: "assets/img/profile.png", // 你的头像路径
    },
  
    // 侧边栏的联系方式和文件链接
    contact: [
      {
        name: "Email",
        icon: "fas fa-envelope", // Font Awesome 图标 class
        url: "mailto:robolm_eleccircai@163.com", // 在这里修改你的邮箱
      },
      {
        name: "CV",
        icon: "fas fa-file-alt",
        url: "assets/files/cv.pdf", // 你的简历路径
        target: "_blank", // _blank 表示在新标签页中打开
      },
      {
        name: "GitHub",
        icon: "fab fa-github",
        url: "https://github.com/RobolmEleccircai", // 在这里修改你的 GitHub 链接
        target: "_blank",
      },
      {
        name: "Bilibili",
        icon: "fab fa-bilibili",
        url: "https://space.bilibili.com/334016814?spm_id_from=333.1007.0.0", // 在这里修改你的 Bilibili 链接
        target: "_blank",
      },
    ],
  
    // 顶部导航栏
    navigation: [
      { name: "About Me", section: "about" },
      { name: "Research", section: "research" },
      { name: "Projects", section: "projects" },
      { name: "Awards", section: "awards" },
      { name: "Hobbies", section: "hobbies" },
      { name: "Blogs", section: "blogs" },
    ],
  };