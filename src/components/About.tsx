


// import React from "react";
// import { Linkedin, Github, Mail } from "lucide-react";
// import { useNavigate } from 'react-router-dom'; 

// const About: React.FC = () => {
//   const navigate = useNavigate();

//   const teamMembers = [
//     {
//       name: 'Pramod Saini',
//       role: 'Senior Frontend Developer',
//       description: '6 months in frontend development with strong UI experience.',
//       imgSrc: './src/assets/Pramod.png',
//       imgAlt: 'Pramod Saini',
//       linkedin: 'https://www.linkedin.com/in/pramod-saini-0577a5229/',
//       mail: 'mailto:pramod@ats global tech.com',
//       github: 'https://github.com/Pramod-saini',
//       navigationPath: '/team-members', 
//     },
//     {
//       name: 'Aadarsh Sharma',
//       role: 'Senior Frontend Developer',
//       description: 'Expert in React JS & modern web design.',
//       imgSrc: 'src/assets/Aadarsh.png',
//       imgAlt: 'Aadarsh Sharma',
//       linkedin: 'https://www.linkedin.com/in/aadarsh-sharma-4a5aba336/',
//       mail: 'mailto:aadarsh@ats global tech.com',
//       github: 'https://github.com/Aadarsh1511',
//       navigationPath: '/team-members2', 
//     },
//     {
//       name: 'Aakash Kumawat',
//       role: 'Senior Backend Developer',
//       description: 'Backend developer with enterprise-level experience.',
//       imgSrc: 'src/assets/Aakash.jpeg',
//       imgAlt: 'Aakash Kumawat',
//       linkedin: 'https://linkedin.com/in/akshmat243',
//       mail: 'mailto:aakash@ats global tech.com',
//       github: 'https://github.com/akshmat243',
//       navigationPath: '/team-members3',
//     },
//     {
//       name: 'Ram Parik',
//       role: ' Backend Developer',
//       description: 'Passion for clean & scalable backend development.',
//       imgSrc: 'src/assets/Ram.png',
//       imgAlt: 'Ram Parik',
//       linkedin: 'https://www.linkedin.com/in/ram-parik -22411a308',
//       mail: 'mailto:raj@ats global tech.com',
//       github: 'https://share.google/tKqAjkPqBtKgtdqOJ', 
//       navigationPath: '/team-members4',
//     },
//   ];

//  

//   return (
//     <div
//       className="min-h-screen bg-gradient-to-r from-[#1a2e49] to-[#32445b]
//   text-white"
//     >
//       {/* Hero Section */}
//       <section className="py-32 lg:py-28 text-white text-center">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h1 className="text-4xl md:text-6xl font-bold mb-6">
//             About <span className="text-orange-400">ATS GLOBAL TECH</span>
//           </h1>
//           <p className="text-xl mb-8 max-w-3xl mx-auto">
//             We are a team of passionate technologists, designers, and innovators
//             committed to transforming businesses through cutting-edge technology
//             solutions.
//           </p>
//         </div>
//       </section>

//       {/* Vision & Mission */}
//       <section className="py-20 bg-white/10 backdrop-blur-sm rounded-3xl max-w-7xl mx-auto my-12 text-gray-100 shadow-lg">
//         <div className="grid grid-cols-1 gap-12 px-6 lg:px-8">
//           {/* Vision */}
//           <div className="rounded-xl bg-white/10 p-6 backdrop-blur-md border border-white/20">
//             <h3 className="text-2xl font-semibold text-orange-400 mb-4 text-center">
//               Our Vision
//             </h3>
//             <p className="text-lg text-gray-200 leading-relaxed text-center">
//               To be the world's most trusted technology partner, recognized for
//               our innovation, integrity, and impact. We envision a future where
//               every business can leverage technology to create meaningful value.
//             </p>
//           </div>

//           {/* Mission */}
//           <div className="rounded-xl bg-white/10 p-6 backdrop-blur-md border border-white/20">
//             <h3 className="text-2xl font-semibold text-orange-400 mb-4 text-center">
//               Our Mission
// </h3>
// {/*             </b> */}
//             <p className="text-lg text-gray-200 leading-relaxed text-center">
//               To empower businesses worldwide with innovative technology
//               solutions that drive growth, efficiency, and transformation. We
//               make advanced tech accessible to organizations of all sizes.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* CEO Section */}
//       <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8 my-12 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 text-gray-100">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div className="relative">
// {/*             <img
//               src="https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
//               alt="Aryan Singh - CEO"
//               className="w-full max-w-md mx-auto rounded-2xl shadow-xl"
//             /> */}
             
