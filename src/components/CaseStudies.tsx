// import { Section  , Target,
//   Zap,
//   ChartNoAxesColumnIncreasing,
//   TrendingUp,
//   Users,
//   Award,
//   Calendar,
//   Building,
//   ExternalLink,
//   DollarSign,
//   CircleCheckBig,
//   Clock,
//   Globe
// } from "lucide-react";
// import { FC } from "react";

// const CaseStudies: FC = () => {
//   return (
//     <>
//      <section className="relative py-32 bg-gradient-to-r from-[#1c2b4d] to-[#303e4f]">
//   <div className="absolute inset-0"></div>
//   <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//     <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
//       Success Stories
//     </h1>
//     <p className="text-xl text-white/90 mb-10 max-w-4xl mx-auto leading-relaxed">
//       Discover how we've helped businesses across industries achieve
//       remarkable transformations through innovative technology solutions.
//       These real-world case studies showcase the tangible impact of our
//       expertise and commitment to client success.
//     </p>

//     <div className="flex flex-col sm:flex-row gap-6 justify-center">
//       <button className="border border-amber-50 text-amber-100 inline-flex items-center justify-center gap-2 whitespace-nowrap h-11 rounded-md  bg-white/10 backdrop-blur-sm text-[#1c2b4d] bg-gray-200 px-10 py-4 text-lg font-semibold shadow-lg">
//         Explore Case Studies
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

//       <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium h-11 rounded-md border-2 border-white text-white hover: bg-white/10 backdrop-blur-sm hover:text-[#1c2b4d] transition px-10 py-4 text-lg backdrop-blur-sm">
//         Start Your Success Story
//       </button>
//     </div>
//   </div>
// </section>

//    <section className="py-20 bg-gradient-to-r from-[#1c2b4d] to-[#303e4f]">
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//       <div>
//         <div className="text-4xl font-bold text-orange-600 mb-2">15+</div>
//         <div className="text-gray-300">Successful Projects</div>
//       </div>
//       <div>
//         <div className="text-4xl font-bold text-orange-600 mb-2">2k</div>
//         <div className="text-gray-300">Client Trusted</div>
//       </div>
//       <div>
//         <div className="text-4xl font-bold text-orange-600 mb-2">98%</div>
//         <div className="text-gray-300">Client Satisfaction</div>
//       </div>
//       <div>
//         <div className="text-4xl font-bold text-orange-600 mb-2">5+</div>
//         <div className="text-gray-300">Industry Awards</div>
//       </div>
//     </div>
//   </div>
// </section>


//       <section className="py-24 bg-gradient-to-r from-[#1a2940] to-[#24344d]
// ">
//         <div className=" max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-20">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
//               Transformative Case Studies
//             </h2>
//             <p className="text-xl text-gray-400 max-w-3xl mx-auto">
//               Real challenges, innovative solutions, and measurable results that
//               demonstrate our commitment to delivering exceptional value to our
//               clients
//             </p>
//           </div>
//           <div className=" space-y-16">
//              <div className="rounded-lg text-card-foreground overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg group   bg-white/10 backdrop-blur-sm/10 backdrop-blur-sm ring-2 ring-orange-200">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
//         {/* LEFT: IMAGE SECTION */}
//         <div className="relative overflow-hidden">
//           <img
//             src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1000&h=600&fit=crop"
//             alt="AI-Powered E-Commerce Revolution"
//             className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
//           />
//        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
//           <div className="absolute top-6 left-6 flex gap-2">
//             <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-orange-600 text-white">
//               E-commerce
//             </span>
//             <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-yellow-500 text-white">
//               Featured
//             </span>
//           </div>
//           <div className="absolute bottom-6 left-6 right-6 ">
//             <h3 className="text-2xl font-bold text-white mb-2">
//               AI-Powered E-Commerce Revolution
//             </h3>
//             <p className="text-white/80">RetailMax Corporation</p>
//           </div>
//         </div>

//         {/* RIGHT: DETAILS SECTION */}
//         <div className="p-8 lg:p-12">
//           {/* Challenge */}
//           <div className="mb-8">
//             <h4 className="font-bold text-gray-300 mb-3 flex items-center">
//               <Target className="h-5 w-5 text-red-500 mr-2" />
//               Challenge
//             </h4>
//             <p className="text-gray-400 leading-relaxed">
//               Low conversion rates, high cart abandonment, and inefficient
//               inventory management were costing millions in lost revenue.
//             </p>
//           </div>

//           {/* Solution */}
//           <div className="mb-8">
//             <h4 className="font-bold text-gray-300 mb-3 flex items-center">
//               <Zap className="h-5 w-5 text-blue-500 mr-2" />
//               Solution
//             </h4>
//             <p className="text-gray-400 leading-relaxed">
//               We developed a comprehensive AI-powered e-commerce platform with
//               personalized recommendations, dynamic pricing, and intelligent
//               inventory management.
//             </p>
//           </div>

//           {/* Results */}
//           <div className="mb-8">
//             <h4 className="font-bold text-gray-300 mb-4 flex items-center">
//               <ChartNoAxesColumnIncreasing className="h-5 w-5 text-green-500 mr-2" />
//               Results
//             </h4>
//             <div className="grid grid-cols-2 gap-4">
//               {/* Metric 1 */}
//               <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
//                 <TrendingUp className="h-8 w-8 text-orange-600 mx-auto mb-2" />
//                 <div className="text-2xl font-bold text-orange-600 mb-1">
//                   300%
//                 </div>
//                 <div className="text-sm text-gray-400">Revenue Increase</div>
//               </div>
//               {/* Metric 2 */}
//               <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
//                 <Target className="h-8 w-8 text-orange-600 mx-auto mb-2" />
//                 <div className="text-2xl font-bold text-orange-600 mb-1">
//                   +85%
//                 </div>
//                 <div className="text-sm text-gray-400">Conversion Rate</div>
//               </div>
//               {/* Metric 3 */}
//               <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
//                 <Users className="h-8 w-8 text-orange-600 mx-auto mb-2" />
//                 <div className="text-2xl font-bold text-orange-600 mb-1">
//                   -60%
//                 </div>
//                 <div className="text-sm text-gray-400">Cart Abandonment</div>
//               </div>
//               {/* Metric 4 */}
//               <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
//                 <Award className="h-8 w-8 text-orange-600 mx-auto mb-2" />
//                 <div className="text-2xl font-bold text-orange-600 mb-1">
//                   96%
//                 </div>
//                 <div className="text-sm text-gray-400">Customer Satisfaction</div>
//               </div>
//             </div>
//           </div>

