// import React from "react";

// const FeatureCard: React.FC<{ title: string; description: string }> = ({
//   title,
//   description,
// }) => (
//   <div className="bg-[#071b2a] border border-[#123041] p-6 rounded-2xl transition hover:shadow-lg">
//     <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
//     <p className="text-sm text-gray-300 leading-relaxed">{description}</p>
//   </div>
// );

// // export default function FinTechMobileBankingApp(): JSX.Element {
// export default function FinTechMobileBankingApp() {
//   return (
//     <main className="min-h-screen bg-gradient-to-b from-[#050f19] to-[#0c2330] text-white py-32 px-4">
//       <div className="max-w-6xl mx-auto">

//         {/* HERO */}
//         <section className="grid gap-10 lg:grid-cols-2 items-center mb-16">
//           <div>
//             <p className="text-sm font-semibold bg-white/5 px-3 py-1 inline-block rounded-full text-orange-400">
//               Case Study · FinTech
//             </p>
//             <h1 className="text-4xl md:text-5xl font-bold my-4 leading-tight">
//               FinTech Mobile Banking App
//             </h1>
//             <p className="text-gray-300 text-lg mb-6 max-w-xl">
//               A cross-platform banking solution offering biometric authentication,
//               instant payments, card controls, and proactive fraud detection,
//               delivering a secure and seamless financial experience.
//             </p>

//             <div className="grid grid-cols-2 gap-4 max-w-xs">
//               <div>
//                 <p className="text-xl font-bold text-white">3M+</p>
//                 <p className="text-xs text-gray-400">Active users</p>
//               </div>
//               <div>
//                 <p className="text-xl font-bold text-white">99.95%</p>
//                 <p className="text-xs text-gray-400">Uptime SLA</p>
//               </div>
//             </div>

//             <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-3 rounded-2xl shadow-lg">
//               Download Case Study
//             </button>
//           </div>

//           <img
//             src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1400&auto=format&fit=crop"
//             alt="Mobile banking mockup"
//             className="rounded-2xl shadow-lg w-full h-96 object-cover"
//           />
//         </section>

//         {/* Overview */}
//         <section className="grid gap-8 lg:grid-cols-3 items-start mb-20">
//           <div className="lg:col-span-2 bg-[#0a2430] border border-[#123042] rounded-2xl p-8">
//             <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
//             <p className="text-gray-300 leading-relaxed">
//               The goal was to build a secure financial platform that not only
//               provides basic mobile banking functions but also advanced controls,
//               behavioral security, instant money movement, and AI-based spending
//               recommendations to empower users in managing their finances.
//             </p>
//           </div>

//           <div className="bg-[#071b22] border border-[#11313b] rounded-2xl p-6">
//             <h4 className="text-xl font-semibold mb-3">Project Snapshot</h4>
//             <div className="space-y-2 text-sm text-gray-300">
//               <p><strong>Duration:</strong> 8 months</p>
//               <p><strong>Team:</strong> 10 developers, 2 security leads, 3 QA</p>
//               <p><strong>Stack:</strong> React Native, Node.js, PostgreSQL, AWS</p>
//               <p><strong>Compliance:</strong> PCI DSS alignment</p>
//             </div>
//           </div>
//         </section>

//         {/* Core Features */}
//         <section className="mb-20">
//           <h2 className="text-2xl font-semibold mb-6">Core Features</h2>
//           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             <FeatureCard
//               title="Biometric Login"
//               description="Face and fingerprint recognition for secure access with fallback PIN."
//             />
//             <FeatureCard
//               title="Instant Transfers"
//               description="Real-time peer-to-peer payments with fraud protection."
//             />
//             <FeatureCard
//               title="Card Controls"
//               description="Freeze card, set limits, change PIN, manage merchants."
//             />
//             <FeatureCard
//               title="Spending Insights"
//               description="Categorized reports and proactive budgeting reminders."
//             />
//             <FeatureCard
//               title="Digital Onboarding"
//               description="KYC checks and e-signature within minutes."
//             />
//             <FeatureCard
//               title="Push Notifications"
//               description="Instant alerts for every transaction and suspicious behavior."
//             />
//           </div>
//         </section>

