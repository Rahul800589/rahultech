// import React from "react";

// /**
//  * HealthcareManagementSystem.tsx
//  * Dark premium theme page for "Healthcare Management System"
//  *
//  * - Fully responsive
//  * - Rich content: overview, modules, features, cards, tech stack, metrics, testimonials, FAQ
//  * - Images included via Unsplash URLs
//  * - Export default as a TSX React component
//  */

// const ModuleCard: React.FC<{ title: string; description: string; icon?: React.ReactNode }> = ({
//   title,
//   description,
//   icon,
// }) => (
//   <div className="bg-[#071827] border border-[#153241] rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
//     <div className="flex items-start gap-4 mb-3">
//       <div className="bg-white/5 p-3 rounded-lg w-12 h-12 flex items-center justify-center text-orange-400">
//         {icon ?? (
//           <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
//             <path d="M12 2v20" stroke="currentColor" strokeWidth="1.5" />
//           </svg>
//         )}
//       </div>
//       <h4 className="text-lg font-semibold text-white">{title}</h4>
//     </div>
//     <p className="text-sm text-gray-300 leading-relaxed">{description}</p>
//   </div>
// );

// // export default function HealthcareManagementSystem(): JSX.Element {
// export default function HealthcareManagementSystem() {
//   return (
//     <main className="min-h-screen bg-gradient-to-b from-[#06121a] to-[#0f2430] text-white py-32 px-4">
//       <div className="max-w-6xl mx-auto">

//         {/* HERO */}
//         <header className="grid gap-8 lg:grid-cols-2 items-center mb-12">
//           <div>
//             <p className="inline-block text-sm text-orange-300 font-medium bg-white/5 px-3 py-1 rounded-full mb-4">Case Study · Healthcare Tech</p>
//             <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
//               Healthcare Management System
//             </h1>
//             <p className="text-lg text-gray-300 mb-6 max-w-2xl">
//               A secure, HIPAA-aligned platform that unifies clinical workflows, patient records, telehealth, and analytics to boost care quality and operational efficiency.
//             </p>

//             <div className="flex flex-wrap gap-3">
//               <button className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-black font-semibold px-5 py-3 rounded-2xl shadow">
//                 Request Demo
//               </button>
//               <a href="#modules" className="inline-flex items-center gap-2 border border-white/10 px-4 py-3 rounded-2xl text-sm text-gray-200 hover:bg-white/5">
//                 See Modules
//               </a>
//             </div>

//             <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
//               <div className="text-center">
//                 <p className="text-2xl font-bold text-white">99.98%</p>
//                 <p className="text-xs text-gray-400">Uptime</p>
//               </div>
//               <div className="text-center">
//                 <p className="text-2xl font-bold text-white">-40%</p>
//                 <p className="text-xs text-gray-400">Admin overhead</p>
//               </div>
//               <div className="text-center">
//                 <p className="text-2xl font-bold text-white">+30%</p>
//                 <p className="text-xs text-gray-400">Care coordination efficiency</p>
//               </div>
//               <div className="text-center">
//                 <p className="text-2xl font-bold text-white">Real-time</p>
//                 <p className="text-xs text-gray-400">Clinical alerts</p>
//               </div>
//             </div>
//           </div>

//           <div className="rounded-2xl overflow-hidden shadow-lg">
//             <img
//               src="https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg"
//               alt="healthcare dashboard"
//               className="w-full h-80 object-cover"
//             />
//           </div>
//         </header>

//         {/* Overview and Pain Points */}
//         <section className="grid gap-8 lg:grid-cols-3 items-start mb-12">
//           <div className="lg:col-span-2 bg-[#0b2a33] border border-[#173142] rounded-2xl p-8">
//             <h2 className="text-2xl font-semibold mb-4">Overview</h2>
//             <p className="text-gray-300 leading-relaxed mb-6">
//               We built a modern Healthcare Management System to replace multiple fragmented applications. The platform centralizes EHR, scheduling, billing, telemedicine, and analytics in a secure environment with role-based access controls and strong auditability.
//             </p>