//           {/* Testimonial */}
//           <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
//             <blockquote className="text-gray-700 italic text-lg leading-relaxed mb-4">
//               "ATS GLOBAL TECH transformed our entire business model. The AI
//               recommendations alone increased our average order value by 40%.
//               This is exactly what we needed to compete in today's market."
//             </blockquote>
//             <cite className="text-sm font-semibold text-gray-200">
//               — CEO, RetailMax Corporation
//             </cite>
//           </div>

//           {/* Project Info */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//             <div className="flex items-center space-x-2 text-sm text-gray-300">
//               <Calendar className="h-4 w-4 text-orange-500" />
//               <span>8 months</span>
//             </div>
//             <div className="flex items-center space-x-2 text-sm text-gray-300">
//               <Users className="h-4 w-4 text-orange-500" />
//               <span>12 members</span>
//             </div>
//             <div className="flex items-center space-x-2 text-sm text-gray-300">
//               <Building className="h-4 w-4 text-orange-500" />
//               <span>E-commerce</span>
//             </div>
//           </div>

//           {/* Technologies Used */}
//           <div className="mb-8">
//             <h4 className="font-semibold text-gray-200 mb-3">
//               Technologies Used
//             </h4>
//             <div className="flex flex-wrap gap-2">
//               {[
//                 "React",
//                 "Node.js",
//                 "TensorFlow",
//                 "AWS",
//                 "MongoDB",
//                 "Stripe",
//               ].map((tech) => (
//                 <span
//                   key={tech}
//                   className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-orange-300 text-orange-600"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* CTA Button */}
//           <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-orange-600 hover:bg-orange-700 text-white h-10 px-4 py-2 w-full transition-all group-hover:shadow-lg">
//             <ExternalLink className="h-4 w-4 mr-2" />
//             View Detailed Case Study
//           </button>
//         </div>
//       </div>
//     </div>

//      <div className="rounded-lg text-card-foreground overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg group  bg-white/10 backdrop-blur-sm ring-2 ring-orange-200">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
//         {/* LEFT COLUMN — IMAGE */}
//         <div className="relative overflow-hidden">
//           <img
//             src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1000&h=600&fit=crop"
//             alt="Secure Banking Transformation"
//             className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

//           <div className="absolute top-6 left-6 flex gap-2">
//             <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-orange-600 text-white">
//               Financial Services
//             </span>
//             <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-yellow-500 text-white">
//               Featured
//             </span>
//           </div>

//           <div className="absolute bottom-6 left-6 right-6">
//             <h3 className="text-2xl font-bold text-white mb-2">
//               Secure Banking Transformation
//             </h3>
//             <p className="text-white/80">SecureBank International</p>
//           </div>
//         </div>

//         {/* RIGHT COLUMN — DETAILS */}
//         <div className="p-8 lg:p-12">
//           {/* Challenge */}
//           <div className="mb-8">
//             <h4 className="font-bold text-gray-200 mb-3 flex items-center">
//               <Target className="h-5 w-5 text-red-500 mr-2" />
//               Challenge
//             </h4>
//             <p className="text-gray-400 leading-relaxed">
//               Legacy banking systems were hindering digital transformation and
//               creating security vulnerabilities that threatened customer trust.
//             </p>
//           </div>

//           {/* Solution */}
//           <div className="mb-8">
//             <h4 className="font-bold text-gray-200 mb-3 flex items-center">
//               <Zap className="h-5 w-5 text-blue-500 mr-2" />
//               Solution
//             </h4>
//             <p className="text-gray-400 leading-relaxed">
//               Complete digital banking transformation with mobile-first
//               approach, advanced security measures, and real-time fraud
//               detection.
//             </p>
//           </div>

//           {/* Results */}
//           <div className="mb-8">
//             <h4 className="font-bold text-gray-200 mb-4 flex items-center">
//               <ChartNoAxesColumnIncreasing className="h-5 w-5 text-green-500 mr-2" />
//               Results
//             </h4>

//             <div className="grid grid-cols-2 gap-4">
//               {/* Result 1 */}
//               <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
//                 <Users className="h-8 w-8 text-orange-600 mx-auto mb-2" />
//                 <div className="text-2xl font-bold text-orange-600 mb-1">90%</div>
//                 <div className="text-sm text-gray-400">Mobile Adoption</div>
//               </div>

//               {/* Result 2 */}
//               <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
//                 <Target className="h-8 w-8 text-orange-600 mx-auto mb-2" />
//                 <div className="text-2xl font-bold text-orange-600 mb-1">
//                   99.9%
//                 </div>
//                 <div className="text-sm text-gray-400">Fraud Prevention</div>
//               </div>

//               {/* Result 3 */}
//               <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
//                 <Zap className="h-8 w-8 text-orange-600 mx-auto mb-2" />
//                 <div className="text-2xl font-bold text-orange-600 mb-1">
//                   10x faster
//                 </div>
//                 <div className="text-sm text-gray-400">Processing Speed</div>
//               </div>

