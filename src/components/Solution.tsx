

// import React from "react";
// import {
//   ArrowRight,
//   Cpu,
//   Cloud,
//   BarChart3,
//   Shield,
//   Smartphone,
//   Code,
//   CheckCircle,
// } from "lucide-react";

// const solutions = [
//   {
//     title: "AI Solutions",
//     description:
//       "Leverage Artificial Intelligence and Machine Learning to automate, optimize, and scale your business operations.",
//     icon: <Cpu className="w-8 h-8" />,
//     color: "indigo",
//     image:
//       "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
//     items: ["Predictive Analytics", "Chatbots & NLP", "AI-Powered Automation"],
//   },
//   {
//     title: "Cloud Computing",
//     description:
//       "Scalable cloud infrastructure for seamless deployment, management, and collaboration across platforms.",
//     icon: <Cloud className="w-8 h-8" />,
//     color: "blue",
//     image:
//       "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
//     items: ["Cloud Migration", "DevOps & CI/CD", "Multi-Cloud Solutions"],
//   },
//   {
//     title: "Data Analytics",
//     description:
//       "Transform data into actionable insights with advanced analytics and business intelligence tools.",
//     icon: <BarChart3 className="w-8 h-8" />,
//     color: "amber",
//     image:
//       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
//     items: ["BI Dashboards", "Predictive Modeling", "Data Warehousing"],
//   },
//   {
//     title: "Cybersecurity",
//     description:
//       "Protect your digital assets with advanced security frameworks and real-time threat detection.",
//     icon: <Shield className="w-8 h-8" />,
//     color: "red",
//     image:
//       "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop",
//     items: ["Network Security", "Data Encryption", "Risk Assessment"],
//   },
//   {
//     title: "Mobile Development",
//     description:
//       "Build high-performance, cross-platform mobile apps that engage and convert users.",
//     icon: <Smartphone className="w-8 h-8" />,
//     color: "green",
//     image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
//     items: [
//       "iOS & Android Apps",
//       "Flutter & React Native",
//       "App Store Optimization",
//     ],
//   },
//   {
//     title: "Web Development",
//     description:
//       "Develop modern, scalable, and SEO-optimized web applications with exceptional user experiences.",
//     icon: <Code className="w-8 h-8" />,
//     color: "purple",
//     image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
//     items: ["Responsive Design", "E-commerce Platforms", "Web App Development"],
//   },
// ];

// const Solution: React.FC = () => {
//   return (
//     <div className="py-16 min-h-screen bg-gradient-to-r from-[#1c2b4d] to-[#303e4f] text-white">
//       {/* Hero Section */}
//       <section className="relative  lg:py-16 overflow-hidden">
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
//             Innovative Solutions
//             <span className="block text-3xl md:text-5xl mt-2 font-normal text-gray-200">
//               for Modern Challenges
//             </span>
//           </h1>

//           <p className="text-xl text-gray-200 mb-10 max-w-4xl mx-auto leading-relaxed">
//             Discover our comprehensive suite of technology solutions designed to
//             accelerate your digital transformation, enhance operational
//             efficiency, and drive sustainable business growth in today&apos;s
//             competitive landscape.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-6 justify-center">
//             <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap h-11 rounded-md bg-white text-orange-600 hover:bg-orange-100 px-10 py-4 text-lg font-semibold shadow-lg transition-colors">
//               Explore Solutions
//               <ArrowRight className="ml-2 h-5 w-5" />
//             </button>

//             <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap h-11 rounded-md bg-white text-orange-600 hover:bg-orange-100 px-10 py-4 text-lg font-medium border border-orange-200 backdrop-blur-sm transition-colors">
//               Schedule Consultation
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Solutions Section */}
//       <section
//         id="solutions"
//         className="py-20 bg-white/10 backdrop-blur-sm rounded-t-3xl"
//       >
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4">Comprehensive Solutions</h2>
//             <p className="text-lg text-gray-200 max-w-3xl mx-auto">
//               Empowering your business with cutting-edge digital solutions
//               tailored to your unique needs.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//             {solutions.map((solution, index) => (
//               <div
//                 key={index}
//                 className="group relative bg-white/10 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
//               >
//                 {/* Image */}
//                 <div className="h-40 overflow-hidden">
//                   <img
//                     src={solution.image}
//                     alt={solution.title}
//                     className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
//                   />
//                 </div>

//                 {/* Content */}
//                 <div className="p-8 relative z-10">
//                   <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
//                     {solution.icon}
//                   </div>

