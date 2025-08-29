// --- 🎨 Site Styling ---

// Colors (recommendation: choose a color suitable for dark and light modes)
// Should be inputted as a hex value. Use https://g.co/kgs/XCcs7T for choosing colors with hex.
const colors = {
    buttonColor: "#4305ba",
    LinkHighlightColor: "#4305ba"
}

// Transitions
const transitions = {
    active: true, // activate for all sections
    onlyLanding: false, // activate only for initial load of landing page
    showOnce: true, // transition only once
    thresholdOption: 0.2 // indicates at what percentage of the sections visibility the transition should start
}

// Splash Screen
const splashScreen = true // recommended: for best behavior after refresh

// --- 👋 Greeting Section ---
const greeting = {
  intro: "Hi, I’m Josh 👋",
  name: "I build [ websites | dashboards | apps ]",
  basedLocation: "Dagupan City, Pangasinan (PH)",
  resumeLink:
    "https://drive.google.com/file/d/1tk37ZT8EagoNGIZDSoMpgKW_jBuVXZec/view?usp=drive_link",
  logo: { link: "images/initials.png", custom: true },
  portraitLink: "images/2d.webp",

  // New fields
  summary:
    "I’m a passionate Web & App Developer specializing in Vue.js, Flutter, and clean UI design. With experience in front-end and backend development, I enjoy turning ideas into polished digital products that solve real problems.",

  highlights: [
    "Vue.js",
    "React",
    "Flutter",
    "Tailwind CSS",
    "Node.js",
    "Python",
    "Laravel"
  ],
}


const socialMediaLinks = {
    github: "https://github.com/joshzxc2023",
    linkedin: "https://www.linkedin.com/in/joshgasapo/",
    stackoverflow: "",
} // to add any additional social media links check out the README.md or src/icons.js file

// --- 😎 About Section ---
const about = {
  autobiography: [
    "My name is Josh Austin Gasapo, an IT graduate from PHINMA University of Pangasinan with a strong passion for continuous learning and adaptability in the dynamic IT industry. I specialize in front-end web design and mobile development, with hands-on experience in Java, Python, Vue.js, and Laravel.",
    "During my internship at Aeonsprint Solutions Inc., I worked on designing and developing responsive merchant pages, product listings, and dashboards using Vue.js, Tailwind CSS, Laravel, and MySQL. I also contributed to database design and helped enhance shopping experiences through intuitive UIs.",
    "I have also collaborated on capstone and academic projects, such as TraineeCheck (an attendance monitoring system) and WashPro (a laundry service app), as well as developed Pinnacle Jump, a Unity-based 2D game. These projects strengthened my skills in full-stack development, teamwork, and problem-solving."
  ],
  techStack: [
    "JavaScript",
    "TypeScript",
    "Vue.js",
    "Laravel",
    "Python",
    "Java",
    "Node.js",
    "Unity",
    "Firebase",
    "Flutter"
  ],
  photo1Link: "images/portrait1.jpg",
}