//             <h3 className="text-lg font-semibold mb-2">Primary Challenges</h3>
//             <ul className="list-disc pl-5 text-gray-300 space-y-2">
//               <li>Fragmented patient records across departments causing duplicated tests and delays.</li>
//               <li>Manual scheduling and billing processes that cause administrative burden.</li>
//               <li>Limited telehealth capabilities and poor remote patient monitoring.</li>
//               <li>Regulatory pressure for audit trails and data protection.</li>
//             </ul>
//           </div>

//           <aside className="bg-[#071b22] border border-[#13323c] rounded-2xl p-6">
//             <h4 className="text-xl font-semibold mb-3">Project Snapshot</h4>
//             <div className="space-y-3 text-sm text-gray-300">
//               <div><strong>Duration:</strong> 7 months</div>
//               <div><strong>Team:</strong> 12 engineers, 3 clinicians, 2 security specialists</div>
//               <div><strong>Stack:</strong> React, Node.js, PostgreSQL, Docker, AWS</div>
//               <div><strong>Compliance:</strong> HIPAA-ready, SOC 2 alignment</div>
//             </div>
//           </aside>
//         </section>

//         {/* Modules Grid */}
//         <section id="modules" className="mb-12">
//           <h2 className="text-2xl font-semibold mb-6">Core Modules</h2>

//           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//             <ModuleCard
//               title="Electronic Health Records (EHR)"
//               description="Unified patient record with structured clinical notes, medication reconciliation, lab result integration, and full audit trail."
//             />
//             <ModuleCard
//               title="Scheduling & Workflow"
//               description="Optimized scheduling with capacity management, triage rules, waitlist automation, and clinician workload balancing."
//             />
//             <ModuleCard
//               title="Telemedicine & Remote Monitoring"
//               description="Secure video consults, asynchronous messaging, and device integrations for vitals streaming and alerts."
//             />
//             <ModuleCard
//               title="Revenue Cycle & Billing"
//               description="Claims submissions, denials management, flexible pricing rules, and integrated payer connections for faster reimbursement."
//             />
//             <ModuleCard
//               title="Clinical Decision Support"
//               description="Real-time alerts, evidence-based order sets, and risk stratification models to assist clinicians at the point of care."
//             />
//             <ModuleCard
//               title="Analytics & Population Health"
//               description="Dashboards for quality measures, readmission risk, capacity planning, and cohort-based interventions."
//             />
//           </div>
//         </section>

//         {/* Feature Details / Cards */}
//         <section className="mb-12">
//           <h2 className="text-2xl font-semibold mb-6">Selected Features & Innovations</h2>

//           <div className="grid gap-6 lg:grid-cols-3">
//             <div className="bg-[#071723] border border-[#15313d] p-6 rounded-2xl">
//               <h4 className="text-lg font-semibold mb-2">Interoperability</h4>
//               <p className="text-sm text-gray-300 mb-3">FHIR-first APIs for secure data exchange with labs, imaging centers, and external providers.</p>
//               <ul className="text-xs text-gray-400 space-y-2">
//                 <li>Batch and streaming ETL</li>
//                 <li>HL7 & FHIR adapters</li>
//                 <li>Consent management</li>
//               </ul>
//             </div>

//             <div className="bg-[#071723] border border-[#15313d] p-6 rounded-2xl">
//               <h4 className="text-lg font-semibold mb-2">Security & Compliance</h4>
//               <p className="text-sm text-gray-300 mb-3">Encryption at rest and in transit, RBAC, audit logging, secure key management, and continuous compliance checks.</p>
//               <ul className="text-xs text-gray-400 space-y-2">
//                 <li>VPC isolation and private endpoints</li>
//                 <li>Automated compliance reports</li>
//                 <li>Periodic penetration testing</li>
//               </ul>
//             </div>