//         {/* Security + Visual */}
//         <section className="grid gap-10 lg:grid-cols-2 mb-20 items-center">
//           <div className="rounded-2xl overflow-hidden shadow-xl">
//             <img
//               src="https://plus.unsplash.com/premium_photo-1744843242870-f1635044c7eb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1vYmlsZSUyMGJhbmNraW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000"
//               alt="Secure mobile banking"
//               className="w-full h-80 object-cover"
//             />
//           </div>

//           <div>
//             <h3 className="text-2xl font-semibold mb-3">Bank-Grade Security</h3>
//             <p className="text-gray-300 leading-relaxed">
//               The app incorporates layered security with encrypted vault storage,
//               fraud analytics, and continuous authentication monitoring to ensure
//               that financial activities remain fully protected.
//             </p>

//             <ul className="list-disc ml-5 text-sm text-gray-400 mt-4 space-y-2">
//               <li>Encrypted communication</li>
//               <li>Device binding and tokenization</li>
//               <li>Anomaly-based fraud detection</li>
//               <li>Role-based access controls</li>
//             </ul>
//           </div>
//         </section>

//         {/* Metrics */}
//         <section className="mb-20">
//           <h2 className="text-2xl font-semibold mb-6">Impact & Performance</h2>
//           <div className="grid sm:grid-cols-3 gap-6">
//             <div className="bg-[#081925] p-6 rounded-2xl border border-[#112f3b] text-center">
//               <p className="text-3xl font-bold">4.7</p>
//               <p className="text-sm text-gray-400">App Store rating</p>
//             </div>
//             <div className="bg-[#081925] p-6 rounded-2xl border border-[#112f3b] text-center">
//               <p className="text-3xl font-bold">+60%</p>
//               <p className="text-sm text-gray-400">Monthly user engagement</p>
//             </div>
//             <div className="bg-[#081925] p-6 rounded-2xl border border-[#112f3b] text-center">
//               <p className="text-3xl font-bold">-35%</p>
//               <p className="text-sm text-gray-400">Fraud attempts</p>
//             </div>
//           </div>
//         </section>

//         {/* Tech Stack */}
//         <section className="mb-20">
//           <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
//           <div className="flex flex-wrap gap-3">
//             {[
//               "React Native",
//               "Node.js",
//               "PostgreSQL",
//               "AWS",
//               "Kafka",
//               "JWT",
//               "GraphQL",
//               "Docker",
//             ].map((t) => (
//               <span
//                 key={t}
//                 className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-200"
//               >
//                 {t}
//               </span>
//             ))}
//           </div>
//         </section>

//         {/* Testimonials */}
//         <section className="mb-20">
//           <h2 className="text-2xl font-semibold mb-5">What Clients Say</h2>
//           <div className="grid md:grid-cols-2 gap-6">
//             <blockquote className="bg-[#071b24] p-6 rounded-2xl border border-[#11303a]">
//               <p className="italic text-gray-300 mb-4">
//                 "The seamless onboarding and instant payments boosted our retail adoption dramatically."
//               </p>
//               <footer className="text-sm text-gray-400">
//                 — Head of Digital Banking, National Bank
//               </footer>
//             </blockquote>
//             <blockquote className="bg-[#071b24] p-6 rounded-2xl border border-[#11303a]">
//               <p className="italic text-gray-300 mb-4">
//                 "Security upgrades and risk scoring helped us reduce fraudulent card activity significantly."
//               </p>
//               <footer className="text-sm text-gray-400">
//                 — Chief Risk Officer, Finance Corp
//               </footer>
//             </blockquote>
//           </div>
//         </section>

