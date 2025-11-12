// import React from 'react';

// import {
//   Users,
//   Code,
//   Briefcase,
//   Heart,
//   Mail,
//   Phone,
//   MapPin,
//   Zap,
//   Star,
//   ExternalLink,
//   TrendingUp,
//   BookOpen,
//   Globe,
// } from 'lucide-react';

// // --- 1. STATIC DATA DEFINITIONS ---

// const profileData = {
//   name: 'Pramod Saini',
//   title: 'BCA Graduate | Front-End Developer',
//   location: 'Jaipur, India',
//   joinedYear: '2021',
//   contact: {
//     email: 'pramodsaini189@gmail.com',
//     phone: '+91 820 917 5003',
//   },
//   social: {
//     linkedin: 'https://www.linkedin.com/in/pramod-saini-0577a5229/',
//     github: 'https://github.com/Pramod-saini',
//     website: 'https://alexjohnson.dev',
//   },
//   about: 'A **Graduate** passionate about **front-end development** with solid skills in **HTML, CSS, JavaScript, and ReactJS**. Strong analytical thinking and a desire to build user-friendly web interfaces.',
//   profileImageUrl: './src/assets/Pramod.png',
//   bannerImageUrl:
//     'https://images.unsplash.com/photo-1761319914911-71b059a655d8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=1000',
// };

// const featuredProjects = [
//   {
//     title: 'E-Commerce Web Application',
//     role: 'Frontend Developer',
//     description:
//       'Developed a shopping app using React to provide a smooth user experience including browsing, cart management, secure checkout, and order tracking.',
//     imageUrl: 'https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg',
//     imageAlt: 'E-Commerce Web Application',
//     skills: ['HTML', 'CSS', 'JavaScript', 'ReactJS'],
//     stats: [
//       'Built mobile-friendly layout',
//       'Integrated dummy product API',
//       'Responsive user cart and checkout UI',
//     ],
//     liveLink: '#',
//     caseStudyLink: '#',
//   },
//   {
//     title: 'Paper Game Web Application',
//     role: 'Game Developer',
//     description:
//       'Created a browser-based game using JavaScript where players guide a character through obstacles to increase score.',
//     imageUrl: 'https://images.pexels.com/photos/955389/pexels-photo-955389.jpeg',
//     imageAlt: 'Paper Game Web Application',
//     skills: ['HTML', 'CSS', 'JavaScript'],
//     stats: ['Implemented jump/slide actions', 'Score tracker logic', 'Responsive gameplay on different devices'],
//     caseStudyLink: '#',
//   },
//   {
//     title: 'AI-Powered Learning Platform',
//     role: 'Tech Lead',
//     description:
//       'Built personalized learning platform with AI tutoring, progress tracking, and collaborative features.',
//     imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
//     imageAlt: 'AI-Powered Learning Platform',
//     skills: ['React', 'TypeScript', 'Node.js', 'TensorFlow', 'WebRTC'],
//     stats: [
//       '500K+ active students',
//       '85% course completion rate',
//       '92% student satisfaction score',
//     ],
//     liveLink: '#',
//   },
// ];

// const workExperience = [
//   {
//     title: 'Frontend Developer (Intern)',
//     company: 'SudoTechLabs',
//     duration: 'Jun 2023 - Aug 2023 • Remote',
//     bulletPoints: [
//       'Contributed to frontend UI development for internal tools',
//       'Collaborated with senior devs to fix bugs and write modular React components',
//       'Improved component reusability and reduced styling issues using Bootstrap',
//     ],
//   },
//   {
//     title: 'Project Contributor',
//     company: 'Open Source Projects',
//     duration: '2022 - Present • Remote',
//     bulletPoints: [
//       'Participated in GitHub projects and improved code readability',
//       'Learned agile collaboration and version control practices',
//       'Actively contributed to small utilities in JavaScript',
//     ],
//   },
// ];

// const technicalSkills = {
//   frontend: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Bootstrap', 'Tailwind CSS', 'SASS'],
//   backend: ['Node.js', 'Python', 'Express.js', 'Django', 'GraphQL', 'REST APIs'],
//   database: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'],
//   cloud: ['AWS', 'Docker', 'Kubernetes', 'Serverless', 'CI/CD'],
//   tools: ['VSCode', 'Git', 'GitHub', 'Strapi', 'Jest', 'Cypress', 'Figma', 'Jira'],
// };