//               {/* Result 4 */}
//               <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
//                 <DollarSign className="h-8 w-8 text-orange-600 mx-auto mb-2" />
//                 <div className="text-2xl font-bold text-orange-600 mb-1">45%</div>
//                 <div className="text-sm text-gray-400">Cost Reduction</div>
//               </div>
//             </div>
//           </div>

//           {/* Testimonial */}
//           <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
//             <blockquote className="text-gray-700 italic text-lg leading-relaxed mb-4">
//               "The new platform has exceeded all our expectations. Customer
//               satisfaction is at an all-time high, and we've prevented millions
//               in potential fraud losses."
//             </blockquote>
//             <cite className="text-sm font-semibold text-gray-200">
//               — CTO, SecureBank International
//             </cite>
//           </div>

//           {/* Meta Info */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//             <div className="flex items-center space-x-2 text-sm text-gray-400">
//               <Calendar className="h-4 w-4 text-orange-500" />
//               <span>12 months</span>
//             </div>
//             <div className="flex items-center space-x-2 text-sm text-gray-400">
//               <Users className="h-4 w-4 text-orange-500" />
//               <span>18 members</span>
//             </div>
//             <div className="flex items-center space-x-2 text-sm text-gray-400">
//               <Building className="h-4 w-4 text-orange-500" />
//               <span>Financial Services</span>
//             </div>
//           </div>

//           {/* Technologies Used */}
//           <div className="mb-8">
//             <h4 className="font-semibold text-gray-200 mb-3">
//               Technologies Used
//             </h4>
//             <div className="flex flex-wrap gap-2">
//               {[
//                 "React Native",
//                 "Node.js",
//                 "PostgreSQL",
//                 "AWS",
//                 "Blockchain",
//                 "ML",
//               ].map((tech) => (
//                 <span
//                   key={tech}
//                   className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-orange-300 text-orange-600"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* CTA */}
//           <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-orange-600 hover:bg-orange-700 text-white h-10 px-4 py-2 w-full transition-all group-hover:shadow-lg">
//             <ExternalLink className="h-4 w-4 mr-2" />
//             View Detailed Case Study
//           </button>
//         </div>
//       </div>
//     </div>

//  <div className="rounded-lg text-card-foreground overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg group   bg-white/10 backdrop-blur-sm/10 backdrop-blur-sm">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
//         {/* LEFT COLUMN - IMAGE */}
//         <div className="relative overflow-hidden">
//           <img
//             src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg"
//             alt="Healthcare Analytics Revolution"
//             className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
//           <div className="absolute top-6 left-6 flex gap-2">
//             <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-orange-600 text-white">
//               Healthcare
//             </span>
//           </div>
//           <div className="absolute bottom-6 left-6 right-6">
//             <h3 className="text-2xl font-bold text-white mb-2">
//               Healthcare Analytics Revolution
//             </h3>
//             <p className="text-white/80">MedCare Solutions</p>
//           </div>
//         </div>

//         {/* RIGHT COLUMN - DETAILS */}
//         <div className="p-8 lg:p-12">
//           {/* Challenge */}
//           <div className="mb-8">
//             <h4 className="font-bold text-gray-200 mb-3 flex items-center">
//               <Target className="h-5 w-5 text-red-500 mr-2" />
//               Challenge
//             </h4>
//             <p className="text-gray-400 leading-relaxed">
//               Hospitals struggled with patient data management, leading to
//               delayed diagnoses and inefficient treatment protocols.
//             </p>
//           </div>

//           {/* Solution */}
//           <div className="mb-8">
//             <h4 className="font-bold text-gray-200 mb-3 flex items-center">
//               <Zap className="h-5 w-5 text-blue-500 mr-2" />
//               Solution
//             </h4>
//             <p className="text-gray-400 leading-relaxed">
//               HIPAA-compliant healthcare analytics platform with real-time
//               patient monitoring, predictive analytics, and automated reporting.
//             </p>
//           </div>

//           {/* Results */}
//           <div className="mb-8">
//             <h4 className="font-bold text-gray-200 mb-4 flex items-center">
//               <ChartNoAxesColumnIncreasing className="h-5 w-5 text-green-500 mr-2" />
//               Results
//             </h4>

//             <div className="grid grid-cols-2 gap-4">
//               {/* Diagnosis Speed */}
//               <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
//                 <Clock className="h-8 w-8 text-orange-600 mx-auto mb-2" />
//                 <div className="text-2xl font-bold text-orange-600 mb-1">
//                   +40%
//                 </div>
//                 <div className="text-sm text-gray-400">Diagnosis Speed</div>
//               </div>

//               {/* Patient Outcomes */}
//               <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
//                 <TrendingUp className="h-8 w-8 text-orange-600 mx-auto mb-2" />
//                 <div className="text-2xl font-bold text-orange-600 mb-1">
//                   +35%
//                 </div>
//                 <div className="text-sm text-gray-400">Patient Outcomes</div>
//               </div>

//               {/* Cost Savings */}
//               <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
//                 <DollarSign className="h-8 w-8 text-orange-600 mx-auto mb-2" />
//                 <div className="text-2xl font-bold text-orange-600 mb-1">
//                   $5M annually
//                 </div>
//                 <div className="text-sm text-gray-400">Cost Savings</div>
//               </div>

//               {/* Data Accuracy */}
//               <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
//                 <CircleCheckBig className="h-8 w-8 text-orange-600 mx-auto mb-2" />
//                 <div className="text-2xl font-bold text-orange-600 mb-1">
//                   99.8%
//                 </div>
//                 <div className="text-sm text-gray-400">Data Accuracy</div>
//               </div>
//             </div>
//           </div>

//           {/* Testimonial */}
//           <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
//             <blockquote className="text-gray-700 italic text-lg leading-relaxed mb-4">
//               "This platform has revolutionized how we deliver patient care. The
//               predictive analytics have helped us prevent critical situations
//               and save lives."
//             </blockquote>
//             <cite className="text-sm font-semibold text-gray-200">
//               — Chief Medical Officer, MedCare Solutions
//             </cite>
//           </div>

