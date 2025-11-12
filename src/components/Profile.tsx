// import React from 'react';

// // Define the main component function
// const Profile = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-[#1a2940] to-[#24344d]">
//       {/* Header Section */}
//       <section className="relative">
//         <div 
//           className="h-96 bg-cover bg-center relative" 
//           style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1761319914911-71b059a655d8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=1000")' }}
//         >
//           <div className="absolute inset-0"></div>
//         </div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative -mt-32">
//           <div className="flex flex-col lg:flex-row items-start lg:items-end gap-8">
//             <div className="relative">
//               <img 
//                 src="./src/assets/Aakash.jpeg" 
//                 alt="Aakash Kumawat" 
//                 className="w-48 h-48 rounded-full border-8 border-white shadow-2xl object-cover"
//               />
//               <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white"></div>
//             </div>
//             <div className="flex-1 bg-gradient-to-r from-[#314768] to-[#375483] rounded-xl shadow-xl p-8 lg:mb-8">
//               <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
//                 <div>
//                   <h1 className="text-4xl font-bold text-gray-200 mb-2">Aakash Kumawat</h1>
//                   <p className="text-xl text-orange-600 font-semibold mb-4">Python Developer</p>
//                   <div className="flex flex-wrap items-center gap-4 text-gray-200">
//                     <div className="flex items-center gap-2">
//                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin h-4 w-4">
//                         <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
//                         <circle cx="12" cy="10" r="3" />
//                       </svg>
//                       <span>Jaipur, Rajasthan, India</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar h-4 w-4">
//                         <path d="M8 2v4" />
//                         <path d="M16 2v4" />
//                         <rect width="18" height="18" x="3" y="4" rx="2" />
//                         <path d="M3 10h18" />
//                       </svg>
//                       <span>Joined April 2025</span>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex flex-col gap-4">
//                   <div className="flex gap-3">
//                     <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary hover:bg-primary/90 h-9 rounded-md px-3 gradient-orange text-white">
//                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail h-4 w-4 mr-2">
//                         <rect width="20" height="16" x="2" y="4" rx="2" />
//                         <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
//                       </svg>
//                       Contact
//                     </button>
//                   </div>
//                   <div className="flex gap-3 justify-center lg:justify-end">
//                     <a href="https://linkedin.com/in/akshmat243" className="text-gray-200 hover:text-orange-600">
//                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin h-5 w-5">
//                         <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
//                         <rect width="4" height="12" x="2" y="9" />
//                         <circle cx="4" cy="4" r="2" />
//                       </svg>
//                     </a>
//                     <a href="https://github.com/akshmat243" className="text-gray-200 hover:text-orange-600">
//                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github h-5 w-5">
//                         <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
//                         <path d="M9 18c-4.51 2-5-2-7-2" />
//                       </svg>
//                     </a>
//                     <a href="https://akshmat243.github.io" className="text-gray-200 hover:text-orange-600">
//                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe h-5 w-5">
//                         <circle cx="12" cy="12" r="10" />
//                         <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
//                         <path d="M2 12h20" />
//                       </svg>
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
            
//             {/* Left Column (About, Projects, Experience, Testimonials) */}
//             <div className="lg:col-span-2 space-y-12">
              
//               {/* About Me */}
//               <div className="rounded-lg bg-card text-card-foreground border-0 shadow-lg">
//                 <div className="p-8">
//                   <h2 className="text-2xl font-bold text-gray-200 mb-6 flex items-center gap-3">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users h-6 w-6 text-orange-600">
//                       <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
//                       <circle cx="9" cy="7" r="4" />
//                       <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
//                       <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//                     </svg>
//                     About Me
//                   </h2>
//                   <p className="text-gray-200 text-lg leading-relaxed">
//                     Python Developer with a BCA degree and strong skills in Django, Python, and JavaScript. Experienced in building responsive and scalable web applications, improving performance, and integrating third-party APIs. Passionate about delivering user-centric and efficient solutions.
//                   </p>
//                 </div>
//               </div>

//               {/* Featured Projects */}
//               <div className="rounded-lg bg-card text-card-foreground border-0 shadow-lg">
//                 <div className="p-8">
//                   <h2 className="text-2xl font-bold text-gray-200 mb-8 flex items-center gap-3">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code h-6 w-6 text-orange-600">
//                       <polyline points="16 18 22 12 16 6" />
//                       <polyline points="8 6 2 12 8 18" />
//                     </svg>
//                     Featured Projects
//                   </h2>
//                   <div className="space-y-8">
                    
