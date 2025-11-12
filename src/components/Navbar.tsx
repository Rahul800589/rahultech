
// import React, { useState, useEffect } from "react";
// import { Menu, X, ChevronDown } from "lucide-react";
// import { Link, useLocation } from "react-router-dom";
// import Logo from "../assets/ats-logo.png";

// export default function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [servicesOpen, setServicesOpen] = useState(false);
//   const [workOpen, setWorkOpen] = useState(false);

//   const location = useLocation();

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, [location.pathname]);

//   const closeAll = () => {
//     setMobileOpen(false);
//     setServicesOpen(false);
//     setWorkOpen(false);
//   };

//   const isActive = (path: string) =>
//     location.pathname.startsWith(path)
//       ? "text-orange-400 font-semibold"
//       : "text-white";

//   const servicesLinks = [
//     { name: "All Services", to: "/services" },
//     { name: "Solutions", to: "/services/mobile" },
//     { name: "Industries", to: "/services/industries" },
//   ];

//   const workLinks = [
//     { name: "Projects", to: "/work/projects" },
//     { name: "Portfolio", to: "/work/portfolio" },
//     { name: "Case Studies", to: "/work/case-studies" },
//   ];

//   return (
//     <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-[#1a2940] to-[#24344d] shadow-md">
//       <nav className="container mx-auto px-4 sm:px-6 lg:px-8">

//         <div className="flex items-center justify-between h-20">

//           {/* ✅ LOGO + ATS Text */}
//           <Link to="/" onClick={closeAll} className="flex items-center gap-3">
//             <img src={Logo} className="h-14 w-14 object-contain" />

//             {/* ✅ Title visible except on small-laptop (1024-1279px) */}
//             <span className="text-xl font-bold text-white hidden xl:block">
//               ATS GLOBAL TECH
//             </span>
//           </Link>

//           {/* ✅ Desktop Menu (>=1024px) */}
//           <div className="hidden lg:flex items-center gap-1 whitespace-nowrap">
//             <NavItem to="/" isActive={isActive}>Home</NavItem>
//             <NavItem to="/about" isActive={isActive}>About</NavItem>

//             <Dropdown title="Services" open={servicesOpen} setOpen={setServicesOpen}>
//               {servicesLinks.map((item) => (
//                 <DropdownItem key={item.name} to={item.to} closeAll={closeAll}>
//                   {item.name}
//                 </DropdownItem>
//               ))}
//             </Dropdown>

//             <NavItem to="/products" isActive={isActive}>Products</NavItem>

//             <Dropdown title="Work" open={workOpen} setOpen={setWorkOpen}>
//               {workLinks.map((item) => (
//                 <DropdownItem key={item.name} to={item.to} closeAll={closeAll}>
//                   {item.name}
//                 </DropdownItem>
//               ))}
//             </Dropdown>

//             <NavItem to="/testimonials" isActive={isActive}>Testimonials</NavItem>
//             <NavItem to="/blogs" isActive={isActive}>Blogs</NavItem>
//             <NavItem to="/careers" isActive={isActive}>Careers</NavItem>
//             <NavItem to="/contact" isActive={isActive}>Contact</NavItem>

//             {/* <Link to="/login" className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200">
//               Login
//             </Link> */}
//           </div>

//           {/* ✅ Mobile Menu Button (<1024px) */}
//           <button
//             onClick={() => setMobileOpen(!mobileOpen)}
//             className="lg:hidden p-2 text-white rounded-md hover:bg-white/10"
//           >
//             {mobileOpen ? <X /> : <Menu />}
//           </button>
//         </div>

//         {/* ✅ Mobile Dropdown Menu */}
//         {mobileOpen && (
//           <div className="lg:hidden bg-[#0f172a] p-3 mt-2 rounded-lg space-y-1 shadow-lg">
//             <MobileLink to="/" closeAll={closeAll}>Home</MobileLink>
//             <MobileLink to="/about" closeAll={closeAll}>About</MobileLink>

//             <MobileDropdown
//               title="Services"
//               isOpen={servicesOpen}
//               toggle={() => setServicesOpen(!servicesOpen)}
//             >
//               {servicesLinks.map((item) => (
//                 <MobileDropdownLink key={item.name} to={item.to} closeAll={closeAll}>
//                   {item.name}
//                 </MobileDropdownLink>
//               ))}
//             </MobileDropdown>

//             <MobileLink to="/products" closeAll={closeAll}>Products</MobileLink>