//           {/* Meta Info */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//             <div className="flex items-center space-x-2 text-sm text-gray-400">
//               <Calendar className="h-4 w-4 text-orange-500" />
//               <span>10 months</span>
//             </div>
//             <div className="flex items-center space-x-2 text-sm text-gray-400">
//               <Users className="h-4 w-4 text-orange-500" />
//               <span>15 members</span>
//             </div>
//             <div className="flex items-center space-x-2 text-sm text-gray-400">
//               <Building className="h-4 w-4 text-orange-500" />
//               <span>Healthcare</span>
//             </div>
//           </div>

//           {/* Technologies */}
//           <div className="mb-8">
//             <h4 className="font-semibold text-gray-200 mb-3">
//               Technologies Used
//             </h4>
//             <div className="flex flex-wrap gap-2">
//               {[
//                 "Python",
//                 "React",
//                 "PostgreSQL",
//                 "Docker",
//                 "TensorFlow",
//                 "FHIR",
//               ].map((tech) => (
//                 <span
//                   key={tech}
//                   className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-orange-300 text-orange-600"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* CTA */}
//           <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-orange-600 hover:bg-orange-700 text-white h-10 px-4 py-2 w-full transition-all group-hover:shadow-lg">
//             <ExternalLink className="h-4 w-4 mr-2" />
//             View Detailed Case Study
//           </button>
//         </div>
//       </div>
//     </div>

//      <div className="rounded-lg text-card-foreground overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg group   bg-white/10 backdrop-blur-sm/10 backdrop-blur-sm ring-2 ring-orange-200">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
//         {/* Image Section */}
//         <div className="relative overflow-hidden">
//           <img
//             src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1000&h=600&fit=crop"
//             alt="Enterprise Cloud Migration"
//             className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>

//           <div className="absolute top-6 left-6 flex gap-2">
//             <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-orange-600 text-white">
//               Manufacturing
//             </span>
//             <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-yellow-500 text-white">
//               Featured
//             </span>
//           </div>

//           <div className="absolute bottom-6 left-6 right-6">
//             <h3 className="text-2xl font-bold text-white mb-2">
//               Enterprise Cloud Migration
//             </h3>
//             <p className="text-white/80">GlobalTech Industries</p>
//           </div>
//         </div>

//         {/* Content Section */}
//         <div className="p-8 lg:p-12">
//           {/* Challenge */}
//           <div className="mb-8">
//             <h4 className="font-bold text-gray-200 mb-3 flex items-center">
//               <Target className="h-5 w-5 text-red-500 mr-2" /> Challenge
//             </h4>
//             <p className="text-gray-400 leading-relaxed">
//               On-premise infrastructure was costly, inflexible, and couldn’t
//               scale to meet growing business demands across multiple countries.
//             </p>
//           </div>

//           {/* Solution */}
//           <div className="mb-8">
//             <h4 className="font-bold text-gray-200 mb-3 flex items-center">
//               <Zap className="h-5 w-5 text-blue-500 mr-2" /> Solution
//             </h4>
//             <p className="text-gray-400 leading-relaxed">
//               Complete cloud migration strategy with multi-region deployment,
//               automated scaling, and comprehensive security implementation.
//             </p>
//           </div>

//           {/* Results */}
//           <div className="mb-8">
//             <h4 className="font-bold text-gray-200 mb-4 flex items-center">
//               <ChartNoAxesColumnIncreasing className="h-5 w-5 text-green-500 mr-2" />{" "}
//               Results
//             </h4>
//             <div className="grid grid-cols-2 gap-4">
//               {[
//                 {
//                   icon: <DollarSign className="h-8 w-8 text-orange-600 mx-auto mb-2" />,
//                   value: "60%",
//                   label: "Cost Reduction",
//                 },
//                 {
//                   icon: (
//                     <CircleCheckBig className="h-8 w-8 text-orange-600 mx-auto mb-2" />
//                   ),
//                   value: "99.99%",
//                   label: "System Uptime",
//                 },
//                 {
//                   icon: <Zap className="h-8 w-8 text-orange-600 mx-auto mb-2" />,
//                   value: "90% faster",
//                   label: "Deployment Speed",
//                 },
//                 {
//                   icon: <Globe className="h-8 w-8 text-orange-600 mx-auto mb-2" />,
//                   value: "15 countries",
//                   label: "Global Scalability",
//                 },
//               ].map((stat, index) => (
//                 <div
//                   key={index}
//                   className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl"
//                 >
//                   {stat.icon}
//                   <div className="text-2xl font-bold text-orange-600 mb-1">
//                     {stat.value}
//                   </div>
//                   <div className="text-sm text-gray-400">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Testimonial */}
//           <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
//             <blockquote className="text-gray-700 italic text-lg leading-relaxed mb-4">
//               "The migration was seamless with zero downtime. We're now more
//               agile, cost-effective, and can scale our operations globally with
//               confidence."
//             </blockquote>
//             <cite className="text-sm font-semibold text-gray-200">
//               — VP of Technology, GlobalTech Industries
//             </cite>
//           </div>

//           {/* Project Details */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//             <div className="flex items-center space-x-2">
//               <Calendar className="h-4 w-4 text-orange-500" />
//               <span className="text-sm text-gray-400">14 months</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <Users className="h-4 w-4 text-orange-500" />
//               <span className="text-sm text-gray-400">20 members</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <Building className="h-4 w-4 text-orange-500" />
//               <span className="text-sm text-gray-400">Manufacturing</span>
//             </div>
//           </div>