//                     {/* Project 1 */}
//                     <div className="border border-orange-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
//                       <div className="flex flex-col md:flex-row gap-6">
//                         <img 
//                           src="https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?w=600&h=400&fit=crop" 
//                           alt="ConnectSphere" 
//                           className="w-full md:w-48 h-32 object-cover rounded-lg"
//                         />
//                         <div className="flex-1">
//                           <div className="flex items-start justify-between mb-3">
//                             <h3 className="text-xl font-bold text-gray-200">ConnectSphere</h3>
//                             <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-orange-100 text-orange-800">
//                               Full Stack Developer
//                             </div>
//                           </div>
//                           <p className="text-gray-200 mb-4">A social media platform with secure authentication, profile customization, and interaction features.</p>
//                           <div className="flex flex-wrap gap-2 mb-4">
//                             <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-orange-300 text-orange-600">Django</div>
//                             <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-orange-300 text-orange-600">Python</div>
//                             <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-orange-300 text-orange-600">JavaScript</div>
//                             <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-orange-300 text-orange-600">HTML</div>
//                             <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-orange-300 text-orange-600">CSS</div>
//                           </div>
//                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                             <div className="space-y-2"></div>
//                             <div className="space-y-2"></div>
//                           </div>
//                           <div className="flex gap-3"></div>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Project 2 */}
//                     <div className="border border-orange-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
//                       <div className="flex flex-col md:flex-row gap-6">
//                         <img 
//                           src="https://media.istockphoto.com/id/964435456/photo/workplace-of-manometer-plant-staff.jpg?b=1&s=612x612&w=0&k=20&c=ERrO1EsQaTZXboG890w6G0Ky2A46_XefLShOU5dRkqU=" 
//                           alt="InsightHub Blog Website" 
//                           className="w-full md:w-48 h-32 object-cover rounded-lg"
//                         />
//                         <div className="flex-1">
//                           <div className="flex items-start justify-between mb-3">
//                             <h3 className="text-xl font-bold text-gray-200">InsightHub Blog Website</h3>
//                             <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-orange-100 text-orange-800">
//                               Full Stack Developer
//                             </div>
//                           </div>
//                           <p className="text-gray-200 mb-4">A blogging platform with interactive UI and commenting system to foster user engagement.</p>
//                           <div className="flex flex-wrap gap-2 mb-4">
//                             <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-orange-300 text-orange-600">Django</div>
//                             <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-orange-300 text-orange-600">Python</div>
//                             <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-orange-300 text-orange-600">JavaScript</div>
//                             <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-orange-300 text-orange-600">HTML</div>
//                             <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-orange-300 text-orange-600">CSS</div>
//                           </div>
//                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                             <div className="space-y-2"></div>
//                             <div className="space-y-2"></div>
//                           </div>
//                           <div className="flex gap-3"></div>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Project 3 */}
//                     <div className="border border-orange-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
//                       <div className="flex flex-col md:flex-row gap-6">
//                         <img 
//                           src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=400&fit=crop" 
//                           alt="SmartTask Web Application" 
//                           className="w-full md:w-48 h-32 object-cover rounded-lg"
//                         />
//                         <div className="flex-1">
//                           <div className="flex items-start justify-between mb-3">
//                             <h3 className="text-xl font-bold text-gray-200">SmartTask Web Application</h3>
//                             <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-orange-100 text-orange-800">
//                               Full Stack Developer
//                             </div>
//                           </div>
//                           <p className="text-gray-200 mb-4">Task management app with features like task creation, updating, deletion, and completion tracking.</p>
//                           <div className="flex flex-wrap gap-2 mb-4">
//                             <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-orange-300 text-orange-600">Django</div>
//                             <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-orange-300 text-orange-600">JavaScript</div>
//                             <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-orange-300 text-orange-600">Bootstrap</div>
//                           </div>
//                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                             <div className="space-y-2"></div>
//                             <div className="space-y-2"></div>
//                           </div>
//                           <div className="flex gap-3"></div>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Project 4 */}
//                     <div className="border border-orange-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
//                       <div className="flex flex-col md:flex-row gap-6">
//                         <img 
//                           src="https://media.istockphoto.com/id/964435456/photo/workplace-of-manometer-plant-staff.jpg?b=1&s=612x612&w=0&k=20&c=ERrO1EsQaTZXboG890w6G0Ky2A46_XefLShOU5dRkqU=" 
//                           alt="WeatherVista Application" 
//                           className="w-full md:w-48 h-32 object-cover rounded-lg"
//                         />
//                         <div className="flex-1">
//                           <div className="flex items-start justify-between mb-3">
//                             <h3 className="text-xl font-bold text-gray-200">WeatherVista Application</h3>
//                             <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-orange-100 text-orange-800">
//                               Full Stack Developer
//                             </div>
//                           </div>
//                           <p className="text-gray-200 mb-4">Weather app using OpenWeatherMap and Google Search APIs for real-time updates and visuals.</p>
//                           <div className="flex flex-wrap gap-2 mb-4">
//                             <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-orange-300 text-orange-600">Django</div>
//                             <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-orange-300 text-orange-600">JavaScript</div>
//                             <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-orange-300 text-orange-600">API Integration</div>
//                           </div>
//                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                             <div className="space-y-2"></div>
//                             <div className="space-y-2"></div>
//                           </div>
//                           <div className="flex gap-3">
//                             <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary hover:bg-primary/90 h-9 rounded-md px-3 gradient-orange text-white">
//                               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link h-4 w-4 mr-2">
//                                 <path d="M15 3h6v6" />
//                                 <path d="M10 14 21 3" />
//                                 <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
//                               </svg>
//                               View Live
//                             </button>
//                             <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 border-orange-300 text-orange-600">
//                               Case Study
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Work Experience */}
//               <div className="rounded-lg bg-card text-card-foreground border-0 shadow-lg">
//                 <div className="p-8">
//                   <h2 className="text-2xl font-bold text-gray-200 mb-8 flex items-center gap-3">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase h-6 w-6 text-orange-600">
//                       <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
//                       <rect width="20" height="14" x="2" y="6" rx="2" />
//                     </svg>
//                     Work Experience
//                   </h2>
//                   <div className="space-y-8">
                    
