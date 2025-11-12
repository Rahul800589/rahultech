// import React from 'react'

// // ====================================================================
// // ICON COMPONENTS (Simplified Lucide SVG paths for direct embedding)
// // ====================================================================

// const MapPinIcon = (props: React.SVGProps<SVGSVGElement>) => (
//   <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
// )
// const CalendarIcon = (props: React.SVGProps<SVGSVGElement>) => (
//   <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
// )
// const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
//   <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
// )
// const PhoneIcon = (props: React.SVGProps<SVGSVGElement>) => (
//   <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6.86-6.86 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.08 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
// )
// const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
//   <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
// )
// const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
//   <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
// )
// const UsersIcon = (props: React.SVGProps<SVGSVGElement>) => (
//   <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
// )
// const CodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
//   <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
// )
// const ExternalLinkIcon = (props: React.SVGProps<SVGSVGElement>) => (
//   <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
// )
// const AwardIcon = (props: React.SVGProps<SVGSVGElement>) => (
//   <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 22 12 17 17 22 15.79 13.89"/></svg>
// )
// const BookIcon = (props: React.SVGProps<SVGSVGElement>) => (
//   <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5V10a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2m0 0V8m0 0a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2m-2-2v10m-8 2h4"/></svg>
// )
// const ZapIcon = (props: React.SVGProps<SVGSVGElement>) => (
//   <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
// )
// const HeartIcon = (props: React.SVGProps<SVGSVGElement>) => (
//   <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A7 7 0 0 0 12 3a7 7 0 0 0-10 5.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/></svg>
// )


// // ====================================================================
// // DATA STRUCTURES
// // ====================================================================

// interface Project {
//   title: string
//   role: string
//   description: string
//   techStack: string[]
//   imageUrl: string
//   liveLink: string
//   caseStudyLink: string
//   altText: string
// }

// const projectsData: Project[] = [
//   // ... (Your existing projectsData array, kept for completeness)
//   {
//     title: 'Accounting Management System',
//     role: 'Full Stack Developer',
//     description: 'A secure role-based system to manage accounting data using Node.jsauthentication, permissions, and clean CRUD interfaces.',
//     techStack: ['Node.js', 'Express', 'HTML', 'CSS', 'JavaScript', 'SQLite'],
//     imageUrl: 'https://images.pexels.com/photos/210990/pexels-photo-210990.jpeg',
//     liveLink: '#', caseStudyLink: '#', altText: 'Accounting Management System',
//   },
//   {
//     title: 'HDhub4u (Clone)',
//     role: 'Frontend Developer',
//     description: 'Built a media streaming site clone UI to explore front-end development and layout responsiveness.',
//     techStack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
//     imageUrl: 'https://media.istockphoto.com/id/964435456/photo/workplace-of-manometer-plant-staff.jpg?b=1&s=612x612&w=0&k=20&c=ERrO1EsQaTZXboG890w6G0Ky2A46_XefLShOU5dRkqU=',
//     liveLink: '#', caseStudyLink: '#', altText: 'HDhub4u (Clone)',
//   },
//   {
//     title: 'To Do List',
//     role: 'Frontend Developer',
//     description: 'Task management app with add/edit/delete functions and real-time UI updates.',
//     techStack: ['HTML', 'CSS', 'JavaScript'],
//     imageUrl: 'https://images.pexels.com/photos/5912280/pexels-photo-5912280.jpeg',
//     liveLink: '#', caseStudyLink: '#', altText: 'To Do List',
//   },
//   {
//     title: 'Role Based Authentication System',
//     role: 'Backend Developer',
//     description: 'Implemented a Express-based RBAC system using groups and permissions to control access to views, APIs, and content.',
//     techStack: ['Express', 'Node.js', 'SQL'],
//     imageUrl: 'https://images.pexels.com/photos/1750268/pexels-photo-1750268.jpeg',
//     liveLink: '#', caseStudyLink: '#', altText: 'Role Based Authentication System',
//   },
//   {
//     title: 'Rotiyana Food Delivery',
//     role: 'Full Stack Developer',
//     description: 'Food delivery web app built with Node.jsand SQL. Features product management, order placement, and user authentication.',
//     techStack: ['Node.js', 'Express', 'SQL', 'API Integration'],
//     imageUrl: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg',
//     liveLink: '#', caseStudyLink: '#', altText: 'Rotiyana Food Delivery',
//   },
//   {
//     title: 'Yamart Shopping Website',
//     role: 'Full Stack Developer',
//     description: 'An e-commerce site offering products like electronics and personal care. Developed using Node.jsand integrated with APIs.',
//     techStack: ['Express', 'Node.js', 'SQL'],
//     imageUrl: 'https://images.pexels.com/photos/1050244/pexels-photo-1050244.jpeg',
//     liveLink: '#', caseStudyLink: '#', altText: 'Yamart Shopping Website',
//   },
//   {
//     title: 'Node.jsBlog System',
//     role: 'Full Stack Developer',
//     description: 'Blog CMS with markdown support, author attribution, post timestamps, and admin panel management.',
//     techStack: ['Express', 'HTML', 'Node.js'],
//     imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
//     liveLink: '#', caseStudyLink: '#', altText: 'Node.jsBlog System',
//   },
//   {
//     title: 'Node.jsPolls App',
//     role: 'Full Stack Developer',
//     description: 'Poll system where users can create, vote, and manage polls via an admin dashboard.',
//     techStack: ['Express', 'Node.js'],
//     imageUrl: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
//     liveLink: '#', caseStudyLink: '#', altText: 'Node.jsPolls App',
//   },
// ]

