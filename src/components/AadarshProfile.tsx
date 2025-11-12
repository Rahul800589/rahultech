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
//   ExternalLink,
//   Star,
//   TrendingUp,
//   Linkedin,
//   Github,
//   Globe,
//   Calendar,
// } from 'lucide-react';

// // --- Utility Components (Simplified Placeholders for Readability) ---
// const SkillTag: React.FC<{ children: React.ReactNode }> = ({ children }) => (
//   <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-orange-300 text-white">
//     {children}
//   </div>
// );

// const StatItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
//   <div className="flex items-center gap-2">
//     <TrendingUp className="h-4 w-4 text-green-400" />
//     <span className="text-sm text-gray-200">{children}</span>
//   </div>
// );

// interface ProjectCardProps {
//   title: string;
//   role: string;
//   description: string;
//   imageUrl: string;
//   imageAlt: string;
//   skills: string[];
//   stats?: string[];
//   liveLink: string;
//   caseStudyLink?: string;
// }

// const ProjectCard: React.FC<ProjectCardProps> = ({
//   title,
//   role,
//   description,
//   imageUrl,
//   imageAlt,
//   skills,
//   stats,
//   liveLink,
//   caseStudyLink,
// }) => (
//   <div className="border border-orange-300 rounded-xl p-6 bg-white/10 backdrop-blur shadow-md text-white">
//     <div className="flex flex-col md:flex-row gap-6">
//       <img src={imageUrl} alt={imageAlt} className="w-full md:w-48 h-32 rounded-lg object-cover" />
//       <div className="flex-1">
//         <div className="flex items-start justify-between mb-3">
//           <h3 className="text-xl font-bold mb-1">{title}</h3>
//           <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-orange-600 text-white">
//             {role}
//           </div>
//         </div>
//         <p className="text-gray-200 mb-4">{description}</p>
//         <div className="flex flex-wrap gap-2 mb-4">
//           {skills.map((skill) => (
//             <SkillTag key={skill}>{skill}</SkillTag>
//           ))}
//         </div>

//         {stats && stats.length > 0 && (
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//             <div className="space-y-2">
//               {stats.slice(0, 2).map((stat) => (
//                 <StatItem key={stat}>{stat}</StatItem>
//               ))}
//             </div>
//             <div className="space-y-2">
//               {stats.slice(2).map((stat) => (
//                 <StatItem key={stat}>{stat}</StatItem>
//               ))}
//             </div>
//           </div>
//         )}

//         <div className="flex gap-3">
//           <a
//             href={liveLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center justify-center gap-2 text-sm font-medium bg-orange-600 hover:bg-orange-700 h-9 rounded-md px-3 text-white transition-colors"
//           >
//             <ExternalLink className="h-4 w-4" />
//             View Live
//           </a>
//           {caseStudyLink && (
//             <a
//               href={caseStudyLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center justify-center gap-2 text-sm font-medium border bg-white/5 hover:bg-white/10 h-9 rounded-md px-3 border-orange-300 text-white transition-colors"
//             >
//               Case Study
//             </a>
//           )}
//         </div>
//       </div>
//     </div>
//   </div>
// );

// interface ExperienceItemProps {
//   title: string;
//   company: string;
//   duration: string;
//   location: string;
//   bulletPoints: string[];
//   isLast: boolean;
// }