//                     {/* Experience 1 */}
//                     <div className="relative pl-8 border-l-2 border-orange-200 last:border-l-0">
//                       <div className="absolute -left-2 top-0 w-4 h-4 bg-orange-600 rounded-full"></div>
//                       <div className="mb-4">
//                         <h3 className="text-xl font-bold text-gray-200">Python Developer</h3>
//                         <p className="text-orange-600 font-semibold">SudoTechlabs</p>
//                         <p className="text-gray-200">Apr 2025 – Present • Jaipur, Rajasthan</p>
//                       </div>
//                       <ul className="space-y-2">
//                         <li className="flex items-start gap-3">
//                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0">
//                             <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
//                           </svg>
//                           <span className="text-gray-200">Integrated third-party APIs, enhancing platform functionality</span>
//                         </li>
//                         <li className="flex items-start gap-3">
//                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0">
//                             <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
//                           </svg>
//                           <span className="text-gray-200">Collaborated with front-end teams for seamless UI integration</span>
//                         </li>
//                         <li className="flex items-start gap-3">
//                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0">
//                             <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
//                           </svg>
//                           <span className="text-gray-200">Reduced development time by 15%</span>
//                         </li>
//                       </ul>
//                     </div>
                    
//                     {/* Experience 2 */}
//                     <div className="relative pl-8 border-l-2 border-orange-200 last:border-l-0">
//                       <div className="absolute -left-2 top-0 w-4 h-4 bg-orange-600 rounded-full"></div>
//                       <div className="mb-4">
//                         <h3 className="text-xl font-bold text-gray-200">Python Developer</h3>
//                         <p className="text-orange-600 font-semibold">TechnoGlobe</p>
//                         <p className="text-gray-200">Jul 2024 – Mar 2025 • Jaipur, Rajasthan</p>
//                       </div>
//                       <ul className="space-y-2">
//                         <li className="flex items-start gap-3">
//                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0">
//                             <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
//                           </svg>
//                           <span className="text-gray-200">Integrated third-party APIs and optimized SQL queries</span>
//                         </li>
//                         <li className="flex items-start gap-3">
//                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0">
//                             <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
//                           </svg>
//                           <span className="text-gray-200">Reduced server response time by 20%</span>
//                         </li>
//                         <li className="flex items-start gap-3">
//                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0">
//                             <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
//                           </svg>
//                           <span className="text-gray-200">Developed scalable Django backend code</span>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* What Colleagues Say */}
//               {/* <div className="rounded-lg bg-card text-card-foreground border-0 shadow-lg">
//                 <div className="p-8">
//                   <h2 className="text-2xl font-bold text-gray-200 mb-8 flex items-center gap-3">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart h-6 w-6 text-orange-600">
//                       <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
//                     </svg>
//                     What Colleagues Say
//                   </h2>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="bg-orange-50 p-6 rounded-lg">
//                       <p className="text-gray-200 italic mb-4">"Aakash is a highly skilled Python developer. His ability to integrate systems efficiently makes him an asset to any team."</p>
//                       <div>
//                         <p className="font-semibold text-gray-200">Sarah Chen</p>
//                         <p className="text-sm text-orange-600">CTO, SudoTechLabs</p>
//                       </div>
//                     </div>
//                     <div className="bg-orange-50 p-6 rounded-lg">
//                       <p className="text-gray-200 italic mb-4">"Aakash's dedication and technical expertise helped our projects succeed within tight timelines."</p>
//                       <div>
//                         <p className="font-semibold text-gray-200">Michael Rodriguez</p>
//                         <p className="text-sm text-orange-600">Project Manager, TechnoGlobe</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div> */}