//             <MobileDropdown
//               title="Work"
//               isOpen={workOpen}
//               toggle={() => setWorkOpen(!workOpen)}
//             >
//               {workLinks.map((item) => (
//                 <MobileDropdownLink key={item.name} to={item.to} closeAll={closeAll}>
//                   {item.name}
//                 </MobileDropdownLink>
//               ))}
//             </MobileDropdown>

//             <MobileLink to="/testimonials" closeAll={closeAll}>Testimonials</MobileLink>
//             <MobileLink to="/blogs" closeAll={closeAll}>Blogs</MobileLink>
//             <MobileLink to="/careers" closeAll={closeAll}>Careers</MobileLink>
//             <MobileLink to="/contact" closeAll={closeAll}>Contact</MobileLink>
//             {/* <MobileLink to="/login" closeAll={closeAll}>Login</MobileLink> */}
//           </div>
//         )}

//       </nav>
//     </header>
//   );
// }


// /* ✅ Sub Components */

// const NavItem = ({ to, children, isActive }: any) => (
//   <Link to={to} className={`text-white hover:text-orange-400 px-3 py-2 ${isActive(to)}`}>
//     {children}
//   </Link>
// );

// const Dropdown = ({ title, open, setOpen, children }: any) => (
//   <div className="relative">
//     <button onClick={() => setOpen(!open)} className="text-white flex gap-1 items-center px-3 py-2 hover:text-orange-400">
//       {title}
//       <ChevronDown className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} />
//     </button>
//     <div
//       className={`absolute bg-[#0f172a] w-48 rounded-lg shadow-lg py-2 mt-2 transition-all duration-200 ${
//         open ? "opacity-100 visible" : "opacity-0 invisible"
//       }`}
//     >
//       {children}
//     </div>
//   </div>
// );

// const DropdownItem = ({ to, children, closeAll }: any) => (
//   <Link to={to} onClick={closeAll} className="text-white block px-4 py-2 text-sm hover:bg-orange-600/20">
//     {children}
//   </Link>
// );

// const MobileLink = ({ to, children, closeAll }: any) => (
//   <Link to={to} onClick={closeAll} className="text-white block px-4 py-2 rounded-md hover:bg-orange-600/20">
//     {children}
//   </Link>
// );

// const MobileDropdown = ({ title, isOpen, toggle, children }: any) => (
//   <div>
//     <button onClick={toggle} className="text-white flex justify-between items-center w-full px-4 py-2 hover:bg-orange-600/20">
//       {title}
//       <ChevronDown className={`h-4 w-4 transition ${isOpen ? "rotate-180" : ""}`} />
//     </button>
//     {isOpen && <div className="pl-4 space-y-1">{children}</div>}
//   </div>
// );

// const MobileDropdownLink = ({ to, children, closeAll }: any) => (
//   <Link to={to} onClick={closeAll} className="text-white block px-4 py-2 rounded-md hover:bg-orange-600/20 text-sm">
//     {children}
//   </Link>
// );