// const skillGroups = {
//     'Backend & Frameworks': ['Node.js', 'Express', 'REST APIs', 'Docker'],
//     'Frontend': ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
//     'Databases': ['SQL', 'SQLite', 'MySQL'],
//     'Tools & Version Control': ['Git', 'GitHub'],
// }

// // const educationData = [
// //     {
// //         degree: 'Bachelor of Computer Applications (BCA)',
// //         institution: 'Pratap University, Jaipur',
// //         years: '2021–2024',
// //     },
// //     {
// //         degree: '12th Grade (Intermediate)',
// //         institution: 'Vidyasthali Sr. Sec. School, Rewari',
// //         years: '2019',
// //     },
// //     {
// //         degree: '10th Grade (Matriculation)',
// //         institution: 'Vidyasthali Sr. Sec. School, Rewari',
// //         years: '2016',
// //     },
// // ]

// const certificationData = [
//     { name: 'Node.js Full Stack Developer', issuer: 'Technoglobe' },
//     { name: 'Node.js Developer', issuer: 'SudoTechlabs' },
// ]

// const awardsData = [
//     { name: 'Best Full Stack Developer Intern', issuer: 'Technoglobe', year: 2024 },
// ]

// const interestsData = [
//     'Building Scalable Web Apps', 
//     'Learning Backend Architecture', 
//     'Open Source Projects', 
//     'Watching Documentaries', 
//     'Exploring Frameworks',
// ]


// // ====================================================================
// // REUSABLE COMPONENTS
// // ====================================================================

// const TechTag: React.FC<{ skill: string }> = ({ skill }) => (
//   <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-orange-300 text-orange-600 bg-orange-50/50">
//     {skill}
//   </div>
// )

