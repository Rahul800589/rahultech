// import React from "react";

// const FeatureCard = ({
//   title,
//   desc,
//   img,
// }: {
//   title: string;
//   desc: string;
//   img: string;
// }) => (
//   <div className="bg-[#112233] border border-[#1f3344] rounded-xl overflow-hidden hover:shadow-xl transition">
//     <img src={img} alt={title} className="w-full h-44 object-cover" />
//     <div className="p-6">
//       <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
//       <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
//     </div>
//   </div>
// );

// export default function SecureBankingApp() {
//   return (
//     <main className="bg-gradient-to-b from-[#071928] to-[#0d2434] text-white min-h-screen py-32 px-4">
//       <div className="max-w-7xl mx-auto">

//         {/* HERO */}
//         <section className="grid gap-10 lg:grid-cols-2 items-center mb-20">
//           <div>
//             <span className="text-sm bg-blue-900/40 text-blue-300 px-4 py-1 rounded-full">
//               Mobile Banking · Secure
//             </span>

//             <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
//               Secure Banking Mobile App
//             </h1>

//             <p className="text-lg text-gray-300 max-w-xl leading-relaxed mb-8">
//               Designed for modern customers, this secure mobile banking solution
//               offers instant fund transfers, biometric login, card controls,
//               transaction insights, and 24/7 fraud detection — all powered by
//               robust cloud security.
//             </p>

//             <button className="bg-blue-500 hover:bg-blue-600 text-black px-6 py-3 rounded-xl font-semibold shadow-lg">
//               Download App
//             </button>
//           </div>

//           <img
//             src="https://images.pexels.com/photos/4386328/pexels-photo-4386328.jpeg?auto=compress&cs=tinysrgb&w=1400"
//             alt="Banking App"
//             className="rounded-2xl shadow-lg w-full h-80 object-cover"
//           />
//         </section>

//         {/* STATS */}
//         <section className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center mb-20">
//           {[
//             { label: "Transactions Secured", value: "45M+" },
//             { label: "Fraud Reduction", value: "82%" },
//             { label: "Active Users", value: "7.2M+" },
//             { label: "CSAT Rating", value: "4.8 / 5" },
//           ].map((stat) => (
//             <div key={stat.label}>
//               <p className="text-3xl font-bold text-blue-400">{stat.value}</p>
//               <p className="text-xs text-gray-400">{stat.label}</p>
//             </div>
//           ))}
//         </section>

//         {/* FEATURES */}
//         <section className="mb-20">
//           <h2 className="text-2xl font-semibold mb-8">Key Features</h2>

//           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             <FeatureCard
//               title="Biometric Authentication"
//               desc="Face & Fingerprint login ensures secure, fast access."
//               img="https://images.unsplash.com/photo-1587731556938-38755b4803a6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000"
//             />
//             <FeatureCard
//               title="Instant Payments"
//               desc="UPI, NEFT, and QR-based transactions with real-time alerts."
//               img="https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=1200"
//             />
//             <FeatureCard
//               title="Fraud Protection"
//               desc="AI-driven detection flags suspicious activity instantly."
//               img="https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=1200"
//             />
//           </div>
//         </section>

//         {/* TECH STACK */}
//         <section className="mb-20">
//           <h2 className="text-2xl font-semibold mb-5">Technology</h2>
//           <div className="flex gap-3 flex-wrap">
//             {[
//               "React Native",
//               "Node.js",
//               "PostgreSQL",
//               "AWS",
//               "OAuth2.0",
//               "JWT",
//               "Microservices",
//               "Kotlin",
//             ].map((t) => (
//               <span
//                 key={t}
//                 className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-200"
//               >
//                 {t}
//               </span>
//             ))}
//           </div>
//         </section>