//             </div>

//             {/* Right Column (Contact, Skills, Education) */}
//             <div className="space-y-8">
              
//               {/* Contact Information */}
//               <div className="rounded-lg bg-card text-card-foreground border-0 shadow-lg">
//                 <div className="p-6">
//                   <h3 className="text-lg font-bold text-gray-200 mb-4">Contact Information</h3>
//                   <div className="space-y-3">
//                     <div className="flex items-center gap-3">
//                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail h-4 w-4 text-orange-600">
//                         <rect width="20" height="16" x="2" y="4" rx="2" />
//                         <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
//                       </svg>
//                       <span className="text-sm text-gray-200">akshmat243@gmail.com</span>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone h-4 w-4 text-orange-600">
//                         <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
//                       </svg>
//                       <span className="text-sm text-gray-200">+91 820 917 5003</span>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin h-4 w-4 text-orange-600">
//                         <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
//                         <circle cx="12" cy="10" r="3" />
//                       </svg>
//                       <span className="text-sm text-gray-200">Jaipur, Rajasthan, India</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Technical Skills */}
//               <div className="rounded-lg bg-card text-card-foreground border-0 shadow-lg">
//                 <div className="p-6">
//                   <h3 className="text-lg font-bold text-gray-200 mb-4 flex items-center gap-2">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap h-5 w-5 text-orange-600">
//                       <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
//                     </svg>
//                     Technical Skills
//                   </h3>
//                   <div className="space-y-4">
//                     <div>
//                       <h4 className="font-semibold text-gray-800 capitalize mb-2">frontend</h4>
//                       <div className="flex flex-wrap gap-2">
//                         <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-orange-300 text-orange-600 text-xs">HTML</div>
//                         <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-orange-300 text-orange-600 text-xs">CSS</div>
//                         <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-orange-300 text-orange-600 text-xs">Bootstrap</div>
//                         <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-orange-300 text-orange-600 text-xs">JavaScript</div>
//                         <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-orange-300 text-orange-600 text-xs">Responsive Design</div>
//                       </div>
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-800 capitalize mb-2">backend</h4>
//                       <div className="flex flex-wrap gap-2">
//                         <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-orange-300 text-orange-600 text-xs">Python</div>
//                         <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-orange-300 text-orange-600 text-xs">Django</div>
//                       </div>
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-800 capitalize mb-2">database</h4>
//                       <div className="flex flex-wrap gap-2">
//                         <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-orange-300 text-orange-600 text-xs">MySQL</div>
//                         <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-orange-300 text-orange-600 text-xs">MS Access</div>
//                       </div>
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-800 capitalize mb-2">cloud</h4>
//                       <div className="flex flex-wrap gap-2">
//                         <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-orange-300 text-orange-600 text-xs">AWS</div>
//                         <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-orange-300 text-orange-600 text-xs">Docker</div>
//                         <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-orange-300 text-orange-600 text-xs">CI/CD</div>
//                         <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-orange-300 text-orange-600 text-xs">Kubernetes</div>
//                         <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-orange-300 text-orange-600 text-xs">Serverless</div>
//                       </div>
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-800 capitalize mb-2">tools</h4>
//                       <div className="flex flex-wrap gap-2">
//                         <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-orange-300 text-orange-600 text-xs">Git</div>
//                         <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-orange-300 text-orange-600 text-xs">GitHub</div>
//                         <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-orange-300 text-orange-600 text-xs">MS Office</div>
//                         <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-orange-300 text-orange-600 text-xs">Unit Testing</div>
//                         <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-orange-300 text-orange-600 text-xs">Automation</div>
//                         <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-orange-300 text-orange-600 text-xs">Jest</div>
//                         <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-orange-300 text-orange-600 text-xs">Figma</div>
//                         <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-orange-300 text-orange-600 text-xs">Jira</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Education */}
//               <div className="rounded-lg bg-card text-card-foreground border-0 shadow-lg">
//                 <div className="p-6">
//                   <h3 className="text-lg font-bold text-gray-200 mb-4 flex items-center gap-2">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap h-5 w-5 text-orange-600">
//                       <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
//                       <path d="M22 10v6" />
//                       <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
//                     </svg>
//                     Education
//                   </h3>
//                   <div className="space-y-6">
//                     <div>
//                       <h4 className="font-semibold text-gray-200">Python Developer Certification</h4>
//                       <p className="text-orange-600 font-medium">TechnoGlobe, Jaipur</p>
//                       <p className="text-sm text-gray-200">Jul 2024 – Dec 2024 • GPA: </p>
//                       <div className="mt-2"></div>
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-200">Bachelor of Computer Applications (BCA)</h4>
//                       <p className="text-orange-600 font-medium">Parishkar College, Jaipur</p>
//                       <p className="text-sm text-gray-200">2018–2021 • GPA: 75.33%</p>
//                       <div className="mt-2">
//                         <div className="flex items-center gap-2 mt-1">
//                           {/* The SVG code here was incomplete in the original input,
//                               so I've closed the tags to prevent a TSX error.
//                               A full icon path would need to be added here. */}
//                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" /> 
//                         </div>
//                       </div>
//                     </div>
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

