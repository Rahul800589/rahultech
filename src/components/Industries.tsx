// import { FC } from "react";
// // Add Film to the import list from 'lucide-react'
// import { House, Zap, CircleCheckBig, Target, TrendingUp, ArrowRight, Gamepad2,
//    Heart,
//     Banknote,
//     ShoppingCart,
//     GraduationCap,
//     Building,
//     Truck
//    } from "lucide-react";
  





// const Industries: FC = () => {
//   return (
//     <>
//      <section className="relative py-32 bg-gradient-to-r from-[#1c2b4d] to-[#303e4f] overflow-hidden">
//   <div className="absolute inset-0 h-[470px] sm:h-[900px]"></div>

//   <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
//     <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
//       Industries We Serve
//     </h1>

//     <p className="text-xl text-white/90 mb-10 max-w-4xl mx-auto leading-relaxed">
//       We bring deep industry expertise and innovative technology solutions
//       to transform businesses across diverse sectors, helping
//       organizations achieve their digital transformation goals with
//       tailored approaches that address specific industry challenges.
//     </p>

//     <div className="flex flex-col sm:flex-row gap-6 justify-center">
//       <button
//         className="inline-flex items-center justify-center gap-2 whitespace-nowrap h-11 rounded-md bg-white text-[#1c2b4d] hover:bg-gray-100 px-10 py-4 text-lg font-semibold shadow-lg transition-colors"
//       >
//         Explore Industries
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           stroke-width="2"
//           stroke-linecap="round"
//           stroke-linejoin="round"
//           className="lucide lucide-arrow-right ml-2 h-5 w-5"
//         >
//           <path d="M5 12h14"></path>
//           <path d="m12 5 7 7-7 7"></path>
//         </svg>
//       </button>

//       <button
//         className="inline-flex items-center justify-center gap-2 whitespace-nowrap h-11 rounded-md border-2 border-white text-white hover:bg-white/10 px-10 py-4 text-lg font-medium backdrop-blur-sm transition-colors"
//       >
//         Schedule Consultation
//       </button>
//     </div>
//   </div>
// </section>

//      <section className="py-20 bg-gradient-to-r from-[#1c2b4d] to-[#303e4f] text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//           {/* Industries Served */}
//           <div className="group">
//             <div className="bg-white/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="lucide lucide-users h-10 w-10 text-orange-400"
//               >
//                 <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
//                 <circle cx="9" cy="7" r="4" />
//                 <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
//                 <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//               </svg>
//             </div>
//             <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">
//               25+
//             </div>
//             <div className="text-gray-300 font-medium">Industries Served</div>
//           </div>

//           {/* Enterprise Clients */}
//           <div className="group">
//             <div className="bg-white/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="lucide lucide-building h-10 w-10 text-orange-400"
//               >
//                 <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
//                 <path d="M9 22v-4h6v4" />
//                 <path d="M8 6h.01" />
//                 <path d="M16 6h.01" />
//                 <path d="M12 6h.01" />
//                 <path d="M12 10h.01" />
//                 <path d="M12 14h.01" />
//                 <path d="M16 10h.01" />
//                 <path d="M16 14h.01" />
//                 <path d="M8 10h.01" />
//                 <path d="M8 14h.01" />
//               </svg>
//             </div>
//             <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">
//               200+
//             </div>
//             <div className="text-gray-300 font-medium">Enterprise Clients</div>
//           </div>

//           {/* Countries */}
//           <div className="group">
//             <div className="bg-white/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="lucide lucide-globe h-10 w-10 text-orange-400"
//               >
//                 <circle cx="12" cy="12" r="10" />
//                 <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
//                 <path d="M2 12h20" />
//               </svg>
//             </div>
//             <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">
//               5+
//             </div>
//             <div className="text-gray-300 font-medium">Countries</div>
//           </div>

//           {/* Industry Awards */}
//           <div className="group">
//             <div className="bg-white/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="lucide lucide-award h-10 w-10 text-orange-400"
//               >
//                 <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
//                 <circle cx="12" cy="8" r="6" />
//               </svg>
//             </div>
//             <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">
//               15+
//             </div>
//             <div className="text-gray-300 font-medium">Industry Awards</div>
//           </div>
//         </div>
//       </div>
//     </section>
//    <section className="py-24 bg-gradient-to-r from-[#0f172a] to-[#334155]">
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-20">
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Specialized Industry Solutions</h2>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto">Our industry-specific expertise helps organizations overcome unique challenges and capitalize on opportunities in their respective markets</p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
//             <div className="rounded-lg text-card-foreground overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg group bg-white/10 backdrop-blur-md">
//                 {/* Image Section */}
//                 <div className="relative h-64 overflow-hidden">
//                     <img
//                         src="https://plus.unsplash.com/premium_photo-1698421947098-d68176a8f5b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWklMjBpbiUyMGhlYWx0aGNhcmV8ZW58MHx8MHx8fDA%3D"
//                         alt="Healthcare & Life Sciences"
//                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
//                     <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg">
//                         <Heart className="h-8 w-8 text-orange-600" />
//                     </div>
//                     <div className="absolute bottom-6 left-6 right-6">
//                         <h3 className="text-xl font-bold text-white mb-2">Healthcare & Life Sciences</h3>
//                         <p className="text-white/80 text-sm">Digital health solutions that save lives</p>
//                     </div>
//                 </div>

