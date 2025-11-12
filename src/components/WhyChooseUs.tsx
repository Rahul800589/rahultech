


// import React from "react";
// import {
//   ArrowRight,
//   CircleCheckBig,
//   Lightbulb,
//   Users,
//   Rocket,
//   TrendingUp,
// } from "lucide-react";

// interface Feature {
//   text: string;
// }

// interface Card {
//   title: string;
//   description: string;
//   icon: React.ReactNode;

//   videoPoster: string;
// }

// const WhyChooseUs: React.FC = () => {
//   const features: Feature[] = [
//     { text: "24/7 Technical Support & Maintenance" },
//     { text: "Agile Development Methodology" },
//     { text: "Comprehensive Quality Assurance" },
//     { text: "Scalable & Future-Proof Architecture" },
//     { text: "Modern Technology Stack" },
//     { text: "Cost-Effective Solutions" },
//     { text: "Regular Progress Updates" },
//     { text: "Post-Launch Support & Training" },
//   ];

//   const cards: Card[] = [
//     {
//       title: "Innovation First",
//       description:
//         "We stay ahead of technology trends and implement cutting-edge solutions that give you a competitive advantage.",
//       icon: <Lightbulb className="h-6 w-6 text-orange-400" />,
//       videoPoster:
//         "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop",
//     },
//     {
//       title: "Expert Team",
//       description:
//         "Our team consists of senior developers, architects, and consultants with 10+ years of industry experience.",
//       icon: <Users className="h-6 w-6 text-orange-400" />,
//       videoPoster:
//         "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop",
//     },
//     {
//       title: "Rapid Delivery",
//       description:
//         "Agile methodology ensures faster time-to-market without compromising on quality or functionality.",
//       icon: <Rocket className="h-6 w-6 text-orange-400" />,
//       videoPoster:
//         "https://plus.unsplash.com/premium_photo-1747949065888-5a57b2d506db?w=600&auto=format&fit=crop&q=60",
//     },
//     {
//       title: "Scalable Solutions",
//       description:
//         "All our solutions are built to scale with your business growth and handle increased demand seamlessly.",
//       icon: <TrendingUp className="h-6 w-6 text-orange-400" />,
//       videoPoster:
//         "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
//     },
//   ];

//   return (
//     <section className="py-24 bg-gradient-to-r from-[#1a2e49] to-[#32445b]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           {/* Left Section */}
//           <div>
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
//               Why Choose ATS GLOBAL TECH?
//             </h2>
//             <p className="text-xl text-gray-300 mb-10 leading-relaxed">
//               We combine deep technical expertise with strategic business
//               insights to deliver solutions that not only meet your immediate
//               needs but position you for long-term success in the digital
//               landscape.
//             </p>

//             {/* Feature List */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
//               {features.map((feature, index) => (
//                 <div key={index} className="flex items-start space-x-3">
//                   <CircleCheckBig className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
//                   <span className="text-gray-200 font-medium">
//                     {feature.text}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             {/* CTA Button */}
//             <button className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-yellow-500 hover:from-orange-700 hover:to-yellow-500 text-white h-11 rounded-md px-10 py-4 text-lg font-medium transition-all duration-300">
//               Learn More About Us
//               <ArrowRight className="ml-2 h-5 w-5" />
//             </button>
//           </div>

//           {/* Right Section */}
//           <div className="grid grid-cols-2 gap-8">
//             {cards.map((card, index) => (
//               <div
//                 key={index}
//                 className="bg-[#1e293b] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group"
//               >
//                 <div className="relative h-40 overflow-hidden">
//                   <img
//                     src={card.videoPoster}
//                     alt={card.title}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
//                   <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm p-2 rounded-xl">
//                     {card.icon}
//                   </div>
//                 </div>
//                 <div className="p-6 text-center">
//                   <h3 className="font-bold text-white mb-3 text-lg">
//                     {card.title}
//                   </h3>
//                   <p className="text-gray-300 text-sm leading-relaxed">
//                     {card.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;






import React from "react";
import {
  ArrowRight,
  CircleCheckBig,
  Lightbulb,
  Users,
  Rocket,
  TrendingUp,
} from "lucide-react";

interface Feature {
  text: string;
}

interface Card {
  title: string;
  description: string;
  icon: React.ReactNode;
  videoPoster: string;
}

const WhyChooseUs: React.FC = () => {
  const features: Feature[] = [
    { text: "24/7 Technical Support & Maintenance" },
    { text: "Agile Development Methodology" },
    { text: "Comprehensive Quality Assurance" },
    { text: "Scalable & Future-Proof Architecture" },
    { text: "Modern Technology Stack" },
    { text: "Cost-Effective Solutions" },
    { text: "Regular Progress Updates" },
    { text: "Post-Launch Support & Training" },
  ];

  const cards: Card[] = [
    {
      title: "Innovation First",
      description:
        "We stay ahead of technology trends and implement cutting-edge solutions that give you a competitive advantage.",
      icon: <Lightbulb className="h-6 w-6 text-orange-500" />,
      videoPoster:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop",
    },
    {
      title: "Expert Team",
      description:
        "Our team consists of senior developers, architects, and consultants with 10+ years of industry experience.",
      icon: <Users className="h-6 w-6 text-orange-500" />,
      videoPoster:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop",
    },
    {
      title: "Rapid Delivery",
      description:
        "Agile methodology ensures faster time-to-market without compromising on quality or functionality.",
      icon: <Rocket className="h-6 w-6 text-orange-500" />,
      videoPoster:
        "https://plus.unsplash.com/premium_photo-1747949065888-5a57b2d506db?w=600&auto=format&fit=crop&q=60",
    },
    {
      title: "Scalable Solutions",
      description:
        "All our solutions are built to scale with your business growth and handle increased demand seamlessly.",
      icon: <TrendingUp className="h-6 w-6 text-orange-500" />,
      videoPoster:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Section */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Why Choose ATS GLOBAL TECH?
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              We combine deep technical expertise with strategic business
              insights to deliver solutions that not only meet your immediate
              needs but position you for long-term success in the digital
              landscape.
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CircleCheckBig className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 font-medium">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-yellow-500 hover:from-orange-700 hover:to-yellow-500 text-white h-11 rounded-md px-10 py-4 text-lg font-medium transition-all duration-300">
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-2 gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 group"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={card.videoPoster}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-4 left-4 bg-white p-2 rounded-xl shadow">
                    {card.icon}
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