// export default Profile;


import React from 'react';

const Profile = () => {
  return (
    // 🌟 Updated background (soft orange gradient)
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
            {/* Profile Image */}
            <div className="relative">
              <img
                src="./src/assets/Aakash.jpeg"
                alt="Aakash Kumawat"
                className="w-48 h-48 rounded-full border-8 border-white shadow-2xl object-cover"
              />
              <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white"></div>
            </div>

            {/* Profile Info Card */}
            <div className="flex-1 bg-white shadow-lg rounded-xl p-8 lg:mb-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">
                    Aakash Kumawat
                  </h1>
                  <p className="text-xl text-orange-600 font-semibold mb-4">
                    Python Developer
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-gray-700">
                    <div className="flex items-center gap-2">
                      📍 <span>Jaipur, Rajasthan, India</span>
                    </div>
                    <div className="flex items-center gap-2">
                      📅 <span>Joined April 2025</span>
                    </div>
                  </div>
                </div>

                {/* Contact & Social Links */}
                <div className="flex flex-col gap-4">
                  <div className="flex gap-3">
                    <button className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white text-sm font-medium rounded-md px-4 py-2 transition">
                      ✉ Contact
                    </button>
                  </div>
                  <div className="flex gap-3 justify-center lg:justify-end text-gray-700">
                    <a
                      href="https://linkedin.com/in/akshmat243"
                      className="hover:text-orange-600"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      🌐 LinkedIn
                    </a>
                    <a
                      href="https://github.com/akshmat243"
                      className="hover:text-orange-600"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      💻 GitHub
                    </a>
                    <a
                      href="https://akshmat243.github.io"
                      className="hover:text-orange-600"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      🌍 Portfolio
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* About Me */}
              <div className="rounded-lg bg-white shadow-md p-8">
                <h2 className="text-2xl font-bold text-orange-600 mb-6 flex items-center gap-2">
                  👨‍💻 About Me
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Python Developer with a BCA degree and strong skills in
                  <strong> Django</strong>, <strong>Python</strong>, and
                  <strong> JavaScript</strong>. Experienced in building
                  responsive and scalable web applications, improving
                  performance, and integrating third-party APIs. Passionate
                  about delivering user-centric and efficient solutions.
                </p>
              </div>

              {/* Featured Projects */}
              <div className="rounded-lg bg-white shadow-md p-8">
                <h2 className="text-2xl font-bold text-orange-600 mb-6 flex items-center gap-2">
                  🚀 Featured Projects
                </h2>

                {/* Project 1 */}
                <div className="border border-orange-200 rounded-xl p-6 mb-8 hover:shadow-lg transition">
                  <div className="flex flex-col md:flex-row gap-6">
                    <img
                      src="https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?w=600&h=400&fit=crop"
                      alt="ConnectSphere"
                      className="w-full md:w-48 h-32 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        ConnectSphere
                      </h3>
                      <p className="text-gray-700 mb-4">
                        A social media platform built with Django, offering
                        secure login, posts, and profile customization.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {['Django', 'Python', 'JavaScript', 'HTML', 'CSS'].map(
                          (skill) => (
                            <span
                              key={skill}
                              className="inline-block bg-orange-50 text-orange-700 border border-orange-300 px-2 py-1 rounded-full text-xs font-semibold"
                            >
                              {skill}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project 2 */}
                <div className="border border-orange-200 rounded-xl p-6 mb-8 hover:shadow-lg transition">
                  <div className="flex flex-col md:flex-row gap-6">
                    <img
                      src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=400&fit=crop"
                      alt="SmartTask Web Application"
                      className="w-full md:w-48 h-32 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        SmartTask Web Application
                      </h3>
                      <p className="text-gray-700 mb-4">
                        A task management web app allowing users to create,
                        update, and track tasks using Django & Bootstrap.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {['Django', 'Bootstrap', 'JavaScript'].map((skill) => (
                          <span
                            key={skill}
                            className="inline-block bg-orange-50 text-orange-700 border border-orange-300 px-2 py-1 rounded-full text-xs font-semibold"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Work Experience */}
              <div className="rounded-lg bg-white shadow-md p-8">
                <h2 className="text-2xl font-bold text-orange-600 mb-6 flex items-center gap-2">
                  💼 Work Experience
                </h2>

                {/* Experience 1 */}
                <div className="border-l-4 border-orange-500 pl-4 mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Python Developer — SudoTechlabs
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Apr 2025 – Present • Jaipur, Rajasthan
                  </p>
                  <ul className="list-disc ml-6 text-gray-700 space-y-1">
                    <li>Integrated third-party APIs for automation tools.</li>
                    <li>Improved backend efficiency by 15%.</li>
                    <li>Collaborated with frontend teams on scalable systems.</li>
                  </ul>
                </div>

                {/* Experience 2 */}
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Python Developer — TechnoGlobe
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Jul 2024 – Mar 2025 • Jaipur, Rajasthan
                  </p>
                  <ul className="list-disc ml-6 text-gray-700 space-y-1">
                    <li>Optimized SQL queries and reduced response time by 20%.</li>
                    <li>Built scalable Django REST APIs.</li>
                    <li>Improved data flow and server-side performance.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-lg font-bold text-orange-600 mb-4">
                  📞 Contact Information
                </h3>
                <p className="text-gray-700 mb-2">
                  ✉️ <strong>Email:</strong> akshmat243@gmail.com
                </p>
                <p className="text-gray-700 mb-2">
                  📱 <strong>Phone:</strong> +91 820 917 5003
                </p>
                <p className="text-gray-700">
                  📍 <strong>Location:</strong> Jaipur, Rajasthan, India
                </p>
              </div>

              {/* Technical Skills */}
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-lg font-bold text-orange-600 mb-4">
                  ⚡ Technical Skills
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Frontend
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {['HTML', 'CSS', 'Bootstrap', 'JavaScript'].map((skill) => (
                        <span
                          key={skill}
                          className="bg-orange-50 text-orange-700 border border-orange-300 px-2 py-1 rounded-full text-xs font-semibold"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Backend
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {['Python', 'Django'].map((skill) => (
                        <span
                          key={skill}
                          className="bg-orange-50 text-orange-700 border border-orange-300 px-2 py-1 rounded-full text-xs font-semibold"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {['Git', 'GitHub', 'VS Code', 'Docker'].map((tool) => (
                        <span
                          key={tool}
                          className="bg-orange-50 text-orange-700 border border-orange-300 px-2 py-1 rounded-full text-xs font-semibold"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-lg font-bold text-orange-600 mb-4">
                  🎓 Education
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Python Developer Certification
                    </h4>
                    <p className="text-sm text-gray-700">
                      TechnoGlobe, Jaipur — Jul 2024 – Dec 2024
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Bachelor of Computer Applications (BCA)
                    </h4>
                    <p className="text-sm text-gray-700">
                      Parishkar College, Jaipur — 2018–2021
                    </p>
                    <p className="text-sm text-gray-600">GPA: 75.33%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