// const educationData = [
//   { degree: 'Bachelor of Computer Applications (BCA)', institution: 'University of Rajasthan', years: '2021–2024' },
//   { degree: 'High School (12th Grade)', institution: 'Govt. Senior Secondary School', years: '2021' },
// ];

// const interestsData = [
//   'Open Source Contribution',
//   'Learning New Frameworks',
//   'Functional Programming',
//   'UI/UX Design',
//   'Technical Blogging',
// ];

// const testimonials = [
//   {
//     quote: 'Pramod is a quick learner and shows great enthusiasm in frontend projects. His dedication to refining his skills is commendable.',
//     name: 'Sarah Chen',
//     title: 'CTO, SudoTechLabs',
//   },
//   {
//     quote: 'Working with Pramod was an absolute pleasure. He brought a fresh perspective to our UI challenges and executed tasks efficiently.',
//     name: 'Michael Rodriguez',
//     title: 'Project Manager, RetailMax',
//   },
// ];

// // --- 2. HELPER COMPONENTS ---

// interface SkillTagProps {
//   children: React.ReactNode;
// }
// const SkillTag: React.FC<SkillTagProps> = ({ children }) => (
//   <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors border-orange-300 text-orange-600 text-xs bg-orange-50/50">
//     {children}
//   </div>
// );

// interface StatItemProps {
//   children: React.ReactNode;
// }
// const StatItem: React.FC<StatItemProps> = ({ children }) => (
//   <div className="flex items-center gap-2">
//     <TrendingUp className="h-4 w-4 text-green-500" />
//     <span className="text-sm text-gray-600">{children}</span>
//   </div>
// );

// const ProjectCard: React.FC<typeof featuredProjects[0]> = ({
//   title,
//   role,
//   description,
//   imageUrl,
//   skills,
//   stats,
//   liveLink,
//   caseStudyLink,
// }) => (
//   <div className="bg-white/10 backdrop-blur-md border border-orange-200/40 rounded-xl p-6 hover:shadow-lg transition-shadow">
//     <div className="flex flex-col md:flex-row gap-6">
//       <img src={imageUrl} alt={title} className="w-full md:w-48 h-32 object-cover rounded-lg" />
//       <div className="flex-1">
//         <div className="flex items-start justify-between mb-3">
//           <h3 className="text-xl font-bold text-white">{title}</h3>
//           <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-orange-100 text-orange-800">
//             {role}
//           </div>
//         </div>
//         <p className="text-gray-200 mb-4">{description}</p>
//         <div className="flex flex-wrap gap-2 mb-4">
//           {skills.map((skill) => (
//             <SkillTag key={skill}>{skill}</SkillTag>
//           ))}
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//           {/* <div className="space-y-2">{stats.slice(0, 2).map((s) => <StatItem key={s}>{s}</StatItem>)}</div> */}
//           {/* <div className="space-y-2">{stats.slice(2).map((s) => <StatItem key={s}>{s}</StatItem>)}</div> */}
//         </div>
//         <div className="flex gap-3">
//           {liveLink && (
//             <a
//               href={liveLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center justify-center gap-2 text-sm font-medium bg-orange-600 hover:bg-orange-700 h-9 rounded-md px-3 text-white transition-colors"
//             >
//               <ExternalLink className="h-4 w-4" /> View Live
//             </a>
//           )}
//           {caseStudyLink && (
//             <a
//               href={caseStudyLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center justify-center gap-2 text-sm font-medium border bg-background hover:bg-orange-50 h-9 rounded-md px-3 border-orange-300 text-orange-600 transition-colors"
//             >
//               Case Study
//             </a>
//           )}
//         </div>
//       </div>
//     </div>
//   </div>
// );

// // Work Experience Item
// const ExperienceItem: React.FC<typeof workExperience[0] & { isLast: boolean }> = ({
//   title,
//   company,
//   duration,
//   bulletPoints,
//   isLast,
// }) => (
//   <div className={`relative pl-8 border-l-2 border-orange-400 ${isLast ? 'last:border-l-0' : ''}`}>
//     <div className="absolute -left-2 top-0 w-4 h-4 bg-orange-600 rounded-full"></div>
//     <div className="mb-4">
//       <h3 className="text-xl font-bold text-white">{title}</h3>
//       <p className="text-orange-300 font-semibold">{company}</p>
//       <p className="text-gray-300">{duration}</p>
//     </div>
//     <ul className="space-y-2">
//       {bulletPoints.map((point, index) => (
//         <li key={index} className="flex items-start gap-3">
//           <Star className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
//           <span className="text-gray-200">{point}</span>
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// // --- SIDEBAR CARDS ---