//                 {/* Content Section */}
//                 <div className="p-8">
//                     <p className="text-gray-300 mb-6 text-base leading-relaxed">
//                         Transform patient care with HIPAA-compliant platforms, telemedicine solutions, AI-powered diagnostics,
//                         and comprehensive healthcare management systems.
//                     </p>
//                     <div className="mb-6">
//                         <h4 className="font-semibold text-white mb-3 flex items-center">
//                             <Zap className="h-4 w-4 text-orange-500 mr-2" /> Our Solutions
//                         </h4>
//                         <div className="grid grid-cols-2 gap-2">
//                             {["Electronic Health Records", "Telemedicine Platforms", "Medical AI & Diagnostics", "Patient Management Systems"].map((item) => (
//                                 <div key={item} className="flex items-center space-x-2">
//                                     <CircleCheckBig className="h-4 w-4 text-green-500 flex-shrink-0" />
//                                     <span className="text-sm text-gray-300">{item}</span>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                     <div className="grid grid-cols-2 gap-4 mb-6">
//                         {[{ value: "50+", label: "Healthcare Clients" }, { value: "2M+", label: "Patients Served" }, { value: "99.9%", label: "Uptime" }, { value: "HIPAA", label: "Compliant" }].map(({ value, label }) => (
//                             <div key={label} className="text-center p-3 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
//                                 <div className="text-lg font-bold text-orange-600">{value}</div>
//                                 <div className="text-xs text-gray-600">{label}</div>
//                             </div>
//                         ))}
//                     </div>
//                     <div className="mb-6">
//                         <h4 className="font-semibold text-white mb-3 flex items-center">
//                             <Target className="h-4 w-4 text-orange-500 mr-2" /> Key Challenges We Solve
//                         </h4>
//                         <div className="flex flex-wrap gap-2">
//                             {["Patient data security", "Regulatory compliance", "Interoperability", "Remote care delivery"].map((tag) => (
//                                 <div key={tag} className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold border-orange-300 text-orange-600 text-xs">
//                                     {tag}
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                     <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg mb-6">
//                         <div className="flex items-center space-x-2 mb-2">
//                             <TrendingUp className="h-4 w-4 text-green-600" />
//                             <span className="font-semibold text-gray-900">Success Story</span>
//                         </div>
//                         <p className="text-sm text-gray-700">Reduced diagnosis time by 40% with AI-powered medical imaging analysis</p>
//                     </div>
//                     <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:opacity-90 h-10 px-4 py-2 w-full transition-all group-hover:shadow-lg">
//                         Learn More About Healthcare Solutions
//                         <ArrowRight className="ml-2 h-4 w-4" />
//                     </button>
//                 </div>
//             </div>

//             <div className="rounded-lg text-card-foreground overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg group bg-white/10 backdrop-blur-md">
//                 {/* Image Section */}
//                 <div className="relative h-64 overflow-hidden">
//                     <img
//                         src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop"
//                         alt="Financial Services"
//                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
//                     <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg">
//                         <Banknote className="h-8 w-8 text-orange-600" />
//                     </div>
//                     <div className="absolute bottom-6 left-6 right-6">
//                         <h3 className="text-xl font-bold text-white mb-2">Financial Services</h3>
//                         <p className="text-white/80 text-sm">Secure fintech solutions for modern banking</p>
//                     </div>
//                 </div>

//                 {/* Content Section */}
//                 <div className="p-8">
//                     <p className="text-gray-300 mb-6 text-base leading-relaxed">
//                         Build trust with secure banking platforms, mobile payment solutions,
//                         fraud detection systems, and regulatory compliance tools.
//                     </p>
//                     <div className="mb-6">
//                         <h4 className="font-semibold text-white mb-3 flex items-center">
//                             <Zap className="h-4 w-4 text-orange-500 mr-2" /> Our Solutions
//                         </h4>
//                         <div className="grid grid-cols-2 gap-2">
//                             {["Digital Banking Platforms", "Payment Processing", "Fraud Detection", "RegTech Solutions"].map((solution) => (
//                                 <div key={solution} className="flex items-center space-x-2">
//                                     <CircleCheckBig className="h-4 w-4 text-green-500 flex-shrink-0" />
//                                     <span className="text-sm text-gray-300">{solution}</span>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                     <div className="grid grid-cols-2 gap-4 mb-6">
//                         {[{ value: "$50B+", label: "Transactions" }, { value: "99.99%", label: "Security" }, { value: "25+", label: "Banks" }, { value: "PCI", label: "DSS Certified" }].map((stat) => (
//                             <div key={stat.label} className="text-center p-3 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
//                                 <div className="text-lg font-bold text-orange-600">{stat.value}</div>
//                                 <div className="text-xs text-gray-600">{stat.label}</div>
//                             </div>
//                         ))}
//                     </div>
//                     <div className="mb-6">
//                         <h4 className="font-semibold text-white mb-3 flex items-center">
//                             <Target className="h-4 w-4 text-orange-500 mr-2" /> Key Challenges We Solve
//                         </h4>
//                         <div className="flex flex-wrap gap-2">
//                             {["Regulatory compliance", "Cybersecurity threats", "Legacy system integration", "Real-time processing"].map((challenge) => (
//                                 <div key={challenge} className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors border-orange-300 text-orange-600 text-xs">
//                                     {challenge}
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                     <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg mb-6">
//                         <div className="flex items-center space-x-2 mb-2">
//                             <TrendingUp className="h-4 w-4 text-green-600" />
//                             <span className="font-semibold text-gray-900">Success Story</span>
//                         </div>
//                         <p className="text-sm text-gray-700">Prevented $10M in fraud losses with real-time AI detection system</p>
//                     </div>
//                     <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:opacity-90 h-10 px-4 py-2 w-full transition-all group-hover:shadow-lg">
//                         Learn More About Healthcare Solutions
//                         <ArrowRight className="ml-2 h-4 w-4" />
//                     </button>
//                 </div>
//             </div>

