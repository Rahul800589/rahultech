// import React from "react";
// import {
//   ArrowRight,
//   Code,
//   Cloud,
//   Smartphone,
//   Shield,
//   Bot,
//   Database,
//   CircleCheckBig,
// } from "lucide-react";

// interface Service {
//   title: string;
//   description: string;
//   icon: React.ReactNode;
//   image: string;
//   features: string[];
// }

// const services: Service[] = [
//   {
//     title: "Custom Software Development",
//     description:
//       "We build bespoke software solutions tailored to your business needs using modern technologies like React, Node.js, Python, and cloud-native architectures.",
//     icon: <Code className="h-8 w-8 text-orange-500" />,
//     image:
//       "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
//     features: [
//       "Full-stack development",
//       "API integration",
//       "Database design",
//       "Performance optimization",
//     ],
//   },
//   {
//     title: "Cloud Solutions & DevOps",
//     description:
//       "Comprehensive cloud migration, infrastructure setup, and DevOps implementation with AWS, Azure, and GCP platforms.",
//     icon: <Cloud className="h-8 w-8 text-orange-500" />,
//     image:
//       "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=250&fit=crop",
//     features: [
//       "Cloud migration",
//       "CI/CD pipelines",
//       "Infrastructure as Code",
//       "Monitoring & logging",
//     ],
//   },
//   {
//     title: "Mobile App Development",
//     description:
//       "Native iOS and Android apps, plus cross-platform solutions using React Native and Flutter for maximum reach.",
//     icon: <Smartphone className="h-8 w-8 text-orange-500" />,
//     image:
//       "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=250&fit=crop",
//     features: [
//       "iOS & Android native",
//       "Cross-platform",
//       "App Store optimization",
//       "Push notifications",
//     ],
//   },
//   {
//     title: "Cybersecurity Solutions",
//     description:
//       "Advanced security implementations including penetration testing, security audits, and compliance management.",
//     icon: <Shield className="h-8 w-8 text-orange-500" />,
//     image:
//       "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=250&fit=crop",
//     features: [
//       "Security audits",
//       "Penetration testing",
//       "Compliance (SOC2, HIPAA)",
//       "Threat monitoring",
//     ],
//   },
//   {
//     title: "AI & Machine Learning",
//     description:
//       "Cutting-edge AI solutions including chatbots, predictive analytics, and machine learning model development.",
//     icon: <Bot className="h-8 w-8 text-orange-500" />,
//     image:
//       "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=250&fit=crop",
//     features: [
//       "Custom AI models",
//       "Natural language processing",
//       "Computer vision",
//       "Predictive analytics",
//     ],
//   },
//   {
//     title: "Data Engineering",
//     description:
//       "Big data solutions, data warehousing, ETL pipelines, and business intelligence dashboards.",
//     icon: <Database className="h-8 w-8 text-orange-500" />,
//     image:
//       "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop",
//     features: [
//       "Data pipelines",
//       "Real-time analytics",
//       "Data warehousing",
//       "Business intelligence",
//     ],
//   },
// ];

// const TechnologyServices: React.FC = () => {
//   return (
//     <section className="py-24 bg-gradient-to-r from-[#1a2e49] to-[#32445b]
// ">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-20">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//             Comprehensive Technology Services
//           </h2>
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//             We offer end-to-end technology solutions designed to accelerate your
//             digital transformation and drive sustainable business growth.
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="rounded-xl shadow-lg overflow-hidden group bg-white/5 backdrop-blur-sm hover:shadow-2xl transition-all duration-500"
//             >
//               {/* Image */}
//               <div className="relative h-56 overflow-hidden">
//                 <img
//                   src={service.image}
//                   alt={service.title}
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
//                 <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg">
//                   {service.icon}
//                 </div>
//                 <div className="absolute bottom-6 left-6 right-6">
//                   <h3 className="text-xl font-bold text-white mb-2">
//                     {service.title}
//                   </h3>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-8">
//                 <p className="text-gray-200 mb-6 text-base leading-relaxed">
//                   {service.description}
//                 </p>