// const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
//   <div className="border border-orange-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
//     <div className="flex flex-col md:flex-row gap-6">
//       <img
//         src={project.imageUrl}
//         alt={project.altText}
//         className="w-full md:w-48 h-32 object-cover rounded-lg"
//       />
//       <div className="flex-1">
//         <div className="flex items-start justify-between mb-3">
//           <h3 className="text-xl font-bold text-gray-200">{project.title}</h3>
//           <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-orange-100 text-orange-800">
//             {project.role}
//           </div>
//         </div>
//         <p className="text-gray-200 mb-4">{project.description}</p>
//         <div className="flex flex-wrap gap-2 mb-4">
//           {project.techStack.map(skill => (
//             <TechTag key={skill} skill={skill} />
//           ))}
//         </div>
//         <div className="flex gap-3">
//           <a
//             href={project.liveLink}
//             className="inline-flex items-center justify-center gap-2 text-sm font-medium h-9 rounded-md px-3 bg-orange-600 text-white hover:bg-orange-700 transition-colors"
//           >
//             <ExternalLinkIcon className="h-4 w-4" />
//             View Live
//           </a>
//           <button
//             className="inline-flex items-center justify-center gap-2 text-sm font-medium h-9 rounded-md px-3 border border-orange-300 text-orange-600 hover:bg-orange-50 transition-colors"
//           >
//             Case Study
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>
// )


// // ====================================================================
// // RIGHT COLUMN COMPONENTS (All new content for the right-side summary)
// // ====================================================================

// const SkillsCard: React.FC = () => (
//     <div className="rounded-lg bg-gradient-to-r from-[#1a2940] to-[#24344d] text-card-foreground border border-orange-200 shadow-xl p-6 space-y-6 sticky top-8">
//         <h3 className="text-2xl font-bold text-gray-200 mb-4 flex items-center gap-2">
//             <ZapIcon className="h-5 w-5 text-orange-600"/>
//             Technical Skills
//         </h3>
//         {Object.entries(skillGroups).map(([groupTitle, skills]) => (
//             <div key={groupTitle}>
//                 <h4 className="text-lg font-semibold text-orange-700 mb-3 border-b border-orange-100 pb-1">
//                     {groupTitle}
//                 </h4>
//                 <div className="flex flex-wrap gap-2">
//                     {skills.map(skill => (
//                         <TechTag key={skill} skill={skill} />
//                     ))}
//                 </div>
//             </div>
//         ))}
//     </div>
// )

// // const EducationCard: React.FC = () => (
// //     <div className="rounded-lg bg-white text-card-foreground border border-orange-200 shadow-xl p-6 space-y-4">
// //         <h3 className="text-2xl font-bold text-gray-200 mb-4 flex items-center gap-2">
// //             <BookIcon className="h-5 w-5 text-orange-600"/>
// //             Education & Certifications
// //         </h3>
// //         {educationData.map((edu, index) => (
// //             <div key={index} className="border-l-4 border-orange-400 pl-3">
// //                 <p className="text-base font-semibold text-gray-200">{edu.degree}</p>
// //                 <p className="text-sm text-gray-200">{edu.institution}</p>
// //                 <p className="text-xs text-gray-500">{edu.years}</p>
// //             </div>
// //         ))}
        
// //         <div className="pt-4 border-t border-gray-100">
// //             <h4 className="text-lg font-semibold text-orange-700 mb-2">Certifications</h4>
// //             {certificationData.map((cert, index) => (
// //                 <p key={index} className="text-sm text-gray-200">
// //                     <span className="font-medium">{cert.name}</span> - {cert.issuer}
// //                 </p>
// //             ))}
// //         </div>
// //     </div>
// // )

// const AwardsInterestsCard: React.FC = () => (
//     <div className="rounded-lg bg-gradient-to-r from-[#1a2940] to-[#24344d] text-card-foreground border border-orange-200 shadow-xl p-6 space-y-6">
//         <div>
//             <h3 className="text-2xl font-bold text-gray-200 mb-4 flex items-center gap-2">
//                 <AwardIcon className="h-5 w-5 text-orange-600"/>
//                 Awards & Recognition
//             </h3>
//             {awardsData.map((award, index) => (
//                 <div key={index} className="border-l-4 border-green-500 pl-3">
//                     <p className="text-base font-semibold text-gray-200">{award.name}</p>
//                     <p className="text-sm text-gray-200">{award.issuer}, {award.year}</p>
//                 </div>
//             ))}
//         </div>
        