// const ContactCard = () => (
//   <section className="rounded-lg bg-white/10 backdrop-blur-md text-white border-0 shadow-lg sticky top-8">
//     <div className="p-6">
//       <h3 className="text-lg font-bold text-orange-300 mb-4">Contact Information</h3>
//       <div className="space-y-3">
//         <div className="flex items-center gap-3">
//           <Mail className="h-4 w-4 text-orange-500" /> <a href={`mailto:${profileData.contact.email}`} className="hover:text-orange-400"> {profileData.contact.email} </a>
//         </div>
//         <div className="flex items-center gap-3">
//           <Phone className="h-4 w-4 text-orange-500" /> <a href={`tel:${profileData.contact.phone}`} className="hover:text-orange-400"> {profileData.contact.phone} </a>
//         </div>
//         <div className="flex items-center gap-3">
//           <MapPin className="h-4 w-4 text-orange-500" /> <span>{profileData.location}</span>
//         </div>
//       </div>
//     </div>
//   </section>
// );

// const SkillsCard = () => (
//   <section className="rounded-lg bg-white/10 backdrop-blur-md text-white border-0 shadow-lg">
//     <div className="p-6">
//       <h3 className="text-lg font-bold text-orange-300 mb-4 flex items-center gap-2">
//         <Zap className="h-5 w-5 text-orange-500" /> Technical Skills
//       </h3>
//       <div className="space-y-4">
//         {Object.entries(technicalSkills).map(([category, skills]) => (
//           <div key={category}>
//             <h4 className="font-semibold text-orange-200 capitalize mb-2">{category}</h4>
//             <div className="flex flex-wrap gap-2">
//               {skills.map((skill) => (
//                 <SkillTag key={skill}>{skill}</SkillTag>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// const EducationCard = () => (
//   <section className="rounded-lg bg-white/10 backdrop-blur-md text-white border-0 shadow-lg">
//     <div className="p-6">
//       <h3 className="text-lg font-bold text-orange-300 mb-4 flex items-center gap-2">
//         <BookOpen className="h-5 w-5 text-orange-500" /> Education
//       </h3>
//       <div className="space-y-4">
//         {educationData.map((edu, index) => (
//           <div key={index} className="border-l-4 border-orange-400 pl-3">
//             <p className="font-semibold text-white">{edu.degree}</p>
//             <p className="text-gray-300">{edu.institution}</p>
//             <p className="text-sm text-gray-400">{edu.years}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// const InterestsCard = () => (
//   <section className="rounded-lg bg-white/10 backdrop-blur-md text-white border-0 shadow-lg">
//     <div className="p-6">
//       <h3 className="text-lg font-bold text-orange-300 mb-4 flex items-center gap-2">
//         <Heart className="h-5 w-5 text-orange-500" /> Interests & Hobbies
//       </h3>
//       <div className="flex flex-wrap gap-2">
//         {interestsData.map((interest, index) => (
//           <SkillTag key={index}>{interest}</SkillTag>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// // --- MAIN COMPONENT ---

// const TeamMembers: React.FC = () => {
//   return (
//     <section className="min-h-screen bg-gradient-to-r from-[#1a2940] to-[#24344d] text-white">
//       {/* Header Section */}
//       <section className="relative">
//         <div
//           className="h-96 bg-cover bg-center relative"
//           style={{ backgroundImage: `url('${profileData.bannerImageUrl}')` }}
//         ></div>

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative -mt-32">
//           <div className="flex flex-col lg:flex-row items-start lg:items-end gap-8">
//             <div className="relative">
//               <img
//                 src={profileData.profileImageUrl}
//                 alt={profileData.name}
//                 className="w-48 h-48 rounded-full border-8 border-white shadow-2xl object-cover"
//               />
//               <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white"></div>
//             </div>

