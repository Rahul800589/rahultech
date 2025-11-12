// import { FC, useState } from "react";
// import {
//   MapPin,
//   Phone,
//   Mail,
//   Clock,
//   Send,
//     Zap,
//     Users,
//     Target,
//     MessageSquare,
// } from "lucide-react";
// const Contact: FC = () => {
//       const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     company: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     alert("Message sent successfully!");
//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       company: "",
//       subject: "",
//       message: "",
//     });
//   };

//   return (
//     <>
//    <section className="py-28 bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white">
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     <div className="text-center">
//       <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
//         Get <span className="text-yellow-400">In Touch</span>
//       </h1>
//       <p className="text-xl max-w-3xl mx-auto text-gray-300 opacity-90">
//         Ready to start your next project? We'd love to hear from you.
//         Send us a message and we'll respond as soon as possible.
//       </p>
//     </div>
//   </div>
// </section>



//       <section className="py-20 bg-gradient-to-r from-[#1c2b4d] to-[#303e4f]">
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//       {/* Contact Information */}
//       <div className="lg:col-span-1">
//         <h2 className="text-3xl font-bold text-white mb-8">
//           Contact Information
//         </h2>

//         <div className="space-y-8">
//           {/* Address */}
//           <div className="flex items-start space-x-4">
//             <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-full flex-shrink-0">
//               <MapPin className="h-6 w-6 text-white" />
//             </div>
//             <div>
//               <h3 className="font-semibold text-white mb-2">
//                 Office Address
//               </h3>
//               <p className="text-gray-200">
//                 {/* F Block, 3/22, Parbhati Marg, Kanak Enclave <br />
//                 Chitrkoot, Vaishali Nagar, Jaipur, Rajasthan 302021 <br />
//                 India */}
//                 codercom building, A4, Ajmer Rd, Purani Chungi, Vidhyut Nagar, Jaipur, Rajasthan 302021
//               </p>
//             </div>
//           </div>

//           {/* Phone */}
//           <div className="flex items-start space-x-4">
//             <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-full flex-shrink-0">
//               <Phone className="h-6 w-6 text-white" />
//             </div>
//             <div>
//               <h3 className="font-semibold text-white mb-2">
//                 Phone Numbers
//               </h3>
//               <p className="text-gray-200">+91 9929825003</p>
//             </div>
//           </div>

//           {/* Email */}
//           <div className="flex items-start space-x-4">
//             <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-full flex-shrink-0">
//               <Mail className="h-6 w-6 text-white" />
//             </div>
//             <div>
//               <h3 className="font-semibold text-white mb-2">
//                 Email Addresses
//               </h3>
//               <p className="text-gray-200">info@atsglobaltech.com</p>
//             </div>
//           </div>

//           {/* Business Hours */}
//           <div className="flex items-start space-x-4">
//             <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-full flex-shrink-0">
//               <Clock className="h-6 w-6 text-white" />
//             </div>
//             <div>
//               <h3 className="font-semibold text-white mb-2">
//                 Business Hours
//               </h3>
//               <p className="text-gray-200">
//                 Monday - Saturday: 10:00 AM - 6:00 PM <br />
//                 Sunday: Closed
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Contact Form + Map */}
//       <div className="lg:col-span-2">
//         {/* Contact Form */}
//         <div className="rounded-lg bg-gradient-to-r from-[#0f172a] to-[#334155]  shadow-xl border border-gray-100">
//           <div className="p-6">
//             <h3 className="text-white font-semibold tracking-tight text-2xl mb-1">
//               Send Us a Message
//             </h3>
//             <p className="text-sm text-gray-400 mb-6">
//               Fill out the form below and we'll get back to you within 24 hours.
//             </p>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-400 mb-2">
//                     Full Name *
//                   </label>
//                   <input
//                     name="name"
//                     placeholder="Your good name..."
//                     required
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="text-white w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-400 mb-2">
//                     Email Address *
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="email@example.com"
//                     required
//                     value={formData.email}
//                     onChange={handleChange}
//                     className=" text-white w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
//                   />
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-400 mb-2">
//                     Phone Number
//                   </label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     placeholder="+1 (555) 123-4567"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className=" text-white w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-400 mb-2">
//                     Company
//                   </label>
//                   <input
//                     name="company"
//                     placeholder="Your Company Name"
//                     value={formData.company}
//                     onChange={handleChange}
//                     className=" text-white w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-400 mb-2">
//                   Subject *
//                 </label>
//                 <input
//                   name="subject"
//                   placeholder="Project Inquiry"
//                   required
//                   value={formData.subject}
//                   onChange={handleChange}
//                   className="w-full rounded-md border text-white border-gray-300 px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-400 mb-2">
//                   Message *
//                 </label>
//                 <textarea
//                   name="message"
//                   placeholder="Tell us about your project requirements..."
//                   rows={6}
//                   required
//                   value={formData.message}
//                   onChange={handleChange}
//                   className="w-full rounded-md border text-white border-gray-300 px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="inline-flex items-center justify-center w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold rounded-md py-4 text-lg transition-colors"
//               >
//                 <Send className="mr-2 h-5 w-5" />
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Google Map */}
//         <div className="rounded-lg bg-gradient-to-r from-[#0f172a] to-[#334155]  shadow-xl border border-gray-100 mt-12">
//           <div className="p-6">
//             <h3 className=" text-white font-semibold tracking-tight text-2xl mb-1">
//               Find Us
//             </h3>
//             <p className="text-sm text-gray-400 mb-6">
//               Visit our office or find us on the map below.
//             </p>