//             <div className="rounded-lg text-card-foreground overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg group bg-white/10 backdrop-blur-md">
//                 {/* Image Section */}
//                 <div className="relative h-64 overflow-hidden">
//                     <img
//                         src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&auto=format&fit=crop&q=60"
//                         alt="Retail & E-commerce"
//                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
//                     <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg">
//                         <ShoppingCart className="h-8 w-8 text-orange-600" />
//                     </div>
//                     <div className="absolute bottom-6 left-6 right-6">
//                         <h3 className="text-xl font-bold text-white mb-2">Retail &amp; E-commerce</h3>
//                         <p className="text-white/80 text-sm">Omnichannel retail experiences</p>
//                     </div>
//                 </div>

//                 {/* Content Section */}
//                 <div className="p-8">
//                     <p className="text-gray-300 mb-6 text-base leading-relaxed">
//                         Create seamless shopping experiences with AI-powered recommendations,
//                         inventory management, and personalized customer journeys.
//                     </p>
//                     <div className="mb-6">
//                         <h4 className="font-semibold text-white mb-3 flex items-center">
//                             <Zap className="h-4 w-4 text-orange-500 mr-2" /> Our Solutions
//                         </h4>
//                         <div className="grid grid-cols-2 gap-2">
//                             {["E-commerce Platforms", "Inventory Management", "Customer Analytics", "Mobile Commerce"].map((item) => (
//                                 <div key={item} className="flex items-center space-x-2">
//                                     <CircleCheckBig className="h-4 w-4 text-green-500 flex-shrink-0" />
//                                     <span className="text-sm text-gray-300">{item}</span>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                     <div className="grid grid-cols-2 gap-4 mb-6">
//                         {[{ value: "$100M+", label: "GMV" }, { value: "300%", label: "ROI Increase" }, { value: "40+", label: "Brands" }, { value: "98%", label: "Uptime" }].map((stat) => (
//                             <div key={stat.label} className="text-center p-3 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
//                                 <div className="text-lg font-bold text-orange-600">{stat.value}</div>
//                                 <div className="text-xs text-gray-600">{stat.label}</div>
//                             </div>
//                         ))}
//                     </div>
//                     <div className="mb-6">
//                         <h4 className="font-semibold text-white mb-3 flex items-center">
//                             <Target className="h-4 w-4 text-orange-500 mr-2" /> Key Challenges We Solve
//                         </h4>
//                         <div className="flex flex-wrap gap-2">
//                             {["Customer retention", "Inventory optimization", "Multi-channel integration", "Personalization at scale"].map((tag) => (
//                                 <div key={tag} className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold border-orange-300 text-orange-600 text-xs">
//                                     {tag}
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                     <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg mb-6">
//                         <div className="flex items-center space-x-2 mb-2">
//                             <TrendingUp className="h-4 w-4 text-green-600" />
//                             <span className="font-semibold text-gray-900">Success Story</span>
//                         </div>
//                         <p className="text-sm text-gray-700">Increased online revenue by 250% with personalized shopping experiences</p>
//                     </div>
//                     <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:opacity-90 h-10 px-4 py-2 w-full transition-all group-hover:shadow-lg">
//                         Learn More About Healthcare Solutions
//                         <ArrowRight className="ml-2 h-4 w-4" />
//                     </button>
//                 </div>
//             </div>