//           </div>

//           <div>
//             <div className="mb-8">
//               <blockquote className="text-2xl md:text-3xl font-light text-gray-300 italic leading-relaxed mb-6">
//                 "Technology should empower businesses to achieve their wildest
//                 dreams. At ats global tech, we don't just build software – we craft
//                 digital experiences that transform industries."
//               </blockquote>
// {/*               </b> */}
//             </div>
//             <div className="space-y-6">
//               <div>
//                 <h3 className="text-3xl font-bold text-gray-100 mb-2">
//                   Aryan Singh
//                 </h3>
//                 <p className="text-xl text-orange-600 font-semibold mb-4">
//                   CEO &amp; Founder
//                 </p>
//               </div>
//               <div className="prose prose-lg text-gray-400">
//                 <p className="mb-4">
//                   With over 15 years of experience in the technology industry,
//                   Aryan founded ats global tech with a vision to bridge the gap
//                   between innovative technology and practical business
//                   solutions. As a former senior engineer at{" "}
//                   <span className="text-orange-500 text-xl underline">
//                     {" "}
//                     Infosys
//                   </span>
//                   , he brings deep technical expertise combined with strategic
//                   business acumen.
//                 </p>
//                 <p className="mb-4">
//                   Under Aryan's leadership, ats global tech has grown from a
//                   two-person startup to a globally recognized technology
//                   consultancy, serving Fortune 500 companies and innovative
//                   startups alike. His passion for emerging technologies and
//                   commitment to excellence has been the driving force behind the
//                   company's success.
//                 </p>
//                 <p>
//                   Aryan holds a Master's degree in Computer Science from Stanford
//                   University and is a frequent speaker at technology conferences
//                   worldwide. When he's not revolutionizing businesses through
//                   technology, you can find him mentoring young entrepreneurs or
//                   exploring the latest in AI and machine learning.
//                 </p>
//               </div>
//               <div className="flex items-center space-x-4 pt-4">
//                 <a
//                   href="#"
//                   className="text-orange-600 hover:text-orange-800 transition-colors"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="lucide lucide-linkedin h-6 w-6"
//                   >
//                     <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
//                     <rect width="4" height="12" x="2" y="9"></rect>
//                     <circle cx="4" cy="4" r="2"></circle>
//                   </svg>
//                 </a>
//                 <a
//                   href="mailto:alex@ats global tech.com"
//                   className="text-orange-600 hover:text-orange-800 transition-colors"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="lucide lucide-mail h-6 w-6"
//                   >
//                     <rect width="20" height="16" x="2" y="4" rx="2"></rect>
//                     <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
//                   </svg>
//                 </a>
//                 <a
//                   href="#"
//                   className="text-orange-600 hover:text-orange-800 transition-colors"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="lucide lucide-github h-6 w-6"
//                   >
//                     <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
//                     <path d="M9 18c-4.51 2-5-2-7-2"></path>
//                   </svg>
//                 </a>
//               </div>
//               <div className="grid grid-cols-3 gap-4 pt-6">
//                 <div className="text-center p-4 bg-gray-500 rounded-lg shadow-md">
//                   <div className="text-2xl font-bold text-orange-600">15+</div>
//                   <div className="text-sm text-gray-200">Years Experience</div>
//                 </div>
//                 <div className="text-center p-4 bg-gray-500 rounded-lg shadow-md">
//                   <div className="text-2xl font-bold text-orange-600">500+</div>
//                   <div className="text-sm text-gray-200">Projects Led</div>
//                 </div>
//                 <div className="text-center p-4 bg-gray-500 rounded-lg shadow-md">
//                   <div className="text-2xl font-bold text-orange-600">50+</div>
//                   <div className="text-sm text-gray-200">Speaking Events</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="py-20 bg-gradient-to-r from-[#1a2940] to-[#24344d]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
//               Meet Our Team
//             </h2>
//             <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//               The brilliant minds behind ats global tech - experts in their fields, passionate about innovation.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

//             {teamMembers.map((member) => (
//               <div 
//                   key={member.name}
//                   className="rounded-lg bg-white/10 backdrop-blur-sm text-center  shadow-lg hover:shadow-xl transition duration-300 p-6"
//               >
//                 <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
//                   <img src={member.imgSrc} alt={member.imgAlt} className="w-full h-full object-cover"/>
//                 </div>

