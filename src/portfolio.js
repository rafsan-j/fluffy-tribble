/* src/portfolio.js */

// Website related settings
const settings = {
  isSplash: true,
};

// SEO Related settings
const seo = {
  title: "Rafsan's Portfolio",
  description:
    "An aspiring Computer Science and Engineering student passionate about Robotics, Web Development, and Ethical Hacking.",
  og: {
    title: "Rafsan Jani Portfolio",
    type: "website",
    url: "https://rafsan-j.github.io/rafsanj/",
  },
};

// Home Page
const greeting = {
  title: "Rafsan Jani",
  logo_name: "RafsanJani",
  nickname: "Rafsan",
  subTitle:
    "Aspiring CSE student and Robotics enthusiast. Dedicated to building impactful systems through coding, hardware automation, and scientific research.",
  resumeLink: "#",
  portfolio_repository: "https://github.com/rafsan-j/portfolio",
  githubProfile: "https://github.com/rafsan-j",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/rafsan-j",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/", // Add your link
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:your-email@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/",
    fontAwesomeIcon: "fa-facebook-f",
    backgroundColor: "#1877F2",
  },
];

const skills = {
  data: [
    {
      title: "Robotics & IoT",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Developing hardware automation systems using Arduino and Raspberry Pi 5",
        "⚡ Experience with PIR, magnetic, and NPK soil sensors for smart systems",
        "⚡ Re-establishing and leading college robotics communities",
      ],
      softwareSkills: [
        {
          skillName: "Arduino",
          fontAwesomeClassname: "simple-icons:arduino",
          style: { color: "#00979D" },
        },
        {
          skillName: "Raspberry Pi",
          fontAwesomeClassname: "simple-icons:raspberrypi",
          style: { color: "#C51A4A" },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: { color: "#3776AB" },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: { color: "#00599C" },
        },
      ],
    },
    {
      title: "Web & App Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive productivity web applications like Ramadan Flow",
        "⚡ Developing duration-based multi-timer mobile apps",
        "⚡ Visual programming and logic design using Scratch for CS50 projects",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: { color: "#E34F26" },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: { color: "#1572B6" },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: { backgroundColor: "#000000", color: "#F7DF1E" },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "Scratch",
          fontAwesomeClassname: "simple-icons:scratch",
          style: { color: "#4D97FF" },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: { color: "#2EC866" },
      profileLink: "https://www.hackerrank.com/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Rajshahi Cadet College",
      subtitle: "Higher Secondary Certificate (Science)",
      logo_path: "rcc_logo.png",
      alt_name: "RCC",
      duration: "2019 - 2025",
      descriptions: [
        "⚡ Served as the College Prefect (2024-2025) managing 300+ students.",
        "⚡ Lead organizer for ICT and Robotics club events.",
        "⚡ Focused on Advanced Physics, Chemistry, and Mathematics.",
      ],
      website_link: "http://rcc.army.mil.bd",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "CS50: Introduction to Computer Science",
      subtitle: "Harvard University",
      logo_path: "harvard_logo.png",
      certificate_link: "#",
      alt_name: "Harvard",
      color_code: "#A51C30",
    },
    {
      title: "TÖMER Turkish Language",
      subtitle: "Language Proficiency",
      logo_path: "turkey_logo.png",
      certificate_link: "#",
      alt_name: "TÖMER",
      color_code: "#E30A17",
    },
  ],
};

// Experience Page
const experience = {
  title: "Leadership & Achievements",
  subtitle: "Management and Technical Roles",
  description:
    "I have held significant leadership positions at Rajshahi Cadet College and developed technical projects for national ICT competitions and international physics programs.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Leadership",
      experiences: [
        {
          title: "College Prefect",
          company: "Rajshahi Cadet College",
          company_url: "",
          logo_path: "rcc_logo.png",
          duration: "2024 - 2025",
          location: "Rajshahi, Bangladesh",
          description:
            "Highest student leadership role. Responsible for maintaining discipline, coordinating house activities, and acting as a bridge between the administration and the student body.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Technical Projects",
      experiences: [
        {
          title: "Lead Developer",
          company: "Team Regen Spectralis",
          company_url: "",
          logo_path: "cern_logo.png",
          duration: "2025",
          location: "CERN Beamline for Schools",
          description:
            "Developed 'Dissecting Muons' project to analyze muon flux and verify relativistic time dilation using theoretical physics models.",
          color: "#000000",
        },
        {
          title: "Innovator",
          company: "Inter-Cadet ICT Olympiad",
          company_url: "",
          logo_path: "ict_logo.png",
          duration: "2024",
          location: "Bangladesh",
          description:
            "Designed a Smart Agriculture System using NPK sensors and Raspberry Pi 5 to automate soil testing for farmers.",
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My work spans from web-based productivity tools to IoT hardware solutions and theoretical physics research.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Research & Writing",
  description: "Theoretical papers and creative writing projects.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "ramadan-flow",
      name: "Ramadan Flow",
      createdAt: "2026",
      description:
        "A productivity web application designed to track rituals and schedules during the holy month.",
      url: "https://github.com/rafsan-j/ramadan-flow",
    },
    {
      id: "dissecting-muons",
      name: "Dissecting Muons",
      createdAt: "2025",
      description:
        "Physics research paper for CERN Beamline for Schools competition.",
      url: "",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "rafsan_avatar.png",
    description:
      "I am currently based in Dinajpur and available for collaboration on Robotics, Web Dev, or Open Source projects.",
  },
  blogSection: {
    title: "Blogs & Poetry",
    subtitle:
      "I enjoy creative writing and documenting my journey in engineering and leadership.",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Location",
    subtitle: "Dinajpur, Bangladesh",
    locality: "Dinajpur",
    country: "Bangladesh",
    region: "Rangpur",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/your-location",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
