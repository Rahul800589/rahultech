// import { FC } from "react";
// import { useNavigate } from "react-router-dom";


// interface Project {
//   title: string;
//   description: string;
//   image: string;
//   link: string;
// }

// const projects: Project[] = [
//   {
//     title: "E-Commerce Platform Modernization",
//     description: "Transforming retail with high-performance cloud commerce.",
//     image:
//       "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
//     link: "/ai-page",
//   },
//   {
//     title: "Healthcare Management System",
//     description: "Next-gen healthcare data analytics and patient care.",
//     image:
//       "https://images.unsplash.com/photo-1657727534685-36b09f84e193?w=1200&auto=format&fit=crop&q=80",
//     link: "/health-page",
//   },
//   {
//     title: "FinTech Mobile Banking App",
//     description: "Secure mobile-first banking with fast transactions.",
//     image:
//       "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&auto=format&fit=crop&q=80",
//     link: "/fintech-page",
//   },
//   {
//     title: "SaaS Analytics Dashboard",
//     description: "Full visibility into revenue, KPIs, and insights.",
//     image:
//       "https://images.unsplash.com/photo-1556155092-8707de31f9c4?w=1200&auto=format&fit=crop&q=80",
//     link: "/saas-page",
//   },
//   {
//     title: "Travel Booking Platform",
//     description: "Smart travel booking with price prediction.",
//     image:
//       "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
//     link: "/travel-page",
//   },
//   {
//     title: "AI-Powered Chat Assistant",
//     description: "Context-aware customer support automation.",
//     image:
//       "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
//     link: "/aichat-page",
//   },
// ];


// // interface Project {
// //   title: string;
// //   description: string;
// //   image: string;
// //   link: string;
// // }

// // const projects: Project[] = [
// //   {
// //     title: "E-Commerce Platform Modernization",
// //     description:
// //       "Revamped the front-end and back-end for a leading retailer, improving speed and UX by 40%.",
// //     image: "	https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
// //     link: "#",
// //   },
// //   {
// //     title: "Healthcare Management System",
// //     description:
// //       "Built a secure platform for hospitals to manage patient data and streamline workflows.",
// //     image: "	https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
// //     link: "#",
// //   },
// //   {
// //     title: "FinTech Mobile Banking App",
// //     description:
// //       "Designed and developed a mobile-first banking experience with robust API integration.",
// //     image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
// //     link: "#",
// //   },
// //   {
// //     title: "SaaS Analytics Dashboard",
// //     description:
// //       "Developed an interactive analytics dashboard with real-time data visualization for startups.",
// //     image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
// //     link: "#",
// //   },
// //   {
// //     title: "Travel Booking Platform",
// //     description:
// //       "Created a fast, modern, and responsive platform for users to book global travel packages.",
// //     image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
// //     link: "#",
// //   },
// //   {
// //     title: "AI-Powered Chat Assistant",
// //     description:
// //       "Built a conversational AI chatbot with natural language understanding for customer support.",
// //     image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
// //     link: "#",
// //   },
// // ];

// const Projects: FC = () => {
//     const navigate = useNavigate();

//   return (
//     <>
//      <section className="py-32 lg:py-32 bg-gradient-to-r from-[#1a2940] to-[#24344d]
//  h-[400px]">
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     <div className="text-center">
//       <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
//         Our<span className="ml-6 text-orange-400">Projects</span>
//       </h1>
//       <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
//         Explore our portfolio of successful projects that showcase our
//         expertise in delivering innovative solutions across various
//         industries.
//       </p>
//     </div>
//   </div>
// </section>

//     <section className="py-16 bg-gradient-to-r from-[#1c2b4d] to-[#1e2a38]">
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//       <div>
//         <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
//           15+
//         </div>
//         <div className="text-white/80">Projects Completed</div>
//       </div>
//       <div>
//         <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">
//           50+
//         </div>
//         <div className="text-white/80">Happy Clients</div>
//       </div>
//       <div>
//         <div className="text-3xl md:text-4xl font-bold text-indigo-300 mb-2">
//           5+
//         </div>
//         <div className="text-white/80">Industries Served</div>
//       </div>
//       <div>
//         <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
//           98%
//         </div>
//         <div className="text-white/80">Success Rate</div>
//       </div>
//     </div>
//   </div>
// </section>

