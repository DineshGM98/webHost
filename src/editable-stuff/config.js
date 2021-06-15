// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#2f201f, #f340cf, #421f00, #f1f3f2, #af0f0f, #94ef20",
  firstName: "Dinesh",
  middleName: "",
  lastName: "Madusanka",
  message: " Dinesh Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/DineshGM98",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/Lahiru Madusanka",
    },
    {
      image: "fa-instagram",
  //    url: "https://www.instagram.com/dinesh98/",
    },
    {
      image: "fa-linkedin",
    //  url: "https://www.linkedin.com/in/hashirshoaeb/",
    },
    {
      image: "fa-twitter",
      //url: "https://www.twitter.com/dineshtwt/",
    },
  ],
};


const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/hashirshoaeb.png"),
  imageSize: 375,
  message:
    "My name is Dinesh Madhusanka. I’m a under graduate of 2017 from National University of Sri Jayewardenepura with a degree in BSc honers Information Technology. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. In my free time I like working on open source projects.",
  resume: "https://drive.google.com/file/d/1Jdc3a0UiTf9LWs1xwcr3WxG_FHaVS5E8/view?usp=sharing",
};


const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "GMdinesh", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 45 },
    { name: "SQL/mongoDB", value: 75 },
    { name: "Java", value: 85 },
    { name: "C/C++", value: 40 },
    { name: "JavaScript", value: 50 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 90 },
    { name: "Action Script", value: 80 },
  ],
  softSkills: [
    { name: "Object-Oriented", value: 95 },
    { name: "algorithm", value: 75 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "flow control", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "madushankadinesh649.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}


export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