//           {/* Technologies */}
//           <div className="mb-8">
//             <h4 className="font-semibold text-gray-200 mb-3">
//               Technologies Used
//             </h4>
//             <div className="flex flex-wrap gap-2">
//               {[
//                 "AWS",
//                 "Kubernetes",
//                 "Docker",
//                 "Terraform",
//                 "Jenkins",
//                 "Monitoring",
//               ].map((tech, index) => (
//                 <span
//                   key={index}
//                   className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-orange-300 text-orange-600"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* CTA Button */}
//           <button className="inline-flex items-center justify-center gap-2 w-full h-10 px-4 py-2 rounded-md text-sm font-medium bg-gradient-to-r from-orange-500 to-red-500 text-white hover:opacity-90 transition-all group-hover:shadow-lg">
//             <ExternalLink className="h-4 w-4 mr-2" />
//             View Detailed Case Study
//           </button>
//         </div>
//       </div>
//     </div>

//  <div className="rounded-lg text-card-foreground overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg group   bg-white/10 backdrop-blur-sm/10 backdrop-blur-sm">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
//         {/* Image Section */}
//         <div className="relative overflow-hidden">
//           <img
//             src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000&h=600&fit=crop"
//             alt="EdTech Learning Platform"
//             className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>

//           <div className="absolute top-6 left-6 flex gap-2">
//             <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-orange-600 text-white hover:bg-orange-700 transition-colors">
//               Education
//             </span>
//           </div>

//           <div className="absolute bottom-6 left-6 right-6">
//             <h3 className="text-2xl font-bold text-white mb-2">
//               EdTech Learning Platform
//             </h3>
//             <p className="text-white/80">EduTech Innovations</p>
//           </div>
//         </div>

//         {/* Content Section */}
//         <div className="p-8 lg:p-12">
//           {/* Challenge */}
//           <div className="mb-8">
//             <h4 className="font-bold text-gray-200 mb-3 flex items-center">
//               <Target className="h-5 w-5 text-red-500 mr-2" /> Challenge
//             </h4>
//             <p className="text-gray-400 leading-relaxed">
//               Traditional learning methods weren't engaging students
//               effectively, leading to high dropout rates and poor learning
//               outcomes.
//             </p>
//           </div>

//           {/* Solution */}
//           <div className="mb-8">
//             <h4 className="font-bold text-gray-200 mb-3 flex items-center">
//               <Zap className="h-5 w-5 text-blue-500 mr-2" /> Solution
//             </h4>
//             <p className="text-gray-400 leading-relaxed">
//               AI-powered personalized learning platform with adaptive content,
//               progress tracking, and interactive collaboration tools.
//             </p>
//           </div>

//           {/* Results */}
//           <div className="mb-8">
//             <h4 className="font-bold text-gray-200 mb-4 flex items-center">
//               <ChartNoAxesColumnIncreasing className="h-5 w-5 text-green-500 mr-2" />{" "}
//               Results
//             </h4>

//             <div className="grid grid-cols-2 gap-4">
//               {[
//                 {
//                   icon: <Users className="h-8 w-8 text-orange-600 mx-auto mb-2" />,
//                   value: "+75%",
//                   label: "Student Engagement",
//                 },
//                 {
//                   icon: <Target className="h-8 w-8 text-orange-600 mx-auto mb-2" />,
//                   value: "85%",
//                   label: "Completion Rate",
//                 },
//                 {
//                   icon: (
//                     <TrendingUp className="h-8 w-8 text-orange-600 mx-auto mb-2" />
//                   ),
//                   value: "+50%",
//                   label: "Learning Efficiency",
//                 },
//                 {
//                   icon: <Globe className="h-8 w-8 text-orange-600 mx-auto mb-2" />,
//                   value: "500K+",
//                   label: "Platform Users",
//                 },
//               ].map((stat, index) => (
//                 <div
//                   key={index}
//                   className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl"
//                 >
//                   {stat.icon}
//                   <div className="text-2xl font-bold text-orange-600 mb-1">
//                     {stat.value}
//                   </div>
//                   <div className="text-sm text-gray-400">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Testimonial */}
//           <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
//             <blockquote className="text-gray-700 italic text-lg leading-relaxed mb-4">
//               "Students are more engaged than ever before. The personalized
//               learning paths have dramatically improved our retention and
//               success rates."
//             </blockquote>
//             <cite className="text-sm font-semibold text-gray-200">
//               — Head of Product, EduTech Innovations
//             </cite>
//           </div>

//           {/* Project Info */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//             <div className="flex items-center space-x-2">
//               <Calendar className="h-4 w-4 text-orange-500" />
//               <span className="text-sm text-gray-400">9 months</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <Users className="h-4 w-4 text-orange-500" />
//               <span className="text-sm text-gray-400">14 members</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <Building className="h-4 w-4 text-orange-500" />
//               <span className="text-sm text-gray-400">Education</span>
//             </div>
//           </div>

//           {/* Technologies */}
//           <div className="mb-8">
//             <h4 className="font-semibold text-gray-200 mb-3">
//               Technologies Used
//             </h4>
//             <div className="flex flex-wrap gap-2">
//               {[
//                 "React",
//                 "Python",
//                 "Django",
//                 "PostgreSQL",
//                 "TensorFlow",
//                 "WebRTC",
//               ].map((tech, index) => (
//                 <span
//                   key={index}
//                   className="inline-flex items-center rounded-full border border-orange-300 px-2.5 py-0.5 text-xs font-semibold text-orange-600"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* CTA Button */}
//           <button className="inline-flex items-center justify-center gap-2 w-full h-10 px-4 py-2 rounded-md text-sm font-medium bg-gradient-to-r from-orange-500 to-red-500 text-white hover:opacity-90 transition-all group-hover:shadow-lg">
//             <ExternalLink className="h-4 w-4 mr-2" />
//             View Detailed Case Study
//           </button>
//         </div>
//       </div>
//     </div>

//      <div className="rounded-lg text-card-foreground overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg group   bg-white/10 backdrop-blur-sm/10 backdrop-blur-sm">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
//         {/* Image Section */}
//         <div className="relative overflow-hidden">
//           <img
//             src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1000&h=600&fit=crop"
//             alt="Smart Logistics Optimization"
//             className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>

