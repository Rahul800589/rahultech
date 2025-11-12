


// import React, { useState } from "react";
// import { Play } from "lucide-react";

// const InnovationJourney: React.FC = () => {
//   const [play, setPlay] = useState(false);

//   return (
//     <section className="py-24 bg-gradient-to-r from-[#1c2b4d] to-[#303e4f]">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
//           Experience Our Innovation Journey
//         </h2>
//         <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
//           Take a behind-the-scenes look at our development process, company
//           culture, and the passionate team that brings cutting-edge solutions to
//           life.
//         </p>

//         <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 max-w-4xl mx-auto">
//           {!play ? (
//             <div className="relative">
//               <img
//                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&h=500&fit=crop"
//                 alt="Company Video"
//                 className="w-full h-96 object-cover"
//               />
//               <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
//                 <div className="text-center">
//                   <button
//                     onClick={() => setPlay(true)}
//                     className="inline-flex items-center justify-center gap-3 h-12 bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/30 px-12 rounded-full text-lg font-medium transition-all duration-300"
//                   >
//                     <Play className="h-6 w-6" />
//                     Watch Our Story
//                   </button>
//                   <p className="text-white/80 mt-4 text-sm">
//                     3 minutes – Behind the scenes at ATS GLOBAL TECH
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
//               <iframe
//                 className="absolute top-0 left-0 w-full h-full rounded-2xl"
//                 src="https://www.youtube.com/embed/YykjpeuMNEk?autoplay=1&rel=0"
//                 title="ATS GLOBAL TECH Video"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default InnovationJourney;








import React, { useState } from "react";
import { Play } from "lucide-react";

const InnovationJourney: React.FC = () => {
  const [play, setPlay] = useState(false);

  return (
    // <section className="py-24 bg-white">
    //   <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    //     <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
    //       Experience Our Innovation Journey
    //     </h2>
    //     <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
    //       Take a behind-the-scenes look at our development process, company
    //       culture, and the passionate team that brings cutting-edge solutions to
    //       life.
    //     </p>

    //     <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 max-w-4xl mx-auto">
    //       {!play ? (
    //         <div className="relative">
    //           <img
    //             src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&h=500&fit=crop"
    //             alt="Company Video"
    //             className="w-full h-96 object-cover"
    //           />
    //           <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
    //             <div className="text-center">
    //               <button
    //                 onClick={() => setPlay(true)}
    //                 className="inline-flex items-center justify-center gap-3 h-12 bg-orange-600 hover:bg-orange-700 text-white px-12 rounded-full text-lg font-medium transition-all duration-300"
    //               >
    //                 <Play className="h-6 w-6" />
    //                 Watch Our Story
    //               </button>
    //               <p className="text-gray-100 mt-4 text-sm">
    //                 3 minutes – Behind the scenes at ATS GLOBAL TECH
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       ) : (
    //         <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
    //           <iframe
    //             className="absolute top-0 left-0 w-full h-full rounded-2xl"
    //             src="https://www.youtube.com/embed/YykjpeuMNEk?autoplay=1&rel=0"
    //             title="ATS GLOBAL TECH Video"
    //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //             allowFullScreen
    //           ></iframe>
    //         </div>
    //       )}
    //     </div>
    //   </div>
    // </section>
      <div className="bg-white border border-orange-200 rounded-lg shadow-lg mt-12">
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-orange-700 mb-2">
                  Find Us
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  Visit our office or find us on the map below.
                </p>

                <div className="relative h-96 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3558.1606834398303!2d75.7529906!3d26.8983951!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5dee53548b5%3A0x66d9679054b4bcbd!2sATS%20GLOBAL%20TECH!5e0!3m2!1sen!2sin!4v1761739403746!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="ATS GLOBAL TECH Office Location"
                    style={{ border: 0 }}
                  ></iframe>
                </div>
              </div>
            </div>
  );
};

export default InnovationJourney;
