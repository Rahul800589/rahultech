// import { FC } from "react";
// import { Quote, Star, TrendingUp 
//   , Building, ArrowRight
// } from "lucide-react";

// interface Industry {
//   name: string;
//   projects: number;
// }

// const industries: Industry[] = [
//   { name: "Technology", projects: 45 },
//   { name: "Healthcare", projects: 32 },
//   { name: "Finance", projects: 28 },
//   { name: "Education", projects: 25 },
//   { name: "Retail", projects: 20 },
//   { name: "Manufacturing", projects: 18 },
//   { name: "Logistics", projects: 15 },
//   { name: "Real Estate", projects: 12 },
// ];

// const Testimonials: React.FC = () => {
//   return (
//     <>
//      <section className="py-32 lg:py-28 bg-gradient-to-r from-[#1c2b4d] to-[#303e4f] h-[400px] text-white">
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     <div className="text-center">
//       <h1 className="text-3xl md:text-6xl font-bold text-white mb-6">
//         Client
//         <span className="ml-4 bg-gradient-to-r from-orange-400 via-orange-500 to-red-400 bg-clip-text text-transparent">
//           Testimonials
//         </span>
//       </h1>
//       <p className="text-lg text-white/80 max-w-3xl mx-auto">
//         Don't just take our word for it — hear what our clients say about
//         their experience with ATS GLOBAL TECH and the results we’ve delivered.
//       </p>
//     </div>
//   </div>
// </section>

//     <section className="py-16 bg-gradient-to-r from-[#1a2940] to-[#24344d]
//  text-white">
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      
//       <div className="text-center">
//         <div className="bg-gradient-to-r from-orange-400 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
//           <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-users h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//             <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
//             <circle cx="9" cy="7" r="4"/>
//             <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
//             <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
//           </svg>
//         </div>
//         <div className="text-3xl font-bold">150+</div>
//         <div className="text-gray-300">Happy Clients</div>
//       </div>

//       <div className="text-center">
//         <div className="bg-gradient-to-r from-orange-400 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
//           <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-star h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//             <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>
//           </svg>
//         </div>
//         <div className="text-3xl font-bold">4.9/5</div>
//         <div className="text-gray-300">Average Rating</div>
//       </div>

//       <div className="text-center">
//         <div className="bg-gradient-to-r from-orange-400 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
//           <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-trending-up h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//             <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
//             <polyline points="16 7 22 7 22 13"/>
//           </svg>
//         </div>
//         <div className="text-3xl font-bold">98%</div>
//         <div className="text-gray-300">Success Rate</div>
//       </div>

//       <div className="text-center">
//         <div className="bg-gradient-to-r from-orange-400 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
//           <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-award h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//             <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/>
//             <circle cx="12" cy="8" r="6"/>
//           </svg>
//         </div>
//         <div className="text-3xl font-bold">25+</div>
//         <div className="text-gray-300">Industry Awards</div>
//       </div>

//     </div>
//   </div>
// </section>

//       <section className="bg-gradient-to-r from-[#2f4371] to-[#2a384a] dark:bg-gray-900 py-20">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
//               What Our Clients Say
//             </h2>
//             <p className="text-xl text-gray-400 max-w-2xl mx-auto">
//               Real feedback from real clients who have experienced the
//               ATS GLOBAL TECH difference.
//             </p>
//           </div>

//          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//   {/* Card 1 */}
//   <div className="rounded-lg bg-gradient-to-r from-[#1c2b4d] to-[#303e4f] text-white border-0 shadow-lg hover:shadow-2xl transition-shadow duration-300 relative">
//     <div className="absolute top-4 right-4">
//       <Quote className="h-8 w-8 text-yellow-300" />
//     </div>
//     <div className="flex flex-col space-y-1.5 p-6 pb-4">
//       <div className="flex items-center space-x-4 mb-4">
//         <img src="https://tse4.mm.bing.net/th/id/OIP.OGjLB-QTdulynk_q5ANgSQHaLH?pid=Api&P=0&h=180" alt="Suresh Gupta" className="w-16 h-16 rounded-full object-cover border-2 border-yellow-400" />
//         <div>
//           <h3 className="font-semibold">Suresh Gupta</h3>
//           <p className="text-sm text-gray-300">CEO</p>
//           <p className="text-sm font-medium text-yellow-400">TechStart Inc.</p>
//         </div>
//       </div>
//       <div className="flex items-center space-x-1 mb-2">
//         {[...Array(5)].map((_, i) => (
//           <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
//         ))}
//       </div>
//       <div className="inline-flex items-center rounded-full bg-[#2f4a68] px-2.5 py-0.5 text-xs font-semibold w-fit">
//         Custom ERP System
//       </div>
//     </div>
//     <div className="p-6 pt-0">
//       <p className="text-gray-200 mb-4 text-base leading-relaxed">
//         "ATS GLOBAL TECH transformed our entire digital infrastructure..."
//       </p>
//       <div>
//         <h4 className="font-semibold text-white mb-2">Results Achieved:</h4>
//         <ul className="space-y-1">
//           {["300% efficiency increase", "50% cost reduction", "24/7 system uptime"].map((r, i) => (
//             <li key={i} className="flex items-center text-sm text-gray-300">
//               <TrendingUp className="h-3 w-3 text-green-400 mr-2" /> {r}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   </div>

