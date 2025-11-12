// import React from "react";

// const CloudFeature = ({
//   title,
//   desc,
//   img,
// }: {
//   title: string;
//   desc: string;
//   img: string;
// }) => (
//   <div className="bg-[#162532] rounded-xl overflow-hidden shadow hover:shadow-lg transition border border-[#1e3546]">
//     <img src={img} alt={title} className="w-full h-44 object-cover" />
//     <div className="p-6">
//       <h4 className="font-semibold text-lg text-blue-300 mb-2">{title}</h4>
//       <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
//     </div>
//   </div>
// );

// export default function EnterpriseCloudMigration() {
//   return (
//     <main className="bg-gradient-to-b from-[#0c1b29] to-[#12283a] text-white min-h-screen py-32 px-4">
//       <div className="max-w-7xl mx-auto">

//         {/* HERO SECTION */}
//         <section className="grid gap-10 lg:grid-cols-2 items-center mb-20">
//           <div>
//             <span className="text-sm bg-blue-900/40 text-blue-300 px-4 py-1 rounded-full">
//               Cloud Solutions · Enterprise
//             </span>

//             <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-3 mb-6">
//               Enterprise Cloud Migration
//             </h1>

//             <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
//               High-scale cloud transformation ensuring performance, security,
//               and cost efficiency. From legacy infra to modern cloud-native
//               architecture — seamlessly executed with zero downtime strategy.
//             </p>
//           </div>

//           <img
//             src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1400"
//             alt="Cloud Migration"
//             className="rounded-2xl shadow-lg w-full h-80 object-cover"
//           />
//         </section>

//         {/* STATISTICS */}
//         <section className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center mb-20">
//           {[
//             { label: "Infra Cost Savings", value: "60%" },
//             { label: "Downtime Reduced", value: "95%" },
//             { label: "Faster Deployment", value: "4x" },
//             { label: "Microservices Shift", value: "100%" },
//           ].map((stat) => (
//             <div key={stat.label}>
//               <p className="text-3xl font-bold text-blue-400">{stat.value}</p>
//               <p className="text-xs text-gray-400">{stat.label}</p>
//             </div>
//           ))}
//         </section>

//         {/* CLOUD BENEFITS / FEATURE CARDS */}
//         <section className="mb-20">
//           <h2 className="text-2xl font-semibold mb-6">Why Cloud Migration?</h2>
//           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

//             <CloudFeature
//               title="Scalability & Flexibility"
//               desc="Auto-scaling ensures performance under heavy loads while optimizing costs."
//               img="https://images.pexels.com/photos/2387532/pexels-photo-2387532.jpeg?auto=compress&cs=tinysrgb&w=1200"
//             />

//             <CloudFeature
//               title="Improved Performance"
//               desc="Reduced latency with globally distributed compute and storage solutions."
//               img="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1200"
//             />

//             <CloudFeature
//               title="Strong Security Layer"
//               desc="IAM, Zero Trust architecture & compliance-driven access policies."
//               img="https://images.pexels.com/photos/5965892/pexels-photo-5965892.jpeg?auto=compress&cs=tinysrgb&w=1200"
//             />

//           </div>
//         </section>

//         {/* MIGRATION PHASES */}
//         <section className="mb-20">
//           <h2 className="text-2xl font-semibold mb-6">Migration Process</h2>
//           <div className="grid gap-8 md:grid-cols-4">

//             {[
//               {
//                 title: "1️⃣ Assessment",
//                 detail:
//                   "Application audit & TCO estimation to form transformation roadmap.",
//               },
//               {
//                 title: "2️⃣ Planning",
//                 detail:
//                   "Architecting cloud-native solution using best practices & compliance.",
//               },
//               {
//                 title: "3️⃣ Migration",
//                 detail:
//                   "Lift & shift → Replatforming → Microservices decomposition.",
//               },
//               {
//                 title: "4️⃣ Optimization",
//                 detail:
//                   "FinOps monitoring, auto-scaling & performance refinement.",
//               },
//             ].map((step) => (
//               <div
//                 key={step.title}
//                 className="p-6 border border-[#1c3344] bg-[#0d2030] rounded-xl"
//               >
//                 <h4 className="font-semibold text-blue-300 mb-2">
//                   {step.title}
//                 </h4>
//                 <p className="text-sm text-gray-300">{step.detail}</p>
//               </div>
//             ))}

//           </div>
//         </section>

//         {/* TECHNOLOGY STACK */}
//         <section className="mb-20">
//           <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
//           <div className="flex gap-3 flex-wrap">
//             {[
//               "AWS",
//               "Docker",
//               "Kubernetes",
//               "Terraform",
//               "MongoDB",
//               "Kafka",
//               "CI/CD Pipelines",
//               "Serverless",
//             ].map((item) => (
//               <span
//                 key={item}
//                 className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-200"
//               >
//                 {item}
//               </span>
//             ))}
//           </div>
//         </section>