//             <div className="rounded-lg text-card-foreground overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg group bg-white/10 backdrop-blur-md">
//                 {/* Image Section */}
//                 <div className="relative h-64 overflow-hidden">
//                     <img
//                         src="https://plus.unsplash.com/premium_photo-1750859860252-6d23c5598f7c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGVkdWNhdGlvbiUyMGFuZCUyMGVkdGVjaHxlbnwwfHwwfHx8MA%3D%3D"
//                         alt="Education & EdTech"
//                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
//                     <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg">
//                         <GraduationCap className="h-8 w-8 text-orange-600" />
//                     </div>
//                     <div className="absolute bottom-6 left-6 right-6">
//                         <h3 className="text-xl font-bold text-white mb-2">
//                             Education & EdTech
//                         </h3>
//                         <p className="text-white/80 text-sm">Innovative learning technologies</p>
//                     </div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-8">
//                     <p className="text-gray-300 mb-6 text-base leading-relaxed">
//                         Revolutionize education with learning management systems, virtual
//                         classrooms, AI tutoring, and student analytics platforms.
//                     </p>
//                     <div className="mb-6">
//                         <h4 className="font-semibold text-white mb-3 flex items-center">
//                             <Zap className="h-4 w-4 text-orange-500 mr-2" /> Our Solutions
//                         </h4>
//                         <div className="grid grid-cols-2 gap-2">
//                             {["Learning Management Systems", "Virtual Classrooms", "AI Tutoring", "Student Analytics"].map((solution) => (
//                                 <div key={solution} className="flex items-center space-x-2">
//                                     <CircleCheckBig className="h-4 w-4 text-green-500 flex-shrink-0" />
//                                     <span className="text-sm text-gray-300">{solution}</span>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                     <div className="grid grid-cols-2 gap-4 mb-6">
//                         {[{ value: "1M+", label: "Students" }, { value: "500+", label: "Institutions" }, { value: "85%", label: "Completion Rate" }, { value: "Global", label: "Reach" }].map((stat) => (
//                             <div key={stat.label} className="text-center p-3 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
//                                 <div className="text-lg font-bold text-orange-600">{stat.value}</div>
//                                 <div className="text-xs text-gray-600">{stat.label}</div>
//                             </div>
//                         ))}
//                     </div>
//                     <div className="mb-6">
//                         <h4 className="font-semibold text-white mb-3 flex items-center">
//                             <Target className="h-4 w-4 text-orange-500 mr-2" /> Key Challenges We Solve
//                         </h4>
//                         <div className="flex flex-wrap gap-2">
//                             {["Student engagement", "Personalized learning", "Assessment accuracy", "Accessibility"].map((challenge) => (
//                                 <div key={challenge} className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors border-orange-300 text-orange-600 text-xs">
//                                     {challenge}
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                     <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg mb-6">
//                         <div className="flex items-center space-x-2 mb-2">
//                             <TrendingUp className="h-4 w-4 text-green-600" />
//                             <span className="font-semibold text-gray-900">Success Story</span>
//                         </div>
//                         <p className="text-sm text-gray-700">Improved student outcomes by 35% with adaptive learning technology</p>
//                     </div>
//                     <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:opacity-90 h-10 px-4 py-2 w-full transition-all group-hover:shadow-lg">
//                         Learn More About Healthcare Solutions
//                         <ArrowRight className="ml-2 h-4 w-4" />
//                     </button>
//                 </div>
//             </div>

//             <div className="rounded-lg text-card-foreground overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg group bg-white/10 backdrop-blur-md">
//                 {/* Image Section */}
//                 <div className="relative h-64 overflow-hidden">
//                     <img
//                         src="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=800&h=500&fit=crop"
//                         alt="Manufacturing & Industrial"
//                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
//                     <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg">
//                         <Building className="h-8 w-8 text-orange-600" />
//                     </div>
//                     <div className="absolute bottom-6 left-6 right-6">
//                         <h3 className="text-xl font-bold text-white mb-2">
//                             Manufacturing & Industrial
//                         </h3>
//                         <p className="text-white/80 text-sm">Industry 4.0 transformation</p>
//                     </div>
//                 </div>

//                 {/* Content Section */}
//                 <div className="p-8">
//                     <p className="text-gray-300 mb-6 text-base leading-relaxed">
//                         Optimize operations with IoT sensors, predictive maintenance, supply
//                         chain management, and automated quality control systems.
//                     </p>
//                     <div className="mb-6">
//                         <h4 className="font-semibold text-white mb-3 flex items-center">
//                             <Zap className="h-4 w-4 text-orange-500 mr-2" /> Our Solutions
//                         </h4>
//                         <div className="grid grid-cols-2 gap-2">
//                             {["IoT & Automation", "Predictive Maintenance", "Supply Chain Management", "Quality Control"].map((solution) => (
//                                 <div key={solution} className="flex items-center space-x-2">
//                                     <CircleCheckBig className="h-4 w-4 text-green-500 flex-shrink-0" />
//                                     <span className="text-sm text-gray-300">{solution}</span>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                     <div className="grid grid-cols-2 gap-4 mb-6">
//                         {[{ value: "60%", label: "Cost Reduction" }, { value: "95%", label: "OEE" }, { value: "30+", label: "Factories" }, { value: "Zero", label: "Downtime" }].map((metric) => (
//                             <div key={metric.label} className="text-center p-3 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
//                                 <div className="text-lg font-bold text-orange-600">{metric.value}</div>
//                                 <div className="text-xs text-gray-600">{metric.label}</div>
//                             </div>
//                         ))}
//                     </div>
//                     <div className="mb-6">
//                         <h4 className="font-semibold text-white mb-3 flex items-center">
//                             <Target className="h-4 w-4 text-orange-500 mr-2" /> Key Challenges We Solve
//                         </h4>
//                         <div className="flex flex-wrap gap-2">
//                             {["Equipment downtime", "Supply chain visibility", "Quality control", "Operational efficiency"].map((challenge) => (
//                                 <div key={challenge} className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors border-orange-300 text-orange-600 text-xs">
//                                     {challenge}
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                     <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg mb-6">
//                         <div className="flex items-center space-x-2 mb-2">
//                             <TrendingUp className="h-4 w-4 text-green-600" />
//                             <span className="font-semibold text-gray-900">Success Story</span>
//                         </div>
//                         <p className="text-sm text-gray-700">Reduced maintenance costs by 45% with predictive analytics</p>
//                     </div>
//                     <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:opacity-90 h-10 px-4 py-2 w-full transition-all group-hover:shadow-lg">
//                         Learn More About Healthcare Solutions
//                         <ArrowRight className="ml-2 h-4 w-4" />
//                     </button>
//                 </div>
//             </div>