//   {/* Card 2 */}
//   <div className="rounded-lg bg-gradient-to-r from-[#1c2b4d] to-[#303e4f] text-white border-0 shadow-lg hover:shadow-2xl transition-shadow duration-300 relative">
//     <div className="absolute top-4 right-4">
//       <Quote className="h-8 w-8 text-yellow-300" />
//     </div>
//     <div className="flex flex-col space-y-1.5 p-6 pb-4">
//       <div className="flex items-center space-x-4 mb-4">
//         <img src="https://tse2.mm.bing.net/th/id/OIP.-9RFMCCjRWS92JiK3vBGVAHaJQ?pid=Api&P=0&h=180" alt="Mahesh Kumar" className="w-16 h-16 rounded-full object-cover border-2 border-yellow-400" />
//         <div>
//           <h3 className="font-semibold">Mahesh Kumar</h3>
//           <p className="text-sm text-gray-300">CTO</p>
//           <p className="text-sm font-medium text-yellow-400">FinanceFlow</p>
//         </div>
//       </div>
//       <div className="flex items-center space-x-1 mb-2">
//         {[...Array(5)].map((_, i) => (
//           <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
//         ))}
//       </div>
//       <div className="inline-flex items-center rounded-full bg-[#2f4a68] px-2.5 py-0.5 text-xs font-semibold w-fit">
//         Mobile Banking App
//       </div>
//     </div>
//     <div className="p-6 pt-0">
//       <p className="text-gray-200 mb-4 text-base leading-relaxed">
//         "Working with ATS GLOBAL TECH was a game-changer for our fintech startup..."
//       </p>
//       <div>
//         <h4 className="font-semibold text-white mb-2">Results Achieved:</h4>
//         <ul className="space-y-1">
//           {["1M+ app downloads", "99.9% security rating", "4.8/5 user rating"].map((r, i) => (
//             <li key={i} className="flex items-center text-sm text-gray-300">
//               <TrendingUp className="h-3 w-3 text-green-400 mr-2" /> {r}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   </div>

//   {/* Card 3 */}
//   <div className="rounded-lg bg-gradient-to-r from-[#1c2b4d] to-[#303e4f] text-white border-0 shadow-lg hover:shadow-2xl transition-shadow duration-300 relative">
//     <div className="absolute top-4 right-4">
//       <Quote className="h-8 w-8 text-yellow-300" />
//     </div>
//     <div className="flex flex-col space-y-1.5 p-6 pb-4">
//       <div className="flex items-center space-x-4 mb-4">
//         <img src="https://tse3.mm.bing.net/th/id/OIP.HBeYYYzZpXgBCA9gt1V2EwHaLG?pid=Api&P=0&h=180" alt="Anita Sharma" className="w-16 h-16 rounded-full object-cover border-2 border-yellow-400" />
//         <div>
//           <h3 className="font-semibold">Anita Sharma</h3>
//           <p className="text-sm text-gray-300">VP of Operations</p>
//           <p className="text-sm font-medium text-yellow-400">HealthCare Plus</p>
//         </div>
//       </div>
//       <div className="flex items-center space-x-1 mb-2">
//         {[...Array(5)].map((_, i) => (
//           <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
//         ))}
//       </div>
//       <div className="inline-flex items-center rounded-full bg-[#2f4a68] px-2.5 py-0.5 text-xs font-semibold w-fit">
//         Healthcare Management Platform
//       </div>
//     </div>
//     <div className="p-6 pt-0">
//       <p className="text-gray-200 mb-4 text-base leading-relaxed">
//         "The healthcare management system developed by ATS GLOBAL TECH revolutionized our process..."
//       </p>
//       <div>
//         <h4 className="font-semibold text-white mb-2">Results Achieved:</h4>
//         <ul className="space-y-1">
//           {["40% patient satisfaction boost", "60% faster processing", "HIPAA compliant"].map((r, i) => (
//             <li key={i} className="flex items-center text-sm text-gray-300">
//               <TrendingUp className="h-3 w-3 text-green-400 mr-2" /> {r}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   </div>

