



// import React from "react";
// import { ArrowRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const caseStudies = [
//   {
//     id: 1,
//     title: "AI-Powered E-Commerce Platform",
//     client: "RetailMax Inc.",
//     category: "Web Development",
//     image:
//       "https://plus.unsplash.com/premium_photo-1747949065888-5a57b2d506db?w=600&auto=format&fit=crop&q=60",
//     description:
//       "Full-stack e-commerce solution with AI-driven product recommendations...",
//     tags: ["React", "Node.js", "MongoDB", "TensorFlow"],
//     link: "/ai-page",
//   },
//   {
//     id: 2,
//     title: "Secure Banking Mobile App",
//     client: "Community Bank",
//     category: "Mobile App",
//     image:
//       "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop",
//     description:
//       "Cross-platform mobile banking application with biometric authentication...",
//     tags: ["React Native", "Node.js", "PostgreSQL", "AWS"],
//     link: "/secure-page",
//   },
//   {
//     id: 3,
//     title: "Enterprise Cloud Migration",
//     client: "GlobalTech Corp",
//     category: "Cloud Solutions",
//     image:
//       "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=200&fit=crop",
//     description:
//       "Complete cloud migration with zero downtime & cost reduction...",
//     tags: ["AWS", "Docker", "Kubernetes", "Terraform"],
//     link: "/cloud-page",
//   },
//   {
//     id: 4,
//     title: "Healthcare Data Analytics Platform",
//     client: "MedCare Solutions",
//     category: "Healthcare Tech",
//     image:
//       "https://images.unsplash.com/photo-1657727534685-36b09f84e193?q=80&w=1170&auto=format&fit=crop",
//     description:
//       "HIPAA-compliant healthcare analytics with predictive health insights...",
//     tags: ["Python", "React", "PostgreSQL", "Docker"],
//     link: "/health-page",
//   },
// ];

// const FeaturedSuccessStories = () => {
//   const navigate = useNavigate();

//   return (
//     <section className="py-24 bg-gradient-to-r from-[#1c2b4d] to-[#303e4f]">
//       <div className="max-w-7xl mx-auto px-4">

//         <div className="text-center mb-20">
//           <h2 className="text-5xl font-bold text-white mb-6">
//             Featured Success Stories
//           </h2>
//           <p className="text-gray-300 text-lg">
//             Discover how we helped businesses grow with innovation
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           {caseStudies.map((study) => (
//             <div key={study.id} className="bg-[#1e293b] rounded-lg shadow-lg group">
              
//               <div className="relative h-64 overflow-hidden">
//                 <img src={study.image} alt={study.title}
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                 />
//               </div>

//               <div className="p-8">
//                 <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
//                 <p className="text-gray-400 text-sm mb-4">Client: {study.client}</p>
//                 <p className="text-gray-300 mb-4">{study.description}</p>

//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {study.tags.map((tag) => (
//                     <span key={tag}
//                       className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 {/* ✅ Dynamic Navigation */}
//                 <button
//                   onClick={() => navigate(study.link)}
//                   className="inline-flex items-center gap-2 text-sm font-medium border border-orange-200 bg-orange-100 px-4 h-10 rounded-md hover:bg-orange-600 hover:text-white transition"
//                 >
//                   View Case Study
//                   <ArrowRight className="w-4 h-4" />
//                 </button>

//               </div>
//             </div>
//           ))}
//         </div>

//         {/* ✅ View All Projects Button */}
//         <div className="text-center mt-16">
//           <button
//             onClick={() => navigate("/work/projects")}
//             className="inline-flex items-center gap-3 text-lg font-medium bg-gradient-to-r from-orange-600 to-yellow-500 text-white px-10 py-4 rounded-md hover:from-orange-700 hover:to-yellow-500 transition"
//           >
//             View All Projects
//             <ArrowRight className="w-5 h-5" />
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default FeaturedSuccessStories;







import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const caseStudies = [
  {
    id: 1,
    title: "AI-Powered E-Commerce Platform",
    client: "RetailMax Inc.",
    category: "Web Development",
    image:
      "https://plus.unsplash.com/premium_photo-1747949065888-5a57b2d506db?w=600&auto=format&fit=crop&q=60",
    description:
      "Full-stack e-commerce solution with AI-driven product recommendations...",
    tags: ["React", "Node.js", "MongoDB", "TensorFlow"],
    link: "/ai-page",
  },
  {
    id: 2,
    title: "Secure Banking Mobile App",
    client: "Community Bank",
    category: "Mobile App",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop",
    description:
      "Cross-platform mobile banking application with biometric authentication...",
    tags: ["React Native", "Node.js", "PostgreSQL", "AWS"],
    link: "/secure-page",
  },
  {
    id: 3,
    title: "Enterprise Cloud Migration",
    client: "GlobalTech Corp",
    category: "Cloud Solutions",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=200&fit=crop",
    description:
      "Complete cloud migration with zero downtime & cost reduction...",
    tags: ["AWS", "Docker", "Kubernetes", "Terraform"],
    link: "/cloud-page",
  },
  {
    id: 4,
    title: "Healthcare Data Analytics Platform",
    client: "MedCare Solutions",
    category: "Healthcare Tech",
    image:
      "https://images.unsplash.com/photo-1657727534685-36b09f84e193?q=80&w=1170&auto=format&fit=crop",
    description:
      "HIPAA-compliant healthcare analytics with predictive health insights...",
    tags: ["Python", "React", "PostgreSQL", "Docker"],
    link: "/health-page",
  },
];

const FeaturedSuccessStories = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Featured Success Stories
          </h2>
          <p className="text-gray-600 text-lg">
            Discover how we helped businesses grow with innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-64 overflow-hidden rounded-t-lg">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {study.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  Client: {study.client}
                </p>
                <p className="text-gray-700 mb-4">{study.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => navigate(study.link)}
                  className="inline-flex items-center gap-2 text-sm font-medium border border-orange-500 text-orange-600 bg-transparent px-4 h-10 rounded-md hover:bg-orange-500 hover:text-white transition"
                >
                  View Case Study
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-16">
          <button
            onClick={() => navigate("/work/projects")}
            className="inline-flex items-center gap-3 text-lg font-medium bg-gradient-to-r from-orange-600 to-yellow-500 text-white px-10 py-4 rounded-md hover:from-orange-700 hover:to-yellow-500 transition"
          >
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSuccessStories;
