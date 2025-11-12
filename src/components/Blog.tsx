// import { FC, useState } from "react";
// import { ArrowRight, Calendar, Clock, Eye, MessageCircle, User 

//  } from "lucide-react";


// interface Article {
//   id: number;
//   title: string;
//   description: string;
//   category: string;
//   image: string;
//   author: string;
//   readTime: string;
//   date: string;
//   views: string;
//   comments: string;
// }

// const articles: Article[] = [
//   {
//     id: 1,
//     title: "Building Scalable Cloud Architecture: Best Practices Guide",
//     description:
//       "Learn the essential principles for designing cloud architecture that can scale with your business growth and handle increasing demand.",
//     category: "Cloud Computing",
//     image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
//     author: "Michael Rodriguez",
//     readTime: "6 min read",
//     date: "December 12, 2024",
//     views: "1.8K",
//     comments: "15",
//   },
//   {
//     id: 2,
//     title: "Cybersecurity in the Age of Remote Work",
//     description:
//       "With remote work becoming the norm, organizations need to adapt their security strategies. Here's how to protect your business in the digital age.",
//     category: "Cybersecurity",
//     image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=400&h=250&fit=crop",
//     author: "Emily Davis",
//     readTime: "7 min read",
//     date: "December 10, 2024",
//     views: "2.1K",
//     comments: "18",
//   },
//   {
//     id: 3,
//     title: "Mobile-First Development: Why It Matters in 2024",
//     description:
//       "Mobile traffic continues to dominate. Learn why mobile-first development is crucial for your business success and how to implement it effectively.",
//     category: "Mobile Development",
//     image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
//     author: "Alex Johnson",
//     readTime: "5 min read",
//     date: "December 8, 2024",
//     views: "1.6K",
//     comments: "12",
//   },
//   {
//     id: 4,
//     title: "Data Analytics: Turning Information into Business Intelligence",
//     description:
//       "Discover how modern data analytics tools can transform raw data into actionable insights that drive business growth and decision-making.",
//     category: "Data Analytics",
//     image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
//     author: "David Kim",
//     readTime: "9 min read",
//     date: "December 6, 2024",
//     views: "1.9K",
//     comments: "21",
//   },
//   {
//     id: 5,
//     title: "The Rise of Low-Code Development Platforms",
//     description:
//       "Low-code platforms are changing how applications are built. Explore the benefits, limitations, and best use cases for low-code development.",
//     category: "Development Tools",
//     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
//     author: "Lisa Wang",
//     readTime: "6 min read",
//     date: "December 4, 2024",
//     views: "1.4K",
//     comments: "9",
//   },
//   {
//     id: 6,
//     title: "DevOps Best Practices for Faster Software Delivery",
//     description:
//       "Streamline your development process with proven DevOps practices that reduce deployment time and improve software quality.",
//     category: "DevOps",
//     image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=400&h=250&fit=crop",
//     author: "James Mitchell",
//     readTime: "8 min read",
//     date: "December 2, 2024",
//     views: "2.3K",
//     comments: "17",
//   },
// ];

// const Blog: FC = () => {
//     const [email, setEmail] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!email.trim()) return alert("Please enter a valid email.");
//     alert(`Subscribed successfully with: ${email}`);
//     setEmail("");
//   };

//   return (
//     <>
//    <section className="py-32 bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white">
//   <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

//     <h2 className="text-3xl md:text-4xl font-bold mb-6">
//       Ready to Join Our Success Stories?
//     </h2>

//     <p className="text-xl mb-10 text-gray-300">
//       Let us help you achieve similar results. Start your digital
//       transformation journey today and become our next success story.
//     </p>

//     <div className="flex flex-col sm:flex-row gap-4 justify-center">

//       {/* Primary CTA */}
//       <a
//         href="/contact"
//         className="inline-flex items-center justify-center gap-2 text-sm font-semibold
//         bg-gradient-to-r from-[#2468fb] to-[#536ea9]
//         hover:from-[#4365a8] hover:to-[#354c6e]
//         shadow-[0_0_10px_rgba(251,146,60,0.6)]
//         hover:shadow-[0_0_25px_rgba(255,177,71,0.9)]
//         transition-all duration-300 text-slate-200
//         h-12 rounded-xl px-8 py-3
//         hover:-translate-y-1"
//       >
//         Start Your Project
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="20" height="20" fill="none"
//           stroke="currentColor" strokeWidth="2"
//           strokeLinecap="round" strokeLinejoin="round"
//           className="ml-2"
//         >
//           <path d="M5 12h14"></path>
//           <path d="m12 5 7 7-7 7"></path>
//         </svg>
//       </a>