//                 <div className="space-y-2 mb-6">
//                   {service.features.map((feature, i) => (
//                     <div key={i} className="flex items-center space-x-2">
//                       <CircleCheckBig className="h-4 w-4 text-green-400 flex-shrink-0" />
//                       <span className="text-gray-200 text-sm">{feature}</span>
//                     </div>
//                   ))}
//                 </div>

//                 <button className="inline-flex items-center justify-center gap-2 text-sm font-medium border border-white/30 h-9 rounded-md px-3 w-full bg-orange-500 text-white hover:bg-orange-600 transition-colors">
//                   Learn More
//                   <ArrowRight className="h-4 w-4 ml-2" />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TechnologyServices;










import React from "react";
import {
  ArrowRight,
  Code,
  Cloud,
  Smartphone,
  Shield,
  Bot,
  Database,
  CircleCheckBig,
} from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  features: string[];
}

const services: Service[] = [
  {
    title: "Custom Software Development",
    description:
      "We build bespoke software solutions tailored to your business needs using modern technologies like React, Node.js, Python, and cloud-native architectures.",
    icon: <Code className="h-8 w-8 text-orange-500" />,
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
    features: [
      "Full-stack development",
      "API integration",
      "Database design",
      "Performance optimization",
    ],
  },
  {
    title: "Cloud Solutions & DevOps",
    description:
      "Comprehensive cloud migration, infrastructure setup, and DevOps implementation with AWS, Azure, and GCP platforms.",
    icon: <Cloud className="h-8 w-8 text-orange-500" />,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=250&fit=crop",
    features: [
      "Cloud migration",
      "CI/CD pipelines",
      "Infrastructure as Code",
      "Monitoring & logging",
    ],
  },
  {
    title: "Mobile App Development",
    description:
      "Native iOS and Android apps, plus cross-platform solutions using React Native and Flutter for maximum reach.",
    icon: <Smartphone className="h-8 w-8 text-orange-500" />,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=250&fit=crop",
    features: [
      "iOS & Android native",
      "Cross-platform",
      "App Store optimization",
      "Push notifications",
    ],
  },
  {
    title: "Cybersecurity Solutions",
    description:
      "Advanced security implementations including penetration testing, security audits, and compliance management.",
    icon: <Shield className="h-8 w-8 text-orange-500" />,
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=250&fit=crop",
    features: [
      "Security audits",
      "Penetration testing",
      "Compliance (SOC2, HIPAA)",
      "Threat monitoring",
    ],
  },
  {
    title: "AI & Machine Learning",
    description:
      "Cutting-edge AI solutions including chatbots, predictive analytics, and machine learning model development.",
    icon: <Bot className="h-8 w-8 text-orange-500" />,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=250&fit=crop",
    features: [
      "Custom AI models",
      "Natural language processing",
      "Computer vision",
      "Predictive analytics",
    ],
  },
  {
    title: "Data Engineering",
    description:
      "Big data solutions, data warehousing, ETL pipelines, and business intelligence dashboards.",
    icon: <Database className="h-8 w-8 text-orange-500" />,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop",
    features: [
      "Data pipelines",
      "Real-time analytics",
      "Data warehousing",
      "Business intelligence",
    ],
  },
];

const TechnologyServices: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Technology Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer end-to-end technology solutions designed to accelerate your
            digital transformation and drive sustainable business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-xl shadow-lg overflow-hidden group bg-white hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                <div className="absolute top-6 left-6 bg-white p-3 rounded-xl shadow-lg">
                  {service.icon}
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-gray-700 mb-6 text-base leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <CircleCheckBig className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="inline-flex items-center justify-center gap-2 text-sm font-medium border border-orange-500 text-orange-600 h-9 rounded-md px-3 w-full hover:bg-orange-500 hover:text-white transition-colors">
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyServices;