//         {/* CTA */}
//         <section className="p-10 bg-[#092030] border border-[#153743] rounded-2xl text-center">
//           <h3 className="text-2xl font-semibold mb-3">
//             Secure Your Banking Experience
//           </h3>
//           <p className="text-gray-300 mb-6 max-w-xl mx-auto">
//             Banking made simple — fast, protected, and accessible anywhere.
//           </p>
//           <button className="bg-blue-500 hover:bg-blue-600 text-black px-8 py-3 rounded-full font-semibold">
//             Get Started Today
//           </button>
//         </section>
//       </div>
//     </main>
//   );
// }









import React from "react";

const FeatureCard = ({
  title,
  desc,
  img,
}: {
  title: string;
  desc: string;
  img: string;
}) => (
  <div className="bg-white border border-orange-200 rounded-xl overflow-hidden hover:shadow-orange-300/40 transition">
    <img src={img} alt={title} className="w-full h-44 object-cover" />
    <div className="p-6">
      <h4 className="text-lg font-semibold text-orange-700 mb-2">{title}</h4>
      <p className="text-gray-700 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default function SecureBankingApp() {
  return (
    <main className="bg-gradient-to-b from-orange-50 via-white to-orange-100 text-gray-900 min-h-screen py-32 px-4">
      <div className="max-w-7xl mx-auto">

        {/* HERO */}
        <section className="grid gap-10 lg:grid-cols-2 items-center mb-20">
          <div>
            <span className="text-sm bg-orange-100 text-orange-700 px-4 py-1 rounded-full font-medium">
              Mobile Banking · Secure
            </span>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-orange-800">
              Secure Banking Mobile App
            </h1>

            <p className="text-lg text-gray-700 max-w-xl leading-relaxed mb-8">
              Designed for modern customers, this secure mobile banking solution
              offers instant fund transfers, biometric login, card controls,
              transaction insights, and 24/7 fraud detection — all powered by
              robust cloud security.
            </p>

            <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-orange-400/40 transition">
              Download App
            </button>
          </div>

          <img
            src="https://images.pexels.com/photos/4386328/pexels-photo-4386328.jpeg?auto=compress&cs=tinysrgb&w=1400"
            alt="Banking App"
            className="rounded-2xl shadow-lg w-full h-80 object-cover"
          />
        </section>

        {/* STATS */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center mb-20">
          {[
            { label: "Transactions Secured", value: "45M+" },
            { label: "Fraud Reduction", value: "82%" },
            { label: "Active Users", value: "7.2M+" },
            { label: "CSAT Rating", value: "4.8 / 5" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold text-orange-600">{stat.value}</p>
              <p className="text-xs text-gray-600">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* FEATURES */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-8 text-orange-700">
            Key Features
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="Biometric Authentication"
              desc="Face & fingerprint login ensures secure, fast access."
              img="https://images.unsplash.com/photo-1587731556938-38755b4803a6?auto=format&fit=crop&q=60&w=1000"
            />
            <FeatureCard
              title="Instant Payments"
              desc="UPI, NEFT, and QR-based transactions with real-time alerts."
              img="https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=1200"
            />
            <FeatureCard
              title="Fraud Protection"
              desc="AI-driven detection flags suspicious activity instantly."
              img="https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=1200"
            />
          </div>
        </section>

        {/* TECH STACK */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-5 text-orange-700">
            Technology
          </h2>
          <div className="flex gap-3 flex-wrap">
            {[
              "React Native",
              "Node.js",
              "PostgreSQL",
              "AWS",
              "OAuth2.0",
              "JWT",
              "Microservices",
              "Kotlin",
            ].map((t) => (
              <span
                key={t}
                className="px-3 py-1 bg-orange-50 border border-orange-200 rounded-full text-sm text-orange-700"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="p-10 bg-orange-50 border border-orange-200 rounded-2xl text-center shadow-md">
          <h3 className="text-2xl font-semibold mb-3 text-orange-800">
            Secure Your Banking Experience
          </h3>
          <p className="text-gray-700 mb-6 max-w-xl mx-auto">
            Banking made simple — fast, protected, and accessible anywhere.
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-orange-400/40 transition">
            Get Started Today
          </button>
        </section>
      </div>
    </main>
  );
}