//       {/* Secondary CTA */}
//       <a
//         href="/projects"
//         className="inline-flex items-center justify-center gap-2 text-sm font-medium
//         border border-white/30 backdrop-blur-xl
//         bg-white/5 hover:bg-white/10
//         hover:border-[#fbbf24] hover:text-[#fbbf24]
//         transition-all duration-300
//         h-12 rounded-xl px-8 py-3"
//       >
//         View Our Work
//       </a>

//     </div>
//   </div>
// </section>





//   <section className="py-8 bg-gradient-to-r from-[#1c2b4d] to-[#303e4f] border-b">
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     <div className="flex flex-wrap justify-center gap-3">

//       {/* Active Button */}
//       <button className="inline-flex items-center justify-center gap-2 text-sm font-semibold h-10 rounded-full px-5 bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg hover:shadow-blue-500/40 transition-all duration-300">
//         All
//       </button>

//       {[
//         "Artificial Intelligence",
//         "Cloud Computing",
//         "Cybersecurity",
//         "Mobile Development",
//         "Data Analytics",
//         "Development Tools",
//         "DevOps",
//       ].map((item) => (
//         <button
//           key={item}
//           className="inline-flex items-center justify-center gap-2 text-sm font-medium h-10 rounded-full px-5 bg-white/10 text-gray-200 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 hover:text-white backdrop-blur-md border border-white/20 transition-all duration-300"
//         >
//           {item}
//         </button>
//       ))}
//     </div>
//   </div>
// </section>


//   <section className="py-20 bg-gradient-to-r from-[#1c2b4d] to-[#303e4f] text-white">
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//     <div className="text-center mb-12">
//       <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-gradient-to-r from-blue-500 to-cyan-400 shadow-md">
//         Featured Article
//       </span>
//       <h2 className="text-3xl font-bold mt-4">Editor's Pick</h2>
//     </div>

//     <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#1b273b]/60 backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl hover:shadow-cyan-400/30 transition-all duration-500 border border-white/10">

//       {/* Left: Image */}
//       <div className="relative">
//         <img
//           src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop"
//           alt="AI Trends 2024"
//           className="w-full h-80 object-cover"
//         />
//         <div className="absolute top-4 left-4">
//           <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow">
//             Artificial Intelligence
//           </span>
//         </div>
//       </div>

//       {/* Right: Content */}
//       <div className="p-8 flex flex-col justify-center">
//         <h3 className="font-bold text-2xl lg:text-3xl mb-3 leading-tight">
//           The Future of AI in Software Development: Trends for 2024
//         </h3>
//         <p className="text-gray-200 text-lg mb-6">
//           Discover how AI innovations like code automation, smart debugging and predictive development
//           are shaping the future software industry.
//         </p>

//         {/* Meta */}
//         <div className="flex items-center flex-wrap gap-4 text-sm text-gray-300 mb-6">
//           <span className="flex items-center gap-1"><User className="w-4 h-4" /> Sarah Chen</span>
//           <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> December 15, 2024</span>
//           <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 8 min read</span>
//         </div>

//         {/* Stats */}
//         <div className="flex items-center gap-6 text-sm text-gray-300 mb-6">
//           <span className="flex items-center gap-1"><Eye className="w-4 h-4" /> 2.5K</span>
//           <span className="flex items-center gap-1"><MessageCircle className="w-4 h-4" /> 24</span>
//         </div>

//         {/* CTA Button */}
//         <button className="inline-flex items-center gap-2 rounded-md text-sm font-medium px-5 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 hover:shadow-lg hover:shadow-cyan-400/40 transition-all duration-300">
//           Read Full Article
//           <ArrowRight className="w-4 h-4" />
//         </button>
//       </div>

//     </div>

//   </div>
// </section>



//       <section className="py-20 bg-gradient-to-r from-[#172443] to-[#303e4f]">
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//     {/* Section Header */}
//     <div className="text-center mb-16">
//       <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//         Latest Articles
//       </h2>
//       <p className="text-xl text-gray-200 max-w-2xl mx-auto">
//         Discover the latest trends, tutorials, and insights from our team of experts.
//       </p>
//     </div>