//                 <h3 className="font-semibold text-xl">{member.name}</h3>
//                 <p className="text-sm text-orange-600 font-medium mb-4">{member.role}</p>

//                 <p className="text-gray-300 mb-4">
//                   {member.description}
//                 </p>

//                 <div className="flex justify-center space-x-4 mb-4">
//                   <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800">
//                     <Linkedin className="w-5 h-5"/>
//                   </a>
//                   <a href={member.mail} className="text-orange-600 hover:text-orange-800">
//                     <Mail className="w-5 h-5 "/>
//                   </a>
//                   <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800">
//                     <Github className="w-5 h-5"/>
//                   </a>
//                 </div>

//                 {/* The Button with the NEW Navigation Functionality */}
//                 <button 
//                   onClick={() => navigate(member.navigationPath)} // यहाँ `member.navigationPath` का उपयोग किया गया है
//                   className="bg-orange-600 text-white px-4 py-2 text-sm rounded-md hover:bg-orange-700 transition duration-150"
//                 >
//                   View Portfolio
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       

//       {/* Core Values */}
//       <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8 my-12 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 text-gray-100">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-4">
//             Our Core Values
//           </h2>
//           <p className="text-lg text-gray-200 max-w-2xl mx-auto">
//             These values guide every decision we make and every solution we
//             deliver.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {[
//             {
//               title: "Innovation",
//               desc: "We explore new technologies and methods to deliver cutting-edge solutions.",
//             },
//             {
//               title: "Quality",
//               desc: "We deliver high-quality products that exceed expectations.",
//             },
//             {
//               title: "Collaboration",
//               desc: "We partner with clients for long-term success.",
//             },
//             {
//               title: "Growth",
//               desc: "We focus on scalable, future-ready solutions.",
//             },
//           ].map((value, i) => (
//             <div
//               key={i}
//               className="rounded-xl bg-white/10 p-6 text-center border border-white/10 hover:bg-white/20 transition"
//             >
//               <h3 className="text-xl font-semibold text-orange-400 mb-2">
//                 {value.title}
//               </h3>
//               <p className="text-gray-200 text-sm">{value.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-20 text-center">
//         <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-400">
//           Join Our Journey
//         </h2>
//         <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-200">
//           Whether you're looking for a career opportunity or want to partner
//           with us — we’d love to hear from you.
//         </p>
//         <div className="flex flex-col sm:flex-row justify-center gap-4">
//           <a href="/contact">
//             <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-md transition">
//               Get In Touch
//             </button>
//           </a>
//           <a href="/careers">
//             <button className="bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-6 rounded-md transition border border-white/30">
//               View Careers
//             </button>
//           </a>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;