//             <div className="rounded-lg text-card-foreground overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg group bg-white/10 backdrop-blur-md">
//                 {/* Image Section */}
//                 <div className="relative h-64 overflow-hidden">
//                     <img
//                         src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop"
//                         alt="Transportation & Logistics"
//                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
//                     <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg">
//                         <Truck className="h-8 w-8 text-orange-600" />
//                     </div>
//                     <div className="absolute bottom-6 left-6 right-6">
//                         <h3 className="text-xl font-bold text-white mb-2">Transportation & Logistics</h3>
//                         <p className="text-white/80 text-sm">Smart logistics and mobility solutions</p>
//                     </div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-8">
//                     <p className="text-gray-300 mb-6 text-base leading-relaxed">
//                         Streamline operations with fleet management, route optimization, real-time tracking, and automated dispatch systems.
//                     </p>
//                     <div className="mb-6">
//                         <h4 className="font-semibold text-white mb-3 flex items-center">
//                             <Zap className="h-4 w-4 text-orange-500 mr-2" /> Our Solutions
//                         </h4>
//                         <div className="grid grid-cols-2 gap-2">
//                             {["Fleet Management", "Route Optimization", "Real-time Tracking", "Warehouse Management"].map((item) => (
//                                 <div key={item} className="flex items-center space-x-2">
//                                     <CircleCheckBig className="h-4 w-4 text-green-500 flex-shrink-0" />
//                                     <span className="text-sm text-gray-300">{item}</span>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                     <div className="grid grid-cols-2 gap-4 mb-6">
//                         {[{ value: "25%", label: "Fuel Savings" }, { value: "99%", label: "On-time Delivery" }, { value: "50+", label: "Fleets" }, { value: "Global", label: "Coverage" }].map((metric) => (
//                             <div key={metric.label} className="text-center p-3 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
//                                 <div className="text-lg font-bold text-orange-600">{metric.value}</div>
//                                 <div className="text-xs text-gray-600">{metric.label}</div>
//                             </div>
//                         ))}
//                     </div>
//                     <div className="mb-6">
//                         <h4 className="font-semibold text-white mb-3 flex items-center">
//                             <Target className="h-4 w-4 text-orange-500 mr-2" /> Key Challenges We Solve
//                         </h4>
//                         <div className="flex flex-wrap gap-2">
//                             {["Route optimization", "Fuel efficiency", "Real-time visibility", "Regulatory compliance"].map((challenge) => (
//                                 <div key={challenge} className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold border-orange-300 text-orange-600 text-xs">
//                                     {challenge}
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                     <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg mb-6">
//                         <div className="flex items-center space-x-2 mb-2">
//                             <TrendingUp className="h-4 w-4 text-green-600" />
//                             <span className="font-semibold text-gray-900">Success Story</span>
//                         </div>
//                         <p className="text-sm text-gray-700">Optimized delivery routes saving 30% in fuel costs and reducing emissions</p>
//                     </div>
//                     <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:opacity-90 h-10 px-4 py-2 w-full transition-all group-hover:shadow-lg">
//                         Learn More About Healthcare Solutions
//                         <ArrowRight className="ml-2 h-4 w-4" />
//                     </button>
//                 </div>
//             </div>

//             <div className="rounded-lg text-card-foreground overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg group bg-white/10 backdrop-blur-md">
//                 {/* Image Section */}
//                 <div className="relative h-64 overflow-hidden">
//                     <img
//                         src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop"
//                         alt="Real Estate & PropTech"
//                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
//                     <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg">
//                         <House className="h-8 w-8 text-orange-600" />
//                     </div>
//                     <div className="absolute bottom-6 left-6 right-6">
//                         <h3 className="text-xl font-bold text-white mb-2">
//                             Real Estate & PropTech
//                         </h3>
//                         <p className="text-white/80 text-sm">
//                             Digital transformation for property management
//                         </p>
//                     </div>
//                 </div>