//   {/* Card 4 */}
//   <div className="rounded-lg bg-gradient-to-r from-[#1c2b4d] to-[#303e4f] text-white border-0 shadow-lg hover:shadow-2xl transition-shadow duration-300 relative">
//     <div className="absolute top-4 right-4">
//       <Quote className="h-8 w-8 text-yellow-300" />
//     </div>
//     <div className="flex flex-col space-y-1.5 p-6 pb-4">
//       <div className="flex items-center space-x-4 mb-4">
//         <img src="https://tse2.mm.bing.net/th/id/OIP.064xjjf874wKVhX0swjWHgHaKD?pid=Api&P=0&h=180" alt="Deepak Sharma" className="w-16 h-16 rounded-full object-cover border-2 border-yellow-400" />
//         <div>
//           <h3 className="font-semibold">Deepak Sharma</h3>
//           <p className="text-sm text-gray-300">Founder</p>
//           <p className="text-sm font-medium text-yellow-400">EduTech Solutions</p>
//         </div>
//       </div>
//       <div className="flex items-center space-x-1 mb-2">
//         {[...Array(5)].map((_, i) => (
//           <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
//         ))}
//       </div>
//       <div className="inline-flex items-center rounded-full bg-[#2f4a68] px-2.5 py-0.5 text-xs font-semibold w-fit">
//         E-Learning Platform
//       </div>
//     </div>
//     <div className="p-6 pt-0">
//       <p className="text-gray-200 mb-4 text-base leading-relaxed">
//         "ATS GLOBAL TECH built us an incredible e-learning platform..."
//       </p>
//       <div>
//         <h4 className="font-semibold text-white mb-2">Results Achieved:</h4>
//         <ul className="space-y-1">
//           {["100K+ active users", "Global reach", "95% completion rate"].map((r, i) => (
//             <li key={i} className="flex items-center text-sm text-gray-300">
//               <TrendingUp className="h-3 w-3 text-green-400 mr-2" /> {r}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   </div>

//   {/* Card 5 */}
//   <div className="rounded-lg bg-gradient-to-r from-[#1c2b4d] to-[#303e4f] text-white border-0 shadow-lg hover:shadow-2xl transition-shadow duration-300 relative">
//     <div className="absolute top-4 right-4">
//       <Quote className="h-8 w-8 text-yellow-300" />
//     </div>
//     <div className="flex flex-col space-y-1.5 p-6 pb-4">
//       <div className="flex items-center space-x-4 mb-4">
//         <img src="https://tse4.mm.bing.net/th/id/OIP.9k_GOA2TNHH70WjDdav4owAAAA?pid=Api&P=0&h=180" alt="Lakshmi Rao" className="w-16 h-16 rounded-full object-cover border-2 border-yellow-400" />
//         <div>
//           <h3 className="font-semibold">Lakshmi Rao</h3>
//           <p className="text-sm text-gray-300">COO</p>
//           <p className="text-sm font-medium text-yellow-400">RetailMax</p>
//         </div>
//       </div>
//       <div className="flex items-center space-x-1 mb-2">
//         {[...Array(5)].map((_, i) => (
//           <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
//         ))}
//       </div>
//       <div className="inline-flex items-center rounded-full bg-[#2f4a68] px-2.5 py-0.5 text-xs font-semibold w-fit">
//         E-commerce Platform
//       </div>
//     </div>
//     <div className="p-6 pt-0">
//       <p className="text-gray-200 mb-4 text-base leading-relaxed">
//         "The e-commerce modernization project delivered outstanding results..."
//       </p>
//       <div>
//         <h4 className="font-semibold text-white mb-2">Results Achieved:</h4>
//         <ul className="space-y-1">
//           {["45% conversion increase", "2x faster load times", "Mobile-first design"].map((r, i) => (
//             <li key={i} className="flex items-center text-sm text-gray-300">
//               <TrendingUp className="h-3 w-3 text-green-400 mr-2" /> {r}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   </div>

