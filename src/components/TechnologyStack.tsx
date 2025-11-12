// // import React from "react";

// // interface Tech {
// //   name: string;
// //   category: string;
// //   image: string;
// // }

// // const techStack: Tech[] = [
// //   {
// //     name: "React",
// //     category: "Frontend",
// //     image:
// //       "/images/home6.jpeg",
// //   },
// //   {
// //     name: "Node.js",
// //     category: "Backend",
// //     image:
// //       "/images/home7.jpeg",
// //   },
// //   {
// //     name: "Python",
// //     category: "Backend",
// //     image:
// //       "/images/home8.jpeg",
// //   },
// //   {
// //     name: "Java",
// //     category: "Backend",
// //     image:
// //       "/images/home9.jpeg",
// //   },
// //   {
// //     name: "TypeScript",
// //     category: "Frontend",
// //     image:
// //       "/images/home10.jpeg",
// //   },
// //   {
// //     name: "PHP",
// //     category: "Backend",
// //     image:
// //       "/images/home11.jpeg",
// //   },
// //   {
// //     name: "Flutter",
// //     category: "Mobile",
// //     image:
// //       "/images/home12.jpeg",
// //   },
// //   {
// //     name: "React Native",
// //     category: "Mobile",
// //     image:
// //       "/images/home13.jpeg",
// //   },
// //   {
// //     name: "MySQL",
// //     category: "Database",
// //     image:
// //       "/images/home14.jpeg",
// //   },
// //   {
// //     name: "HTML",
// //     category: "Frontend",
// //     image:
// //       "/images/home15.jpeg",
// //   },
// //   {
// //     name: "CSS",
// //     category: "Frontend",
// //     image:
// //       "/images/home16.jpeg",
// //   },
// //   {
// //     name: "JavaScript",
// //     category: "Backend",
// //     image:
// //       "/images/home17.jpeg",
// //   },
// //   {
// //     name: "Next.js",
// //     category: "Backend",
// //     image:
// //       "/images/home18.jpeg",
// //   },
// //   {
// //     name: "Django",
// //     category: "Backend",
// //     image:
// //       "https://images.unsplash.com/photo-1580121441575-41bcb5c6b47c?w=600&auto=format&fit=crop&q=60",
// //   },
// //   {
// //     name: "AI",
// //     category: "Frontend",
// //     image:
// //       "https://plus.unsplash.com/premium_photo-1676637656166-cb7b3a43b81a?w=600&auto=format&fit=crop&q=60",
// //   },
// //   {
// //     name: "Machine Learning",
// //     category: "Backend",
// //     image:
// //       "https://plus.unsplash.com/premium_photo-1677094310899-02303289cadf?w=600&auto=format&fit=crop&q=60",
// //   },
// // ];

// // const TechnologyStack: React.FC = () => {
// //   return (
// //     <section className="py-24 bg-gradient-to-r from-[#1c2b4d] to-[#465669]
// // ">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="text-center mb-20">
// //           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
// //             Cutting-Edge Technology Stack
// //           </h2>
// //           <p className="text-xl text-gray-300 max-w-3xl mx-auto">
// //             We leverage the latest technologies and frameworks to build robust,
// //             scalable, and future-proof solutions
// //           </p>
// //         </div>
// //         <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-8">
// //           {/* React */}
// //           <div className="text-center group">
// //             <div className="relative w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
// //               <img
// //                 src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop"
// //                 alt="React"
// //                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
// //               />
// //               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
// //               <div className="absolute bottom-1 left-1 right-1 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
// //                 Frontend
// //               </div>
// //             </div>
// //             <p className="text-sm font-semibold text-gray-200 group-hover:text-orange-400 transition-colors">
// //               React
// //             </p>
// //           </div>

// //           {/* Node.js */}
// //           <div className="text-center group">
// //             <div className="relative w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
// //               <img
// //                 src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=100&h=100&fit=crop"
// //                 alt="Node.js"
// //                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
// //               />
// //               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
// //               <div className="absolute bottom-1 left-1 right-1 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
// //                 Backend
// //               </div>
// //             </div>
// //             <p className="text-sm font-semibold text-gray-200 group-hover:text-orange-400 transition-colors">
// //               Node.js
// //             </p>
// //           </div>

// //           {/* Python */}
// //           <div className="text-center group">
// //             <div className="relative w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
// //               <img
// //                 src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=100&h=100&fit=crop"
// //                 alt="Python"
// //                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
// //               />
// //               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
// //               <div className="absolute bottom-1 left-1 right-1 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
// //                 Backend
// //               </div>
// //             </div>
// //             <p className="text-sm font-semibold text-gray-200 group-hover:text-orange-400 transition-colors">
// //               Python
// //             </p>
// //           </div>