//             <div className="bg-[#071723] border border-[#15313d] p-6 rounded-2xl">
//               <h4 className="text-lg font-semibold mb-2">Patient Experience</h4>
//               <p className="text-sm text-gray-300 mb-3">Patient portal for scheduling, access to records, secure messaging, and telehealth appointments with reminders and intake forms.</p>
//               <ul className="text-xs text-gray-400 space-y-2">
//                 <li>Mobile-first patient portal</li>
//                 <li>Electronic intake and eConsent</li>
//                 <li>Multi-language support</li>
//               </ul>
//             </div>
//           </div>
//         </section>

//         {/* Visual + Metrics */}
//         <section className="mb-12 grid gap-6 lg:grid-cols-2 items-center">
//           <div className="rounded-2xl overflow-hidden shadow-lg">
//             <img
//               src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=1200&auto=format&fit=crop"
//               alt="doctor and patient"
//               className="w-full h-80 object-cover"
//             />
//           </div>

//           <div>
//             <h3 className="text-2xl font-semibold mb-3">Operational Impact</h3>
//             <p className="text-gray-300 mb-4 leading-relaxed">
//               The platform reduced manual administrative tasks, accelerated claims processing, and improved patient throughput while maintaining strict privacy controls.
//             </p>

//             <div className="grid gap-4 sm:grid-cols-2">
//               <div className="bg-[#061421] p-4 rounded-lg border border-[#11313b]">
//                 <p className="text-xs text-gray-400">Average Time to Schedule</p>
//                 <p className="text-xl font-bold">3 mins</p>
//               </div>
//               <div className="bg-[#061421] p-4 rounded-lg border border-[#11313b]">
//                 <p className="text-xs text-gray-400">Claims Processing Time</p>
//                 <p className="text-xl font-bold">-45%</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Tech Stack */}
//         <section className="mb-12">
//           <h2 className="text-2xl font-semibold mb-6">Technology Stack</h2>
//           <div className="flex flex-wrap gap-3">
//             {["React", "Node.js", "Postgres", "Docker", "Kubernetes", "AWS", "Redis", "FHIR", "GraphQL"].map((t) => (
//               <span key={t} className="px-3 py-1 bg-white/5 text-sm text-gray-200 rounded-full">{t}</span>
//             ))}
//           </div>
//         </section>

//         {/* Testimonials */}
//         <section className="mb-12">
//           <h2 className="text-2xl font-semibold mb-6">Testimonials</h2>
//           <div className="grid gap-6 md:grid-cols-2">
//             <div className="bg-[#071722] p-6 rounded-2xl border border-[#12303a]">
//               <p className="text-gray-300 italic mb-4">
//                 "The unified EHR improved our clinician workflow. We now spend more time on direct patient care and less on administrative tasks."
//               </p>
//               <p className="text-sm font-medium">— Chief Medical Officer, Regional Hospital</p>
//             </div>
//             <div className="bg-[#071722] p-6 rounded-2xl border border-[#12303a]">
//               <p className="text-gray-300 italic mb-4">
//                 "Remote monitoring integration helped us flag high-risk patients earlier, reducing readmission rates."
//               </p>
//               <p className="text-sm font-medium">— Director of Care Management</p>
//             </div>
//           </div>
//         </section>

//         {/* FAQ */}
//         <section className="mb-12">
//           <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>

//           <div className="space-y-4">
//             <details className="bg-[#071b24] rounded-lg p-4 border border-[#12303a]">
//               <summary className="cursor-pointer font-medium">How long does the implementation take?</summary>
//               <div className="mt-2 text-gray-300 text-sm">
//                 Typical implementations for medium-sized health systems range from 6 to 9 months depending on integrations and customization needs.
//               </div>
//             </details>

//             <details className="bg-[#071b24] rounded-lg p-4 border border-[#12303a]">
//               <summary className="cursor-pointer font-medium">Is the system HIPAA-ready?</summary>
//               <div className="mt-2 text-gray-300 text-sm">
//                 Yes. The platform includes encryption at rest and in transit, role-based access controls, detailed audit logs, and optional BAA contracts for hosting providers.
//               </div>
//             </details>