//         {/* FAQ */}
//         <section className="mb-20">
//           <h2 className="text-2xl font-semibold mb-6">FAQs</h2>
//           <div className="space-y-4">
//             <details className="bg-[#071b24] p-4 rounded-lg border border-[#11303a]">
//               <summary className="font-medium cursor-pointer">
//                 What compliance standards does the app meet?
//               </summary>
//               <p className="text-gray-300 text-sm mt-1">
//                 Built with PCI-DSS alignment and regular compliance audits with automated security scanning.
//               </p>
//             </details>

//             <details className="bg-[#071b24] p-4 rounded-lg border border-[#11303a]">
//               <summary className="font-medium cursor-pointer">
//                 How fast is the onboarding process?
//               </summary>
//               <p className="text-gray-300 text-sm mt-1">
//                 Onboarding takes only minutes with digital KYC and automated identity verification.
//               </p>
//             </details>
//           </div>
//         </section>

//         {/* CTA */}
//         <section className="bg-[#06141d] border border-[#11313d] rounded-2xl p-10 text-center">
//           <h3 className="text-2xl font-semibold mb-3">
//             Want to deliver a next-generation banking experience?
//           </h3>
//           <p className="text-gray-300 mb-6">
//             Let's build a future-proof digital banking platform together.
//           </p>
//           <div className="flex gap-3 justify-center flex-wrap">
//             <button className="bg-orange-500 px-6 py-3 rounded-full font-semibold text-black hover:bg-orange-600">
//               Start Your Project
//             </button>
//           </div>
//         </section>

//       </div>
//     </main>
//   );
// }











import React from "react";

const FeatureCard: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => (
  <div className="bg-white border border-orange-200 p-6 rounded-2xl transition hover:shadow-md hover:shadow-orange-200/60">
    <h4 className="text-lg font-semibold text-orange-800 mb-2">{title}</h4>
    <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
  </div>
);

