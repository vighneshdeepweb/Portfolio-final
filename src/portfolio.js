/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Vighnesh's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Vighnesh Deep Sharan Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Vighnesh Deep Sharan",
  logo_name: "VighneshDeep",
  nickname: "Flick3r",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/17rTMvAM5z5fYeGDFMNJ0N9u8rUcqppUb/",
  portfolio_repository: "https://github.com/vighneshdeepweb",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/vighneshdeepweb",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/vighnesh-deep-202001/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "#",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:vighneshdeepsharan2002@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/F4Flicker",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/Vighneshdeep",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/f4.vighnesh/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React-Redux",
        "⚡ Learning and Implementing advance web development using MERN STACk",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        // {
        //   skillName: "Sass",
        //   fontAwesomeClassname: "simple-icons:sass",
        //   style: {
        //     color: "#CC6699",
        //   },
        // },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Also have experinece on how to handle GCP via help of QwikLabs.",
        "⚡ Have experinece in deploying backend on heroku.",
        "⚡ Learning other Cloud Platforms too such as AWS & AZURE.",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        // {
        //   skillName: "PostgreSQL",
        //   fontAwesomeClassname: "simple-icons:postgresql",
        //   style: {
        //     color: "#336791",
        //   },
        // },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "BugCrowd",
      iconifyClassname: "simple-icons:bugcrowd",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://bugcrowd.com/F4_FLICK3R",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/vighnesh12",
    },
    // {
    //   siteName: "HackerOne",
    //   iconifyClassname: "simple-icons:hackerone",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "https://hackerone.com/flick3r",
    // },
    {
      siteName: "TryHackMe",
      iconifyClassname: "simple-icons:tryhackme",
      style: {
        color: "#323754",
      },
      profileLink: "https://tryhackme.com/p/Flick3r",
    },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Dr. D.Y. Patil Arts,Science and Commerce College",
      subtitle: "Bachelor in Computer Applications",
      logo_path: "dypatil.png",
      alt_name: "D.Y.Patil ACS",
      duration: "2019 - Present",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://acs.dypvp.edu.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Oracle Cloud",
      subtitle: "- Oracle University",
      logo_path: "oracle.png",
      certificate_link:
        "https://drive.google.com/file/d/1HVy3anEsPNsDmuslPyB5spyBrQz5Vela/",
      alt_name: "Oracle",
      color_code: "#8C151599",
    },
    {
      title: "Machine Learning in Python",
      subtitle: "- Academy Europe Open University",
      logo_path: "academy europe.png",
      certificate_link:
        "https://www.academyeurope.org/certificates/c51de7501b841c62afcfcd9753c981cc/",
      alt_name: "Machine-Learning",
      color_code: "#00000099",
    },
    {
      title: "Introduction to Artificial Intelligence",
      subtitle: "- TCS iON",
      logo_path: "tcs.png",
      certificate_link:
        "https://drive.google.com/file/d/1gTbcbS3anwamhud1Bm-ITQ7D84_Y4uoC/",
      alt_name: "TCS iON",
      color_code: "#0C9D5899",
    },
    {
      title: "Python for Data Science",
      subtitle: "- IBM",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.youracclaim.com/badges/e3c66bc3-2764-456b-82f6-759b2966fc29/linked_in_profile",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Be A White Hat HAcker and Pen Tester Online ",
      subtitle: "- Eduonix Learning Solutions Pvt Ltd",
      logo_path: "eduonix.jpg",
      certificate_link:
        "https://www.eduonix.com/certificate/36f27c2e6b",
      alt_name: "Eduonix Learning",
      color_code: "#D83B0199",
    },
    {
      title: "Cyber Security Kali Linux",
      subtitle: "- Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "http://ude.my/UC-53d8f76c-2b7f-4496-a7a8-d49ee5be7614",
      alt_name: "Udemy",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.qwiklabs.com/public_profiles/c1e79422-bee1-49ef-8d5a-b62d06a62d5c",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Certified Ethical Hacking (CEH)",
      subtitle: "- Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "http://ude.my/UC-abf62547-7a41-4b06-bae6-5b61ab6cf859",
      alt_name: "CEH",
      color_code: "#00000099",
    },
    {
      title: "Google Web Designer Basics",
      subtitle: "- Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://skillshop.exceedlms.com/student/award/48029323",
      alt_name: "Google",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.qwiklabs.com/public_profiles/c1e79422-bee1-49ef-8d5a-b62d06a62d5c",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Advanced Google Analytics",
      subtitle: "- Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://analytics.google.com/analytics/academy/certificate/bb7W3KIVSVe4q3F_4ZQfrg",
      alt_name: "Google",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.qwiklabs.com/public_profiles/c1e79422-bee1-49ef-8d5a-b62d06a62d5c",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked as a Cloud-Security Intern in an renowned organisation, And also as a Full Stack Web Developer. I am also an active Open-Source Contributor. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "Cloud-Security Intern",
          company: "Virtually Testing Foundation",
          company_url: "https://virtuallytesting.com/",
          logo_path: "virtualtesting.png",
          duration: "Jan 2021 - Mar 2021",
          location: "Remote",
          description:
            "Beginner Track Internship related to Cloud Visualisation and Virtualisation through VMWare and its other more services. Concept of Docker & Kubernetes. And analyzing cloud services from a Security point of view.",
          color: "#0879bf",
        },
        {
          title: "Full Stack Web-Developer",
          company: "The Sparks Foundation",
          company_url: "https://www.linkedin.com/company/the-sparks-foundation/about/",
          logo_path: "sparks.png",
          duration: "Feb 2021 - Mar 2021",
          location: "Remote",
          description:
            "Throughout the one-month internship, we interns were provided with certain tasks. In the case of Full Stack Web Development, there were 2 tasks first was to develop a full-stack banking website that consists of real-time tasks such as deposit, withdrawal and updation of info in the database.The second task was to deploy a Charity website and also integrate a payment mechanism so that people can donate too.",
          color: "#9b1578",
        },
        // {
        //   title: "Android Developer",
        //   company: "FreeCopy Pvt. Ltd.",
        //   company_url: "https://www.linkedin.com/company/freecopy/about/",
        //   logo_path: "freecopy_logo.png",
        //   duration: "Nov 2017 - Dec 2017",
        //   location: "Ahmedabad, Gujarat",
        //   description:
        //     "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
        //   color: "#fc1f20",
        // },
      ],
    },
    // {
    //   title: "Internships",
    //   experiences: [
    //     {
    //       title: "Data Science Research Intern",
    //       company: "Delhivery Pvt. Ltd.",
    //       company_url: "https://www.delhivery.com/",
    //       logo_path: "delhivery_logo.png",
    //       duration: "May 2019 - Sept 2019",
    //       location: "Gurgaon, Haryana",
    //       description:
    //         "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
    //       color: "#ee3c26",
    //     },
    //     {
    //       title: "Data Science Intern",
    //       company: "Intel Indexer LLC",
    //       company_url:
    //         "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
    //       logo_path: "intel_logo.jpg",
    //       duration: "Nov 2018 - Dec 2018",
    //       location: "Work From Home",
    //       description:
    //         "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
    //       color: "#0071C5",
    //     },
    //   ],
    // },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Developers Student Club",
          company: "Google",
          company_url: "https://gdsc.community.dev/dy-patil-college-of-engineering-pune/",
          logo_path: "google_logo.png",
          duration: "April 2020 - Present",
          location: "Pune, Maharashtra",
          description:
            "Member at Google Developer Student Club For D.Y Patil College of Engineering and now it's being more than one years being associated with them.",
          color: "#4285F4",
        },
        {
          title: "Google Developers Group (Pune Chapter)",
          company: "Google",
          company_url: "https://gdg.community.dev/gdg-pune/",
          logo_path: "google_logo.png",
          duration: "April 2020 - Present",
          location: "Pune, Maharashtra",
          description:
            "Member at Google Developer Group (Pune) Chapter. Also attend their meetups,participate in their discussion on various new technologies and topics. ",
          color: "#D83B01",
        },
        {
          title: "Founder At Geeks Club",
          company: "Tech Club D.Y Patil ACS",
          company_url: "https://www.geeksclub.tech",
          logo_path: "geeks.gif",
          duration: "Oct 2021 - Present",
          location: "Pune, Maharashtra",
          description:
            "Founder of the Tech Club of our College and have conducted several events,workshops under mine guidance.",
          color: "#000000",
        },
        // {
        //   title: "Developer Students Club Member",
        //   company: "DSC IIITDM Kurnool",
        //   company_url:
        //     "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
        //   logo_path: "dsc_logo.png",
        //   duration: "Jan 2018 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
        //   color: "#0C9D58",
        // },
        // {
        //   title: "Developer Program Member",
        //   company: "Github",
        //   company_url: "https://github.com/",
        //   logo_path: "github_logo.png",
        //   duration: "July 2019 - PRESENT",
        //   location: "Work From Home",
        //   description:
        //     "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
        //   color: "#181717",
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create ML/AI (Computer Vision) & Advance Web Development projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "Here is mine details of one research paper on which I am currently working.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "viglogo.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, CyberSecurity, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Forum",
    subtitle:
      "For highly interested people who are seriously willing to learn tech and cybersecurity. A forum is being built and deployed for you all with all types of leaning and free resources named Shell_Forum",
    link: "https://forum.shellcrew.org",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Near Sai Mandir, Dr. D.Y Patil Arts, Science and Commerce College, Pimpri,Pune-411018, Maharashtra",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/g1gnYt2us2LS1fUT8",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 9110135528",
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
  contactPageData,
};