// //           {/* Java */}
// //           <div className="text-center group">
// //             <div className="relative w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
// //               <img
// //                 src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=100&h=100&fit=crop"
// //                 alt="Java"
// //                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
// //               />
// //               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
// //               <div className="absolute bottom-1 left-1 right-1 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
// //                 Backend
// //               </div>
// //             </div>
// //             <p className="text-sm font-semibold text-gray-200 group-hover:text-orange-400 transition-colors">
// //               Java
// //             </p>
// //           </div>

// //           {/* TypeScript */}
// //           <div className="text-center group">
// //             <div className="relative w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
// //               <img
// //                 src="https://images.unsplash.com/photo-1619410283995-43d9134e7656?w=100&h=100&fit=crop"
// //                 alt="TypeScript"
// //                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
// //               />
// //               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
// //               <div className="absolute bottom-1 left-1 right-1 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
// //                 Frontend
// //               </div>
// //             </div>
// //             <p className="text-sm font-semibold text-gray-200 group-hover:text-orange-400 transition-colors">
// //               TypeScript
// //             </p>
// //           </div>

// //           {/* PHP */}
// //           <div className="text-center group">
// //             <div className="relative w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
// //               <img
// //                 src="https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?w=100&h=100&fit=crop"
// //                 alt="PHP"
// //                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
// //               />
// //               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
// //               <div className="absolute bottom-1 left-1 right-1 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
// //                 Backend
// //               </div>
// //             </div>
// //             <p className="text-sm font-semibold text-gray-200 group-hover:text-orange-400 transition-colors">
// //               PHP
// //             </p>
// //           </div>

// //           {/* Flutter */}
// //           <div className="text-center group">
// //             <div className="relative w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
// //               <img
// //                 src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop"
// //                 alt="Flutter"
// //                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
// //               />
// //               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
// //               <div className="absolute bottom-1 left-1 right-1 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
// //                 Mobile
// //               </div>
// //             </div>
// //             <p className="text-sm font-semibold text-gray-200 group-hover:text-orange-400 transition-colors">
// //               Flutter
// //             </p>
// //           </div>

// //           {/* React Native */}
// //           <div className="text-center group">
// //             <div className="relative w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
// //               <img
// //                 src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=100&h=100&fit=crop"
// //                 alt="React Native"
// //                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
// //               />
// //               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
// //               <div className="absolute bottom-1 left-1 right-1 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
// //                 Mobile
// //               </div>
// //             </div>
// //             <p className="text-sm font-semibold text-gray-200 group-hover:text-orange-400 transition-colors">
// //               React Native
// //             </p>
// //           </div>

// //           {/* MySQL */}
// //           <div className="text-center group">
// //             <div className="relative w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
// //               <img
// //                 src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=100&h=100&fit=crop"
// //                 alt="MySQL"
// //                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
// //               />
// //               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
// //               <div className="absolute bottom-1 left-1 right-1 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
// //                 Database
// //               </div>
// //             </div>
// //             <p className="text-sm font-semibold text-gray-200 group-hover:text-orange-400 transition-colors">
// //               MySQL
// //             </p>
// //           </div>

// //           {/* HTML */}
// //           <div className="text-center group">
// //             <div className="relative w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
// //               <img
// //                 src="https://plus.unsplash.com/premium_photo-1685086785230-2233cf5d8f28?w=600&auto=format&fit=crop&q=60"
// //                 alt="HTML"
// //                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
// //               />
// //               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
// //               <div className="absolute bottom-1 left-1 right-1 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
// //                 Frontend
// //               </div>
// //             </div>
// //             <p className="text-sm font-semibold text-gray-200 group-hover:text-orange-400 transition-colors">
// //               HTML
// //             </p>
// //           </div>

// //           {/* CSS */}
// //           <div className="text-center group">
// //             <div className="relative w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
// //               <img
// //                 src="https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?w=600&auto=format&fit=crop&q=60"
// //                 alt="CSS"
// //                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
// //               />
// //               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
// //               <div className="absolute bottom-1 left-1 right-1 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
// //                 Frontend
// //               </div>
// //             </div>
// //             <p className="text-sm font-semibold text-gray-200 group-hover:text-orange-400 transition-colors">
// //               CSS
// //             </p>
// //           </div>

// //           {/* JavaScript */}
// //           <div className="text-center group">
// //             <div className="relative w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
// //               <img
// //                 src="https://images.unsplash.com/photo-1667372393086-9d4001d51cf1?q=80&w=1332&auto=format&fit=crop"
// //                 alt="JavaScript"
// //                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
// //               />
// //               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
// //               <div className="absolute bottom-1 left-1 right-1 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
// //                 Frontend
// //               </div>
// //             </div>
// //             <p className="text-sm font-semibold text-gray-200 group-hover:text-orange-400 transition-colors">
// //               JavaScript
// //             </p>
// //           </div>