// const ExperienceItem: React.FC<ExperienceItemProps> = ({
//   title,
//   company,
//   duration,
//   location,
//   bulletPoints,
//   isLast,
// }) => (
//   <div className={`relative pl-8 border-l-2 border-orange-400 ${isLast ? 'last:border-l-0' : ''}`}>
//     <div className="absolute -left-2 top-0 w-4 h-4 bg-orange-600 rounded-full"></div>
//     <div className="mb-4">
//       <h3 className="text-xl font-bold text-white">{title}</h3>
//       <p className="text-orange-300 font-semibold">{company}</p>
//       <p className="text-gray-300">{duration} • {location}</p>
//     </div>
//     <ul className="space-y-2">
//       {bulletPoints.map((point, index) => (
//         <li key={index} className="flex items-start gap-3">
//           <Star className="h-4 w-4 text-orange-400 mt-0.5 flex-shrink-0" />
//           <span className="text-gray-200">{point}</span>
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// // --- Data Structure (Extracted from HTML Snippet) ---
// const featuredProjects: ProjectCardProps[] = [
//   {
//     title: 'Internet Banking System',
//     role: 'Java Developer',
//     description:
//       'Simulated core banking functionality using Java Swing and JDBC. Features include user authentication, fund transfer, and transaction history with an admin dashboard.',
//     imageUrl: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=600&h=400&fit=crop',
//     imageAlt: 'Internet Banking System',
//     skills: ['Java', 'MySQL', 'Swing'],
//     stats: [], // Stats were empty in the original HTML
//     liveLink: '#',
//     caseStudyLink: '#',
//   },
//   {
//     title: 'Men Salon Appointment System',
//     role: 'Full Stack Developer',
//     description:
//       'Web-based appointment booking system for salons with customer login, service selection, and admin schedule management.',
//     imageUrl: 'https://images.pexels.com/photos/34488687/pexels-photo-34488687.jpeg',
//     imageAlt: 'Men Salon Appointment System',
//     skills: ['HTML', 'CSS', 'PHP', 'MySQL'],
//     stats: [], // Stats were empty in the original HTML
//     liveLink: '#',
//     caseStudyLink: '#',
//   },
//   {
//     title: 'Innomind B2B Informatic Website',
//     role: 'Frontend Developer',
//     description:
//       'Developed a B2B website for showcasing electrical, lighting, and retrofitting solutions. Designed with React and Tailwind for clean structure and responsiveness.',
//     imageUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&h=400&fit=crop',
//     imageAlt: 'Innomind B2B Informatic Website',
//     skills: ['React', 'Tailwind CSS', 'JavaScript'],
//     stats: [
//       'Improved inquiry rate by 35%',
//       'SEO-optimized structure with service-specific pages',
//       'Deployed lightweight UI for fast load times',
//     ],
//     liveLink: '#',
//     caseStudyLink: '#',
//   },
//   {
//     title: 'SudoTechlabs IT Website',
//     role: 'Frontend Developer',
//     description:
//       'Worked on the main corporate website redesign using React + Tailwind. Focused on reusable UI blocks, mobile-first design, and smooth animations.',
//     imageUrl:
//       'https://media.istockphoto.com/id/964435456/photo/workplace-of-manometer-plant-staff.jpg?b=1&s=612x612&w=0&k=20&c=ERrO1EsQaTZXboG890w6G0Ky2A46_XefLShOU5dRkqU=',
//     imageAlt: 'SudoTechlabs IT Website',
//     skills: ['React', 'Tailwind CSS', 'JavaScript'],
//     stats: [
//       'Reduced bounce rate by 45%',
//       'Enabled dark/light theme support',
//       'Integrated performance monitoring tools',
//     ],
//     liveLink: '#',
//     caseStudyLink: '#',
//   },
// ];

// const workExperience: ExperienceItemProps[] = [
//   {
//     title: 'Frontend Developer Intern',
//     company: 'SudoTechlabs',
//     duration: 'March 2025 – Present',
//     location: 'Jaipur, Rajasthan',
//     bulletPoints: [
//       'Built responsive dashboards and full websites using React.js and Tailwind CSS',
//       'Created reusable components and integrated APIs',
//       'Improved UI performance and collaborated with cross-functional teams',
//     ],
//     isLast: false,
//   },
//   {
//     title: 'Java Programming Intern',
//     company: 'Softhunters Technology',
//     duration: 'Oct 2024 – Dec 2024',
//     location: 'Jaipur, Rajasthan',
//     bulletPoints: [
//       'Built an Internet Banking System with Java and MySQL',
//       'Implemented secure login, fund transfer, and admin panels',
//       'Increased project efficiency by 25% through optimized logic',
//     ],
//     isLast: true,
//   },
// ];

// const technicalSkills: Record<string, string[]> = {
//   frontend: ['React', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS', 'Redux', 'TypeScript'],
//   backend: ['Node.js', 'Express.js', 'Python', 'Java', 'PHP'],
//   database: ['MySQL', 'MongoDB', 'PostgreSQL'],
//   tools: ['Git', 'GitHub', 'VS Code', 'Figma', 'Jira'],
// };