//     {/* Articles Grid */}
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//       {articles.map((article) => (
//         <div
//           key={article.id}
//           className="rounded-xl bg-[#1b273b]/70 backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-cyan-300/30 transition-all duration-500 group overflow-hidden hover:-translate-y-1"
//         >
//           <div className="relative overflow-hidden">
//             <img
//               src={article.image}
//               alt={article.title}
//               className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
//             />
//             <div className="absolute top-4 left-4">
//               <span className="inline-flex rounded-full bg-cyan-500/90 text-white px-2.5 py-0.5 text-xs font-semibold shadow-sm">
//                 {article.category}
//               </span>
//             </div>
//           </div>

//           <div className="p-6 space-y-3">
//             <h3 className="font-semibold text-xl text-white group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
//               {article.title}
//             </h3>
//             <p className="text-sm text-gray-300 line-clamp-3">
//               {article.description}
//             </p>

//             {/* Author & Read Time */}
//             <div className="flex items-center justify-between text-sm text-gray-400">
//               <div className="flex items-center gap-2">
//                 <User className="h-4 w-4" />
//                 <span>{article.author}</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Clock className="h-4 w-4" />
//                 <span>{article.readTime}</span>
//               </div>
//             </div>

//             {/* Date, Views & Comments */}
//             <div className="flex items-center justify-between text-sm text-gray-400">
//               <div className="flex items-center gap-2">
//                 <Calendar className="h-4 w-4" />
//                 <span>{article.date}</span>
//               </div>
//               <div className="flex items-center gap-4">
//                 <div className="flex items-center gap-1">
//                   <Eye className="h-4 w-4" />
//                   <span>{article.views}</span>
//                 </div>
//                 <div className="flex items-center gap-1">
//                   <MessageCircle className="h-4 w-4" />
//                   <span>{article.comments}</span>
//                 </div>
//               </div>
//             </div>

//             <button className="mt-4 inline-flex items-center justify-center gap-2 w-full h-10 rounded-md bg-cyan-500 hover:bg-cyan-400 text-white font-medium transition-colors duration-300 border border-transparent">
//               Read More
//               <ArrowRight className="h-4 w-4" />
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>

//     {/* Load More Button */}
//     <div className="text-center mt-12">
//       <button className="inline-flex items-center justify-center gap-2 text-sm font-medium h-11 rounded-md px-8 bg-cyan-500 hover:bg-cyan-400 text-white transition-colors duration-300">
//         Load More Articles
//       </button>
//     </div>
//   </div>
// </section>



//     <section className="py-20 bg-gradient-to-r from-[#253353] to-[#303e4f] text-white">
//   <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

//     <h2 className="text-3xl md:text-4xl font-bold mb-6">
//       Stay Updated with Tech Insights
//     </h2>

//     <p className="text-xl mb-8 opacity-90">
//       Subscribe to our newsletter and get the latest articles, tutorials,
//       and industry insights delivered directly to your inbox.
//     </p>

//     <form
//       onSubmit={handleSubmit}
//       className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
//     >
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Enter your email..."
//         className="flex-1 px-4 py-3 rounded-lg text-gray-100 placeholder-gray-300 bg-[#1b273b]/70 border border-white/20 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition"
//         required
//       />

//       <button
//         type="submit"
//         className="inline-flex items-center justify-center gap-2 text-sm font-medium transition-all duration-300 bg-cyan-500 hover:bg-cyan-400 text-white h-11 rounded-lg px-8 py-3 whitespace-nowrap shadow-lg hover:shadow-cyan-400/40"
//       >
//         Subscribe Now
//         <ArrowRight className="ml-2 h-4 w-4" />
//       </button>
//     </form>

//     <p className="text-sm mt-4 opacity-75">
//       No spam, unsubscribe at any time. We respect your privacy.
//     </p>

//   </div>
// </section>



    
//     </>
//   );
// };

// export default Blog;











import { FC, useState } from "react";
import { ArrowRight, Calendar, Clock, Eye, MessageCircle, User } from "lucide-react";

