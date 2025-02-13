/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import Html from "./assets/images/html.svg";
import CSS from "./assets/images/css.svg";
import Tailwind from "./assets/images/tailwind.svg";
import React from "./assets/images/react.svg";
import JavaScript from "./assets/images/javascript.svg";
import TypeScript from "./assets/images/typescript.svg";
import JetPack from "./assets/images/jetpack.svg";
import Kotlin from "./assets/images/kotlin.svg";
import Vercel from "./assets/images/vercel.svg";
import Firebase from "./assets/images/firebase.svg";
import ReactNativeFirebase from "./assets/images/react-native-firebase.svg";
import Git from "./assets/images/git.svg";
import NodeJs from "./assets/images/nodejs.svg";
import Expo from "./assets/images/expo.svg";
import Sentry from "./assets/images/sentry.svg";
import Redux from "./assets/images/redux.svg";
import Fastlane from "./assets/images/fastlane.svg";
import Ananlytics from "./assets/images/analytics.svg";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Arkar Oo",
  title: "Hi, I'm Kar Oo",
  subTitle: emoji(
    "A passionate Mobile & Front-end Developer 🚀 with experience in building high-performance Web and Mobile applications using React Native, React.js, TypeScript, Kotlin, and other modern technologies."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/arkar-00",
  linkedin: "https://www.linkedin.com/in/arkar-oo-0265b4278/",
  gmail: "akoucsmub@gmail.com",
  gitlab: "https://gitlab.com/arkar-00",
  facebook: "https://www.facebook.com/profile.php?id=100071835817206",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "PASSIONATE MOBILE & FRONT-END DEVELOPER EXPLORING ADVANCED TECH STACKS",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front-end / User Interfaces for web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications (PWA) in normal and SPA stacks"),
    emoji(
      "⚡ Build high-performance cross-platform mobile apps with React Native"
    ),
    emoji(
      "⚡ Implement end-to-end encryption, biometric authentication & secure communication"
    ),
    emoji(
      "⚡ Optimize performance & scalability with best practices in Mobile & Web Dev"
    ),
    emoji("⚡ API integration & state management using Axios, React Query"),
    emoji("⚡ Exploring CI/CD, automated testing & Mobile DevOps workflows")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5",
      iconSource: Html
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt",
      iconSource: CSS
    },
    {
      skillName: "Tailwind",
      fontAwesomeClassname: "fab fa-css3-alt",
      iconSource: Tailwind
    },
    {
      skillName: "Jetpack",
      fontAwesomeClassname: "fab fa-react",
      iconSource: JetPack
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
      iconSource: JavaScript
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js",
      iconSource: TypeScript
    },
    {
      skillName: "Kotlin",
      fontAwesomeClassname: "fab fa-kotlin",
      iconSource: Kotlin
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react",
      iconSource: React
    },
    {
      skillName: "Vercel",
      fontAwesomeClassname: "fab fa-vercel",
      iconSource: Vercel
    },
    {
      skillName: "Expo",
      fontAwesomeClassname: "fab fa-expo",
      iconSource: Expo
    },
    {
      skillName: "Redux",
      fontAwesomeClassname: "fab fa-redux",
      iconSource: Redux
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fab fa-firebase",
      iconSource: Firebase
    },
    {
      skillName: "Fastlane",
      fontAwesomeClassname: "fab fa-fastlane",
      iconSource: Fastlane
    },
    {
      skillName: "React Native Firebase",
      fontAwesomeClassname: "fab fa-react-native-firebase",
      iconSource: ReactNativeFirebase
    },
    {
      skillName: "Google Analytics",
      fontAwesomeClassname: "fab fa-analytics",
      iconSource: Ananlytics
    },

    {
      skillName: "Sentry",
      fontAwesomeClassname: "fab fa-sentry",
      iconSource: Sentry
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
      iconSource: NodeJs
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt",
      iconSource: Git
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Computer Studies, Maubin",
      logo: require("./assets/images/ucsmub.png"),
      subHeader: "Bachelor of Computer Science (B.C.Sc)",
      duration: "December 2017 - February 2024",
      desc: "Participated in the Group Project",
      descBullets: [
        "Online Shop Website (HTML, CSS, JavaScript)",
        "Registration System for an Orphanage (Database using Microsoft Access)",
        "Registration System for an Orphanage (Database using  MySQL)",
        "Registration System for an Orphanage (DBMS, SE, UML)",
        "Trip Advisor application (Android)"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend Development", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Mobile Development",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend Development",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, // Set to true to show the work experiences section
  experience: [
    {
      role: "Mobile Developer",
      company: "Shwe Bank",
      companylogo: require("./assets/images/shwe.png"),
      date: "January 2025 – Present",
      desc: "Building and maintaining high-performance, secure mobile banking applications.",
      descBullets: [
        "Developing and optimizing banking apps with a focus on security, scalability, and UX.",
        "Enhanced app security, performance, and scalability for seamless transactions.",
        "Implemented biometric authentication and multi-factor authentication (MFA) for secure logins."
      ]
    },
    {
      role: "Mobile Developer",
      company: "Modus Operandi",
      companylogo: require("./assets/images/momoney.png"),
      date: "Oct 2023 – Dec 2024",
      desc: "Developed and optimized a digital payments mobile application.",
      descBullets: [
        "Integrated real-time payment processing and socket-based communication.",
        "Implemented biometric authentication, encryption, and secure API communication.",
        "Used Redux Saga for efficient API state management and caching.",
        "Optimized app performance using React Native reanimated, Hermes, and Flipper for debugging.",
        "Collaborating with backend teams to integrate seamless financial transactions."
      ]
    },
    {
      role: "Freelance Mobile & Web Developer",
      company: "Self-Employed",
      companylogo: require("./assets/images/code.jpeg"),
      date: "2023 – Present",
      desc: "Providing mobile and web development solutions to clients worldwide.",
      descBullets: [
        "Designed, developed, and launched high-performance mobile applications using React Native with a focus on seamless UI/UX.",
        "Engineered scalable and interactive web applications with React, TypeScript, and Tailwind CSS, ensuring cross-platform compatibility.",
        "Built and optimized Progressive Web Applications (PWA) to enhance performance, offline capabilities, and user engagement.",
        "Implemented secure authentication methods, including OAuth, biometric login, and real-time updates using WebSockets and Firebase.",
        "Integrated third-party services such as Firebase, In-app purchase, and analytics tools to enhance functionality.",
        "Developed CI/CD pipelines using Fastlane and GitHub Actions for automated builds and deployments.",
        "Developed offline-first functionality with local database storage (Realm & SQLite)."
      ]
    },
    {
      role: "Front-end Developer",
      company: "Ultimate Solution Myanmar",
      companylogo: require("./assets/images/ultimate.jpg"),
      date: "Nov 2021 – Sep 2023",
      desc: "Developed interactive, user-friendly web applications with modern front-end technologies.",
      descBullets: [
        "Built responsive UI using React.js, Tailwind CSS, and modern UI frameworks.",
        "Worked closely with backend developers to integrate REST APIs.",
        "Optimized web performance and improved SEO and accessibility.",
        "Implemented state management solutions using React Query and Zustand.",
        "Developed reusable UI components to maintain design consistency and improve development efficiency."
      ]
    },
    {
      role: "Internship Developer",
      company: "Ultimate Solution Myanmar",
      companylogo: require("./assets/images/ultimate.jpg"),
      date: "Jul 2019 – Sep 2019",
      desc: "Assisted in front-end development and gained practical experience in UI/UX design.",
      descBullets: [
        "Worked on UI components and front-end optimizations.",
        "Learned and applied best practices in React.js and JavaScript.",
        "Collaborated with senior developers for debugging and feature enhancements.",
        "Gained hands-on experience with responsive design and CSS frameworks like Bootstrap, MUI."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: false, // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/project1.png"),
      projectName: "Little Lemon",
      projectDesc:
        "A local-first React Native Expo food app where users can sign up, browse a categorized menu, and manage their profile. The app prioritizes local data storage using SQLite for menu management and AsyncStorage for user preferences, ensuring a seamless experience even offline. Logging out clears user data and redirects to the login screen.",
      footerLink: [
        {
          name: "Source",
          url: "https://github.com/arkar-00/little-lemon-food-ordering-app"
        }
      ]
    },
    {
      image: require("./assets/images/project2.png"),
      projectName: "GESC Student",
      projectDesc:
        "The GESC Student App is a React Native application designed for students of the GESC Chinese Language Center. It provides students with access to their personal information, class history, vouchers, exam results, and announcements related to exams and news. The app ensures a seamless experience by keeping students informed and organized.",
      footerLink: [
        {
          name: "App Store",
          url: "https://apps.apple.com/mm/app/gesc-student/id1669661006"
        },
        {
          name: "Play Store",
          url: "https://play.google.com/store/apps/details?id=com.gesc.memberapp&hl=en"
        }
      ]
    },
    {
      image: require("./assets/images/project3.png"),
      projectName: "WZ Comics",
      projectDesc:
        "The Wun Zinn Comics App is a digital comic book store where users can browse, download, and subscribe to their favorite comics. The app supports in-app purchases and MPT subscriptions, allowing users to access premium content seamlessly. With a vast collection of comics, Wun Zinn provides an engaging reading experience for all comic lovers.",
      footerLink: [
        {
          name: "App Store",
          url: "https://apps.apple.com/af/app/wun-zinn-comics/id6670696610"
        }
      ]
    },
    {
      image: require("./assets/images/project4.png"),
      projectName: "RoyalExpress Member",
      projectDesc:
        "The Royal Express Member App provides a seamless way to track deliveries in real time, calculate shipping costs, and locate the nearest branch for parcel drop-off or collection. With an intuitive interface, users can stay updated on their shipments anytime, anywhere.",
      footerLink: [
        {
          name: "Play Store",
          url: "https://play.google.com/store/apps/details?id=com.royalexpress.memberapp&hl=en"
        },
        {
          name: "App Store",
          url: "https://apps.apple.com/us/app/royal-express-member/id1538284560"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Leadership Training",
      subtitle:
        "The Lifestyle of Leaders from Bible, How to be a successful Leader, Vocational Training, Roles & Responsibilities of Executive Members, Social Networking, Self-capacity Building, Sex Education, Time Management & Self Palnning, How to reach out your goal",
      image: require("./assets/images/aypa.png"),
      imageAlt: "aypa logo",
      footerLink: [
        {
          name: "Certification",
          url: ""
        }
      ]
    },
    {
      title: "Introduction to Mobile Development",
      subtitle:
        "HTML and CSS, React (Web Framework), Web Development, JavaScript, Mobile Development",
      image: require("./assets/images/meta.png"),
      imageAlt: "Meta Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/d63ce9a11412368af8f05fa6861951c7"
        }
      ]
    },
    {
      title: "Programming with JavaScript",
      subtitle:
        "Test-Driven Development, JavaScript, Front-End Web Development, Object-Oriented Programming (OOP)",
      image: require("./assets/images/meta.png"),
      imageAlt: "meta Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/d434075b581c04b179797f9a4616e3f4"
        }
      ]
    },
    {
      title: "React",
      subtitle:
        "React (Web Framework), Application Development, Web Applications, Front-End Web Development",
      image: require("./assets/images/meta.png"),
      imageAlt: "meta Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/20707960f10c5881c9636de4e8de4a0b"
        }
      ]
    },
    {
      title: "React Crash Course: From Zero to Hero",
      subtitle:
        "React (Web Framework), Application Development, Web Applications, Front-End Web Development",
      image: require("./assets/images/udemy.png"),
      imageAlt: "meta Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-04b736a2-d97d-4aba-997a-f783f9c5e57f/"
        }
      ]
    },
    {
      title: "React Native",
      subtitle:
        "React (Web Framework), Application Development, Mobile Application Development, React Native",
      image: require("./assets/images/meta.png"),
      imageAlt: "meta Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/886160c7e89c5ef89f1d40514ed3e66b"
        }
      ]
    },
    {
      title: "Version Control",
      subtitle:
        "Version Control, GitHub, Bash (Unix Shell), Web Development, Linux",
      image: require("./assets/images/meta.png"),
      imageAlt: "meta Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/1311caa6440f6d4d98412c9eb7d31bc8"
        }
      ]
    },
    {
      title: "Working with Data",
      subtitle:
        "React (Javascript Library), Application Development, Data Management, REST APIs",
      image: require("./assets/images/meta.png"),
      imageAlt: "meta Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/be758a510b0c9d0be2472ecd878a8f4d"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "09788130179",
  email_address: "akoucsmub@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