//         <div className="pt-4 border-t border-gray-100">
//             <h3 className="text-2xl font-bold text-gray-200 mb-4 flex items-center gap-2">
//                 <HeartIcon className="h-5 w-5 text-orange-600"/>
//                 Interests & Hobbies
//             </h3>
//             <div className="flex flex-wrap gap-2">
//                 {interestsData.map((interest, index) => (
//                     <TechTag key={index} skill={interest} />
//                 ))}
//             </div>
//         </div>
//     </div>
// )

// // ====================================================================
// // MAIN PROFILE COMPONENT
// // ====================================================================

// const RajSinghShekhawatProfile: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-[#1a2940] to-[#24344d]">
//       {/* Header Section */}
//       <section className="relative">
//         {/* Banner */}
//         <div
//           className="h-96 bg-cover bg-center relative"
//           style={{
//             backgroundImage:
//               "url('https://images.unsplash.com/photo-1761319914911-71b059a655d8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=1000')",
//           }}
//         >
//           <div className="absolute inset-0 "></div>
//         </div>

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative -mt-32">
//           <div className="flex flex-col lg:flex-row items-start lg:items-end gap-8">
//             {/* Profile Picture */}
//             <div className="relative">
//               <img
//                 src="./src/assets/Ram.png" // Change this path to a web URL for production
//                 alt="Raj Singh Shekhawat"
//                 className="w-48 h-48 rounded-full border-8 border-white shadow-2xl object-cover"
//               />
//               <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white"></div>
//             </div>

//             {/* Profile Info Card (Updated Contact Info) */}
//             <div className="flex-1 bg-gradient-to-r from-[#385786] to-[#3b5886] rounded-xl shadow-xl p-8 lg:mb-8">
//               <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
//                 <div>
//                   <h1 className="text-4xl font-bold text-gray-200 mb-2">
//                     Khushbu Singh
//                   </h1>
//                   <p className="text-xl text-orange-600 font-semibold mb-4">
//                    HR Manager
//                   </p>
//                   <div className="flex flex-wrap items-center gap-4 text-gray-200">
                    
//                     {/* Updated: Contact Details */}
//                     <div className="flex items-center gap-2">
//                       <MailIcon className="h-4 w-4 text-gray-200" />
//                       {/* <a href="mailto:shekhawatbanna2003@gmail.com" className="hover:text-orange-500">
//                         shekhawatbanna2003@gmail.com
//                       </a> */}
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <PhoneIcon className="h-4 w-4 text-gray-200" />
//                       <a href="tel:+918209175003" className="hover:text-orange-500">
//                         +91 820 917 5003
//                       </a>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <MapPinIcon className="h-4 w-4 text-gray-200" />
//                       <span>Jaipur, Rajasthan, India</span>
//                     </div>

//                   </div>
//                 </div>

//                 {/* Social Links */}
//                 <div className="flex flex-col gap-4">
//                   <div className="flex gap-3 justify-center lg:justify-end">
//                     <a
//                       href="https://www.linkedin.com/in/raj-singh-shekhawat-22411a308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
//                       className="text-gray-200 hover:text-orange-600"
//                     >
//                       <LinkedinIcon className="h-5 w-5" />
//                     </a>
//                     <a
//                       href="https://share.google/tKqAjkPqBtKgtdqOJ"
//                       className="text-gray-200 hover:text-orange-600"
//                     >
//                       <GithubIcon className="h-5 w-5" />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Main Content Section */}
//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//             {/* Left Column (About Me & Projects) */}
//             <div className="lg:col-span-2 space-y-12">
//               {/* About Me Card */}
//               <div className="rounded-lg bg-card text-card-foreground border-0 shadow-lg">
//                 <div className="p-8">
//                   <h2 className="text-2xl font-bold text-gray-200 mb-6 flex items-center gap-3">
//                     <UsersIcon className="h-6 w-6 text-orange-600" />
//                     About Me
//                   </h2>
//                   <p className="text-gray-200 text-lg leading-relaxed">
//                     Motivated and efficient **Node.js Developer** with hands-on experience in building scalable, data-driven web applications. Proficient in 's MVT architecture**, **RESTful APIs**, and front-end technologies. Adept at delivering robust backend logic and responsive interfaces with a keen eye for performance and security. Eager to contribute to high-impact software solutions in agile team environments.
//                   </p>
//                 </div>
//               </div>

