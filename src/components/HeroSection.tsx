// // import React, { useEffect, useState } from "react";

// // const HeroSection: React.FC = () => {
// //   const [topIndex, setTopIndex] = useState(0);
// //   const [bottomIndex, setBottomIndex] = useState(0);

// //   const topSlides = [
// //     "https://images.unsplash.com/photo-1506765515384-028b60a970df?q=80&w=800&auto=format&fit=crop",
// //     "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
// //     "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
// //   ];

// //   const bottomSlides = [
// //     "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop",
// //     "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop",
// //     "https://images.unsplash.com/photo-1497493292307-31c376b6e479?q=80&w=800&auto=format&fit=crop",
// //   ];

// //   useEffect(() => {
// //     const topTimer = setInterval(() => {
// //       setTopIndex((prev) => (prev + 1) % topSlides.length);
// //     }, 3000);
// //     const bottomTimer = setInterval(() => {
// //       setBottomIndex((prev) => (prev + 1) % bottomSlides.length);
// //     }, 4000);
// //     return () => {
// //       clearInterval(topTimer);
// //       clearInterval(bottomTimer);
// //     };
// //   }, []);

// //   const handleOpenContact = () => {
// //     const event = new CustomEvent("openContactModal");
// //     window.dispatchEvent(event);
// //   };

// //   return (
// //     <section
// //       id="home"
// //       className="relative py-20 lg:py-32 overflow-hidden"
// //     >
// //       {/* Left Video Background */}
// //       <div className="absolute inset-y-0 left-0 w-[70%] z-0 overflow-hidden rounded-r-3xl">
// //         <video
// //           className="w-full h-full object-cover opacity-30"
// //           autoPlay
// //           muted
// //           loop
// //           playsInline
// //         >
// //           <source
// //             src="https://videos.pexels.com/video-files/6187620/6187620-uhd_2560_1440_25fps.mp4"
// //             type="video/mp4"
// //           />
// //         </video>
// //         <div className="absolute inset-0 bg-gradient-to-r from-[#0a1522]/90 via-[#0f1f33]/80 to-transparent"></div>
// //       </div>

// //       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-10 gap-10 items-center">

// //         {/* LEFT TEXT AREA */}
// //         <div className="lg:col-span-7 text-center lg:text-left text-white font-poppins">
// //           <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm mb-6">
// //             ✨ Leading Digital Transformation Partner
// //           </div>

// //           <h1 className="font-outfit font-extrabold my-10 leading-snug">
// //             <span className="text-4xl md:text-7xl block">
// //               Building Tomorrow&apos;s
// //             </span>

// //             <span className="flex justify-center lg:justify-start flex-wrap items-center gap-3 mt-2 leading-normal">
// //               <span className="bg-gradient-to-r from-purple-500 via-pink-500 via-red-500 via-sky-400 to-purple-600 bg-clip-text text-transparent animate-gradient-x text-4xl md:text-7xl font-extrabold leading-normal font-outfit">
// //                 Digital Solutions
// //               </span>
// //               <span className="text-4xl md:text-7xl font-outfit font-extrabold leading-normal">
// //                 Today
// //               </span>
// //             </span>
// //           </h1>

// //           <p className="text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed mx-auto lg:mx-0 font-poppins">
// //             <span className="font-outfit text-3xl text-white tracking-wide block mb-3">
// //               ATS GLOBAL TECH
// //             </span>
// //             is your trusted partner in digital innovation. We create scalable,
// //             secure, and intelligent software solutions that transform businesses
// //             and drive sustainable growth in the digital economy.
// //           </p>

// //           <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center mb-16">
// //             <button
// //               onClick={handleOpenContact}
// //               className="relative inline-flex items-center justify-center gap-2 font-medium h-12 rounded-md px-8 py-3 text-lg text-white overflow-hidden group font-outfit"
// //             >
// //               <span className="absolute inset-0 rounded-md bg-gradient-to-r from-purple-500 via-pink-500 via-red-500 via-sky-400 to-purple-600 animate-gradient-x transition-transform duration-500 group-hover:scale-110"></span>
// //               <span className="relative z-10">Start Your Project</span>
// //             </button>

// //             <a href="/work/projects">
// //               <button className="inline-flex items-center justify-center gap-2 font-medium h-11 rounded-md px-10 py-4 text-lg text-white border hover:bg-white/10 backdrop-blur-sm font-outfit">
// //                 <svg
// //                   xmlns="http://www.w3.org/2000/svg"
// //                   width="24"
// //                   height="24"
// //                   fill="none"
// //                   stroke="currentColor"
// //                   strokeWidth="2"
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   className="mr-2 h-6 w-6"
// //                 >
// //                   <polygon points="6 3 20 12 6 21 6 3" />
// //                 </svg>
// //                 Explore Our Works
// //               </button>
// //             </a>
// //           </div>
// //         </div>