// // --- Main Component ---
// const AadarshProfile: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-[#1a2940] to-[#24344d] text-white">
//       <section className="relative">
//         <div
//           className="h-96 bg-cover bg-center relative"
//           style={{
//             backgroundImage:
//               'url("https://images.unsplash.com/photo-1761319914911-71b059a655d8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=1000")',
//           }}
//         >
//           <div className="absolute inset-0 "></div>
//         </div>

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative -mt-32">
//           <div className="flex flex-col lg:flex-row items-start lg:items-end gap-8">
//             {/* Profile Image */}
//             <div className="relative">
//               <img
//                 src="./src/assets/Aadarsh.png" // IMPORTANT: Update path if not in /public
//                 alt="Aadarsh Sharma"
//                 className="w-48 h-48 rounded-full border-8 border-white shadow-2xl object-cover"
//               />
//               <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white"></div>
//             </div>

//             {/* Card Content */}
//             <div className="flex-1 bg-white/10 backdrop-blur-lg rounded-xl shadow-xl p-8 lg:mb-8">
//               <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
//                 <div>
//                   <h1 className="text-4xl font-bold mb-2">Aadarsh Sharma</h1>
//                   <p className="text-xl text-orange-300 font-semibold mb-4">
//                     Frontend Developer | React &amp; Tailwind Specialist
//                   </p>

//                   {/* Location + Joined */}
//                   <div className="flex flex-wrap items-center gap-4 text-gray-200">
//                     <div className="flex items-center gap-2">
//                       <MapPin className="h-4 w-4" />
//                       <span>Jaipur, Rajasthan, India</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <Calendar className="h-4 w-4" />
//                       <span>Joined March 2025</span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Action Buttons & Social Links */}
//                 <div className="flex flex-col gap-4">
//                   <div className="flex gap-3">
//                     <button className="inline-flex items-center justify-center gap-2 text-sm font-medium bg-orange-600 hover:bg-orange-700 h-9 rounded-md px-3 text-white">
//                       <Mail className="h-4 w-4 mr-2" />
//                       Contact
//                     </button>
//                   </div>

//                   {/* Social Links */}
//                   <div className="flex gap-3 justify-center lg:justify-end text-white">
//                     <a
//                       href="https://www.linkedin.com/in/aadarsh-sharma-4a5aba336/"
//                       className="hover:text-orange-300"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <Linkedin className="h-5 w-5" />
//                     </a>
//                     <a
//                       href="https://github.com/Aadarsh1511"
//                       className="hover:text-orange-300"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <Github className="h-5 w-5" />
//                     </a>
//                     <a
//                       href="https://aadarshsharma.dev"
//                       className="hover:text-orange-300"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <Globe className="h-5 w-5" />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//             {/* Main Content Column (lg:col-span-2) */}
//             <div className="lg:col-span-2 space-y-12">
//               {/* About Me Card */}
//               <div className="rounded-lg bg-white/5 border-0 shadow-lg">
//                 <div className="p-8">
//                   <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
//                     <Users className="h-6 w-6 text-orange-300" />
//                     About Me
//                   </h2>
//                   <p className="text-gray-200 text-lg leading-relaxed">
//                     Dedicated and detail-oriented <strong>Frontend Developer</strong> with hands-on experience in building responsive web interfaces using <strong>React.js</strong> and <strong>Tailwind CSS</strong>. Skilled in creating clean, scalable components and integrating APIs to enhance user experience. Strong foundation in <strong>Java</strong>, <strong>Python</strong>, and modern development practices. Known for delivering high-quality, maintainable code and collaborating effectively within cross-functional teams to meet project goals.
//                   </p>
//                 </div>
//               </div>