//             <div className="relative h-96 rounded-lg overflow-hidden bg-gradient-to-r from-[#0f172a] to-[#334155] ">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3558.1606834398303!2d75.7529906!3d26.8983951!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5dee53548b5%3A0x66d9679054b4bcbd!2sATS%20GLOBAL%20TECH!5e0!3m2!1sen!2sin!4v1761739403746!5m2!1sen!2sin"
//                 width="100%"
//                 height="100%"
//                 allowFullScreen
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 title="ATS GLOBAL TECH Office Location"
//                 style={{ border: 0 }}
//               ></iframe>
//             </div>

//             <div className="mt-4 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg">
//               <div className="flex items-center space-x-2 text-orange-700">
//                 <MapPin className="h-5 w-5" />
//                 <span className="font-semibold">
//                   {/* F Block, 3/22, Parbhati Marg, Kanak enclave, Chitrkoot,
//                   Vaishali Nagar, Jaipur, Rajasthan 302021 */}
//                   codercom building, A4, Ajmer Rd, Purani Chungi, Vidhyut Nagar, Jaipur, Rajasthan 302021
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//     </div>
//   </div>
// </section>


//     <section className="py-20 bg-gradient-to-r from-[#1a2940] to-[#24344d]">
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     {/* Header */}
//     <div className="text-center mb-16">
//       <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//         Why Work With Us?
//       </h2>
//       <p className="text-xl text-gray-200 max-w-2xl mx-auto">
//         We're committed to delivering exceptional results and building lasting partnerships
//       </p>
//     </div>

//     {/* Features Grid */}
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//       {/* Card 1 */}
//       <div className="text-center">
//         <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//           <Zap className="h-8 w-8 text-white" />
//         </div>
//         <h3 className="font-bold text-white text-lg mb-2">Fast Response</h3>
//         <p className="text-gray-300">
//           We respond to all inquiries within 2 hours during business hours
//         </p>
//       </div>

//       {/* Card 2 */}
//       <div className="text-center">
//         <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//           <Users className="h-8 w-8 text-white" />
//         </div>
//         <h3 className="font-bold text-white text-lg mb-2">Expert Team</h3>
//         <p className="text-gray-300">
//           Work directly with senior developers and consultants
//         </p>
//       </div>

//       {/* Card 3 */}
//       <div className="text-center">
//         <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//           <Target className="h-8 w-8 text-white" />
//         </div>
//         <h3 className="font-bold text-white text-lg mb-2">Custom Solutions</h3>
//         <p className="text-gray-300">
//           Tailored solutions that fit your specific business needs
//         </p>
//       </div>

//       {/* Card 4 */}
//       <div className="text-center">
//         <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//           <MessageSquare className="h-8 w-8 text-white" />
//         </div>
//         <h3 className="font-bold text-white text-lg mb-2">24/7 Support</h3>
//         <p className="text-gray-300">
//           Ongoing support and maintenance for all our solutions
//         </p>
//       </div>
//     </div>
//   </div>
// </section>



      
//     </>
//   );
// };