import React from "react";
import { Linkedin, Github, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About: React.FC = () => {
  const navigate = useNavigate();

  const teamMembers = [
       {
      name: "Khushbu Singh",
      role: "HR Manager",
      description: "Passionate HR professional with expertise in talent acquisition, employee engagement, and organizational development.",
      imgSrc: "./team-devops.jpg",
      imgAlt: "HR Manager",
      linkedin: "https://www.linkedin.com/in/HR Manager-22411a308",
      mail: "mailto:HR Manager@atsglobaltech.com",
      github: "https://share.google/tKqAjkPqBtKgtdqOJ",
      navigationPath: "/team-members4",
    },
    {
      name: "Pramod Saini",
      role: "Senior Frontend Developer",
      description: "6 months in frontend development with strong UI experience.",
      imgSrc: "./Pramod.png",
      imgAlt: "Pramod Saini",
      linkedin: "https://www.linkedin.com/in/pramod-saini-0577a5229/",
      mail: "mailto:pramod@atsglobaltech.com",
      github: "https://github.com/Pramod-saini",
      navigationPath: "/team-members",
    },
    {
      name: "Aadarsh Sharma",
      role: "Senior Frontend Developer",
      description: "Expert in React JS & modern web design.",
      imgSrc: "./Aadarsh.png",
      imgAlt: "Aadarsh Sharma",
      linkedin: "https://www.linkedin.com/in/aadarsh-sharma-4a5aba336/",
      mail: "mailto:aadarsh@atsglobaltech.com",
      github: "https://github.com/Aadarsh1511",
      navigationPath: "/team-members2",
    },
    {
      name: "Aakash Kumawat",
      role: "Senior Backend Developer",
      description: "Backend developer with enterprise-level experience.",
      imgSrc: "./Aakash.jpeg",
      imgAlt: "Aakash Kumawat",
      linkedin: "https://linkedin.com/in/akshmat243",
      mail: "mailto:aakash@atsglobaltech.com",
      github: "https://github.com/akshmat243",
      navigationPath: "/team-members3",
    },
   
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      {/* <section className="py-32 lg:py-28 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-orange-600">ATS GLOBAL TECH</span>
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-700">
            We are a team of passionate technologists, designers, and innovators
            committed to transforming businesses through cutting-edge technology
            solutions.
          </p>
        </div>
      </section> */}
      <section className="bg-gray-400 py-32 lg:py-28 text-center min-h-[500px] flex items-center">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
      About <span className="text-orange-600">ATS GLOBAL TECH</span>
    </h1>
    <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-100">
      We are a team of passionate technologists, designers, and innovators
      committed to transforming businesses through cutting-edge technology
      solutions. Our goal is to help organizations achieve digital excellence
      and long-term success.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left">
      {/* Mission */}
      <div className="bg-black p-8 rounded-2xl shadow-lg border border-gray-700 hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl font-semibold mb-4 text-orange-600">Our Mission</h2>
        <p className="text-gray-200">
          To deliver innovative, reliable, and scalable technology solutions
          that empower businesses to grow, adapt, and lead in a rapidly
          evolving digital world.
        </p>
      </div>

      {/* Vision */}
      <div className="bg-black p-8 rounded-2xl shadow-lg border border-gray-700 hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl font-semibold mb-4 text-orange-600">Our Vision</h2>
        <p className="text-gray-200">
          To be a global leader in digital transformation by integrating
          creativity, strategy, and advanced technologies to build a smarter
          and more connected future.
        </p>
      </div>

      {/* Core Values */}
      <div className="bg-black p-8 rounded-2xl shadow-lg border border-gray-700 hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl font-semibold mb-4 text-orange-600">Core Values</h2>
        <ul className="list-disc list-inside text-gray-200 space-y-2">
          <li>Innovation & Excellence</li>
          <li>Integrity & Transparency</li>
          <li>Customer-Centric Approach</li>
          <li>Collaboration & Teamwork</li>
          <li>Continuous Learning</li>
        </ul>
      </div>
    </div>
  </div>
</section>


      {/* Vision & Mission */}
      <section className="py-20 bg-orange-50 rounded-3xl max-w-7xl mx-auto my-12 text-gray-800 shadow-lg">
        <div className="grid grid-cols-1 gap-12 px-6 lg:px-8">
          <div className="rounded-xl bg-white p-8 border border-orange-100 shadow-md">
            <h3 className="text-2xl font-semibold text-orange-600 mb-4 text-center">
              Our Vision
            </h3>
            <p className="text-lg text-gray-700 text-center">
              To be the world's most trusted technology partner, recognized for
              our innovation, integrity, and impact. We envision a future where
              every business can leverage technology to create meaningful value.
            </p>
          </div>

          <div className="rounded-xl bg-white p-8 border border-orange-100 shadow-md">
            <h3 className="text-2xl font-semibold text-orange-600 mb-4 text-center">
              Our Mission
            </h3>
            <p className="text-lg text-gray-700 text-center">
              To empower businesses worldwide with innovative technology
              solutions that drive growth, efficiency, and transformation. We
              make advanced tech accessible to organizations of all sizes.
            </p>
          </div>
        </div>
      </section>


{/* CEO Section */}
<section className="py-20 max-w-7xl mx-auto px-6 lg:px-8 my-12 bg-white rounded-3xl border border-gray-200 text-gray-900 shadow-lg">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <div className="relative">
      <img
        src="./ceo.png"
        alt="Abhay Singh - CEO"
        className="w-full max-w-md mx-auto rounded-2xl shadow-xl"
      />
    </div>

    <div>
      <div className="mb-8">
        <blockquote className="text-2xl md:text-3xl font-light text-gray-700 italic leading-relaxed mb-6">
          "Technology should empower businesses to achieve their wildest
          dreams. At ats global tech, we don't just build software – we craft
          digital experiences that transform industries."
        </blockquote>
      </div>
      <div className="space-y-6">
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-2">
            Abhay Singh
          </h3>
          <p className="text-xl text-orange-600 font-semibold mb-4">
            CEO &amp; Founder
          </p>
        </div>
        <div className="prose prose-lg text-gray-700">
          <p className="mb-4">
            With over 15 years of experience in the technology industry,
            Abhay founded ats global tech with a vision to bridge the gap
            between innovative technology and practical business
            solutions. As a former senior engineer at{" "}
            <span className="text-orange-600 text-xl underline">
              Infosys
            </span>
            , he brings deep technical expertise combined with strategic
            business acumen.
          </p>
          <p className="mb-4">
            Under Abhay's leadership, ats global tech has grown from a
            two-person startup to a globally recognized technology
            consultancy, serving Fortune 500 companies and innovative
            startups alike. His passion for emerging technologies and
            commitment to excellence has been the driving force behind the
            company's success.
          </p>
          <p>
            Abhay holds a Master's degree in Computer Science from Stanford
            University and is a frequent speaker at technology conferences
            worldwide. When he's not revolutionizing businesses through
            technology, you can find him mentoring young entrepreneurs or
            exploring the latest in AI and machine learning.
          </p>
        </div>
        <div className="flex items-center space-x-4 pt-4">
          <a
            href="#"
            className="text-orange-600 hover:text-orange-800 transition-colors"
          >
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
              className="lucide lucide-linkedin h-6 w-6"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect width="4" height="12" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a
            href="mailto:alex@atsglobaltech.com"
            className="text-orange-600 hover:text-orange-800 transition-colors"
          >
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
              className="lucide lucide-mail h-6 w-6"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
          </a>
          <a
            href="#"
            className="text-orange-600 hover:text-orange-800 transition-colors"
          >
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
              className="lucide lucide-github h-6 w-6"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
          </a>
        </div>
        <div className="grid grid-cols-3 gap-4 pt-6">
          <div className="text-center p-4 bg-gray-100 rounded-lg shadow-md">
            <div className="text-2xl font-bold text-orange-600">15+</div>
            <div className="text-sm text-gray-700">Years Experience</div>
          </div>
          <div className="text-center p-4 bg-gray-100 rounded-lg shadow-md">
            <div className="text-2xl font-bold text-orange-600">500+</div>
            <div className="text-sm text-gray-700">Projects Led</div>
          </div>
          <div className="text-center p-4 bg-gray-100 rounded-lg shadow-md">
            <div className="text-2xl font-bold text-orange-600">50+</div>
            <div className="text-sm text-gray-700">Speaking Events</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



      {/* Team Section */}
      <section className="py-20 bg-gradient-to-r from-orange-50 via-white to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The brilliant minds behind ATS GLOBAL TECH — experts in their
              fields, passionate about innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="rounded-lg bg-white text-center border border-gray-200 shadow-md hover:shadow-lg transition p-6"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={member.imgSrc}
                    alt={member.imgAlt}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="font-semibold text-xl">{member.name}</h3>
                <p className="text-sm text-orange-600 font-medium mb-4">
                  {member.role}
                </p>

                <p className="text-gray-600 mb-4">{member.description}</p>

                <div className="flex justify-center space-x-4 mb-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-800"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={member.mail}
                    className="text-orange-600 hover:text-orange-800"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-800"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>

                <button
                  onClick={() => navigate(member.navigationPath)}
                  className="bg-orange-600 text-white px-4 py-2 text-sm rounded-md hover:bg-orange-700 transition"
                >
                  View Portfolio
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8 my-12 bg-orange-50 rounded-3xl border border-orange-100 text-gray-800">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These values guide every decision we make and every solution we
            deliver.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Innovation",
              desc: "We explore new technologies and methods to deliver cutting-edge solutions.",
            },
            {
              title: "Quality",
              desc: "We deliver high-quality products that exceed expectations.",
            },
            {
              title: "Collaboration",
              desc: "We partner with clients for long-term success.",
            },
            {
              title: "Growth",
              desc: "We focus on scalable, future-ready solutions.",
            },
          ].map((value, i) => (
            <div
              key={i}
              className="rounded-xl bg-white p-6 text-center border border-orange-100 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-orange-600 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-700 text-sm">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center bg-gradient-to-r from-orange-100 via-white to-orange-50">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-600">
          Join Our Journey
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-700">
          Whether you're looking for a career opportunity or want to partner
          with us — we’d love to hear from you.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="/contact">
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-md transition">
              Get In Touch
            </button>
          </a>
          <a href="/careers">
            <button className="bg-white border border-orange-200 hover:bg-orange-50 text-orange-600 font-bold py-3 px-6 rounded-md transition">
              View Careers
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