//                 {/* Content Section */}
//                 <div className="p-8">
//                     <p className="text-gray-300 mb-6 text-base leading-relaxed">
//                         Modernize real estate with property management platforms, virtual
//                         tours, smart building solutions, and tenant portals.
//                     </p>
//                     <div className="mb-6">
//                         <h4 className="font-semibold text-white mb-3 flex items-center">
//                             <Zap className="h-4 w-4 text-orange-500 mr-2" /> Our Solutions
//                         </h4>
//                         <div className="grid grid-cols-2 gap-2">
//                             {["Property Management", "Virtual Tours", "Smart Buildings", "Tenant Portals"].map((solution) => (
//                                 <div key={solution} className="flex items-center space-x-2">
//                                     <CircleCheckBig className="h-4 w-4 text-green-500 flex-shrink-0" />
//                                     <span className="text-sm text-gray-300">{solution}</span>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                     <div className="grid grid-cols-2 gap-4 mb-6">
//                         {[{ value: "10K+", label: "Properties" }, { value: "40%", label: "Efficiency Gain" }, { value: "95%", label: "Tenant Satisfaction" }, { value: "Smart", label: "Integration" }].map((metric) => (
//                             <div key={metric.label} className="text-center p-3 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
//                                 <div className="text-lg font-bold text-orange-600">{metric.value}</div>
//                                 <div className="text-xs text-gray-600">{metric.label}</div>
//                             </div>
//                         ))}
//                     </div>
//                     <div className="mb-6">
//                         <h4 className="font-semibold text-white mb-3 flex items-center">
//                             <Target className="h-4 w-4 text-orange-500 mr-2" /> Key Challenges We Solve
//                         </h4>
//                         <div className="flex flex-wrap gap-2">
//                             {["Property maintenance", "Tenant satisfaction", "Energy efficiency", "Market visibility"].map((challenge) => (
//                                 <div key={challenge} className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold border-orange-300 text-orange-600 text-xs">
//                                     {challenge}
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                     <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg mb-6">
//                         <div className="flex items-center space-x-2 mb-2">
//                             <TrendingUp className="h-4 w-4 text-green-600" />
//                             <span className="font-semibold text-gray-900">Success Story</span>
//                         </div>
//                         <p className="text-sm text-gray-700">Reduced maintenance response time by 60% with integrated IoT monitoring</p>
//                     </div>
//                     <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:opacity-90 h-10 px-4 py-2 w-full transition-all group-hover:shadow-lg">
//                         Learn More About Healthcare Solutions
//                         <ArrowRight className="ml-2 h-4 w-4" />
//                     </button>
//                 </div>
//             </div>
//    <div className="rounded-lg text-card-foreground overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg group bg-white/10 backdrop-blur-md">
//       {/* Image Section */}
//       <div className="relative h-64 overflow-hidden">
//         <img
//           src="https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&h=500&fit=crop"
//           alt="Entertainment & Media"
//           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//         />

//         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

//         <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg">
//           <Gamepad2 className="h-8 w-8 text-orange-600" />
//         </div>

//         <div className="absolute bottom-6 left-6 right-6">
//           <h3 className="text-xl font-bold text-white mb-2">Entertainment & Media</h3>
//           <p className="text-white/80 text-sm">Next-generation digital experiences</p>
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="p-8">
//         <p className="text-gray-300 mb-6 text-base leading-relaxed">
//           Engage audiences with streaming platforms, content management systems,
//           social media tools, and immersive gaming experiences.
//         </p>

//         {/* ✅ Our Solutions */}
//         <div className="mb-6">
//           <h4 className="font-semibold text-white mb-3 flex items-center">
//             <Zap className="h-4 w-4 text-orange-500 mr-2" /> Our Solutions
//           </h4>

//           <div className="grid grid-cols-2 gap-2">
//             {[
//               "Streaming Platforms",
//               "Content Management",
//               "Social Media Tools",
//               "Gaming Solutions",
//             ].map((solution) => (
//               <div key={solution} className="flex items-center space-x-2">
//                 <CircleCheckBig className="h-4 w-4 text-green-500 flex-shrink-0" />
//                 <span className="text-sm text-gray-300">{solution}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ✅ Stats */}
//         <div className="grid grid-cols-2 gap-4 mb-6">
//           {[
//             { value: "4.8M+", label: "Active Users" },
//             { value: "99.9%", label: "Uptime" },
//             { value: "4K", label: "Content Assets" },
//             { value: "Global", label: "Reach" },
//           ].map((metric) => (
//             <div
//               key={metric.label}
//               className="text-center p-3 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg"
//             >
//               <div className="text-lg font-bold text-orange-600">
//                 {metric.value}
//               </div>
//               <div className="text-xs text-gray-600">{metric.label}</div>
//             </div>
//           ))}
//         </div>

//         {/* ✅ Key Challenges */}
//         <div className="mb-6">
//           <h4 className="font-semibold text-white mb-3 flex items-center">
//             <Target className="h-4 w-4 text-orange-500 mr-2" /> Key Challenges We Solve
//           </h4>

//           <div className="flex flex-wrap gap-2">
//             {[
//               "Audience engagement",
//               "Content security",
//               "Monetization",
//               "Scalability",
//             ].map((challenge) => (
//               <div
//                 key={challenge}
//                 className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold border-orange-300 text-orange-600 text-xs"
//               >
//                 {challenge}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ✅ Success Story */}
//         <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg mb-6">
//           <div className="flex items-center space-x-2 mb-2">
//             <TrendingUp className="h-4 w-4 text-green-600" />
//             <span className="font-semibold text-gray-900">Success Story</span>
//           </div>
//           <p className="text-sm text-gray-700">
//             Increased user engagement by 65% through immersive streaming and
//             gamification.
//           </p>
//         </div>