//             <section className="flex-1 bg-white/10 backdrop-blur-lg rounded-xl shadow-xl p-8 lg:mb-8">
//               <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
//                 <div>
//                   <h1 className="text-4xl font-bold text-white">{profileData.name}</h1>
//                   <p className="text-xl text-orange-300 font-semibold mb-4">
//                     {profileData.title}
//                   </p>
//                   <div className="flex flex-wrap items-center gap-4">
//                     <div className="flex items-center gap-2">
//                       <MapPin className="h-4 w-4" /> <span>{profileData.location}</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <svg
//                         width="20"
//                         height="20"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         className="h-4 w-4"
//                       >
//                         <path d="M8 2v4"></path>
//                         <path d="M16 2v4"></path>
//                         <rect width="18" height="18" x="3" y="4" rx="2"></rect>
//                         <path d="M3 10h18"></path>
//                       </svg>
//                       <span>Joined {profileData.joinedYear}</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex flex-col gap-4">
//                   <button className="inline-flex items-center justify-center gap-2 text-sm font-medium bg-orange-600 hover:bg-orange-700 h-9 rounded-md px-4 text-white">
//                     <Mail className="h-4 w-4" /> Contact
//                   </button>

//                   <div className="flex gap-4 justify-center lg:justify-end text-white">
//                     <a
//                       href={profileData.social.linkedin}
//                       target="_blank"
//                       className="hover:text-orange-400"
//                       rel="noreferrer"
//                     >
//                       <svg
//                         width="20"
//                         height="20"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         className="h-5 w-5"
//                       >
//                         <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
//                         <rect width="4" height="12" x="2" y="9"></rect>
//                         <circle cx="4" cy="4" r="2"></circle>
//                       </svg>
//                     </a>

//                     <a
//                       href={profileData.social.github}
//                       target="_blank"
//                       className="hover:text-orange-400"
//                       rel="noreferrer"
//                     >
//                       <svg
//                         width="20"
//                         height="20"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         className="h-5 w-5"
//                       >
//                         <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
//                         <path d="M9 18c-4.51 2-5-2-7-2"></path>
//                       </svg>
//                     </a>

//                     <a
//                       href={profileData.social.website}
//                       target="_blank"
//                       className="hover:text-orange-400"
//                       rel="noreferrer"
//                     >
//                       <Globe className="h-5 w-5" />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </section>
//           </div>
//         </div>
//       </section>

//       {/* MAIN CONTENT */}
//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

//             {/* LEFT SIDE CONTENT */}
//             <section className="lg:col-span-2 space-y-12">

//               {/* About Me */}
//               <section className="rounded-lg bg-white/10 backdrop-blur-md text-white shadow-lg">
//                 <div className="p-8">
//                   <h2 className="text-2xl font-bold flex items-center gap-3 text-orange-300">
//                     <Users className="h-6 w-6" /> About Me
//                   </h2>
//                   <p
//                     className="text-gray-200 mt-4 leading-relaxed"
//                     dangerouslySetInnerHTML={{
//                       __html: profileData.about.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'),
//                     }}
//                   />
//                 </div>
//               </section>

//               {/* Featured Projects */}
//               <section className="rounded-lg bg-white/10 backdrop-blur-md shadow-lg">
//                 <div className="p-8">
//                   <h2 className="text-2xl font-bold text-orange-300 mb-8 flex items-center gap-3">
//                     <Code className="h-6 w-6" /> Featured Projects
//                   </h2>
//                   <div className="space-y-8">
//                     {featuredProjects.map((project, index) => (
//                       <ProjectCard key={index} {...project} />
//                     ))}
//                   </div>
//                 </div>
//               </section>

//               {/* Work Experience */}
//               <section className="rounded-lg bg-white/10 backdrop-blur-md shadow-lg">
//                 <div className="p-8">
//                   <h2 className="text-2xl font-bold text-orange-300 mb-8 flex items-center gap-3">
//                     <Briefcase className="h-6 w-6" /> Work Experience
//                   </h2>
//                   <div className="space-y-8">
//                     {workExperience.map((exp, index) => (
//                       <ExperienceItem key={index} {...exp} isLast={index === workExperience.length - 1} />
//                     ))}
//                   </div>
//                 </div>
//               </section>

//               {/* Testimonials */}
//               <section className="rounded-lg bg-white/10 backdrop-blur-md shadow-lg">
//                 <div className="p-8">
//                   <h2 className="text-2xl font-bold text-orange-300 mb-8 flex items-center gap-3">
//                     <Heart className="h-6 w-6" /> What Colleagues Say
//                   </h2>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {testimonials.map((testimonial, index) => (
//                       <div key={index} className="bg-orange-50/20 backdrop-blur p-6 rounded-lg">
//                         <p className="text-gray-200 italic mb-4">"{testimonial.quote}"</p>
//                         <div>
//                           <p className="font-semibold text-white">{testimonial.name}</p>
//                           <p className="text-sm text-orange-300">{testimonial.title}</p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </section>