//               {/* Featured Projects Card */}
//               <div className="rounded-lg bg-white/5 border-0 shadow-lg">
//                 <div className="p-8">
//                   <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
//                     <Code className="h-6 w-6 text-orange-300" />
//                     Featured Projects
//                   </h2>
//                   <div className="space-y-8">
//                     {featuredProjects.map((project, index) => (
//                       <ProjectCard key={index} {...project} />
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Work Experience Card */}
//               <div className="rounded-lg bg-white/5 border-0 shadow-lg">
//                 <div className="p-8">
//                   <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
//                     <Briefcase className="h-6 w-6 text-orange-300" />
//                     Work Experience
//                   </h2>
//                   <div className="space-y-8">
//                     {workExperience.map((exp, index) => (
//                       <ExperienceItem key={index} {...exp} />
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* What Colleagues Say Card */}
//               <div className="rounded-lg bg-white/5 border-0 shadow-lg">
//                 <div className="p-8">
//                   <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
//                     <Heart className="h-6 w-6 text-orange-300" />
//                     What Colleagues Say
//                   </h2>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="bg-orange-50/10 p-6 rounded-lg">
//                       <p className="text-gray-200 italic mb-4">
//                         "Aadarsh is a fast learner and a dedicated team player. His attention to UI detail and clean component structure greatly improved our delivery speed."
//                       </p>
//                       <div>
//                         <p className="font-semibold text-white">Rahul Mehta</p>
//                         <p className="text-sm text-orange-300">Team Lead, SudoTechlabs</p>
//                       </div>
//                     </div>
//                     <div className="bg-orange-50/10 p-6 rounded-lg">
//                       <p className="text-gray-200 italic mb-4">
//                         "Aadarsh brought energy and reliability to the internship. His React codebase was highly reusable and cleanly written."
//                       </p>
//                       <div>
//                         <p className="font-semibold text-white">Kavita Sharma</p>
//                         <p className="text-sm text-orange-300">Frontend Lead, Innomind</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Sidebar Column */}
//             <div className="space-y-8">
//               {/* Contact Information Card */}
//               <div className="rounded-lg bg-white/5 border-0 shadow-lg">
//                 <div className="p-6">
//                   <h3 className="text-lg font-bold mb-4">Contact Information</h3>
//                   <div className="space-y-3">
//                     <div className="flex items-center gap-3">
//                       <Mail className="h-4 w-4 text-orange-300" />
//                       <span className="text-sm text-gray-200">sharmaaadarsh04@gmail.com</span>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <Phone className="h-4 w-4 text-orange-300" />
//                       <span className="text-sm text-gray-200">+91 820 917 5003</span>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <MapPin className="h-4 w-4 text-orange-300" />
//                       <span className="text-sm text-gray-200">Jaipur, Rajasthan, India</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Technical Skills Card */}
//               <div className="rounded-lg bg-white/5 border-0 shadow-lg">
//                 <div className="p-6">
//                   <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
//                     <Zap className="h-5 w-5 text-orange-300" />
//                     Technical Skills
//                   </h3>
//                   <div className="space-y-4">
//                     {Object.entries(technicalSkills).map(([category, skills]) => (
//                       <div key={category}>
//                         <h4 className="font-semibold text-orange-300 capitalize mb-2">{category}</h4>
//                         <div className="flex flex-wrap gap-2">
//                           {skills.map((skill) => (
//                             <SkillTag key={skill}>{skill}</SkillTag>
//                           ))}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AadarshProfile;




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
  ExternalLink,
  Star,
  TrendingUp,
  Linkedin,
  Github,
  Globe,
  Calendar,
} from 'lucide-react';

const SkillTag: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-orange-300 text-orange-700 bg-orange-50">
    {children}
  </div>
);

const StatItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex items-center gap-2">
    <TrendingUp className="h-4 w-4 text-green-600" />
    <span className="text-sm text-gray-700">{children}</span>
  </div>
);

