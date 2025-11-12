// import React from "react";
// import { ArrowRight, MessageSquare, Calendar, Target } from "lucide-react";

// const CallToAction: React.FC = () => {
//   return (
//     <section className="py-24 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white relative overflow-hidden">
//       {/* Background image overlay */}
//       <div
//         className="absolute inset-0 opacity-10 bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=1080&fit=crop')",
//         }}
//       ></div>

//       <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <h2 className="text-4xl md:text-6xl font-bold mb-8">
//           Ready to Transform Your Business?
//         </h2>
//         <p className="text-xl mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed">
//           Join hundreds of successful companies who have partnered with us to
//           achieve digital transformation. Let's discuss how we can accelerate
//           your growth and create solutions that drive real business value.
//         </p>

//         {/* Buttons */}
//         <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
//           <a href="/contact">
//             <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap bg-white text-black h-12 rounded-md px-12 py-3 text-xl font-semibold hover:bg-orange-50 transition-all duration-300">
//               Start Your Project Today
//               <ArrowRight className="ml-2 h-6 w-6" />
//             </button>
//           </a>
//           <a href="/services">
//             <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap bg-white/80 text-black h-12 rounded-md px-12 py-3 text-xl font-medium hover:bg-orange-50 transition-all duration-300">
//               Explore Our Services
//             </button>
//           </a>
//         </div>

//         {/* Features */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//           {[
//             {
//               icon: <MessageSquare className="h-12 w-12 mx-auto mb-4" />,
//               title: "Free Consultation",
//               desc: "Get expert advice tailored to your needs",
//             },
//             {
//               icon: <Calendar className="h-12 w-12 mx-auto mb-4" />,
//               title: "Quick Response",
//               desc: "We respond within 24 hours",
//             },
//             {
//               icon: <Target className="h-12 w-12 mx-auto mb-4" />,
//               title: "Customized Solutions",
//               desc: "Solutions designed specifically for you",
//             },
//           ].map((feature, idx) => (
//             <div
//               key={idx}
//               className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
//             >
//               {feature.icon}
//               <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
//               <p>{feature.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CallToAction;







import React from "react";
import { ArrowRight, MessageSquare, Calendar, Target } from "lucide-react";

const CallToAction: React.FC = () => {
  return (
    <section className="py-24 bg-white text-gray-900 relative overflow-hidden">
      {/* Subtle background image overlay */}
      {/* <div
        className="absolute inset-0 opacity-5 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=1080&fit=crop')",
        }}
      ></div> */}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl mb-12 text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Join hundreds of successful companies who have partnered with us to
          achieve digital transformation. Let’s discuss how we can accelerate
          your growth and create solutions that drive real business value.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <a href="/contact">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap bg-gradient-to-r from-orange-600 to-yellow-500 text-white h-12 rounded-md px-12 py-3 text-xl font-semibold hover:from-orange-700 hover:to-yellow-600 transition-all duration-300">
              Start Your Project Today
              <ArrowRight className="ml-2 h-6 w-6" />
            </button>
          </a>
          <a href="/services">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap border border-gray-300 text-gray-800 h-12 rounded-md px-12 py-3 text-xl font-medium hover:bg-orange-50 transition-all duration-300">
              Explore Our Services
            </button>
          </a>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: (
                <MessageSquare className="h-12 w-12 mx-auto mb-4 text-orange-600" />
              ),
              title: "Free Consultation",
              desc: "Get expert advice tailored to your needs",
            },
            {
              icon: <Calendar className="h-12 w-12 mx-auto mb-4 text-orange-600" />,
              title: "Quick Response",
              desc: "We respond within 24 hours",
            },
            {
              icon: <Target className="h-12 w-12 mx-auto mb-4 text-orange-600" />,
              title: "Customized Solutions",
              desc: "Solutions designed specifically for you",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 shadow-sm hover:shadow-md rounded-xl p-6 transition-all duration-300"
            >
              {feature.icon}
              <h3 className="font-bold text-lg mb-2 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