//           <div className="absolute top-6 left-6 flex gap-2">
//             <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-orange-600 text-white hover:bg-orange-700 transition-colors">
//               Transportation
//             </span>
//           </div>

//           <div className="absolute bottom-6 left-6 right-6">
//             <h3 className="text-2xl font-bold text-white mb-2">
//               Smart Logistics Optimization
//             </h3>
//             <p className="text-white/80">LogiFlow Transportation</p>
//           </div>
//         </div>

//         {/* Content Section */}
//         <div className="p-8 lg:p-12">
//           {/* Challenge */}
//           <div className="mb-8">
//             <h4 className="font-bold text-gray-200 mb-3 flex items-center">
//               <Target className="h-5 w-5 text-red-500 mr-2" /> Challenge
//             </h4>
//             <p className="text-gray-400 leading-relaxed">
//               Inefficient route planning and fleet management were resulting in
//               high fuel costs and delayed deliveries affecting customer
//               satisfaction.
//             </p>
//           </div>

//           {/* Solution */}
//           <div className="mb-8">
//             <h4 className="font-bold text-gray-200 mb-3 flex items-center">
//               <Zap className="h-5 w-5 text-blue-500 mr-2" /> Solution
//             </h4>
//             <p className="text-gray-400 leading-relaxed">
//               Comprehensive logistics platform with AI-powered route
//               optimization, real-time tracking, and predictive maintenance.
//             </p>
//           </div>

//           {/* Results */}
//           <div className="mb-8">
//             <h4 className="font-bold text-gray-200 mb-4 flex items-center">
//               <ChartNoAxesColumnIncreasing className="h-5 w-5 text-green-500 mr-2" />
//               Results
//             </h4>

//             <div className="grid grid-cols-2 gap-4">
//               {[
//                 {
//                   icon: <DollarSign className="h-8 w-8 text-orange-600 mx-auto mb-2" />,
//                   value: "30%",
//                   label: "Fuel Savings",
//                 },
//                 {
//                   icon: (
//                     <CircleCheckBig className="h-8 w-8 text-orange-600 mx-auto mb-2" />
//                   ),
//                   value: "95%",
//                   label: "On-time Delivery",
//                 },
//                 {
//                   icon: (
//                     <TrendingUp className="h-8 w-8 text-orange-600 mx-auto mb-2" />
//                   ),
//                   value: "+40%",
//                   label: "Route Efficiency",
//                 },
//                 {
//                   icon: <Award className="h-8 w-8 text-orange-600 mx-auto mb-2" />,
//                   value: "92%",
//                   label: "Customer Satisfaction",
//                 },
//               ].map((stat, index) => (
//                 <div
//                   key={index}
//                   className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl"
//                 >
//                   {stat.icon}
//                   <div className="text-2xl font-bold text-orange-600 mb-1">
//                     {stat.value}
//                   </div>
//                   <div className="text-sm text-gray-400">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Testimonial */}
//           <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
//             <blockquote className="text-gray-700 italic text-lg leading-relaxed mb-4">
//               "The optimization algorithms have transformed our operations.
//               We're delivering faster while significantly reducing our
//               environmental impact."
//             </blockquote>
//             <cite className="text-sm font-semibold text-gray-200">
//               — Operations Director, LogiFlow Transportation
//             </cite>
//           </div>

//           {/* Project Info */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//             <div className="flex items-center space-x-2">
//               <Calendar className="h-4 w-4 text-orange-500" />
//               <span className="text-sm text-gray-400">7 months</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <Users className="h-4 w-4 text-orange-500" />
//               <span className="text-sm text-gray-400">11 members</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <Building className="h-4 w-4 text-orange-500" />
//               <span className="text-sm text-gray-400">Transportation</span>
//             </div>
//           </div>

//           {/* Technologies */}
//           <div className="mb-8">
//             <h4 className="font-semibold text-gray-200 mb-3">
//               Technologies Used
//             </h4>
//             <div className="flex flex-wrap gap-2">
//               {[
//                 "React",
//                 "Node.js",
//                 "MongoDB",
//                 "Google Maps API",
//                 "IoT",
//                 "ML",
//               ].map((tech, index) => (
//                 <span
//                   key={index}
//                   className="inline-flex items-center rounded-full border border-orange-300 px-2.5 py-0.5 text-xs font-semibold text-orange-600"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* CTA Button */}
//           <button className="inline-flex items-center justify-center gap-2 w-full h-10 px-4 py-2 rounded-md text-sm font-medium bg-gradient-to-r from-orange-500 to-red-500 text-white hover:opacity-90 transition-all group-hover:shadow-lg">
//             <ExternalLink className="h-4 w-4 mr-2" />
//             View Detailed Case Study
//           </button>
//         </div>
//       </div>
//     </div>