// --- 🛡️ Experience Section ---
const experiences = [
  {
    position: "Web Developer Intern",
    company: {
      name: "Aeonsprint Solutions Inc.",
      link: "https://aeonsprint.tech/"
    },
    duration: "January 2025 – May 2025",
    content: [
      {
        sectionHeader: "",
        bulletPoints: [
          "Designed and developed responsive merchant pages and product listings.",
          "Implemented user interfaces using Vue.js and Tailwind CSS for smooth shopping experiences.",
          "Assisted in database design and product data handling using Laravel and MySQL.",
          "Contributed to the development of features like merchant dashboards and order tracking."
        ]
      }
    ],
    hashtags: ["Vue.js", "Tailwind CSS", "Laravel", "MySQL", "JavaScript", "HTML", "CSS"]
  },
  {
    position: "Capstone Developer (Team Project)",
    company: {
      name: "TraineeCheck: Attendance Monitoring System",
      link: "" // optional if you don’t have a live link
    },
    duration: "2023 – 2024",
    content: [
      {
        sectionHeader: "",
        bulletPoints: [
          "Collaborated with a team to develop an attendance tracking system for OJT students.",
          "Built Android and web modules allowing students to clock in/out and monitor duty hours.",
          "Integrated Firebase backend for real-time data syncing and secure authentication.",
          "Enhanced productivity by including grade tracking and supervisor dashboards."
        ]
      }
    ],
    hashtags: ["Java", "Android Studio", "Firebase", "HTML", "CSS", "JavaScript"]
  },
  {
    position: "Project Developer",
    company: {
      name: "WashPro – Laundry Service App",
      link: "" // optional demo link
    },
    duration: "2024",
    content: [
      {
        sectionHeader: "",
        bulletPoints: [
          "Designed mobile-first wireframes and UI in Figma.",
          "Developed cross-platform app prototype using Flutter and Dart.",
          "Implemented features for scheduling pickups, tracking orders, and delivery notifications.",
          "Connected users with trusted laundry shops for seamless service experience."
        ]
      }
    ],
    hashtags: ["Figma", "Flutter", "Dart"]
  },
  {
    position: "Project Developer",
    company: {
      name: "Pinnacle Jump – 2D Parkour Game",
      link: "" // optional GitHub or demo link
    },
    duration: "2023 – 2024",
    content: [
      {
        sectionHeader: "",
        bulletPoints: [
          "Built a 2D platformer in Unity with smooth character movement and parkour mechanics.",
          "Designed engaging levels with traps, obstacles, and collectibles.",
          "Focused on responsive controls and immersive gameplay for a dynamic player experience."
        ]
      }
    ],
    hashtags: ["C#", "Unity", "GameDev"]
  }


   
]

// --- 💻 Work Section ---
const works = [
    {
        projectName: "Washpro",
        yearCompleted: "2024",
        description: "Designed and developed WashPro, a cross-platform mobile and web application for managing laundry services. Features include service/package browsing, real-time order tracking, and an admin analytics dashboard. Focused on creating an intuitive UI and seamless user experience with scalable architecture.",
        techStack: "Figma, Flutter, Dart",
        links: [
        ],
        imageLink: "images/washpro.png",
        alignLeft: false
    },
    {
        projectName: "TraineeCheck",
        yearCompleted: "2024",
        description: "Capstone project that digitized trainee attendance management for supervisors and trainers. Built an Android and web-based system with secure login, real-time syncing via Firebase, and role-based dashboards for administrators, teachers, and supervisors.",
        techStack: "Java, Android Studio, Firebase, HTML, CSS, JavaScript",
        links: [
           
        ],
        imageLink: "images/traineecheck.png",
        alignLeft: true
    },
    {
        projectName: "Pinnacle Jump",
        yearCompleted: "2024",
        description: "Developed Pinnacle Jump, a 2D side-scrolling adventure game built in Unity. Implemented physics-based mechanics, multiple levels, and dynamic obstacles to deliver engaging gameplay. Designed custom game assets and menus for a polished user experience.",
        techStack: "C#, Unity",
        links: [
        ],
        imageLink: "images/pinnacle.png",
        alignLeft: false
    },
    
]

const archiveLink = "https://github.com/joshzxc2023"

// --- 📭 Contact Section ---
// 2 Options available - Choose 1
const contact = {
    externalLink: {
        shortTitle: "Get in Touch",
        note: [
            "Reach out if you have any questions or want to collaborate on a project.",
        ], // paragraph breaks will be entered after each item,
        link: {
            email: "joshgasapo483@gmail.com", // email takes precedance"
        },
        responseTimeMessage: ""
    },
    formEmbedLink: "" // inclusion of this link will take precedance
}

export default {
    colors,
    transitions,
    splashScreen,
    greeting,
    socialMediaLinks,
    about,
    experiences,
    works,
    archiveLink,
    contact
}