//       <section className="py-8 bg-gradient-to-r from-[#19243d] to-[#2d3a4a] text-amber-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-wrap justify-center gap-2">
//             <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 bg-gradient-to-r from-yellow-600 to-orange-600">
//               All
//             </button>
//             <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
//               Web Application
//             </button>
//             <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
//               Mobile Application
//             </button>
//             <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
//               Data Analytics
//             </button>
//             <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
//               Healthcare Software
//             </button>
//             <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
//               Education Technology
//             </button>
//             <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
//               IoT Platform
//             </button>
//           </div>
//         </div>
//       </section>
//       {/* <section className="py-16 bg-gradient-to-r from-[#1c2b4d] to-[#2e3e51] text-amber-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-white-900">Our Projects</h2>
//             <p className="mt-4 text-gray-400">
//               A selection of our most impactful work, showcasing innovation,
//               design, and results.
//             </p>
//           </div>

//           <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//             {projects.map((project) => (
//               <div
//                 key={project.title}
//                 className="bg-gradient-to-r from-[#1c2b4d] to-[#303e4f] rounded-2xl shadow hover:shadow-xl transition transform hover:-translate-y-1 p-6"
//               >
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="rounded-xl mb-4 w-full h-48 object-cover"
//                   loading="lazy"
//                 />
//                 <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
//                 <p className="text-gray-600 mb-4">{project.description}</p>
//                 <a
//                   href={project.link}
//                   className="text-indigo-600 hover:text-indigo-800 font-medium"
//                 >
//                   View Case Study →
//                 </a>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section> */}
//        <section className="py-16 bg-gradient-to-r from-[#1c2b4d] to-[#2e3e51] text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold">Our Projects</h2>
//           <p className="mt-4 text-gray-300">
//             A selection of our most impactful work, showcasing innovation,
//             design, and results.
//           </p>
//         </div>

//         {/* Projects Grid */}
//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           {projects.map((project) => (
//             <div
//               key={project.title}
//               className="bg-[#253547] rounded-2xl shadow hover:shadow-xl transition transform hover:-translate-y-1 p-6"
//             >
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="rounded-xl mb-4 w-full h-48 object-cover"
//                 loading="lazy"
//               />

//               <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
//               <p className="text-gray-300 mb-4 text-sm">{project.description}</p>

//               {/* Navigation Button */}
//               <button
//                 onClick={() => navigate(project.link)}
//                 className="text-orange-500 hover:text-orange-300 font-medium"
//               >
//                 View Case Study →
//               </button>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//       <section className="py-20 bg-gradient-to-r from-[#1c2b4d] to-[#1a2532] text-white">
//   <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//     <h2 className="text-3xl md:text-4xl font-bold mb-6">
//       Ready to Start Your Project?
//     </h2>
//     <p className="text-xl mb-8 opacity-90">
//       Let's discuss your project requirements and create something amazing
//       together. We're excited to bring your vision to life.
//     </p>

//     <div className="flex flex-col sm:flex-row gap-4 justify-center">
//       <a href="/contact">
//         <button
//           className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1c2b4d] bg-white text-[#1c2b4d] hover:bg-gray-100 h-11 rounded-md px-8 py-3"
//         >
//           Start Your Project
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             stroke-width="2"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             className="lucide lucide-arrow-right ml-2 h-5 w-5"
//           >
//             <path d="M5 12h14"></path>
//             <path d="m12 5 7 7-7 7"></path>
//           </svg>
//         </button>
//       </a>

//       <a href="/services">
//         <button
//           className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-bold transition-colors border border-white text-white hover:bg-white hover:text-[#1c2b4d] h-11 rounded-md px-8 py-3"
//         >
//           View Services
//         </button>
//       </a>
//     </div>
//   </div>
// </section>


//     </>
//   );
// };

// export default Projects;











import { ArrowRight } from "lucide-react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform Modernization",
    description: "Transforming retail with high-performance cloud commerce.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    link: "/ai-page",
  },
  {
    title: "Healthcare Management System",
    description: "Next-gen healthcare data analytics and patient care.",
    image:
      "https://images.unsplash.com/photo-1657727534685-36b09f84e193?w=1200&auto=format&fit=crop&q=80",
    link: "/health-page",
  },
  {
    title: "FinTech Mobile Banking App",
    description: "Secure mobile-first banking with fast transactions.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&auto=format&fit=crop&q=80",
    link: "/fintech-page",
  },
  {
    title: "SaaS Analytics Dashboard",
    description: "Full visibility into revenue, KPIs, and insights.",
    image:
      "https://images.unsplash.com/photo-1556155092-8707de31f9c4?w=1200&auto=format&fit=crop&q=80",
    link: "/saas-page",
  },
  {
    title: "Travel Booking Platform",
    description: "Smart travel booking with price prediction.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    link: "/travel-page",
  },
  {
    title: "AI-Powered Chat Assistant",
    description: "Context-aware customer support automation.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
    link: "/aichat-page",
  },
];