//         {/* ✅ Gradient Button (Theme-Matched) */}
//         <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:opacity-90 h-10 px-4 py-2 w-full transition-all group-hover:shadow-lg">
//           Learn More About Entertainment Solutions
//           <ArrowRight className="ml-2 h-4 w-4" />
//         </button>
//       </div>
//     </div>

//         </div>
//     </div>
// </section>
//    <section className="py-24 bg-gradient-to-r from-[#1c2b4d] to-[#303e4f]">
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     <div className="text-center mb-16">
//       <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//         Why Choose Us for Your Industry?
//       </h2>
//       <p className="text-xl text-white/80 max-w-3xl mx-auto">
//         Our deep industry knowledge combined with cutting-edge technology
//         expertise makes us the ideal partner for your digital transformation
//         journey
//       </p>
//     </div>

//     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//       <div
//         className="text-center p-8 rounded-2xl bg-white/10 hover:bg-white/20 hover:shadow-lg transition-all duration-300"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           stroke-width="2"
//           stroke-linecap="round"
//           stroke-linejoin="round"
//           className="lucide lucide-shield h-16 w-16 text-orange-400 mx-auto mb-6"
//         >
//           <path
//             d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
//           ></path>
//         </svg>
//         <h3 className="text-xl font-bold text-white mb-4">
//           Industry Compliance
//         </h3>
//         <p className="text-white/80">
//           We ensure all solutions meet industry-specific regulations and
//           compliance requirements including HIPAA, PCI DSS, SOX, and GDPR.
//         </p>
//       </div>

//       <div
//         className="text-center p-8 rounded-2xl bg-white/10 hover:bg-white/20 hover:shadow-lg transition-all duration-300"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           stroke-width="2"
//           stroke-linecap="round"
//           stroke-linejoin="round"
//           className="lucide lucide-users h-16 w-16 text-orange-400 mx-auto mb-6"
//         >
//           <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
//           <circle cx="9" cy="7" r="4"></circle>
//           <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
//           <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
//         </svg>
//         <h3 className="text-xl font-bold text-white mb-4">Domain Experts</h3>
//         <p className="text-white/80">
//           Our team includes industry veterans who understand your unique
//           challenges and can provide insights that generic providers cannot.
//         </p>
//       </div>

//       <div
//         className="text-center p-8 rounded-2xl bg-white/10 hover:bg-white/20 hover:shadow-lg transition-all duration-300"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           stroke-width="2"
//           stroke-linecap="round"
//           stroke-linejoin="round"
//           className="lucide lucide-star h-16 w-16 text-orange-400 mx-auto mb-6"
//         >
//           <path
//             d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
//           ></path>
//         </svg>
//         <h3 className="text-xl font-bold text-white mb-4">
//           Proven Track Record
//         </h3>
//         <p className="text-white/80">
//           With 200+ successful projects across various industries, we have the
//           experience and expertise to deliver results that matter.
//         </p>
//       </div>
//     </div>
//   </div>
// </section>

//       <section className="py-24 bg-gradient-to-r from-[#1a2940] to-[#24344d]
//  text-white">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-4xl md:text-5xl font-bold mb-8">
//             Ready to Transform Your Industry?
//           </h2>
//           <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto">
//             Let's discuss how our industry-specific solutions can help you
//             overcome challenges, streamline operations, and achieve breakthrough
//             results in your market.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
//             <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-11 rounded-md bg-white text-orange-600 hover:bg-orange-50 px-12 py-6 text-xl font-semibold">
//               Schedule Industry Consultation
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 stroke-width="2"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 className="lucide lucide-arrow-right ml-2 h-6 w-6"
//               >
//                 <path d="M5 12h14"></path>
//                 <path d="m12 5 7 7-7 7"></path>
//               </svg>
//             </button>
//             <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-secondary h-11 rounded-md border-2 border-white text-black hover:bg-white/10 px-12 py-6 text-xl backdrop-blur-sm">
//               View Case Studies
//             </button>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Industries;





import { FC } from "react";
import {
  House,
  Zap,
  CircleCheckBig,
  Target,
  TrendingUp,
  ArrowRight,
  Gamepad2,
  Heart,
  Banknote,
  ShoppingCart,
  GraduationCap,
  Building,
  Truck,
} from "lucide-react";

