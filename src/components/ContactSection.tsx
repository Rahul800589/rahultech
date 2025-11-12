// import React, { useState } from "react";
// import { Phone, Mail, MapPin, Send } from "lucide-react";

// const ContactSection: React.FC = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     company: "",
//     details: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Form Submitted:", formData);
//     alert("Thanks for reaching out! We'll get back to you soon.");
//   };

//   return (
//     <section className="py-24 bg-gradient-to-r from-[#1c2b4d] to-[#303e4f]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           {/* Left Column */}
//           <div>
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
//               Let&apos;s Start Building Something Amazing Together
//             </h2>
//             <p className="text-xl text-gray-300 mb-10 leading-relaxed">
//               Ready to transform your business with cutting-edge technology? Get
//               in touch with our experts and let&apos;s discuss how we can bring
//               your vision to life.
//             </p>

//             <div className="space-y-6">
//               {/* Contact Info */}
//               {[
//                 {
//                   icon: <Phone className="h-6 w-6 text-white" />,
//                   title: "Call Us",
//                   info: "+91 820 917 5003",
//                 },
//                 {
//                   icon: <Mail className="h-6 w-6 text-white" />,
//                   title: "Email Us",
//                   info: "info@atsglobaltech.com",
//                 },
//                 {
//                   icon: <MapPin className="h-6 w-6 text-white" />,
//                   title: "Visit Us",
//                   info: "codercom building, A4, Ajmer Rd, Purani Chungi, Vidhyut Nagar, Jaipur Vaishali Nagar, Jaipur (302021)",
//                 },
//               ].map((item, idx) => (
//                 <div key={idx} className="flex items-center space-x-4">
//                   <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-full">
//                     {item.icon}
//                   </div>
//                   <div>
//                     <p className="font-semibold text-white">{item.title}</p>
//                     <p className="text-gray-300">{item.info}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Column - Form */}
//           <div className="rounded-lg shadow-2xl bg-gradient-to-br from-gray-800 to-gray-700">
//             <div className="p-6 text-center">
//               <h3 className="font-semibold tracking-tight text-2xl mb-2 text-white">
//                 Get Free Consultation
//               </h3>
//               <p className="text-sm text-gray-300">
//                 Fill out the form below and we&apos;ll get back to you within 24
//                 hours
//               </p>
//             </div>

//             <form onSubmit={handleSubmit} className="p-6 pt-0 space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {[
//                   {
//                     name: "firstName",
//                     placeholder: "Your good name...",
//                     label: "First Name",
//                   },
//                   {
//                     name: "lastName",
//                     placeholder: "Last name",
//                     label: "Last Name",
//                   },
//                 ].map((field) => (
//                   <div key={field.name}>
//                     <label className="block text-sm font-medium text-gray-300 mb-2">
//                       {field.label}
//                     </label>
//                     <input
//                       name={field.name}
//                       value={formData[field.name as keyof typeof formData]}
//                       onChange={handleChange}
//                       placeholder={field.placeholder}
//                       className="flex h-10 w-full rounded-md border border-gray-600 bg-gray-800 text-white px-3 py-2 text-base focus-visible:ring-2 focus-visible:ring-orange-500"
//                     />
//                   </div>
//                 ))}
//               </div>

//               {[
//                 {
//                   name: "email",
//                   type: "email",
//                   label: "Email",
//                   placeholder: "email@example.com",
//                 },
//                 {
//                   name: "phone",
//                   type: "tel",
//                   label: "Phone",
//                   placeholder: "+91 (983) 123-4567",
//                 },
//                 {
//                   name: "company",
//                   type: "text",
//                   label: "Company",
//                   placeholder: "Your Company Name",
//                 },
//               ].map((field) => (
//                 <div key={field.name}>
//                   <label className="block text-sm font-medium text-gray-300 mb-2">
//                     {field.label}
//                   </label>
//                   <input
//                     type={field.type}
//                     name={field.name}
//                     value={formData[field.name as keyof typeof formData]}
//                     onChange={handleChange}
//                     placeholder={field.placeholder}
//                     className="flex h-10 w-full rounded-md border border-gray-600 bg-gray-800 text-white px-3 py-2 text-base focus-visible:ring-2 focus-visible:ring-orange-500"
//                   />
//                 </div>
//               ))}

//               <div>
//                 <label className="block text-sm font-medium text-gray-300 mb-2">
//                   Project Details
//                 </label>
//                 <textarea
//                   name="details"
//                   value={formData.details}
//                   onChange={handleChange}
//                   placeholder="Tell us about your project requirements..."
//                   rows={4}
//                   className="flex w-full min-h-[80px] rounded-md border border-gray-600 bg-gray-800 text-white px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-orange-500"
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="inline-flex items-center justify-center gap-2 w-full rounded-md font-medium text-white h-12 px-6 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 transition-all duration-200"
//               >
//                 <Send className="h-5 w-5 mr-2" />
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;




import React, { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    details: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thanks for reaching out! We'll get back to you soon.");
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Let&apos;s Start Building Something Amazing Together
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Ready to transform your business with cutting-edge technology? Get
              in touch with our experts and let&apos;s discuss how we can bring
              your vision to life.
            </p>

            <div className="space-y-6">
              {[ 
                {
                  icon: <Phone className="h-6 w-6 text-orange-600" />,
                  title: "Call Us",
                  info: "+91 820 917 5003",
                },
                {
                  icon: <Mail className="h-6 w-6 text-orange-600" />,
                  title: "Email Us",
                  info: "info@atsglobaltech.com",
                },
                {
                  icon: <MapPin className="h-6 w-6 text-orange-600" />,
                  title: "Visit Us",
                  info: "Codercom Building, A4, Ajmer Rd, Purani Chungi, Vidhyut Nagar, Jaipur (302021)",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{item.title}</p>
                    <p className="text-gray-700">{item.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="rounded-lg shadow-lg border border-gray-200 bg-white">
            <div className="p-6 text-center">
              <h3 className="font-semibold tracking-tight text-2xl mb-2 text-gray-900">
                Get Free Consultation
              </h3>
              <p className="text-sm text-gray-600">
                Fill out the form below and we&apos;ll get back to you within 24
                hours
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 pt-0 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: "firstName", label: "First Name", placeholder: "Your good name..." },
                  { name: "lastName", label: "Last Name", placeholder: "Last name" },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {field.label}
                    </label>
                    <input
                      name={field.name}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-gray-50 text-gray-900 px-3 py-2 focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                ))}
              </div>

              {[
                { name: "email", type: "email", label: "Email", placeholder: "email@example.com" },
                { name: "phone", type: "tel", label: "Phone", placeholder: "+91 (983) 123-4567" },
                { name: "company", type: "text", label: "Company", placeholder: "Your Company Name" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-gray-50 text-gray-900 px-3 py-2 focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              ))}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details
                </label>
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="Tell us about your project requirements..."
                  rows={4}
                  className="flex w-full min-h-[80px] rounded-md border border-gray-300 bg-gray-50 text-gray-900 px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 w-full rounded-md font-medium text-white h-12 px-6 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 transition-all duration-200"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