interface Article {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  author: string;
  readTime: string;
  date: string;
  views: string;
  comments: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "Building Scalable Cloud Architecture: Best Practices Guide",
    description:
      "Learn the essential principles for designing cloud architecture that can scale with your business growth and handle increasing demand.",
    category: "Cloud Computing",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
    author: "Michael Rodriguez",
    readTime: "6 min read",
    date: "December 12, 2024",
    views: "1.8K",
    comments: "15",
  },
  {
    id: 2,
    title: "Cybersecurity in the Age of Remote Work",
    description:
      "With remote work becoming the norm, organizations need to adapt their security strategies. Here's how to protect your business in the digital age.",
    category: "Cybersecurity",
    image:
      "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=400&h=250&fit=crop",
    author: "Emily Davis",
    readTime: "7 min read",
    date: "December 10, 2024",
    views: "2.1K",
    comments: "18",
  },
  {
    id: 3,
    title: "Mobile-First Development: Why It Matters in 2024",
    description:
      "Mobile traffic continues to dominate. Learn why mobile-first development is crucial for your business success and how to implement it effectively.",
    category: "Mobile Development",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
    author: "Alex Johnson",
    readTime: "5 min read",
    date: "December 8, 2024",
    views: "1.6K",
    comments: "12",
  },
  {
    id: 4,
    title: "Data Analytics: Turning Information into Business Intelligence",
    description:
      "Discover how modern data analytics tools can transform raw data into actionable insights that drive business growth and decision-making.",
    category: "Data Analytics",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    author: "David Kim",
    readTime: "9 min read",
    date: "December 6, 2024",
    views: "1.9K",
    comments: "21",
  },
  {
    id: 5,
    title: "The Rise of Low-Code Development Platforms",
    description:
      "Low-code platforms are changing how applications are built. Explore the benefits, limitations, and best use cases for low-code development.",
    category: "Development Tools",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    author: "Lisa Wang",
    readTime: "6 min read",
    date: "December 4, 2024",
    views: "1.4K",
    comments: "9",
  },
  {
    id: 6,
    title: "DevOps Best Practices for Faster Software Delivery",
    description:
      "Streamline your development process with proven DevOps practices that reduce deployment time and improve software quality.",
    category: "DevOps",
    image:
      "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=400&h=250&fit=crop",
    author: "James Mitchell",
    readTime: "8 min read",
    date: "December 2, 2024",
    views: "2.3K",
    comments: "17",
  },
];