const Industries: FC = () => {
  return (
    <>
      {/* 🌈 HERO SECTION */}
      <section className="relative py-32 bg-gradient-to-r from-orange-50 via-white to-orange-100 overflow-hidden text-gray-900">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Industries We Serve
          </h1>

          <p className="text-xl text-gray-700 mb-10 max-w-4xl mx-auto leading-relaxed">
            We bring deep industry expertise and innovative technology solutions
            to transform businesses across diverse sectors, helping organizations
            achieve their digital transformation goals with tailored approaches
            that address specific industry challenges.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap h-11 rounded-md bg-orange-500 text-white hover:bg-orange-600 px-10 py-4 text-lg font-semibold shadow-lg transition-colors">
              Explore Industries
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>

            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap h-11 rounded-md border-2 border-orange-500 text-orange-600 hover:bg-orange-100 px-10 py-4 text-lg font-medium backdrop-blur-sm transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* 🌈 STATS SECTION */}
      <section className="py-20 bg-gradient-to-r from-orange-100 via-white to-orange-50 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Industries Served", value: "25+", icon: "users" },
              { label: "Enterprise Clients", value: "200+", icon: "building" },
              { label: "Countries", value: "5+", icon: "globe" },
              { label: "Industry Awards", value: "15+", icon: "award" },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white/80 backdrop-blur-md rounded-2xl shadow-md hover:shadow-xl transition p-6"
              >
                <div className="bg-orange-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-orange-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  {item.value}
                </div>
                <div className="text-gray-700 font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🌈 SPECIALIZED INDUSTRY SOLUTIONS */}
      <section className="py-24 bg-gradient-to-r from-orange-50 via-white to-orange-100 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-700">
              Specialized Industry Solutions
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our industry-specific expertise helps organizations overcome unique
              challenges and capitalize on opportunities in their respective markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: "Healthcare & Life Sciences",
                icon: <Heart className="h-8 w-8 text-orange-600" />,
                img: "https://plus.unsplash.com/premium_photo-1698421947098-d68176a8f5b2?w=600",
                desc: "Transform patient care with telemedicine, AI diagnostics, and healthcare management platforms.",
              },
              {
                title: "Financial Services",
                icon: <Banknote className="h-8 w-8 text-orange-600" />,
                img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800",
                desc: "Build trust with secure banking, mobile payments, and fraud detection systems.",
              },
              {
                title: "Retail & E-commerce",
                icon: <ShoppingCart className="h-8 w-8 text-orange-600" />,
                img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600",
                desc: "Create seamless experiences with AI-powered recommendations and inventory management.",
              },
              {
                title: "Education & EdTech",
                icon: <GraduationCap className="h-8 w-8 text-orange-600" />,
                img: "https://plus.unsplash.com/premium_photo-1750859860252-6d23c5598f7c?w=600",
                desc: "Enhance learning with virtual classrooms, AI tutors, and student analytics.",
              },
              {
                title: "Manufacturing & Industrial",
                icon: <Building className="h-8 w-8 text-orange-600" />,
                img: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=800",
                desc: "Optimize operations with IoT sensors, predictive maintenance, and automation.",
              },
              {
                title: "Transportation & Logistics",
                icon: <Truck className="h-8 w-8 text-orange-600" />,
                img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800",
                desc: "Streamline logistics with fleet management, tracking, and automation.",
              },
              {
                title: "Real Estate & PropTech",
                icon: <House className="h-8 w-8 text-orange-600" />,
                img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
                desc: "Digitize property management with virtual tours and smart building systems.",
              },
              {
                title: "Entertainment & Media",
                icon: <Gamepad2 className="h-8 w-8 text-orange-600" />,
                img: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800",
                desc: "Engage audiences with streaming platforms, gaming, and content tools.",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow-lg bg-white/80 backdrop-blur-md hover:shadow-xl transition-all"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-3">{card.icon}</div>
                  <h3 className="text-2xl font-semibold text-orange-700 mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-700 mb-6">{card.desc}</p>
                  <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium bg-orange-500 text-white hover:bg-orange-600 h-10 px-4 py-2 w-full transition-all">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🌈 WHY CHOOSE US */}
      <section className="py-24 bg-gradient-to-r from-orange-100 via-white to-orange-50 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose Us for Your Industry?
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            Our deep industry knowledge combined with cutting-edge technology
            expertise makes us the ideal partner for your digital transformation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Industry Compliance",
                desc: "We ensure all solutions meet regulations like HIPAA, PCI DSS, and GDPR.",
              },
              {
                title: "Domain Experts",
                desc: "Our team includes specialists with decades of experience.",
              },
              {
                title: "Proven Track Record",
                desc: "With 200+ projects delivered, we bring experience that drives success.",
              },
            ].map((box, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-white/70 hover:bg-white/90 border border-orange-100 shadow-md hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-bold text-orange-700 mb-4">
                  {box.title}
                </h3>
                <p className="text-gray-700">{box.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🌈 CTA SECTION */}
      <section className="py-24 bg-gradient-to-r from-orange-50 via-white to-orange-100 text-gray-900 text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-orange-700">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-lg mb-12 text-gray-700 max-w-3xl mx-auto">
            Let's discuss how our industry-specific solutions can help you achieve
            breakthrough results.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="inline-flex items-center justify-center gap-2 h-11 rounded-md bg-orange-500 text-white hover:bg-orange-600 px-10 py-4 text-lg font-semibold shadow-lg">
              Schedule Industry Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="inline-flex items-center justify-center gap-2 h-11 rounded-md border-2 border-orange-500 text-orange-600 hover:bg-orange-100 px-10 py-4 text-lg font-medium">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Industries;