// //         {/* RIGHT SIDE SLIDERS */}
// //         <div className="lg:col-span-3 flex flex-col gap-6">
// //           <div className="relative w-full h-52 rounded-2xl overflow-hidden shadow-lg border border-white/20">
// //             {topSlides.map((img, i) => (
// //               <img
// //                 key={i}
// //                 src={img}
// //                 alt={`top-slide-${i}`}
// //                 className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
// //                   i === topIndex ? "opacity-100" : "opacity-0"
// //                 }`}
// //               />
// //             ))}
// //           </div>

// //           <div className="relative w-full h-52 rounded-2xl overflow-hidden shadow-lg border border-white/20">
// //             {bottomSlides.map((img, i) => (
// //               <img
// //                 key={i}
// //                 src={img}
// //                 alt={`bottom-slide-${i}`}
// //                 className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
// //                   i === bottomIndex ? "opacity-100" : "opacity-0"
// //                 }`}
// //               />
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default HeroSection;



// import React, { useEffect, useState } from "react";

// const HeroSection: React.FC = () => {
//   const [topIndex, setTopIndex] = useState(0);
//   const [bottomIndex, setBottomIndex] = useState(0);

//   // Image sliders for right side
//   const topSlides = [
//     "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
//     "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
//     "https://images.unsplash.com/photo-1506765515384-028b60a970df?q=80&w=800&auto=format&fit=crop",
//   ];

//   const bottomSlides = [
//     "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop",
//     "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop",
//     "https://images.unsplash.com/photo-1497493292307-31c376b6e479?q=80&w=800&auto=format&fit=crop",
//   ];

//   useEffect(() => {
//     const topTimer = setInterval(() => {
//       setTopIndex((prev) => (prev + 1) % topSlides.length);
//     }, 3000);
//     const bottomTimer = setInterval(() => {
//       setBottomIndex((prev) => (prev + 1) % bottomSlides.length);
//     }, 4000);

//     return () => {
//       clearInterval(topTimer);
//       clearInterval(bottomTimer);
//     };
//   }, []);

//   const handleOpenContact = () => {
//     const event = new CustomEvent("openContactModal");
//     window.dispatchEvent(event);
//   };

//   return (
//     <section
//       id="home"
//       className="relative flex flex-col lg:flex-row overflow-hidden bg-gray-100 mt-[80px] h-[650px]"
//     >
//       {/* LEFT SECTION (with background image) */}
//       <div className="relative w-full lg:w-1/2 h-[300px] lg:h-full flex items-center justify-center text-white">
//         {/* Background Image */}
//         <img
//           src="https://plus.unsplash.com/premium_photo-1661951926748-413f9a5b0f55?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcGFueSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
//           alt="Company teamwork"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         {/* Dark overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-[#0a1522]/90 via-[#0f1f33]/85 to-transparent"></div>

//         {/* LEFT CONTENT (your original text + buttons restored) */}
//         <div className="relative z-10 max-w-2xl px-6 text-center lg:text-left font-poppins">
//           <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm mb-6">
//             ✨ Leading Digital Transformation Partner
//           </div>

//           <h1 className="font-outfit font-extrabold my-10 leading-snug">
//             <span className="text-4xl md:text-7xl block">
//               Building Tomorrow&apos;s
//             </span>

//             <span className="flex justify-center lg:justify-start flex-wrap items-center gap-3 mt-2 leading-normal">
//               <span className="bg-gradient-to-r from-purple-500 via-pink-500 via-red-500 via-sky-400 to-purple-600 bg-clip-text text-transparent animate-gradient-x text-4xl md:text-7xl font-extrabold leading-normal font-outfit">
//                 Digital Solutions
//               </span>
//               <span className="text-4xl md:text-7xl font-outfit font-extrabold leading-normal">
//                 Today
//               </span>
//             </span>
//           </h1>

//           <p className="text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed mx-auto lg:mx-0 font-poppins">
//             <span className="font-outfit text-3xl text-white tracking-wide block mb-3">
//               ATS GLOBAL TECH
//             </span>
//             is your trusted partner in digital innovation. We create scalable,
//             secure, and intelligent software solutions that transform businesses
//             and drive sustainable growth in the digital economy.
//           </p>

