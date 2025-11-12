// import React from "react";
// import { Star } from "lucide-react";

// interface Testimonial {
//   id: number;
//   name: string;
//   role: string;
//   company: string;
//   image: string;
//   quote: string;
//   rating: number;
// }

// const testimonials: Testimonial[] = [
//   {
//     id: 1,
//     name: "Aditya Sharma",
//     role: "CEO, TechCorp Industries",
//     company: "TechCorp Industries",
//     image:
//       "https://plus.unsplash.com/premium_photo-1689977871600-e755257fb5f8?w=600&auto=format&fit=crop&q=60",
//     quote:
//       "ATS GLOBAL TECH transformed our entire digital infrastructure. Their expertise in cloud migration saved us 40% in operational costs while improving performance dramatically.",
//     rating: 5,
//   },
//   {
//     id: 2,
//     name: "Saroj Gupta",
//     role: "CTO, InnovateLtd",
//     company: "InnovateLtd",
//     image: "https://images.pexels.com/photos/7580821/pexels-photo-7580821.jpeg",
//     quote:
//       "Working with ATS GLOBAL TECH was a game-changer. They delivered a complex AI-powered platform ahead of schedule and below budget. Exceptional team!",
//     rating: 5,
//   },
//   {
//     id: 3,
//     name: "Milan Patel",
//     role: "Founder, StartupX",
//     company: "StartupX",
//     image: "https://images.pexels.com/photos/7580971/pexels-photo-7580971.jpeg",
//     quote:
//       "From MVP to enterprise-scale solution, ATS GLOBAL TECH has been our technology partner every step of the way. Their scalable solutions grew with our business.",
//     rating: 5,
//   },
//   {
//     id: 4,
//     name: "Esha Verma",
//     role: "VP Technology, DataFlow",
//     company: "DataFlow",
//     image:
//       "https://images.pexels.com/photos/32251444/pexels-photo-32251444.jpeg",
//     quote:
//       "The mobile app they developed for us has over 100K downloads and 4.8 stars on app stores. Outstanding user experience and rock-solid performance.",
//     rating: 5,
//   },
// ];

// const ClientTestimonials: React.FC = () => {
//   return (
//     <section className="py-24 bg-gradient-to-r from-[#1c2b4d] to-[#303e4f]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-20">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//             What Our Clients Say
//           </h2>
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//             Don't just take our word for it — hear from our satisfied clients
//             who have experienced remarkable growth through our solutions
//           </p>
//         </div>

//         {/* Testimonials Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {testimonials.map((testimonial) => (
//             <div
//               key={testimonial.id}
//               className="rounded-lg bg-[#1e293b] shadow-xl hover:shadow-2xl transition-all duration-300"
//             >
//               <div className="p-10">
//                 {/* Rating Stars */}
//                 <div className="flex justify-center mb-6">
//                   {Array.from({ length: testimonial.rating }).map((_, i) => (
//                     <Star
//                       key={i}
//                       className="w-6 h-6 text-yellow-400 fill-current"
//                     />
//                   ))}
//                 </div>

//                 {/* Quote */}
//                 <blockquote className="text-gray-300 text-lg italic mb-8 leading-relaxed">
//                   “{testimonial.quote}”
//                 </blockquote>

//                 {/* Client Info */}
//                 <div className="flex items-center space-x-4">
//                   <img
//                     src={testimonial.image}
//                     alt={testimonial.name}
//                     className="w-16 h-16 rounded-full border-4 border-orange-600 object-cover"
//                   />
//                   <div>
//                     <h4 className="font-bold text-white text-lg">
//                       {testimonial.name}
//                     </h4>
//                     <p className="text-orange-400 font-medium">
//                       {testimonial.role}
//                     </p>
//                     <p className="text-gray-400 text-sm">
//                       {testimonial.company}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ClientTestimonials;





import React from "react";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Aditya Sharma",
    role: "CEO, TechCorp Industries",
    company: "TechCorp Industries",
    image:
      "https://plus.unsplash.com/premium_photo-1689977871600-e755257fb5f8?w=600&auto=format&fit=crop&q=60",
    quote:
      "ATS GLOBAL TECH transformed our entire digital infrastructure. Their expertise in cloud migration saved us 40% in operational costs while improving performance dramatically.",
    rating: 5,
  },
  {
    id: 2,
    name: "Saroj Gupta",
    role: "CTO, InnovateLtd",
    company: "InnovateLtd",
    image: "https://images.pexels.com/photos/7580821/pexels-photo-7580821.jpeg",
    quote:
      "Working with ATS GLOBAL TECH was a game-changer. They delivered a complex AI-powered platform ahead of schedule and below budget. Exceptional team!",
    rating: 5,
  },
  {
    id: 3,
    name: "Milan Patel",
    role: "Founder, StartupX",
    company: "StartupX",
    image: "https://images.pexels.com/photos/7580971/pexels-photo-7580971.jpeg",
    quote:
      "From MVP to enterprise-scale solution, ATS GLOBAL TECH has been our technology partner every step of the way. Their scalable solutions grew with our business.",
    rating: 5,
  },
  {
    id: 4,
    name: "Esha Verma",
    role: "VP Technology, DataFlow",
    company: "DataFlow",
    image:
      "https://images.pexels.com/photos/32251444/pexels-photo-32251444.jpeg",
    quote:
      "The mobile app they developed for us has over 100K downloads and 4.8 stars on app stores. Outstanding user experience and rock-solid performance.",
    rating: 5,
  },
];

const ClientTestimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it — hear from our satisfied clients
            who have experienced remarkable growth through our solutions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-lg bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="p-10">
                {/* Rating Stars */}
                <div className="flex justify-center mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 text-lg italic mb-8 leading-relaxed">
                  “{testimonial.quote}”
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full border-4 border-orange-500 object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-orange-600 font-medium">
                      {testimonial.role}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