//           </div>
//         </div>
//       </section>
//       <section className="py-24 bg-gradient-to-r from-[#1a2940] to-[#212d41]
//  text-white">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-4xl md:text-5xl font-bold mb-8">
//             Ready to Write Your Success Story?
//           </h2>
//           <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto">
//             Join our growing list of successful clients who have transformed
//             their businesses with our innovative solutions. Let's discuss how we
//             can help you achieve similar results.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
//             <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-11 rounded-md   bg-white/10 backdrop-blur-sm/10 backdrop-blur-sm text-orange-600 hover:bg-orange-50 px-12 py-6 text-xl font-semibold">
//               Start Your Transformation
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
//             <a href="/contact">
//               {" "}
//               <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-secondary h-11 rounded-md border-2 border-white text-black hover:  bg-white/10 backdrop-blur-sm/10 backdrop-blur-sm/10 px-12 py-6 text-xl backdrop-blur-sm">
//                 Schedule Free Consultation
//               </button>
//             </a>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//             <div className="  bg-white/10 backdrop-blur-sm/10 backdrop-blur-sm/10 backdrop-blur-sm rounded-xl p-6">
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
//                 className="lucide lucide-circle-check-big h-12 w-12 mx-auto mb-4"
//               >
//                 <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
//                 <path d="m9 11 3 3L22 4"></path>
//               </svg>
//               <h3 className="font-bold text-lg mb-2">Proven Methodology</h3>
//               <p className="text-white/80">
//                 Battle-tested processes that deliver consistent results
//               </p>
//             </div>
//             <div className="  bg-white/10 backdrop-blur-sm/10 backdrop-blur-sm/10 backdrop-blur-sm rounded-xl p-6">
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
//                 className="lucide lucide-award h-12 w-12 mx-auto mb-4"
//               >
//                 <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
//                 <circle cx="12" cy="8" r="6"></circle>
//               </svg>
//               <h3 className="font-bold text-lg mb-2">Industry Recognition</h3>
//               <p className="text-white/80">
//                 Award-winning solutions recognized by industry leaders
//               </p>
//             </div>
//             <div className="  bg-white/10 backdrop-blur-sm/10 backdrop-blur-sm/10 backdrop-blur-sm rounded-xl p-6">
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
//                 className="lucide lucide-trending-up h-12 w-12 mx-auto mb-4"
//               >
//                 <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
//                 <polyline points="16 7 22 7 22 13"></polyline>
//               </svg>
//               <h3 className="font-bold text-lg mb-2">Measurable Impact</h3>
//               <p className="text-white/80">
//                 Quantifiable results that drive real business value
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default CaseStudies;









import {
  Target,
  Zap,
  ChartNoAxesColumnIncreasing,
  TrendingUp,
  Users,
  Award,
  Calendar,
  Building,
  ExternalLink,
  DollarSign,
  CircleCheckBig,
  Clock,
  Globe,
} from "lucide-react";
import { FC } from "react";