// export default Contact;








import { FC, useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Zap,
  Users,
  Target,
  MessageSquare,
} from "lucide-react";

const Contact: FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      {/* Hero Section */}
      {/* <section className="py-28 bg-gradient-to-r from-orange-50 via-white to-orange-100 text-gray-900">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-orange-700">
            Get <span className="text-orange-500">In Touch</span>
          </h1>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            Ready to start your next project? We'd love to hear from you.  
            Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section> */}

      <section className="relative py-28 bg-gradient-to-br from-orange-100 via-white to-orange-200 text-gray-900 overflow-hidden">
  {/* Decorative Background Lights */}
  <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
  <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-orange-700">
      Get <span className="text-orange-500">In Touch</span>
    </h1>
    <p className="text-lg max-w-3xl mx-auto text-gray-700 mb-16">
      Ready to start your next project? We'd love to hear from you.  
      Send us a message, and our team will reach out shortly.
    </p>

    {/* Contact Info Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-left">
      {/* Email */}
      <div className="bg-white p-8 rounded-2xl shadow-md border border-orange-100 hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-orange-600 mb-2">📧 Email Us</h3>
        <p className="text-gray-700 mb-1">info@atsglobaltech.com</p>
        <p className="text-gray-700">support@atsglobaltech.com</p>
      </div>

      {/* Phone */}
      <div className="bg-white p-8 rounded-2xl shadow-md border border-orange-100 hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-orange-600 mb-2">📞 Call Us</h3>
        <p className="text-gray-700 mb-1">+1 (800) 456-7890</p>
        <p className="text-gray-700">Mon – Fri, 9:00 AM – 6:00 PM</p>
      </div>

      {/* Office */}
      <div className="bg-white p-8 rounded-2xl shadow-md border border-orange-100 hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-orange-600 mb-2">📍 Visit Us</h3>
        <p className="text-gray-700 mb-1">ATS Global Tech HQ</p>
        <p className="text-gray-700">123 Innovation Drive, New York, USA</p>
      </div>
    </div>
  </div>
</section>


      {/* Contact Info + Form */}
      <section className="py-20 bg-gradient-to-r from-orange-100 via-white to-orange-50 text-gray-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 px-4 sm:px-6 lg:px-8">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-orange-700 mb-8">
              Contact Information
            </h2>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    Office Address
                  </h3>
                  <p className="text-gray-700">
                    Codercom Building, A4, Ajmer Rd, Purani Chungi,  
                    Vidhyut Nagar, Jaipur, Rajasthan 302021
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                  <p className="text-gray-700">+91 9929825003</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                  <p className="text-gray-700">info@atsglobaltech.com</p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    Business Hours
                  </h3>
                  <p className="text-gray-700">
                    Monday - Saturday: 10:00 AM - 6:00 PM <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-orange-200 rounded-lg shadow-lg">
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-orange-700 mb-2">
                  Send Us a Message
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name *"
                      className="w-full border border-orange-200 rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Your email *"
                      className="w-full border border-orange-200 rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone number"
                      className="w-full border border-orange-200 rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
                    />
                    <input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company (optional)"
                      className="w-full border border-orange-200 rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
                    />
                  </div>

                  <input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Subject *"
                    className="w-full border border-orange-200 rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
                  />

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Message *"
                    rows={5}
                    className="w-full border border-orange-200 rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
                  />

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 rounded-md font-semibold transition"
                  >
                    <Send className="inline-block mr-2 h-5 w-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Map */}
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
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-gradient-to-r from-orange-50 via-white to-orange-100 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-orange-700 mb-4">
            Why Work With Us?
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
            We're committed to delivering exceptional results and building lasting partnerships.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[ 
              { icon: <Zap />, title: "Fast Response", text: "We respond to all inquiries within 2 hours." },
              { icon: <Users />, title: "Expert Team", text: "Work directly with senior developers." },
              { icon: <Target />, title: "Custom Solutions", text: "Tailored for your specific business needs." },
              { icon: <MessageSquare />, title: "24/7 Support", text: "Ongoing support and maintenance." },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-orange-200 rounded-xl p-6 shadow hover:shadow-orange-300/40 transition">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-orange-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