//             </section>

//             {/* SIDEBAR */}
//             <section className="lg:col-span-1 space-y-8">
//               <ContactCard />
//               <SkillsCard />
//               <EducationCard />
//               <InterestsCard />
//             </section>

//           </div>
//         </div>
//       </section>
//     </section>
//   );
// };

// export default TeamMembers;






import React from 'react';
import {
  Users,
  Code,
  Briefcase,
  Heart,
  Mail,
  Phone,
  MapPin,
  Zap,
  Star,
  ExternalLink,
  TrendingUp,
  BookOpen,
  Globe,
} from 'lucide-react';

// --- 1. DATA DEFINITIONS ---

const profileData = {
  name: 'Pramod Saini',
  title: 'BCA Graduate | Front-End Developer',
  location: 'Jaipur, India',
  joinedYear: '2021',
  contact: {
    email: 'pramodsaini189@gmail.com',
    phone: '+91 820 917 5003',
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/pramod-saini-0577a5229/',
    github: 'https://github.com/Pramod-saini',
    website: 'https://alexjohnson.dev',
  },
  about:
    'A **Graduate** passionate about **front-end development** with solid skills in **HTML, CSS, JavaScript, and ReactJS**. Strong analytical thinking and a desire to build user-friendly web interfaces.',
  profileImageUrl: './src/assets/Pramod.png',
  bannerImageUrl:
    'https://images.unsplash.com/photo-1761319914911-71b059a655d8?ixlib=rb-4.1.0&auto=format&fit=crop&w=1200&q=60',
};

const featuredProjects = [
  {
    title: 'E-Commerce Web Application',
    role: 'Frontend Developer',
    description:
      'Developed a shopping app using React with product browsing, cart management, and secure checkout.',
    imageUrl:
      'https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg',
    skills: ['HTML', 'CSS', 'JavaScript', 'ReactJS'],
    liveLink: '#',
    caseStudyLink: '#',
  },
  {
    title: 'Paper Game Web Application',
    role: 'Game Developer',
    description:
      'Created a browser-based game using JavaScript where players guide a character through obstacles.',
    imageUrl:
      'https://images.pexels.com/photos/955389/pexels-photo-955389.jpeg',
    skills: ['HTML', 'CSS', 'JavaScript'],
    caseStudyLink: '#',
  },
];

const workExperience = [
  {
    title: 'Frontend Developer (Intern)',
    company: 'SudoTechLabs',
    duration: 'Jun 2023 - Aug 2023 • Remote',
    bulletPoints: [
      'Contributed to UI development for internal tools',
      'Built reusable React components',
      'Fixed UI bugs and improved responsiveness',
    ],
  },
  {
    title: 'Project Contributor',
    company: 'Open Source Projects',
    duration: '2022 - Present • Remote',
    bulletPoints: [
      'Collaborated on GitHub projects',
      'Enhanced documentation and code quality',
      'Learned agile collaboration practices',
    ],
  },
];

const technicalSkills = {
  frontend: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Bootstrap', 'Tailwind'],
  backend: ['Node.js', 'Python', 'Express.js'],
  database: ['MongoDB', 'MySQL'],
  tools: ['VSCode', 'Git', 'GitHub', 'Figma'],
};

const educationData = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'University of Rajasthan',
    years: '2021–2024',
  },
  {
    degree: 'High School (12th Grade)',
    institution: 'Govt. Senior Secondary School',
    years: '2021',
  },
];

const interestsData = [
  'Open Source',
  'UI/UX Design',
  'Technical Blogging',
  'Learning Frameworks',
];

const testimonials = [
  {
    quote:
      'Pramod is a quick learner and shows great enthusiasm in frontend projects.',
    name: 'Sarah Chen',
    title: 'CTO, SudoTechLabs',
  },
  {
    quote:
      'Working with Pramod was an absolute pleasure. He brought a fresh perspective to our UI challenges.',
    name: 'Michael Rodriguez',
    title: 'Project Manager, RetailMax',
  },
];

// --- 2. SMALL COMPONENTS ---