//             <details className="bg-[#071b24] rounded-lg p-4 border border-[#12303a]">
//               <summary className="cursor-pointer font-medium">How do you handle integrations?</summary>
//               <div className="mt-2 text-gray-300 text-sm">
//                 We provide FHIR-based APIs, HL7 adapters, and ETL connectors. Integration is performed via secure channels with staged testing to ensure data integrity.
//               </div>
//             </details>
//           </div>
//         </section>

//         {/* CTA Footer */}
//         <footer className="bg-[#06121a] border border-[#103039] rounded-2xl p-8 text-center">
//           <h3 className="text-2xl font-semibold mb-3">Ready to modernize clinical operations?</h3>
//           <p className="text-gray-300 mb-6">Book a technical assessment and receive a roadmap tailored to your health system's needs.</p>
//           <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
//             <button className="bg-orange-500 px-6 py-3 rounded-full font-semibold text-black hover:bg-orange-600">Request Assessment</button>
//             <a href="/projects" className="px-6 py-3 rounded-full border border-white/10 text-sm text-gray-200 hover:bg-white/5">View More Projects</a>
//           </div>
//         </footer>

//       </div>
//     </main>
//   );
// }











import React from "react";

const ModuleCard: React.FC<{ title: string; description: string; icon?: React.ReactNode }> = ({
  title,
  description,
  icon,
}) => (
  <div className="bg-white border border-orange-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
    <div className="flex items-start gap-4 mb-3">
      <div className="bg-orange-50 p-3 rounded-lg w-12 h-12 flex items-center justify-center text-orange-600">
        {icon ?? (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
            <path d="M12 2v20" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        )}
      </div>
      <h4 className="text-lg font-semibold text-orange-800">{title}</h4>
    </div>
    <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
  </div>
);