//   {/* Card 6 */}
//   <div className="rounded-lg bg-gradient-to-r from-[#1c2b4d] to-[#303e4f] text-white border-0 shadow-lg hover:shadow-2xl transition-shadow duration-300 relative">
//     <div className="absolute top-4 right-4">
//       <Quote className="h-8 w-8 text-yellow-300" />
//     </div>
//     <div className="flex flex-col space-y-1.5 p-6 pb-4">
//       <div className="flex items-center space-x-4 mb-4">
//         <img src="https://tse2.mm.bing.net/th/id/OIP.zI-hfcUXnrffkj-E3_kXrwHaGX?pid=Api&P=0&h=180" alt="Jayant Singh" className="w-16 h-16 rounded-full object-cover border-2 border-yellow-400" />
//         <div>
//           <h3 className="font-semibold">Jayant Singh</h3>
//           <p className="text-sm text-gray-300">Head of IT</p>
//           <p className="text-sm font-medium text-yellow-400">LogiCorp</p>
//         </div>
//       </div>
//       <div className="flex items-center space-x-1 mb-2">
//         {[...Array(5)].map((_, i) => (
//           <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
//         ))}
//       </div>
//       <div className="inline-flex items-center rounded-full bg-[#2f4a68] px-2.5 py-0.5 text-xs font-semibold w-fit">
//         Supply Chain Analytics
//       </div>
//     </div>
//     <div className="p-6 pt-0">
//       <p className="text-gray-200 mb-4 text-base leading-relaxed">
//         "The supply chain analytics platform gave us unprecedented visibility..."
//       </p>
//       <div>
//         <h4 className="font-semibold text-white mb-2">Results Achieved:</h4>
//         <ul className="space-y-1">
//           {["25% cost reduction", "Real-time tracking", "Predictive analytics"].map((r, i) => (
//             <li key={i} className="flex items-center text-sm text-gray-300">
//               <TrendingUp className="h-3 w-3 text-green-400 mr-2" /> {r}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   </div>
// </div>

//         </div>
//       </section>

//      <section className="py-20 bg-gradient-to-r from-[#1c2b4d] to-[#303e4f]">
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//     <div className="text-center mb-16">
//       <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//         Industries We Serve
//       </h2>
//       <p className="text-lg text-gray-200 max-w-2xl mx-auto">
//         We've successfully delivered projects across diverse industries,
//         bringing specialized expertise to each sector.
//       </p>
//     </div>

//     <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//       {industries.map((industry) => (
//         <div
//           key={industry.name}
//           className="rounded-lg bg-[#2a3a55] text-white text-center shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-white/10"
//         >
//           <div className="flex flex-col space-y-1.5 p-6 pb-2">
//             <div className="bg-gradient-to-r from-yellow-500 to-orange-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
//               <Building className="h-6 w-6 text-white" />
//             </div>
//             <h3 className="font-semibold text-white">
//               {industry.name}
//             </h3>
//           </div>

//           <div className="p-6 pt-0">
//             <p className="text-2xl font-bold text-yellow-400">
//               {industry.projects}
//             </p>
//             <p className="text-sm text-gray-300">Projects</p>
//           </div>
//         </div>
//       ))}
//     </div>

//   </div>
// </section>

// <section className="py-20 bg-gradient-to-r from-[#1c2b4d] to-[#232f3e]">
//   <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

//     <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
//       Want to Hear More?
//     </h2>

//     <p className="text-xl text-gray-200 mb-8">
//       Watch detailed video testimonials from our clients and learn about
//       their complete transformation journey with ATS GLOBAL TECH.
//     </p>

//     <div className="flex flex-col sm:flex-row gap-4 justify-center">

//       <button className="inline-flex items-center justify-center gap-2 text-sm font-medium transition duration-300 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white h-11 rounded-md px-8 py-3">
//         Watch Video Testimonials
//         <ArrowRight className="ml-2 h-5 w-5" />
//       </button>

//       <button className="inline-flex items-center justify-center gap-2 text-sm font-medium border border-white/30 bg-transparent hover:bg-white/10 text-white h-11 rounded-md px-8 py-3 transition duration-300">
//         Read Case Studies
//       </button>

//     </div>
//   </div>
// </section>