//           {/* Restored Buttons */}
//           <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center mt-6">
//             <button
//               onClick={handleOpenContact}
//               className="relative inline-flex items-center justify-center gap-2 font-medium h-12 rounded-md px-8 py-3 text-lg text-white overflow-hidden group font-outfit"
//             >
//               <span className="absolute inset-0 rounded-md bg-gradient-to-r from-purple-500 via-pink-500 via-red-500 via-sky-400 to-purple-600 animate-gradient-x transition-transform duration-500 group-hover:scale-110"></span>
//               <span className="relative z-10">Start Your Project</span>
//             </button>

//             <a href="/work/projects">
//               <button className="inline-flex items-center justify-center gap-2 font-medium h-11 rounded-md px-10 py-4 text-lg text-white border hover:bg-white/10 backdrop-blur-sm font-outfit">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="mr-2 h-6 w-6"
//                 >
//                   <polygon points="6 3 20 12 6 21 6 3" />
//                 </svg>
//                 Explore Our Works
//               </button>
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* RIGHT SECTION (2 sliders) */}
//       <div className="w-full lg:w-1/2 flex flex-col justify-between p-6 lg:p-10 gap-8 bg-white">
//         {/* Top Slider */}
//         <div className="relative w-full h-[45%] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
//           {topSlides.map((img, i) => (
//             <img
//               key={i}
//               src={img}
//               alt={`top-slide-${i}`}
//               className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
//                 i === topIndex ? "opacity-100" : "opacity-0"
//               }`}
//             />
//           ))}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
//         </div>

//         {/* Bottom Slider */}
//         <div className="relative w-full h-[45%] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
//           {bottomSlides.map((img, i) => (
//             <img
//               key={i}
//               src={img}
//               alt={`bottom-slide-${i}`}
//               className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
//                 i === bottomIndex ? "opacity-100" : "opacity-0"
//               }`}
//             />
//           ))}
//           <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent"></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;








import React, { useEffect, useState } from "react";

const HeroSection: React.FC = () => {
  const [topIndex, setTopIndex] = useState(0);
  const [bottomIndex, setBottomIndex] = useState(0);

  const topSlides = [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506765515384-028b60a970df?q=80&w=800&auto=format&fit=crop",
  ];

  const bottomSlides = [
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497493292307-31c376b6e479?q=80&w=800&auto=format&fit=crop",
  ];

  useEffect(() => {
    const topTimer = setInterval(
      () => setTopIndex((prev) => (prev + 1) % topSlides.length),
      3000
    );
    const bottomTimer = setInterval(
      () => setBottomIndex((prev) => (prev + 1) % bottomSlides.length),
      4000
    );

    return () => {
      clearInterval(topTimer);
      clearInterval(bottomTimer);
    };
  }, []);

  const handleOpenContact = () => {
    const event = new CustomEvent("openContactModal");
    window.dispatchEvent(event);
  };

  return (
    <section
      id="home"
      className="relative flex flex-col lg:flex-row overflow-hidden bg-gray-50 pt-[100px] min-h-[700px]"
    >
      {/* ✅ LEFT SECTION: Content (65%) */}
      <div className="relative w-full lg:w-[65%] flex items-center justify-center bg-gradient-to-r from-[#0a1522] via-[#12253c] to-[#0a1522] text-white px-8 py-16">
        <div className="max-w-2xl text-center lg:text-left">
          <span className="inline-block px-4 py-2 text-sm font-semibold rounded-full bg-white/10 border border-white/20 mb-6">
            ✨ Empowering Digital Transformation
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold font-outfit leading-snug mb-6">
            Building the{" "}
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 via-red-500 via-sky-400 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
              Future of Tech
            </span>
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed mb-8 font-poppins">
            <span className="text-white font-semibold text-xl block mb-2">
              ATS GLOBAL TECH
            </span>
            We design scalable and intelligent software solutions that help
            businesses innovate, grow, and thrive in the digital world.
          </p>

          {/* ✅ Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={handleOpenContact}
              className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white rounded-md overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 transition-transform duration-500 group-hover:scale-110 rounded-md"></span>
              <span className="relative z-10">Start Your Project</span>
            </button>

            <a href="/work/projects">
              <button className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white border border-white/30 rounded-md hover:bg-white/10 transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <polygon points="6 3 20 12 6 21 6 3" />
                </svg>
                Explore Works
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* ✅ RIGHT SECTION: Two Sliders (35%) */}
      <div className="w-full lg:w-[35%] flex flex-col justify-between gap-6 p-6 lg:p-10 bg-white">
        {/* Top Slider */}
        <div className="relative w-full h-[45%] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
          {topSlides.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`top-slide-${i}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                i === topIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        {/* Bottom Slider */}
        <div className="relative w-full h-[45%] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
          {bottomSlides.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`bottom-slide-${i}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                i === bottomIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