export default function HealthcareManagementSystem() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-100 text-gray-900 py-32 px-4">
      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <header className="grid gap-8 lg:grid-cols-2 items-center mb-16">
          <div>
            <p className="inline-block text-sm text-orange-600 font-medium bg-orange-100 px-3 py-1 rounded-full mb-4">
              Case Study · Healthcare Tech
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-orange-800">
              Healthcare Management System
            </h1>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl">
              A secure, HIPAA-aligned platform that unifies clinical workflows,
              patient records, telehealth, and analytics to boost care quality
              and operational efficiency.
            </p>

            <div className="flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-5 py-3 rounded-2xl shadow-md">
                Request Demo
              </button>
              <a
                href="#modules"
                className="inline-flex items-center gap-2 border border-orange-300 px-4 py-3 rounded-2xl text-sm text-orange-700 hover:bg-orange-50 transition"
              >
                See Modules
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { value: "99.98%", label: "Uptime" },
                { value: "-40%", label: "Admin overhead" },
                { value: "+30%", label: "Care coordination efficiency" },
                { value: "Real-time", label: "Clinical alerts" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl font-bold text-orange-700">{item.value}</p>
                  <p className="text-xs text-gray-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg"
              alt="healthcare dashboard"
              className="w-full h-80 object-cover"
            />
          </div>
        </header>

        {/* Overview */}
        <section className="grid gap-8 lg:grid-cols-3 items-start mb-16">
          <div className="lg:col-span-2 bg-white border border-orange-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-orange-700">Overview</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We built a modern Healthcare Management System to replace multiple fragmented applications. 
              The platform centralizes EHR, scheduling, billing, telemedicine, and analytics in a secure environment 
              with role-based access and auditability.
            </p>

            <h3 className="text-lg font-semibold mb-2 text-orange-700">Primary Challenges</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Fragmented patient records causing delays.</li>
              <li>Manual scheduling and billing processes.</li>
              <li>Limited telehealth capabilities and monitoring.</li>
              <li>Strict regulatory and audit requirements.</li>
            </ul>
          </div>

          <aside className="bg-orange-50 border border-orange-200 rounded-2xl p-6 shadow-sm">
            <h4 className="text-xl font-semibold mb-3 text-orange-800">Project Snapshot</h4>
            <div className="space-y-2 text-sm text-gray-700">
              <p><strong>Duration:</strong> 7 months</p>
              <p><strong>Team:</strong> 12 engineers, 3 clinicians, 2 security specialists</p>
              <p><strong>Stack:</strong> React, Node.js, PostgreSQL, Docker, AWS</p>
              <p><strong>Compliance:</strong> HIPAA-ready, SOC 2 alignment</p>
            </div>
          </aside>
        </section>

        {/* Core Modules */}
        <section id="modules" className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-orange-700">Core Modules</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Electronic Health Records (EHR)",
                description:
                  "Unified patient record with clinical notes, medication, lab results, and audit trail.",
              },
              {
                title: "Scheduling & Workflow",
                description:
                  "Automated scheduling, triage rules, and workload balancing.",
              },
              {
                title: "Telemedicine & Remote Monitoring",
                description:
                  "Secure video consults, messaging, and real-time vitals tracking.",
              },
              {
                title: "Revenue Cycle & Billing",
                description:
                  "Claims management, payer integration, and denials tracking.",
              },
              {
                title: "Clinical Decision Support",
                description:
                  "AI-driven alerts, evidence-based order sets, and predictive models.",
              },
              {
                title: "Analytics & Population Health",
                description:
                  "Dashboards for quality measures, risk analysis, and capacity planning.",
              },
            ].map((m, i) => (
              <ModuleCard key={i} title={m.title} description={m.description} />
            ))}
          </div>
        </section>

        {/* Metrics Visual */}
        <section className="mb-16 grid gap-6 lg:grid-cols-2 items-center">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=1200&auto=format&fit=crop"
              alt="doctor and patient"
              className="w-full h-80 object-cover"
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3 text-orange-700">
              Operational Impact
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The system reduced manual workloads, accelerated claims, and improved patient throughput
              while maintaining strict compliance.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg text-center">
                <p className="text-xs text-gray-600">Avg. Scheduling Time</p>
                <p className="text-xl font-bold text-orange-700">3 mins</p>
              </div>
              <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg text-center">
                <p className="text-xs text-gray-600">Claims Processing</p>
                <p className="text-xl font-bold text-orange-700">-45%</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-orange-700">
            Technology Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              "React",
              "Node.js",
              "Postgres",
              "Docker",
              "Kubernetes",
              "AWS",
              "Redis",
              "FHIR",
              "GraphQL",
            ].map((t) => (
              <span
                key={t}
                className="px-3 py-1 bg-orange-50 border border-orange-200 text-sm text-orange-700 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-orange-700">Testimonials</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                quote:
                  "The unified EHR improved our clinician workflow and patient care experience.",
                author: "Chief Medical Officer, Regional Hospital",
              },
              {
                quote:
                  "Remote monitoring integration helped us flag high-risk patients earlier.",
                author: "Director of Care Management",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white border border-orange-200 p-6 rounded-2xl shadow-sm"
              >
                <p className="text-gray-700 italic mb-4">“{t.quote}”</p>
                <p className="text-sm font-medium text-orange-700">— {t.author}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <footer className="bg-orange-50 border border-orange-200 rounded-2xl p-8 text-center shadow-md">
          <h3 className="text-2xl font-semibold mb-3 text-orange-800">
            Ready to modernize clinical operations?
          </h3>
          <p className="text-gray-700 mb-6">
            Book a technical assessment and receive a custom roadmap for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-full font-semibold shadow-md">
              Request Assessment
            </button>
            <a
              href="/projects"
              className="px-6 py-3 rounded-full border border-orange-300 text-orange-700 hover:bg-orange-50 transition"
            >
              View More Projects
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