//     <section className="py-20 bg-gradient-to-r from-[#222f4c] to-[#303e4f] text-white">
//   <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

//     <h2 className="text-3xl md:text-4xl font-bold mb-6">
//       Ready to Join Our Success Stories?
//     </h2>

//     <p className="text-xl mb-8 text-gray-300">
//       Let us help you achieve similar results. Start your digital
//       transformation journey today and become our next success story.
//     </p>

//     <div className="flex flex-col sm:flex-row gap-4 justify-center">

//       <a href="/contact" className="inline-flex items-center justify-center gap-2 text-sm font-medium bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 text-white h-11 rounded-md px-8 py-3 shadow-lg hover:shadow-xl">
//         Start Your Project
//         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
//           stroke="currentColor" stroke-width="2" stroke-linecap="round"
//           stroke-linejoin="round" className="lucide lucide-arrow-right ml-2 h-5 w-5">
//           <path d="M5 12h14"></path>
//           <path d="m12 5 7 7-7 7"></path>
//         </svg>
//       </a>

//       <a href="/projects"
//         className="inline-flex items-center justify-center gap-2 text-sm font-medium border border-white/30 bg-transparent hover:bg-white/10 transition-all duration-300 text-white h-11 rounded-md px-8 py-3">
//         View Our Work
//       </a>

//     </div>
//   </div>
// </section>

//     </>
//   );
// };

// export default Testimonials;










import { FC } from "react";
import { Quote, Star, TrendingUp, Building, ArrowRight } from "lucide-react";

interface Industry {
  name: string;
  projects: number;
}

const industries: Industry[] = [
  { name: "Technology", projects: 45 },
  { name: "Healthcare", projects: 32 },
  { name: "Finance", projects: 28 },
  { name: "Education", projects: 25 },
  { name: "Retail", projects: 20 },
  { name: "Manufacturing", projects: 18 },
  { name: "Logistics", projects: 15 },
  { name: "Real Estate", projects: 12 },
];