interface ProjectCardProps {
  title: string;
  role: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  skills: string[];
  stats?: string[];
  liveLink: string;
  caseStudyLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  role,
  description,
  imageUrl,
  imageAlt,
  skills,
  stats,
  liveLink,
  caseStudyLink,
}) => (
  <div className="border border-orange-200 rounded-xl p-6 bg-white shadow-sm">
    <div className="flex flex-col md:flex-row gap-6">
      <img src={imageUrl} alt={imageAlt} className="w-full md:w-48 h-32 rounded-lg object-cover" />
      <div className="flex-1">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-orange-100 text-orange-700 border-orange-300">
            {role}
          </div>
        </div>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {skills.map((skill) => (
            <SkillTag key={skill}>{skill}</SkillTag>
          ))}
        </div>

        {stats && stats.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {stats.map((stat) => (
              <StatItem key={stat}>{stat}</StatItem>
            ))}
          </div>
        )}

        <div className="flex gap-3">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-sm font-medium bg-orange-600 hover:bg-orange-700 h-9 rounded-md px-3 text-white transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            View Live
          </a>
          {caseStudyLink && (
            <a
              href={caseStudyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-sm font-medium border bg-white hover:bg-orange-50 h-9 rounded-md px-3 border-orange-300 text-orange-700 transition-colors"
            >
              Case Study
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);

interface ExperienceItemProps {
  title: string;
  company: string;
  duration: string;
  location: string;
  bulletPoints: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  duration,
  location,
  bulletPoints,
}) => (
  <div className="border-l-4 border-orange-500 pl-4">
    <h3 className="text-xl font-bold text-gray-900">{title}</h3>
    <p className="text-orange-600 font-semibold">{company}</p>
    <p className="text-gray-600 mb-2">{duration} • {location}</p>
    <ul className="space-y-2">
      {bulletPoints.map((point, index) => (
        <li key={index} className="flex items-start gap-3">
          <Star className="h-4 w-4 text-orange-500 mt-0.5" />
          <span className="text-gray-700">{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

const AadarshProfile: React.FC = () => {
  const featuredProjects: ProjectCardProps[] = [
    {
      title: 'Innomind B2B Informatic Website',
      role: 'Frontend Developer',
      description:
        'Developed a B2B website showcasing lighting and electrical solutions. Built with React & Tailwind CSS for performance and scalability.',
      imageUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&h=400&fit=crop',
      imageAlt: 'Innomind B2B Website',
      skills: ['React', 'Tailwind CSS', 'JavaScript'],
      stats: ['Improved SEO by 30%', 'Faster load times by 45%'],
      liveLink: '#',
      caseStudyLink: '#',
    },
  ];

  const workExperience: ExperienceItemProps[] = [
    {
      title: 'Frontend Developer Intern',
      company: 'SudoTechlabs',
      duration: 'March 2025 – Present',
      location: 'Jaipur, Rajasthan',
      bulletPoints: [
        'Built responsive dashboards with React.js & Tailwind',
        'Developed reusable components and improved performance',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-50 via-white to-orange-100 text-gray-900">
      {/* Header Section */}
      <section className="relative">
        <div
          className="h-96 bg-cover bg-center relative"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1761319914911-71b059a655d8?auto=format&fit=crop&w=1200&q=60")',
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative -mt-32">
          <div className="flex flex-col lg:flex-row items-start lg:items-end gap-8">
            <div className="relative">
              <img
                src="./src/assets/Aadarsh.png"
                alt="Aadarsh Sharma"
                className="w-48 h-48 rounded-full border-8 border-white shadow-2xl object-cover"
              />
              <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white"></div>
            </div>

            <div className="flex-1 bg-white shadow-lg rounded-xl p-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900">Aadarsh Sharma</h1>
                  <p className="text-xl text-orange-600 font-semibold mb-4">
                    Frontend Developer | React & Tailwind Specialist
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-gray-700">
                    <MapPin className="h-4 w-4" />
                    <span>Jaipur, Rajasthan, India</span>
                    <Calendar className="h-4 w-4" />
                    <span>Joined March 2025</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <a
                    href="mailto:sharmaaadarsh04@gmail.com"
                    className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md"
                  >
                    <Mail className="h-4 w-4" /> Contact
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aadarsh-sharma-4a5aba336/"
                    className="hover:text-orange-600"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="https://github.com/Aadarsh1511" className="hover:text-orange-600">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="https://aadarshsharma.dev" className="hover:text-orange-600">
                    <Globe className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              {/* About */}
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-orange-600 mb-6 flex items-center gap-2">
                  <Users className="h-6 w-6" /> About Me
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Passionate <strong>Frontend Developer</strong> skilled in <strong>React</strong> and <strong>Tailwind CSS</strong>. 
                  I enjoy crafting modern interfaces, optimizing performance, and creating scalable codebases.
                </p>
              </div>

              {/* Projects */}
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-orange-600 mb-8 flex items-center gap-2">
                  <Code className="h-6 w-6" /> Featured Projects
                </h2>
                <div className="space-y-8">
                  {featuredProjects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                  ))}
                </div>
              </div>

              {/* Work Experience */}
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-orange-600 mb-8 flex items-center gap-2">
                  <Briefcase className="h-6 w-6" /> Work Experience
                </h2>
                <div className="space-y-8">
                  {workExperience.map((exp, index) => (
                    <ExperienceItem key={index} {...exp} />
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-bold text-orange-600 mb-4">Contact Info</h3>
                <p className="text-gray-700">
                  <Mail className="inline-block h-4 w-4 mr-2 text-orange-500" />
                  sharmaaadarsh04@gmail.com
                </p>
                <p className="text-gray-700">
                  <Phone className="inline-block h-4 w-4 mr-2 text-orange-500" />
                  +91 820 917 5003
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AadarshProfile;
