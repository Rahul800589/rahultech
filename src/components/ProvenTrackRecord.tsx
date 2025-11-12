// import React from "react";
// import {
//   Briefcase,
//   Users,
//   Award,
//   Trophy,
//   HeartHandshake,
//   Clock,
// } from "lucide-react";

// const stats = [
//   { icon: Briefcase, value: "15+", label: "Projects Completed" },
//   { icon: Users, value: "50+", label: "Happy Clients" },
//   { icon: Award, value: "50+", label: "Team Members" },
//   { icon: Trophy, value: "7", label: "Years Experience" },
//   { icon: HeartHandshake, value: "100%", label: "Client Satisfaction" },
//   { icon: Clock, value: "24/7", label: "Support Available" },
// ];

// const ProvenTrackRecord: React.FC = () => {
//   return (
//     <section className="py-20 bg-gradient-to-r from-[#15243d] to-[#2d3d55]
//  relative overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//             Proven Track Record
//           </h2>
//           <p className="text-xl text-gray-300">
//             Numbers that speak for our excellence
//           </p>
//         </div>

//         {/* Stats Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
//           {stats.map(({ icon: Icon, value, label }) => (
//             <div key={label} className="text-center group">
//               {/* Icon Container with gradient animation */}
//               <div className="bg-white/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 relative overflow-hidden group-hover:scale-110 transition-transform shadow-lg hover:shadow-xl">
//                 <span
//                   className="absolute inset-0 bg-gradient-to-r 
//                     from-red-500 via-blue-500 to-purple-600 
//                     animate-gradient-x opacity-80"
//                 ></span>
//                 <Icon className="h-10 w-10 text-white relative z-10" />
//               </div>

//               {/* Gradient Text for Value */}
//               <div
//                 className="text-3xl md:text-4xl font-bold mb-2 
//                   bg-gradient-to-r from-red-500 via-blue-500 to-purple-600 
//                   bg-clip-text text-transparent animate-gradient-x"
//               >
//                 {value}
//               </div>

//               {/* Label */}
//               <div className="text-gray-300 font-medium">{label}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProvenTrackRecord;







import React from "react";
import {
  Briefcase,
  Users,
  Award,
  Trophy,
  HeartHandshake,
  Clock,
} from "lucide-react";

const stats = [
  { icon: Briefcase, value: "15+", label: "Projects Completed" },
  { icon: Users, value: "50+", label: "Happy Clients" },
  { icon: Award, value: "50+", label: "Team Members" },
  { icon: Trophy, value: "7", label: "Years Experience" },
  { icon: HeartHandshake, value: "100%", label: "Client Satisfaction" },
  { icon: Clock, value: "24/7", label: "Support Available" },
];

const ProvenTrackRecord: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Proven Track Record
          </h2>
          <p className="text-xl text-gray-600">
            Numbers that speak for our excellence
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center group">
              {/* Icon Container */}
              <div className="bg-gray-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 relative overflow-hidden group-hover:scale-110 transition-transform shadow-md hover:shadow-lg">
                <Icon className="h-10 w-10 text-orange-500 relative z-10" />
              </div>

              {/* Value */}
              <div className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
                {value}
              </div>

              {/* Label */}
              <div className="text-gray-600 font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProvenTrackRecord;