export default function FinTechMobileBankingApp() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-100 text-gray-900 py-32 px-4">
      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <section className="grid gap-10 lg:grid-cols-2 items-center mb-16">
          <div>
            <p className="text-sm font-semibold bg-orange-100 px-3 py-1 inline-block rounded-full text-orange-700">
              Case Study · FinTech
            </p>
            <h1 className="text-4xl md:text-5xl font-bold my-4 leading-tight text-orange-800">
              FinTech Mobile Banking App
            </h1>
            <p className="text-gray-700 text-lg mb-6 max-w-xl">
              A cross-platform banking solution offering biometric authentication,
              instant payments, card controls, and proactive fraud detection —
              delivering a secure, seamless financial experience.
            </p>

            <div className="grid grid-cols-2 gap-4 max-w-xs">
              <div>
                <p className="text-xl font-bold text-orange-700">3M+</p>
                <p className="text-xs text-gray-600">Active users</p>
              </div>
              <div>
                <p className="text-xl font-bold text-orange-700">99.95%</p>
                <p className="text-xs text-gray-600">Uptime SLA</p>
              </div>
            </div>

            <button className="mt-8 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-6 py-3 rounded-2xl shadow-md hover:shadow-orange-300/50">
              Download Case Study
            </button>
          </div>

          <img
            src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1400&auto=format&fit=crop"
            alt="Mobile banking mockup"
            className="rounded-2xl shadow-lg w-full h-96 object-cover"
          />
        </section>

        {/* Overview */}
        <section className="grid gap-8 lg:grid-cols-3 items-start mb-20">
          <div className="lg:col-span-2 bg-white border border-orange-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-orange-700">
              Project Overview
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The goal was to build a secure, feature-rich banking app that
              combines next-gen digital payments, real-time insights, and
              personalized controls — empowering users with trust and transparency.
            </p>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 shadow-sm">
            <h4 className="text-xl font-semibold mb-3 text-orange-800">
              Project Snapshot
            </h4>
            <div className="space-y-2 text-sm text-gray-700">
              <p><strong>Duration:</strong> 8 months</p>
              <p><strong>Team:</strong> 10 developers, 2 security leads, 3 QA</p>
              <p><strong>Stack:</strong> React Native, Node.js, PostgreSQL, AWS</p>
              <p><strong>Compliance:</strong> PCI DSS alignment</p>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-6 text-orange-700">
            Core Features
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard title="Biometric Login" description="Face and fingerprint recognition for secure access with fallback PIN." />
            <FeatureCard title="Instant Transfers" description="Real-time peer-to-peer payments with fraud protection." />
            <FeatureCard title="Card Controls" description="Freeze cards, set limits, manage merchants and track usage." />
            <FeatureCard title="Spending Insights" description="Categorized reports and proactive budgeting reminders." />
            <FeatureCard title="Digital Onboarding" description="KYC verification and e-signatures within minutes." />
            <FeatureCard title="Push Notifications" description="Instant alerts for every transaction and suspicious activity." />
          </div>
        </section>

        {/* Security + Visual */}
        <section className="grid gap-10 lg:grid-cols-2 mb-20 items-center">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://plus.unsplash.com/premium_photo-1744843242870-f1635044c7eb?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=1000"
              alt="Secure mobile banking"
              className="w-full h-80 object-cover"
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3 text-orange-800">
              Bank-Grade Security
            </h3>
            <p className="text-gray-700 leading-relaxed">
              The app includes multi-layered encryption, continuous risk monitoring,
              and adaptive fraud detection — ensuring full financial safety.
            </p>

            <ul className="list-disc ml-5 text-sm text-gray-600 mt-4 space-y-2">
              <li>Encrypted communication</li>
              <li>Device binding and tokenization</li>
              <li>Anomaly-based fraud detection</li>
              <li>Role-based access controls</li>
            </ul>
          </div>
        </section>

        {/* Metrics */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-6 text-orange-700">
            Impact & Performance
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { value: "4.7", label: "App Store rating" },
              { value: "+60%", label: "User engagement" },
              { value: "-35%", label: "Fraud attempts" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white border border-orange-200 p-6 rounded-2xl text-center shadow-sm"
              >
                <p className="text-3xl font-bold text-orange-700">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-4 text-orange-700">
            Technology Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              "React Native",
              "Node.js",
              "PostgreSQL",
              "AWS",
              "Kafka",
              "JWT",
              "GraphQL",
              "Docker",
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

        {/* Testimonials */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-5 text-orange-700">
            What Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                quote:
                  "The seamless onboarding and instant payments boosted our retail adoption dramatically.",
                author: "Head of Digital Banking, National Bank",
              },
              {
                quote:
                  "Security upgrades and risk scoring helped us reduce fraudulent card activity significantly.",
                author: "Chief Risk Officer, Finance Corp",
              },
            ].map((t, i) => (
              <blockquote
                key={i}
                className="bg-white border border-orange-200 p-6 rounded-2xl shadow-sm"
              >
                <p className="italic text-gray-700 mb-4">“{t.quote}”</p>
                <footer className="text-sm text-orange-700">— {t.author}</footer>
              </blockquote>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-6 text-orange-700">FAQs</h2>
          <div className="space-y-4">
            {[
              {
                q: "What compliance standards does the app meet?",
                a: "Built with PCI-DSS alignment, frequent audits, and automated security scanning.",
              },
              {
                q: "How fast is the onboarding process?",
                a: "Onboarding takes just a few minutes with digital KYC and automated verification.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="bg-orange-50 border border-orange-200 p-4 rounded-lg"
              >
                <summary className="font-medium text-orange-800 cursor-pointer">
                  {faq.q}
                </summary>
                <p className="text-gray-700 text-sm mt-2">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-orange-50 border border-orange-200 rounded-2xl p-10 text-center shadow-sm">
          <h3 className="text-2xl font-semibold mb-3 text-orange-800">
            Want to deliver a next-generation banking experience?
          </h3>
          <p className="text-gray-700 mb-6">
            Let’s build a secure, future-ready financial platform together.
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-full font-semibold shadow-md">
            Start Your Project
          </button>
        </section>
      </div>
    </main>
  );
}