const CaseStudies: FC = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative py-32 bg-gradient-to-r from-orange-50 via-white to-orange-100 text-gray-900">
        <div className="absolute inset-0"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-orange-700">
            Success Stories
          </h1>
          <p className="text-xl mb-10 max-w-4xl mx-auto leading-relaxed text-gray-700">
            Discover how we've helped businesses across industries achieve
            remarkable transformations through innovative technology solutions.
            These real-world case studies showcase the tangible impact of our
            expertise and commitment to client success.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="inline-flex items-center justify-center gap-2 h-11 rounded-md bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 text-lg font-semibold shadow-lg transition">
              Explore Case Studies
              <ExternalLink className="h-5 w-5 ml-2" />
            </button>

            <button className="inline-flex items-center justify-center gap-2 font-medium h-11 rounded-md border-2 border-orange-400 text-orange-700 hover:bg-orange-100 transition px-10 py-4 text-lg">
              Start Your Success Story
            </button>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 bg-gradient-to-r from-orange-100 via-white to-orange-50 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">15+</div>
              <div className="text-gray-700">Successful Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">2k</div>
              <div className="text-gray-700">Client Trusted</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">98%</div>
              <div className="text-gray-700">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">5+</div>
              <div className="text-gray-700">Industry Awards</div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-24 bg-gradient-to-r from-orange-50 via-white to-orange-100 text-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-orange-700 mb-6">
              Transformative Case Studies
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Real challenges, innovative solutions, and measurable results that
              demonstrate our commitment to delivering exceptional value.
            </p>
          </div>

          {/* CASE STUDY 1 */}
          <div className="space-y-16">
            <div className="rounded-lg overflow-hidden border border-orange-100 bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1000&h=600&fit=crop"
                    alt="AI-Powered E-Commerce Revolution"
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-6 left-6 flex gap-2">
                    <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase">
                      E-commerce
                    </span>
                    <span className="bg-yellow-400 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  <h3 className="text-2xl font-bold text-orange-700 mb-4">
                    AI-Powered E-Commerce Revolution
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Low conversion rates, high cart abandonment, and inefficient
                    inventory management were costing millions in lost revenue.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      ["300%", "Revenue Increase"],
                      ["+85%", "Conversion Rate"],
                      ["-60%", "Cart Abandonment"],
                      ["96%", "Customer Satisfaction"],
                    ].map(([val, label]) => (
                      <div
                        key={label}
                        className="text-center p-4 bg-orange-50 rounded-xl"
                      >
                        <div className="text-2xl font-bold text-orange-600 mb-1">
                          {val}
                        </div>
                        <div className="text-sm text-gray-700">{label}</div>
                      </div>
                    ))}
                  </div>
                  <button className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-orange-500 hover:bg-orange-600 text-white h-10 px-6 py-2 transition-all">
                    <ExternalLink className="h-4 w-4" /> View Case Study
                  </button>
                </div>
              </div>
            </div>

            {/* CASE STUDY 2 */}
            <div className="rounded-lg overflow-hidden border border-orange-100 bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1000&h=600&fit=crop"
                    alt="Secure Banking Transformation"
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-6 left-6 flex gap-2">
                    <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase">
                      Financial Services
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  <h3 className="text-2xl font-bold text-orange-700 mb-4">
                    Secure Banking Transformation
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Legacy banking systems hindered digital transformation and
                    security modernization.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      ["90%", "Mobile Adoption"],
                      ["99.9%", "Fraud Prevention"],
                      ["10x", "Processing Speed"],
                      ["45%", "Cost Reduction"],
                    ].map(([val, label]) => (
                      <div
                        key={label}
                        className="text-center p-4 bg-orange-50 rounded-xl"
                      >
                        <div className="text-2xl font-bold text-orange-600 mb-1">
                          {val}
                        </div>
                        <div className="text-sm text-gray-700">{label}</div>
                      </div>
                    ))}
                  </div>
                  <button className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-orange-500 hover:bg-orange-600 text-white h-10 px-6 py-2 transition-all">
                    <ExternalLink className="h-4 w-4" /> View Case Study
                  </button>
                </div>
              </div>
            </div>

            {/* CASE STUDY 3 */}
            <div className="rounded-lg overflow-hidden border border-orange-100 bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg"
                    alt="Healthcare Analytics Revolution"
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-6 left-6 flex gap-2">
                    <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase">
                      Healthcare
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  <h3 className="text-2xl font-bold text-orange-700 mb-4">
                    Healthcare Analytics Revolution
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Hospitals struggled with patient data management and delayed
                    diagnoses.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      ["+40%", "Diagnosis Speed"],
                      ["+35%", "Patient Outcomes"],
                      ["$5M", "Annual Savings"],
                      ["99.8%", "Data Accuracy"],
                    ].map(([val, label]) => (
                      <div
                        key={label}
                        className="text-center p-4 bg-orange-50 rounded-xl"
                      >
                        <div className="text-2xl font-bold text-orange-600 mb-1">
                          {val}
                        </div>
                        <div className="text-sm text-gray-700">{label}</div>
                      </div>
                    ))}
                  </div>
                  <button className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-orange-500 hover:bg-orange-600 text-white h-10 px-6 py-2 transition-all">
                    <ExternalLink className="h-4 w-4" /> View Case Study
                  </button>
                </div>
              </div>
            </div>

            {/* CASE STUDY 4 */}
            <div className="rounded-lg overflow-hidden border border-orange-100 bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1000&h=600&fit=crop"
                    alt="Enterprise Cloud Migration"
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12">
                  <h3 className="text-2xl font-bold text-orange-700 mb-4">
                    Enterprise Cloud Migration
                  </h3>
                  <p className="text-gray-700 mb-6">
                    On-prem infrastructure was costly and unscalable. We migrated
                    systems seamlessly.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      ["60%", "Cost Reduction"],
                      ["99.99%", "System Uptime"],
                      ["90%", "Faster Deployment"],
                      ["15", "Countries Covered"],
                    ].map(([val, label]) => (
                      <div
                        key={label}
                        className="text-center p-4 bg-orange-50 rounded-xl"
                      >
                        <div className="text-2xl font-bold text-orange-600 mb-1">
                          {val}
                        </div>
                        <div className="text-sm text-gray-700">{label}</div>
                      </div>
                    ))}
                  </div>
                  <button className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-orange-500 hover:bg-orange-600 text-white h-10 px-6 py-2 transition-all">
                    <ExternalLink className="h-4 w-4" /> View Case Study
                  </button>
                </div>
              </div>
            </div>

            {/* CASE STUDY 5 */}
            <div className="rounded-lg overflow-hidden border border-orange-100 bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000&h=600&fit=crop"
                    alt="EdTech Learning Platform"
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12">
                  <h3 className="text-2xl font-bold text-orange-700 mb-4">
                    EdTech Learning Platform
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Traditional learning lacked engagement. AI-personalized
                    education increased results.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      ["+75%", "Engagement"],
                      ["85%", "Completion Rate"],
                      ["+50%", "Efficiency"],
                      ["500K+", "Users"],
                    ].map(([val, label]) => (
                      <div
                        key={label}
                        className="text-center p-4 bg-orange-50 rounded-xl"
                      >
                        <div className="text-2xl font-bold text-orange-600 mb-1">
                          {val}
                        </div>
                        <div className="text-sm text-gray-700">{label}</div>
                      </div>
                    ))}
                  </div>
                  <button className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-orange-500 hover:bg-orange-600 text-white h-10 px-6 py-2 transition-all">
                    <ExternalLink className="h-4 w-4" /> View Case Study
                  </button>
                </div>
              </div>
            </div>

            {/* CASE STUDY 6 */}
            <div className="rounded-lg overflow-hidden border border-orange-100 bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1000&h=600&fit=crop"
                    alt="Smart Logistics Optimization"
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12">
                  <h3 className="text-2xl font-bold text-orange-700 mb-4">
                    Smart Logistics Optimization
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Inefficient fleet management was driving up costs and delays.
                    AI-driven logistics fixed it.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      ["30%", "Fuel Savings"],
                      ["95%", "On-time Delivery"],
                      ["+40%", "Efficiency"],
                      ["92%", "Customer Satisfaction"],
                    ].map(([val, label]) => (
                      <div
                        key={label}
                        className="text-center p-4 bg-orange-50 rounded-xl"
                      >
                        <div className="text-2xl font-bold text-orange-600 mb-1">
                          {val}
                        </div>
                        <div className="text-sm text-gray-700">{label}</div>
                      </div>
                    ))}
                  </div>
                  <button className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-orange-500 hover:bg-orange-600 text-white h-10 px-6 py-2 transition-all">
                    <ExternalLink className="h-4 w-4" /> View Case Study
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-r from-orange-100 via-white to-orange-50 text-gray-900 text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-700 mb-8">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto text-gray-700">
            Join our growing list of successful clients who have transformed
            their businesses with our innovative solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-12 py-6 text-lg font-semibold rounded-md transition">
              Start Your Transformation
              <ExternalLink className="h-6 w-6" />
            </button>
            <a href="/contact">
              <button className="inline-flex items-center justify-center gap-2 border-2 border-orange-400 text-orange-700 hover:bg-orange-100 px-12 py-6 text-lg font-semibold rounded-md transition">
                Schedule Free Consultation
              </button>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              [
                "Proven Methodology",
                "Battle-tested processes that deliver consistent results",
              ],
              [
                "Industry Recognition",
                "Award-winning solutions recognized by leaders",
              ],
              [
                "Measurable Impact",
                "Quantifiable results that drive real business value",
              ],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
              >
                <h3 className="font-bold text-lg text-orange-700 mb-2">
                  {title}
                </h3>
                <p className="text-gray-700">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;