const Blog: FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return alert("Please enter a valid email.");
    alert(`Subscribed successfully with: ${email}`);
    setEmail("");
  };

  return (
    <>
      {/* HERO */}
      {/* <section className="py-32 bg-gradient-to-r from-orange-50 via-white to-orange-100 text-gray-900">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-orange-700">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl mb-8 text-gray-700">
            Let us help you achieve similar results. Start your digital
            transformation journey today and become our next success story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white h-12 rounded-xl px-8 py-3 shadow-lg hover:shadow-orange-400/40 transition"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/projects"
              className="inline-flex items-center justify-center gap-2 text-sm font-medium border border-orange-300 hover:bg-orange-50 text-orange-700 h-12 rounded-xl px-8 py-3 transition"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section> */}

      <section className="relative py-32 bg-gradient-to-br from-blue-50 via-white to-indigo-100 text-gray-900 overflow-hidden">
  {/* Decorative subtle orbs */}
  <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
  <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

  {/* Content */}
  <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-indigo-700">
      Ready to Join Our Success Stories?
    </h2>

    <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
      Join hundreds of businesses that have transformed with{" "}
      <span className="text-indigo-600 font-semibold">ATS Global Tech</span>.  
      We combine innovation, strategy, and technology to help brands achieve
      measurable results and sustainable growth.
    </p>

    {/* Feature Highlights */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
      <div className="bg-white shadow-md rounded-2xl p-8 border border-indigo-100 hover:shadow-xl transition-all duration-300">
        <h3 className="text-xl font-semibold text-indigo-700 mb-3">
          🚀 Proven Expertise
        </h3>
        <p className="text-gray-600">
          Over a decade of experience delivering cutting-edge digital solutions
          that drive real business outcomes.
        </p>
      </div>

      <div className="bg-white shadow-md rounded-2xl p-8 border border-indigo-100 hover:shadow-xl transition-all duration-300">
        <h3 className="text-xl font-semibold text-indigo-700 mb-3">
          💡 Innovative Approach
        </h3>
        <p className="text-gray-600">
          We use creativity and technology to solve complex challenges and
          redefine digital success for every client.
        </p>
      </div>

      <div className="bg-white shadow-md rounded-2xl p-8 border border-indigo-100 hover:shadow-xl transition-all duration-300">
        <h3 className="text-xl font-semibold text-indigo-700 mb-3">
          🌍 Global Impact
        </h3>
        <p className="text-gray-600">
          Our solutions have empowered startups and enterprises worldwide to
          scale, innovate, and lead in their industries.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* CATEGORY FILTER */}
      <section className="py-8 bg-gradient-to-r from-orange-100 via-white to-orange-50 border-b text-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            <button className="inline-flex items-center justify-center gap-2 text-sm font-semibold h-10 rounded-full px-5 bg-orange-500 text-white shadow-lg hover:shadow-orange-400/40 transition">
              All
            </button>
            {[
              "Artificial Intelligence",
              "Cloud Computing",
              "Cybersecurity",
              "Mobile Development",
              "Data Analytics",
              "Development Tools",
              "DevOps",
            ].map((item) => (
              <button
                key={item}
                className="inline-flex items-center justify-center gap-2 text-sm font-medium h-10 rounded-full px-5 bg-orange-100 text-orange-700 hover:bg-orange-500 hover:text-white border border-orange-200 transition"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED ARTICLE */}
      <section className="py-20 bg-gradient-to-r from-orange-50 via-white to-orange-100 text-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-gradient-to-r from-orange-400 to-red-400 text-white shadow-md">
              Featured Article
            </span>
            <h2 className="text-3xl font-bold mt-4 text-orange-700">
              Editor’s Pick
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 bg-white shadow-xl border border-orange-100 rounded-2xl overflow-hidden hover:shadow-orange-300/40 transition">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop"
                alt="AI Trends"
                className="w-full h-80 object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow">
                  Artificial Intelligence
                </span>
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <h3 className="font-bold text-2xl mb-3 text-orange-800">
                The Future of AI in Software Development: Trends for 2024
              </h3>
              <p className="text-gray-700 mb-6">
                Discover how AI innovations like code automation and smart
                debugging are shaping the software industry.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" /> Sarah Chen
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> December 15, 2024
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" /> 8 min read
                </span>
              </div>
              <button className="inline-flex items-center gap-2 rounded-md text-sm font-medium px-5 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-lg transition">
                Read Full Article
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="py-20 bg-gradient-to-r from-orange-100 via-white to-orange-50 text-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-700 mb-4">
              Latest Articles
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Discover the latest trends, tutorials, and insights from our experts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((a) => (
              <div
                key={a.id}
                className="rounded-xl bg-white border border-orange-100 shadow-md hover:shadow-orange-300/40 transition transform hover:-translate-y-1"
              >
                <img src={a.image} alt={a.title} className="w-full h-48 object-cover rounded-t-xl" />
                <div className="p-6 space-y-3">
                  <h3 className="font-semibold text-xl text-orange-800 hover:text-orange-600 transition">
                    {a.title}
                  </h3>
                  <p className="text-sm text-gray-700">{a.description}</p>
                  <div className="text-sm text-gray-500 flex justify-between">
                    <span>{a.author}</span>
                    <span>{a.readTime}</span>
                  </div>
                  <button className="mt-4 w-full inline-flex justify-center items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md transition">
                    Read More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-20 bg-gradient-to-r from-orange-50 via-white to-orange-100 text-center text-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-700 mb-6">
            Stay Updated with Tech Insights
          </h2>
          <p className="text-lg mb-8 text-gray-700">
            Subscribe to our newsletter and get the latest articles and industry insights delivered to your inbox.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email..."
              className="flex-1 px-4 py-3 rounded-lg border border-orange-200 text-gray-800 focus:ring-2 focus:ring-orange-400 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 text-sm font-medium bg-gradient-to-r from-orange-500 to-orange-600 text-white h-11 rounded-lg px-8 py-3 shadow-md hover:shadow-orange-400/40 transition"
            >
              Subscribe Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </form>
          <p className="text-sm mt-4 text-gray-600">
            No spam — unsubscribe anytime.
          </p>
        </div>
      </section>
    </>
  );
};

export default Blog;