const Projects: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* 🌈 Hero Section */}
      {/* <section className="py-32 bg-gradient-to-r from-orange-50 via-white to-orange-100 h-[400px] text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-orange-600">Projects</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Explore our portfolio of successful projects that showcase our
            expertise in delivering innovative solutions across various
            industries.
          </p>
        </div>
      </section> */}

     <section className="relative py-40 bg-gradient-to-br from-orange-100 via-yellow-50 to-white text-gray-900 overflow-hidden">
  {/* Decorative Gradient Blobs */}
  <div className="absolute -top-32 -left-24 w-[450px] h-[450px] bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse"></div>
  <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse"></div>

  {/* Optional subtle background texture */}
  <div className="absolute inset-0 opacity-10 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/symphony.png')]"></div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h1 className="text-4xl md:text-6xl font-bold mb-6">
      Our <span className="text-orange-600">Projects</span>
    </h1>
    <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-16">
      At <span className="font-semibold text-orange-600">ATS Global Tech</span>, 
      we build impactful digital solutions that empower organizations, redefine user experiences, 
      and drive sustainable business growth across industries.
    </p>

    {/* Project Highlight Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
      {/* Project 1 */}
      <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-orange-100 transition-all duration-300 overflow-hidden group">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80"
          alt="Web Development"
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-orange-600 mb-2">
            E-Commerce Platform
          </h3>
          <p className="text-gray-700 text-sm">
            A scalable online platform built with React and Next.js, enabling seamless global shopping experiences.
          </p>
        </div>
      </div>

      {/* Project 2 */}
      <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-orange-100 transition-all duration-300 overflow-hidden group">
        <img
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=80"
          alt="Mobile App"
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-orange-600 mb-2">
            FinTech Mobile App
          </h3>
          <p className="text-gray-700 text-sm">
            A cross-platform app for financial analytics, offering real-time data visualization and performance insights.
          </p>
        </div>
      </div>

      {/* Project 3 */}
      <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-orange-100 transition-all duration-300 overflow-hidden group">
        <img
          src="https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=900&q=80"
          alt="Analytics Dashboard"
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-orange-600 mb-2">
            AI Analytics Dashboard
          </h3>
          <p className="text-gray-700 text-sm">
            A data intelligence dashboard that provides predictive insights using AI and machine learning algorithms.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>



      {/* 🌟 Stats Section */}
      <section className="py-16 bg-gradient-to-r from-orange-100 via-white to-orange-50 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
                15+
              </div>
              <div className="text-gray-700">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
                50+
              </div>
              <div className="text-gray-700">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
                5+
              </div>
              <div className="text-gray-700">Industries Served</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
                98%
              </div>
              <div className="text-gray-700">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* 🌈 Category Filter */}
      <section className="py-8 bg-gradient-to-r from-orange-50 via-white to-orange-100 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "All",
              "Web Application",
              "Mobile Application",
              "Data Analytics",
              "Healthcare Software",
              "Education Technology",
              "IoT Platform",
            ].map((category, i) => (
              <button
                key={i}
                className={`inline-flex items-center justify-center gap-2 text-sm font-medium h-9 rounded-md px-3 transition ${
                  i === 0
                    ? "bg-gradient-to-r from-orange-400 to-amber-500 text-white"
                    : "border border-orange-300 text-orange-700 hover:bg-orange-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 🌈 Projects Grid */}
      <section className="py-16 bg-gradient-to-r from-orange-100 via-white to-orange-50 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-700">Our Projects</h2>
            <p className="mt-4 text-gray-700">
              A selection of our most impactful work, showcasing innovation,
              design, and results.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 p-6"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl mb-4 w-full h-48 object-cover"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold text-orange-700 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4 text-sm">
                  {project.description}
                </p>
                <button
                  onClick={() => navigate(project.link)}
                  className="text-orange-500 hover:text-orange-700 font-medium"
                >
                  View Case Study →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🌈 CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-50 via-white to-orange-100 text-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-700">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg mb-8 text-gray-700">
            Let's discuss your project requirements and create something amazing
            together. We're excited to bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <button className="inline-flex items-center justify-center gap-2 text-sm font-medium bg-orange-500 text-white hover:bg-orange-600 h-11 rounded-md px-8 py-3">
                Start Your Project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right ml-2 h-5 w-5"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </a>

            <a href="/services">
              <button className="inline-flex items-center justify-center gap-2 border border-orange-400 text-orange-600 hover:bg-orange-100 h-11 rounded-md px-8 py-3 font-medium">
                View Services
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