//               {/* Featured Projects Card */}
//               <div className="rounded-lg bg-card text-card-foreground border-0 shadow-lg">
//                 <div className="p-8">
//                   <h2 className="text-2xl font-bold text-gray-200 mb-8 flex items-center gap-3">
//                     <CodeIcon className="h-6 w-6 text-orange-600" />
//                     Featured Projects
//                   </h2>
//                   <div className="space-y-8">
//                     {projectsData.map((project, index) => (
//                       <ProjectCard key={index} project={project} />
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Column (Skills, Education, Awards) - ALL UPDATED */}
//             <div className="lg:col-span-1 space-y-12">
//                 <SkillsCard />
//                 {/* <EducationCard /> */}
//                 <AwardsInterestsCard />
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default RajSinghShekhawatProfile




import React from "react";

const RajSinghShekhawatProfile = () => {
  return (
    // 🌈 Background color changed here
    <div className="min-h-screen bg-gradient-to-r from-orange-50 via-white to-orange-100">
      {/* Header Section */}
      <section className="relative">
        {/* Banner */}
        <div
          className="h-96 bg-cover bg-center relative"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1761319914911-71b059a655d8?auto=format&fit=crop&w=1200&q=60')",
          }}
        ></div>

        {/* Profile Header Card */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative -mt-32">
          <div className="flex flex-col lg:flex-row items-start lg:items-end gap-8">
            {/* Profile Picture */}
            <div className="relative">
              <img
                src="./team-devops.jpg"
                alt="Raj Singh Shekhawat"
                className="w-48 h-48 rounded-full border-8 border-white shadow-2xl object-cover"
              />
              <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white"></div>
            </div>

            {/* Info Card */}
            <div className="flex-1 bg-white/60 backdrop-blur-lg rounded-xl shadow-xl p-8 lg:mb-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">
                    Khushbu Singh
                  </h1>
                  <p className="text-xl text-orange-600 font-semibold mb-4">
                   HR Manager
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-gray-700">
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5A2.25 2.25 0 0 1 19.5 19.5h-15A2.25 2.25 0 0 1 2.25 17.25V6.75M21.75 6.75l-9.75 6-9.75-6"
                        />
                      </svg>
                      <span>shekhawatbanna2003@gmail.com</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 4.5h19.5M2.25 9h19.5m-19.5 4.5h19.5M2.25 18h19.5"
                        />
                      </svg>
                      <span>+91 8209175003</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 20.25a8.25 8.25 0 1 1 0-16.5 8.25 8.25 0 0 1 0 16.5Zm0 0v-3.75"
                        />
                      </svg>
                      <span>Jaipur, Rajasthan, India</span>
                    </div>
                  </div>
                </div>

                {/* Social Icons */}
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/in/raj-singh-shekhawat-22411a308"
                    className="text-gray-700 hover:text-orange-600"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"
                      />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>

                  <a
                    href="https://github.com"
                    className="text-gray-700 hover:text-orange-600"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5a5.5 5.5 0 0 0-1-3.5c.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-700 mb-8">
            Featured Projects
          </h2>

          <div className="bg-white p-8 rounded-lg shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Accounting Management System
            </h3>
            <p className="text-gray-700 mb-3">
              A secure role-based system to manage accounting data using
              Node.js authentication and permissions.
            </p>

            <div className="flex flex-wrap gap-2">
              {["Node.js", "Express", "HTML", "CSS", "JavaScript", "SQLite"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-semibold"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RajSinghShekhawatProfile;