//         {/* CALL TO ACTION */}
//         <section className="p-10 text-center bg-[#0e1d2b] border border-[#1f3a51] rounded-2xl">
//           <h3 className="text-2xl font-semibold mb-3">Ready for Cloud?</h3>
//           <p className="text-gray-300 mb-6 max-w-xl mx-auto">
//             Transform your infrastructure with future-proof cloud modernization.
//           </p>
//           <button className="bg-blue-500 hover:bg-blue-600 text-black px-8 py-3 rounded-full font-semibold">
//             Book Consultation
//           </button>
//         </section>
//       </div>
//     </main>
//   );
// }








import React from "react";

const CloudFeature = ({
  title,
  desc,
  img,
}: {
  title: string;
  desc: string;
  img: string;
}) => (
  <div className="bg-white border border-orange-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
    <img src={img} alt={title} className="w-full h-44 object-cover" />
    <div className="p-6">
      <h4 className="font-semibold text-lg text-orange-700 mb-2">{title}</h4>
      <p className="text-gray-700 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default function EnterpriseCloudMigration() {
  return (
    <main className="bg-gradient-to-b from-orange-50 via-white to-orange-100 text-gray-900 min-h-screen py-32 px-4">
      <div className="max-w-7xl mx-auto">

        {/* HERO SECTION */}
        <section className="grid gap-10 lg:grid-cols-2 items-center mb-20">
          <div>
            <span className="text-sm bg-orange-100 text-orange-700 px-4 py-1 rounded-full">
              Cloud Solutions · Enterprise
            </span>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-3 mb-6 text-orange-800">
              Enterprise Cloud Migration
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-xl">
              High-scale cloud transformation ensuring performance, security,
              and cost efficiency. From legacy infra to modern cloud-native
              architecture — seamlessly executed with zero downtime strategy.
            </p>
          </div>

          <img
            src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1400"
            alt="Cloud Migration"
            className="rounded-2xl shadow-lg w-full h-80 object-cover"
          />
        </section>

        {/* STATISTICS */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center mb-20">
          {[
            { label: "Infra Cost Savings", value: "60%" },
            { label: "Downtime Reduced", value: "95%" },
            { label: "Faster Deployment", value: "4x" },
            { label: "Microservices Shift", value: "100%" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold text-orange-600">{stat.value}</p>
              <p className="text-xs text-gray-600">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* CLOUD BENEFITS / FEATURE CARDS */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-6 text-orange-700">Why Cloud Migration?</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            <CloudFeature
              title="Scalability & Flexibility"
              desc="Auto-scaling ensures performance under heavy loads while optimizing costs."
              img="https://images.pexels.com/photos/2387532/pexels-photo-2387532.jpeg?auto=compress&cs=tinysrgb&w=1200"
            />

            <CloudFeature
              title="Improved Performance"
              desc="Reduced latency with globally distributed compute and storage solutions."
              img="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1200"
            />

            <CloudFeature
              title="Strong Security Layer"
              desc="IAM, Zero Trust architecture & compliance-driven access policies."
              img="https://images.pexels.com/photos/5965892/pexels-photo-5965892.jpeg?auto=compress&cs=tinysrgb&w=1200"
            />

          </div>
        </section>

        {/* MIGRATION PHASES */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-6 text-orange-700">Migration Process</h2>
          <div className="grid gap-8 md:grid-cols-4">

            {[
              {
                title: "1️⃣ Assessment",
                detail:
                  "Application audit & TCO estimation to form transformation roadmap.",
              },
              {
                title: "2️⃣ Planning",
                detail:
                  "Architecting cloud-native solution using best practices & compliance.",
              },
              {
                title: "3️⃣ Migration",
                detail:
                  "Lift & shift → Replatforming → Microservices decomposition.",
              },
              {
                title: "4️⃣ Optimization",
                detail:
                  "FinOps monitoring, auto-scaling & performance refinement.",
              },
            ].map((step) => (
              <div
                key={step.title}
                className="p-6 border border-orange-100 bg-white rounded-xl"
              >
                <h4 className="font-semibold text-orange-700 mb-2">
                  {step.title}
                </h4>
                <p className="text-sm text-gray-700">{step.detail}</p>
              </div>
            ))}

          </div>
        </section>

        {/* TECHNOLOGY STACK */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-4 text-orange-700">Technologies Used</h2>
          <div className="flex gap-3 flex-wrap">
            {[
              "AWS",
              "Docker",
              "Kubernetes",
              "Terraform",
              "MongoDB",
              "Kafka",
              "CI/CD Pipelines",
              "Serverless",
            ].map((item) => (
              <span
                key={item}
                className="px-3 py-1 bg-orange-50 border border-orange-100 rounded-full text-sm text-orange-700"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="p-10 text-center bg-white border border-orange-100 rounded-2xl shadow-sm">
          <h3 className="text-2xl font-semibold mb-3 text-orange-800">Ready for Cloud?</h3>
          <p className="text-gray-700 mb-6 max-w-xl mx-auto">
            Transform your infrastructure with future-proof cloud modernization.
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-full font-semibold shadow-md">
            Book Consultation
          </button>
        </section>
      </div>
    </main>
  );
}