//                   <h3 className="text-2xl font-semibold mb-3">
//                     {solution.title}
//                   </h3>

//                   <p className="text-gray-200 mb-4">{solution.description}</p>

//                   <ul className="space-y-2 text-gray-300 mb-6">
//                     {solution.items.map((item, i) => (
//                       <li key={i} className="flex items-center gap-2">
//                         <CheckCircle className="w-4 h-4 text-orange-400" />
//                         {item}
//                       </li>
//                     ))}
//                   </ul>

//                   <a
//                     href="#"
//                     className="inline-flex items-center text-orange-400 font-medium hover:underline"
//                   >
//                     Learn More
//                     <ArrowRight className="w-4 h-4 ml-1" />
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Solution;








import React from "react";
import {
  ArrowRight,
  Cpu,
  Cloud,
  BarChart3,
  Shield,
  Smartphone,
  Code,
  CheckCircle,
} from "lucide-react";

const solutions = [
  {
    title: "AI Solutions",
    description:
      "Leverage Artificial Intelligence and Machine Learning to automate, optimize, and scale your business operations.",
    icon: <Cpu className="w-8 h-8" />,
    color: "indigo",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
    items: ["Predictive Analytics", "Chatbots & NLP", "AI-Powered Automation"],
  },
  {
    title: "Cloud Computing",
    description:
      "Scalable cloud infrastructure for seamless deployment, management, and collaboration across platforms.",
    icon: <Cloud className="w-8 h-8" />,
    color: "blue",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
    items: ["Cloud Migration", "DevOps & CI/CD", "Multi-Cloud Solutions"],
  },
  {
    title: "Data Analytics",
    description:
      "Transform data into actionable insights with advanced analytics and business intelligence tools.",
    icon: <BarChart3 className="w-8 h-8" />,
    color: "amber",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    items: ["BI Dashboards", "Predictive Modeling", "Data Warehousing"],
  },
  {
    title: "Cybersecurity",
    description:
      "Protect your digital assets with advanced security frameworks and real-time threat detection.",
    icon: <Shield className="w-8 h-8" />,
    color: "red",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop",
    items: ["Network Security", "Data Encryption", "Risk Assessment"],
  },
  {
    title: "Mobile Development",
    description:
      "Build high-performance, cross-platform mobile apps that engage and convert users.",
    icon: <Smartphone className="w-8 h-8" />,
    color: "green",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
    items: [
      "iOS & Android Apps",
      "Flutter & React Native",
      "App Store Optimization",
    ],
  },
  {
    title: "Web Development",
    description:
      "Develop modern, scalable, and SEO-optimized web applications with exceptional user experiences.",
    icon: <Code className="w-8 h-8" />,
    color: "purple",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
    items: ["Responsive Design", "E-commerce Platforms", "Web App Development"],
  },
];

const Solution: React.FC = () => {
  return (
    // 🌈 Changed background color here
    <div className="py-16 min-h-screen bg-gradient-to-r from-orange-50 via-white to-orange-100 text-gray-900">
      {/* Hero Section */}
      <section className="relative lg:py-16 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Innovative Solutions
            <span className="block text-3xl md:text-5xl mt-2 font-normal text-gray-700">
              for Modern Challenges
            </span>
          </h1>

          <p className="text-xl text-gray-700 mb-10 max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive suite of technology solutions designed to
            accelerate your digital transformation, enhance operational
            efficiency, and drive sustainable business growth in today&apos;s
            competitive landscape.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap h-11 rounded-md bg-orange-500 text-white hover:bg-orange-600 px-10 py-4 text-lg font-semibold shadow-lg transition-colors">
              Explore Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>

            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap h-11 rounded-md bg-white text-orange-600 hover:bg-orange-100 px-10 py-4 text-lg font-medium border border-orange-200 backdrop-blur-sm transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section
        id="solutions"
        className="py-20 bg-white/70 backdrop-blur-md rounded-t-3xl"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Comprehensive Solutions
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Empowering your business with cutting-edge digital solutions
              tailored to your unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="group relative bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden"
              >
                {/* Image */}
                <div className="h-40 overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-8 relative z-10">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                    {solution.icon}
                  </div>

                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                    {solution.title}
                  </h3>

                  <p className="text-gray-700 mb-4">{solution.description}</p>

                  <ul className="space-y-2 text-gray-600 mb-6">
                    {solution.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-500" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#"
                    className="inline-flex items-center text-orange-600 font-medium hover:underline"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solution;