// //           {/* Next.js */}
// //           <div className="text-center group">
// //             <div className="relative w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
// //               <img
// //                 src="https://plus.unsplash.com/premium_photo-1669530958591-15cbad83785b?w=600&auto=format&fit=crop&q=60"
// //                 alt="Next.js"
// //                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
// //               />
// //               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
// //               <div className="absolute bottom-1 left-1 right-1 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
// //                 Frontend/Backend
// //               </div>
// //             </div>
// //             <p className="text-sm font-semibold text-gray-200 group-hover:text-orange-400 transition-colors">
// //               Next.js
// //             </p>
// //           </div>

// //           {/* Django */}
// //           <div className="text-center group">
// //             <div className="relative w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
// //               <img
// //                 src="https://images.unsplash.com/photo-1580121441575-41bcb5c6b47c?w=600&auto=format&fit=crop&q=60"
// //                 alt="Django"
// //                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
// //               />
// //               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
// //               <div className="absolute bottom-1 left-1 right-1 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
// //                 Backend
// //               </div>
// //             </div>
// //             <p className="text-sm font-semibold text-gray-200 group-hover:text-orange-400 transition-colors">
// //               Django
// //             </p>
// //           </div>

// //           {/* AI */}
// //           <div className="text-center group">
// //             <div className="relative w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
// //               <img
// //                 src="https://plus.unsplash.com/premium_photo-1676637656166-cb7b3a43b81a?w=600&auto=format&fit=crop&q=60"
// //                 alt="AI"
// //                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
// //               />
// //               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
// //               <div className="absolute bottom-1 left-1 right-1 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
// //                 AI
// //               </div>
// //             </div>
// //             <p className="text-sm font-semibold text-gray-200 group-hover:text-orange-400 transition-colors">
// //               AI
// //             </p>
// //           </div>

// //           {/* Machine Learning */}
// //           <div className="text-center group">
// //             <div className="relative w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
// //               <img
// //                 src="https://plus.unsplash.com/premium_photo-1677094310899-02303289cadf?w=600&auto=format&fit=crop&q=60"
// //                 alt="Machine Learning"
// //                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
// //               />
// //               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
// //               <div className="absolute bottom-1 left-1 right-1 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
// //                 Backend
// //               </div>
// //             </div>
// //             <p className="text-sm font-semibold text-gray-200 group-hover:text-orange-400 transition-colors">
// //               Machine Learning
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default TechnologyStack;







// import React from "react";

// const TechnologyStack: React.FC = () => {
//   return (
//     <section className="py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-20">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//             Cutting-Edge Technology Stack
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             We leverage the latest technologies and frameworks to build robust,
//             scalable, and future-proof solutions
//           </p>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-8">
//           {[
//             { name: "React", img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop" },
//             { name: "Node.js", img: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=100&h=100&fit=crop" },
//             { name: "Python", img: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=100&h=100&fit=crop" },
//             { name: "Java", img: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=100&h=100&fit=crop" },
//             { name: "TypeScript", img: "https://images.unsplash.com/photo-1619410283995-43d9134e7656?w=100&h=100&fit=crop" },
//             { name: "PHP", img: "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?w=100&h=100&fit=crop" },
//             { name: "Flutter", img: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop" },
//             { name: "React Native", img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=100&h=100&fit=crop" },
//           ].map((tech, i) => (
//             <div key={i} className="text-center group">
//               <div className="relative w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
//                 <img
//                   src={tech.img}
//                   alt={tech.name}
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
//               </div>
//               <p className="text-sm font-semibold text-gray-800 group-hover:text-orange-500 transition-colors">
//                 {tech.name}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TechnologyStack;








import React from "react";

const TechnologyStack: React.FC = () => {
  const technologies = [
    // 🌐 Frontend
    { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Vue.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
    { name: "Angular", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
    { name: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "HTML5", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },

    // ⚙️ Backend
    { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Django", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    { name: "Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Spring Boot", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
    { name: "PHP", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },

    // ☁️ Cloud & DevOps
    { name: "Azure", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
    { name: "Google Cloud", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
    { name: "Docker", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Kubernetes", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
    { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub Actions", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Jenkins", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },

    // 🗄️ Databases
    { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "PostgreSQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Firebase", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "SQLite", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
    { name: "Redis", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    { name: "Oracle", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
    { name: "GraphQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },

    // 📱 Mobile
    { name: "Flutter", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    { name: "React Native", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Swift", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
    { name: "Kotlin", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },

    // 🤖 AI/ML & Data
    { name: "TensorFlow", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "PyTorch", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
    { name: "Pandas", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "NumPy", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "OpenAI API", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Scikit-learn", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Cutting-Edge Technology Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage the latest technologies and frameworks to build robust,
            scalable, and future-proof solutions that empower your business.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 justify-items-center">
          {technologies.map((tech, i) => (
            <div key={i} className="text-center group">
              <div className="relative w-20 h-20 mx-auto mb-4 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 bg-gray-50 flex items-center justify-center">
                <img
                  src={tech.img}
                  alt={tech.name}
                  className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <p className="text-sm font-semibold text-gray-800 group-hover:text-orange-500 transition-colors">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;