import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/ats-logo.png"; 
// 🔄 If you have a black logo image, replace the line above with:
// import Logo from "../assets/ats-logo-black.png";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const closeAll = () => {
    setMobileOpen(false);
    setServicesOpen(false);
    setWorkOpen(false);
  };

  const isActive = (path: string) =>
    location.pathname.startsWith(path)
      ? "text-orange-500 font-semibold"
      : "text-gray-800";

  const servicesLinks = [
    { name: "All Services", to: "/services" },
    { name: "Solutions", to: "/services/mobile" },
    { name: "Industries", to: "/services/industries" },
  ];

  const workLinks = [
    { name: "Projects", to: "/work/projects" },
    { name: "Portfolio", to: "/work/portfolio" },
    { name: "Case Studies", to: "/work/case-studies" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* ✅ LOGO + ATS Text */}
          <Link to="/" onClick={closeAll} className="flex items-center gap-3">
            <img
              src={Logo}
              className="h-14 w-14 object-contain filter invert brightness-0"
              alt="ATS Global Tech Logo"
            />
            {/* <span className="text-xl font-bold text-gray-800 hidden xl:block">
              ATS GLOBAL TECH
            </span> */}
            <span
  className="hidden xl:block text-[28px] font-stack-sans-notch tracking-wide fade-in"
  style={{ letterSpacing: "1.5px", color: "#000000", fontWeight: 700 }}
>
  ATS GLOBAL TECH
</span>

          </Link>

          {/* ✅ Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1 whitespace-nowrap">
            <NavItem to="/" isActive={isActive}>Home</NavItem>
            <NavItem to="/about" isActive={isActive}>About</NavItem>

            <Dropdown title="Services" open={servicesOpen} setOpen={setServicesOpen}>
              {servicesLinks.map((item) => (
                <DropdownItem key={item.name} to={item.to} closeAll={closeAll}>
                  {item.name}
                </DropdownItem>
              ))}
            </Dropdown>

            <NavItem to="/products" isActive={isActive}>Products</NavItem>

            <Dropdown title="Work" open={workOpen} setOpen={setWorkOpen}>
              {workLinks.map((item) => (
                <DropdownItem key={item.name} to={item.to} closeAll={closeAll}>
                  {item.name}
                </DropdownItem>
              ))}
            </Dropdown>

            <NavItem to="/testimonials" isActive={isActive}>Testimonials</NavItem>
            <NavItem to="/blogs" isActive={isActive}>Blogs</NavItem>
            <NavItem to="/careers" isActive={isActive}>Careers</NavItem>
            <NavItem to="/contact" isActive={isActive}>Contact</NavItem>
          </div>

          {/* ✅ Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-gray-800 rounded-md hover:bg-gray-100"
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* ✅ Mobile Dropdown Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white p-3 mt-2 rounded-lg space-y-1 shadow-lg border border-gray-200">
            <MobileLink to="/" closeAll={closeAll}>Home</MobileLink>
            <MobileLink to="/about" closeAll={closeAll}>About</MobileLink>

            <MobileDropdown
              title="Services"
              isOpen={servicesOpen}
              toggle={() => setServicesOpen(!servicesOpen)}
            >
              {servicesLinks.map((item) => (
                <MobileDropdownLink key={item.name} to={item.to} closeAll={closeAll}>
                  {item.name}
                </MobileDropdownLink>
              ))}
            </MobileDropdown>

            <MobileLink to="/products" closeAll={closeAll}>Products</MobileLink>

            <MobileDropdown
              title="Work"
              isOpen={workOpen}
              toggle={() => setWorkOpen(!workOpen)}
            >
              {workLinks.map((item) => (
                <MobileDropdownLink key={item.name} to={item.to} closeAll={closeAll}>
                  {item.name}
                </MobileDropdownLink>
              ))}
            </MobileDropdown>

            <MobileLink to="/testimonials" closeAll={closeAll}>Testimonials</MobileLink>
            <MobileLink to="/blogs" closeAll={closeAll}>Blogs</MobileLink>
            <MobileLink to="/careers" closeAll={closeAll}>Careers</MobileLink>
            <MobileLink to="/contact" closeAll={closeAll}>Contact</MobileLink>
          </div>
        )}
      </nav>
    </header>
  );
}

/* ✅ Sub Components */

const NavItem = ({ to, children, isActive }: any) => (
  <Link
    to={to}
    className={`text-gray-800 hover:text-orange-500 px-3 py-2 ${isActive(to)}`}
  >
    {children}
  </Link>
);

const Dropdown = ({ title, open, setOpen, children }: any) => (
  <div className="relative">
    <button
      onClick={() => setOpen(!open)}
      className="text-gray-800 flex gap-1 items-center px-3 py-2 hover:text-orange-500"
    >
      {title}
      <ChevronDown className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} />
    </button>
    <div
      className={`absolute bg-white border border-gray-200 w-48 rounded-lg shadow-lg py-2 mt-2 transition-all duration-200 ${
        open ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {children}
    </div>
  </div>
);

const DropdownItem = ({ to, children, closeAll }: any) => (
  <Link
    to={to}
    onClick={closeAll}
    className="text-gray-800 block px-4 py-2 text-sm hover:bg-orange-100"
  >
    {children}
  </Link>
);

const MobileLink = ({ to, children, closeAll }: any) => (
  <Link
    to={to}
    onClick={closeAll}
    className="text-gray-800 block px-4 py-2 rounded-md hover:bg-orange-100"
  >
    {children}
  </Link>
);

const MobileDropdown = ({ title, isOpen, toggle, children }: any) => (
  <div>
    <button
      onClick={toggle}
      className="text-gray-800 flex justify-between items-center w-full px-4 py-2 hover:bg-orange-100"
    >
      {title}
      <ChevronDown className={`h-4 w-4 transition ${isOpen ? "rotate-180" : ""}`} />
    </button>
    {isOpen && <div className="pl-4 space-y-1">{children}</div>}
  </div>
);

const MobileDropdownLink = ({ to, children, closeAll }: any) => (
  <Link
    to={to}
    onClick={closeAll}
    className="text-gray-800 block px-4 py-2 rounded-md hover:bg-orange-100 text-sm"
  >
    {children}
  </Link>
);