const SkillTag = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center rounded-full border border-orange-300 text-orange-600 bg-orange-50 px-2.5 py-0.5 text-xs font-semibold">
    {children}
  </div>
);

const ProjectCard = ({
  title,
  role,
  description,
  imageUrl,
  skills,
  liveLink,
  caseStudyLink,
}: any) => (
  <div className="bg-white border border-orange-100 rounded-xl p-6 shadow-sm hover:shadow-md transition">
    <div className="flex flex-col md:flex-row gap-6">
      <img
        src={imageUrl}
        alt={title}
        className="w-full md:w-48 h-32 object-cover rounded-lg"
      />
      <div className="flex-1">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <span className="text-sm text-orange-600 font-medium">{role}</span>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {skills.map((s: string) => (
            <SkillTag key={s}>{s}</SkillTag>
          ))}
        </div>
        <div className="flex gap-3">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-3 py-1.5 text-sm rounded-md"
            >
              <ExternalLink className="h-4 w-4" /> View Live
            </a>
          )}
          {caseStudyLink && (
            <a
              href={caseStudyLink}
              target="_blank"
              className="inline-flex items-center gap-2 border border-orange-300 text-orange-600 hover:bg-orange-50 px-3 py-1.5 text-sm rounded-md"
            >
              Case Study
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);

const ExperienceItem = ({
  title,
  company,
  duration,
  bulletPoints,
}: any) => (
  <div className="border-l-4 border-orange-500 pl-4">
    <h3 className="text-xl font-bold text-gray-900">{title}</h3>
    <p className="text-orange-600 font-semibold">{company}</p>
    <p className="text-sm text-gray-500 mb-2">{duration}</p>
    <ul className="list-disc ml-5 text-gray-700 space-y-1">
      {bulletPoints.map((point: string, i: number) => (
        <li key={i}>{point}</li>
      ))}
    </ul>
  </div>
);

// --- 3. MAIN COMPONENT ---

const TeamMembers: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-orange-50 via-white to-orange-100 text-gray-900">
      {/* Header */}
      <div
        className="h-80 bg-cover bg-center relative"
        style={{ backgroundImage: `url('${profileData.bannerImageUrl}')` }}
      ></div>

      <div className="max-w-6xl mx-auto px-6 relative -mt-24">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-6">
            <img
              src={profileData.profileImageUrl}
              alt={profileData.name}
              className="w-40 h-40 rounded-full border-4 border-orange-200 shadow-lg"
            />
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold">{profileData.name}</h1>
              <p className="text-orange-600 font-medium mb-2">
                {profileData.title}
              </p>
              <p className="text-gray-600 flex items-center justify-center md:justify-start gap-2">
                <MapPin className="h-4 w-4 text-orange-500" />
                {profileData.location}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="md:col-span-2 space-y-10">
          {/* About */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold text-orange-600 mb-4 flex items-center gap-2">
              <Users className="h-6 w-6" /> About Me
            </h2>
            <p
              className="text-gray-700"
              dangerouslySetInnerHTML={{
                __html: profileData.about.replace(
                  /\*\*(.*?)\*\*/g,
                  '<strong>$1</strong>'
                ),
              }}
            />
          </div>

          {/* Projects */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold text-orange-600 mb-6 flex items-center gap-2">
              <Code className="h-6 w-6" /> Featured Projects
            </h2>
            <div className="space-y-6">
              {featuredProjects.map((p, i) => (
                <ProjectCard key={i} {...p} />
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold text-orange-600 mb-6 flex items-center gap-2">
              <Briefcase className="h-6 w-6" /> Work Experience
            </h2>
            <div className="space-y-6">
              {workExperience.map((exp, i) => (
                <ExperienceItem key={i} {...exp} />
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Contact */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-bold text-orange-600 mb-4">
              Contact Info
            </h3>
            <p className="text-gray-700">
              <Mail className="inline-block h-4 w-4 mr-2 text-orange-500" />
              {profileData.contact.email}
            </p>
            <p className="text-gray-700">
              <Phone className="inline-block h-4 w-4 mr-2 text-orange-500" />
              {profileData.contact.phone}
            </p>
          </div>

          {/* Education */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-bold text-orange-600 mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5" /> Education
            </h3>
            {educationData.map((e, i) => (
              <div key={i} className="mb-3">
                <p className="font-semibold">{e.degree}</p>
                <p className="text-sm text-gray-600">{e.institution}</p>
                <p className="text-xs text-gray-500">{e.years}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