const Testimonials: FC = () => {
  return (
    <>
      {/* HERO SECTION */}
      {/* <section className="py-32 lg:py-28 bg-gradient-to-r from-orange-50 via-white to-orange-100 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-6xl font-bold mb-6">
            Client{" "}
            <span className="ml-4 bg-gradient-to-r from-orange-500 via-orange-600 to-red-400 bg-clip-text text-transparent">
              Testimonials
            </span>
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Don’t just take our word for it — hear what our clients say about
            their experience with <strong>ATS GLOBAL TECH</strong> and the
            results we’ve delivered.
          </p>
        </div>
      </section> */}

      <section className="relative py-32 bg-gradient-to-br from-orange-100 via-white to-orange-200 text-gray-900 overflow-hidden">
  {/* Decorative gradient blobs */}
  <div className="absolute -top-24 -left-24 w-[400px] h-[400px] bg-orange-300 rounded-full blur-3xl opacity-40"></div>
  <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-yellow-200 rounded-full blur-3xl opacity-40"></div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h1 className="text-4xl md:text-6xl font-bold mb-8">
      Client{" "}
      <span className="bg-gradient-to-r from-orange-500 via-red-400 to-orange-600 bg-clip-text text-transparent">
        Testimonials
      </span>
    </h1>
    <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-16">
      Real stories from our partners and clients who trusted{" "}
      <strong className="text-orange-600">ATS GLOBAL TECH</strong> to turn
      their vision into reality.
    </p>

    {/* Testimonials Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="bg-white shadow-xl p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-orange-100">
        <p className="text-gray-700 italic mb-6">
          “ATS Global Tech helped us transform our outdated system into a
          modern, automated solution. Their team is simply the best!”
        </p>
        <h3 className="text-orange-600 font-semibold">— Emma Williams</h3>
        <p className="text-sm text-gray-500">COO, BrightWave Logistics</p>
      </div>

      {/* Card 2 */}
      <div className="bg-white shadow-xl p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-orange-100">
        <p className="text-gray-700 italic mb-6">
          “From UI/UX design to final delivery, their process was seamless.
          ATS Global Tech truly delivers quality and innovation.”
        </p>
        <h3 className="text-orange-600 font-semibold">— Raj Patel</h3>
        <p className="text-sm text-gray-500">Founder, NeoTech Startups</p>
      </div>

      {/* Card 3 */}
      <div className="bg-white shadow-xl p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-orange-100">
        <p className="text-gray-700 italic mb-6">
          “We wanted a robust AI dashboard and they nailed it. Exceptional
          attention to detail and great communication throughout.”
        </p>
        <h3 className="text-orange-600 font-semibold">— Lisa Chen</h3>
        <p className="text-sm text-gray-500">CTO, Insightify Analytics</p>
      </div>
    </div>
  </div>
</section>


      {/* STATS SECTION */}
      <section className="py-16 bg-gradient-to-r from-orange-100 via-white to-orange-50 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "150+", label: "Happy Clients", icon: "users" },
              { value: "4.9/5", label: "Average Rating", icon: "star" },
              { value: "98%", label: "Success Rate", icon: "trending-up" },
              { value: "25+", label: "Industry Awards", icon: "award" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="bg-gradient-to-r from-orange-400 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  {stat.icon === "users" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  )}
                  {stat.icon === "star" && (
                    <Star className="h-8 w-8 text-white" strokeWidth={2} />
                  )}
                  {stat.icon === "trending-up" && (
                    <TrendingUp className="h-8 w-8 text-white" />
                  )}
                  {stat.icon === "award" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="8" r="6" />
                      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                    </svg>
                  )}
                </div>
                <div className="text-3xl font-bold text-orange-600">
                  {stat.value}
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gradient-to-r from-orange-50 via-white to-orange-100 py-20 text-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-700 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Real feedback from real clients who have experienced the ATS
              GLOBAL TECH difference.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="rounded-lg bg-white text-gray-800 border border-orange-100 shadow-lg hover:shadow-2xl transition-shadow duration-300 relative"
              >
                <div className="absolute top-4 right-4">
                  <Quote className="h-8 w-8 text-orange-500" />
                </div>
                <div className="flex flex-col space-y-1.5 p-6 pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={`https://randomuser.me/api/portraits/${
                        i % 2 === 0 ? "men" : "women"
                      }/${i + 10}.jpg`}
                      alt="Client"
                      className="w-16 h-16 rounded-full object-cover border-2 border-orange-400"
                    />
                    <div>
                      <h3 className="font-semibold text-orange-800">
                        Client {i + 1}
                      </h3>
                      <p className="text-sm text-gray-600">Business Owner</p>
                      <p className="text-sm font-medium text-orange-500">
                        Company {i + 1}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        className="h-4 w-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  <div className="inline-flex items-center rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-semibold text-orange-700 w-fit">
                    Project Type {i + 1}
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <p className="text-gray-700 mb-4 text-base leading-relaxed">
                    “ATS GLOBAL TECH exceeded our expectations by delivering an
                    innovative and scalable solution tailored to our needs.”
                  </p>
                  <div>
                    <h4 className="font-semibold text-orange-700 mb-2">
                      Results Achieved:
                    </h4>
                    <ul className="space-y-1">
                      {[
                        "Increased ROI",
                        "Streamlined Operations",
                        "Enhanced Client Satisfaction",
                      ].map((r, k) => (
                        <li
                          key={k}
                          className="flex items-center text-sm text-gray-700"
                        >
                          <TrendingUp className="h-3 w-3 text-green-500 mr-2" />{" "}
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 bg-gradient-to-r from-orange-100 via-white to-orange-50 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-700 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              We've successfully delivered projects across diverse industries,
              bringing specialized expertise to each sector.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="rounded-lg bg-white text-gray-900 text-center shadow-md hover:shadow-xl transition-shadow duration-300 border border-orange-100"
              >
                <div className="flex flex-col space-y-1.5 p-6 pb-2">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Building className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-orange-700">
                    {industry.name}
                  </h3>
                </div>
                <div className="p-6 pt-0">
                  <p className="text-2xl font-bold text-orange-600">
                    {industry.projects}
                  </p>
                  <p className="text-sm text-gray-600">Projects</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-gradient-to-r from-orange-50 via-white to-orange-100 text-gray-900 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-700 mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl mb-8 text-gray-700">
            Let us help you achieve similar results. Start your digital
            transformation journey today and become our next success story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 text-sm font-medium bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 text-white h-11 rounded-md px-8 py-3 shadow-lg hover:shadow-xl"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/projects"
              className="inline-flex items-center justify-center gap-2 text-sm font-medium border border-orange-300 bg-transparent hover:bg-orange-50 transition-all duration-300 text-orange-700 h-11 rounded-md px-8 py-3"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
