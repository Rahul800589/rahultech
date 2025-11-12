// import React from "react";
// import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin
//   , Instagram, Github
//  } from "lucide-react";
// import Logo from "../assets/ats-logo.png";
// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-gradient-to-r from-[#1a2940] to-[#1b273b]
//  text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* Brand & Socials */}
//           <div className="col-span-1 md:col-span-2">
//             <div className="flex items-center mb-6">
//               <img src={Logo} alt="Logo" className="w-12 h-16 object-cover" />
//               <span className="font-bold text-2xl text-white ml-3">
//                 ATS GLOBAL TECH
//               </span>
//             </div>
//             <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
//               Empowering businesses with cutting-edge technology solutions. We
//               specialize in custom software development, cloud solutions, AI
//               implementation, and comprehensive digital transformation services.
//             </p>
//             <div className="flex space-x-4">
//               <a href="https://www.facebook.com/profile.php?id=61574788298611">
//                 <Facebook className="h-8 w-8 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors p-1 hover:bg-gray-800 rounded" />
//               </a>
//               <a href="https://x.com/TechlabsSu58347">
//                 <Twitter className="h-8 w-8 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors p-1 hover:bg-gray-800 rounded" />
//               </a>
//               <a href="https://www.linkedin.com/in/sudo-techlabs-8b6708375">
//                 <Linkedin className="h-8 w-8 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors p-1 hover:bg-gray-800 rounded" />
//               </a>
//               <a href="https://www.instagram.com/in/sudo-techlabs-8b6708375">
//                 <Instagram className="h-8 w-8 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors p-1 hover:bg-gray-800 rounded" />
//               </a>
//               <a href="https://www.github.com/in/sudo-techlabs-8b6708375">
//                 <Github className="h-8 w-8 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors p-1 hover:bg-gray-800 rounded" />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="font-bold text-lg mb-6 text-orange-400">
//               Quick Links
//             </h3>
//             <ul className="space-y-3">
//               {[
//                 { name: "About Us", href: "/about" },
//                 { name: "Services", href: "/services" },
//                 { name: "Solutions", href: "/solutions" },
//                 { name: "Industries", href: "/industries" },
//                 { name: "Projects", href: "/projects" },
//                 { name: "Portfolio", href: "/portfolio" },
//                 { name: "Case Studies", href: "/case-studies" },
//                 { name: "Careers", href: "/careers" },
//               ].map((link) => (
//                 <li key={link.name}>
//                   <a
//                     href={link.href}
//                     className="text-gray-300 hover:text-orange-400 transition-colors"
//                   >
//                     {link.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="font-bold text-lg mb-6 text-orange-400">
//               Contact Info
//             </h3>
//             <div className="space-y-4">
//               <div className="flex items-start space-x-3">
//                 <Mail className="h-5 w-5 text-orange-400 mt-1 flex-shrink-0" />
//                 <div>
//                   <div className="text-gray-300">info@atsglobaltech.com</div>
//                   <div className="text-gray-400 text-sm">General inquiries</div>
//                 </div>
//               </div>
//               <div className="flex items-start space-x-3">
//                 <Phone className="h-5 w-5 text-orange-400 mt-1 flex-shrink-0" />
//                 <div>
//                   <div className="text-gray-300">+91 9929825003</div>
//                   <div className="text-gray-400 text-sm">24/7 Support</div>
//                 </div>
//               </div>
//               <div className="flex items-start space-x-3">
//                 <MapPin className="h-5 w-5 text-orange-400 mt-1 flex-shrink-0" />
//                 <div>
//                   <div className="text-gray-300">
// codercom building, A4, Ajmer Rd, Purani Chungi, Vidhyut Nagar, Jaipur                    Vaishali Nagar, Jaipur (302021)
//                   </div>
//                   <div className="text-gray-400 text-sm">Rajasthan, India</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Newsletter */}
//         <div className="border-t border-gray-800 mt-12 pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="mb-4 md:mb-0">
//               <h3 className="font-bold text-lg mb-2 text-orange-400">
//                 Stay Updated
//               </h3>
//               <p className="text-gray-300">
//                 Subscribe to our newsletter for the latest tech insights and
//                 company updates.
//               </p>
//             </div>
//             <div className="flex space-x-2">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-400"
//               />
//               <button className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-2 rounded-lg text-white font-medium hover:opacity-90 transition-opacity">
//                 Subscribe
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Copyright */}
//         <div className="border-t border-gray-800 mt-8 pt-8 text-center">
//           <p className="text-gray-400">
//             © 2025 ATS GLOBAL TECH. All rights reserved. |
//             <span className="ml-1 transition-colors hover:text-orange-400 cursor-pointer">
//               Privacy Policy
//             </span>
//             <span className="ml-1 transition-colors hover:text-orange-400 cursor-pointer">
//               Terms of Service
//             </span>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;









import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Github,
} from "lucide-react";
import Logo from "../assets/ats-logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-[#1a2940] to-[#1b273b] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Socials */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <img src={Logo} alt="Logo" className="w-12 h-16 object-cover" />
              <span className="font-bold text-2xl text-white ml-3">
                ATS GLOBAL TECH
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Empowering businesses with cutting-edge technology solutions. We
              specialize in custom software development, cloud solutions, AI
              implementation, and comprehensive digital transformation services.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61574788298611">
                <Facebook className="h-8 w-8 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors p-1 hover:bg-gray-800 rounded" />
              </a>
              <a href="https://x.com/TechlabsSu58347">
                <Twitter className="h-8 w-8 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors p-1 hover:bg-gray-800 rounded" />
              </a>
              <a href="https://www.linkedin.com/in/sudo-techlabs-8b6708375">
                <Linkedin className="h-8 w-8 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors p-1 hover:bg-gray-800 rounded" />
              </a>
              <a href="https://www.instagram.com/in/sudo-techlabs-8b6708375">
                <Instagram className="h-8 w-8 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors p-1 hover:bg-gray-800 rounded" />
              </a>
              <a href="https://www.github.com/in/sudo-techlabs-8b6708375">
                <Github className="h-8 w-8 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors p-1 hover:bg-gray-800 rounded" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-orange-400">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Solutions", href: "/solutions" },
                { name: "Industries", href: "/industries" },
                { name: "Projects", href: "/projects" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "Case Studies", href: "/case-studies" },
                { name: "Careers", href: "/careers" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-orange-400">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-gray-300">info@atsglobaltech.com</div>
                  <div className="text-gray-400 text-sm">General inquiries</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-gray-300">+91 9929825003</div>
                  <div className="text-gray-400 text-sm">24/7 Support</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-gray-300">
                    codercom building, A4, Ajmer Rd, Purani Chungi, Vidhyut
                    Nagar, Jaipur Vaishali Nagar, Jaipur (302021)
                  </div>
                  <div className="text-gray-400 text-sm">
                    Rajasthan, India
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="font-bold text-lg mb-2 text-orange-400">
                Stay Updated
              </h3>
              <p className="text-gray-300">
                Subscribe to our newsletter for the latest tech insights and
                company updates.
              </p>
            </div>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-400"
              />
              <button className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-2 rounded-lg text-white font-medium hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 ATS GLOBAL TECH. All rights reserved. |
            <Link
              to="/privacy-policy"
              className="ml-1 text-gray-400 hover:text-orange-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <span> | </span>
            <Link
              to="/terms-of-service"
              className="text-gray-400 hover:text-orange-400 transition-colors"
            >
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
