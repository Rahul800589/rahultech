// import React from "react";

// const FeatureCard: React.FC<{
//   title: string;
//   desc: string;
//   img: string;
// }> = ({ title, desc, img }) => (
//   <div className="bg-[#0b2632] border border-[#183642] rounded-xl overflow-hidden hover:shadow-xl transition">
//     <img src={img} alt={title} className="w-full h-44 object-cover" />
//     <div className="p-6">
//       <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
//       <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
//     </div>
//   </div>
// );

// export default function AIChatAssistant() {
//   return (
//     <main className="bg-gradient-to-b from-[#04121a] to-[#0b2833] text-white min-h-screen py-32 px-4">
//       <div className="max-w-7xl mx-auto">

//         {/* HERO */}
//         <section className="grid gap-10 lg:grid-cols-2 items-center mb-20">
//           <div>
//             <span className="text-sm bg-white/10 text-blue-400 rounded-full px-4 py-1 inline-block mb-4">
//               AI · Case Study
//             </span>

//             <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
//               AI-Powered Chat Assistant
//             </h1>

//             <p className="text-lg text-gray-300 max-w-xl leading-relaxed mb-8">
//               A multilingual AI assistant that automates customer support with
//               smart routing, sentiment insights, and personalized responses —
//               driving faster resolution and enhanced customer satisfaction.
//             </p>

//             <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl text-black font-semibold shadow-lg">
//               Try the Demo
//             </button>
//           </div>

//           <img
//             src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWklMjBjaGF0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000"
//             alt="AI chat"
//             className="rounded-2xl shadow-lg w-full h-80 object-cover"
//           />
//         </section>

//         {/* IMPACT STATS */}
//         <section className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center mb-16">
//           {[
//             { label: "Resolution Time", value: "-62%" },
//             { label: "Ticket Deflection", value: "45%" },
//             { label: "Supported Languages", value: "89+" },
//             { label: "Customer Satisfaction", value: "4.7/5 avg" },
//           ].map((stat) => (
//             <div key={stat.label}>
//               <p className="text-3xl font-bold text-blue-400">{stat.value}</p>
//               <p className="text-xs text-gray-400">{stat.label}</p>
//             </div>
//           ))}
//         </section>

//         {/* OVERVIEW */}
//         <section className="grid gap-10 lg:grid-cols-3 mb-20">
//           <div className="lg:col-span-2 bg-[#07222d] border border-[#133842] p-8 rounded-2xl">
//             <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
//             <p className="text-gray-300 leading-relaxed">
//               This intelligent automation solution blends natural language understanding,
//               personalization models, and proactive resolution flows to remove friction
//               from support operations. Customers receive fast, contextual responses
//               while agents focus on complex inquiries.
//             </p>
//           </div>

//           <div className="bg-[#071c26] border border-[#12303b] p-6 rounded-2xl">
//             <h3 className="text-lg font-semibold mb-3">Quick Facts</h3>
//             <p className="text-sm text-gray-300 mb-1">Industry: Support Automation</p>
//             <p className="text-sm text-gray-300 mb-1">Team: 5 AI Engineers, 4 Developers</p>
//             <p className="text-sm text-gray-300 mb-1">Stack: Python · React · PostgreSQL · Rasa · AWS</p>
//           </div>
//         </section>

//         {/* FEATURES */}
//         <section className="mb-20">
//           <h2 className="text-2xl font-semibold mb-8">Core Features</h2>

//           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             <FeatureCard
//               title="Intent Recognition"
//               desc="NLU models classify user purpose accurately within milliseconds."
//               img="https://plus.unsplash.com/premium_photo-1677094310918-cc302203b21c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWklMjBjaGF0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000"
//             />
//             <FeatureCard
//               title="Emotion Awareness"
//               desc="Sentiment scoring enables escalation on frustration or negative tone."
//               img="https://plus.unsplash.com/premium_photo-1677269465314-d5d2247a0b0c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFpJTIwY2hhdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000"
//             />
//             <FeatureCard
//               title="Smart Knowledge Retrieval"
//               desc="Embedding search pulls answers from docs, FAQs, and transcripts."
//               img="https://plus.unsplash.com/premium_photo-1677094310956-7f88ae5f5c6b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWklMjBjaGF0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000"
//             />
//             <FeatureCard
//               title="Human Handoff"
//               desc="Seamless transition to support reps with full context and history logs."
//               img="https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=1200&auto=format&fit=crop"
//             />
//             <FeatureCard
//               title="Personalization Engine"
//               desc="Responses adapt to user profile, product usage, and purchase history."
//               img="https://plus.unsplash.com/premium_photo-1675793714962-a2413250c490?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFpJTIwY2hhdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000"
//             />
//             <FeatureCard
//               title="Omnichannel Support"
//               desc="Works across web chat, WhatsApp, mobile, and email automation."
//               img="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=1200&auto=format&fit=crop"
//             />
//           </div>
//         </section>

//         {/* RESULTS */}
//         <section className="grid gap-10 lg:grid-cols-2 items-center mb-20">
//           <img
//             src="https://plus.unsplash.com/premium_photo-1677094310893-0d6594c211ea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWklMjBjaGF0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000"
//             alt="data results"
//             className="rounded-2xl shadow-lg w-full h-80 object-cover"
//           />

//           <div>
//             <h3 className="text-2xl font-semibold mb-3">Measurable Success</h3>
//             <p className="text-gray-300 leading-relaxed mb-4">
//               Resolution automation frees support bandwidth and allows organizations
//               to scale globally without increasing team size.
//             </p>

//             <ul className="list-disc ml-5 text-gray-300 space-y-2 text-sm">
//               <li>Reduced escalations via proactive guidance</li>
//               <li>Automatic troubleshooting flow builders</li>
//               <li>Lower churn via improved user experience</li>
//             </ul>
//           </div>
//         </section>

//         {/* TECH STACK */}
//         <section className="mb-20">
//           <h2 className="text-2xl font-semibold mb-5">Technology Stack</h2>

//           <div className="flex gap-3 flex-wrap">
//             {[
//               "Python",
//               "Rasa",
//               "React",
//               "Node.js",
//               "PostgreSQL",
//               "ElasticSearch",
//               "Docker",
//               "AWS",
//               "Langchain",
//               "NLU Models",
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

//         {/* TESTIMONIALS */}
//         <section className="mb-20">
//           <h2 className="text-2xl font-semibold mb-6">Client Feedback</h2>
//           <div className="grid md:grid-cols-2 gap-6">
//             <blockquote className="bg-[#071c26] border border-[#12303b] p-6 rounded-2xl">
//               <p className="italic text-gray-300 mb-4">
//                 "We automated more than 40% of our tickets in the first quarter.
//                 The multi-language support is a game changer."
//               </p>
//               <footer className="text-sm text-gray-400">— Director of Support</footer>
//             </blockquote>
//             <blockquote className="bg-[#071c26] border border-[#12303b] p-6 rounded-2xl">
//               <p className="italic text-gray-300 mb-4">
//                 "Customer delight metrics improved consistently.
//                 Our agents now handle only high-value cases."
//               </p>
//               <footer className="text-sm text-gray-400">— CX Lead</footer>
//             </blockquote>
//           </div>
//         </section>

//         {/* FAQ */}
//         <section className="mb-20">
//           <h2 className="text-2xl font-semibold mb-6">FAQs</h2>
//           <div className="space-y-3">
//             <details className="bg-[#071c26] border border-[#12303b] p-4 rounded-xl">
//               <summary className="font-medium cursor-pointer">
//                 Does it support custom models?
//               </summary>
//               <p className="text-gray-300 text-sm mt-2">
//                 Yes, organizations can plug in their own finetuned models via a modular ML gateway.
//               </p>
//             </details>

//             <details className="bg-[#071c26] border border-[#12303b] p-4 rounded-xl">
//               <summary className="font-medium cursor-pointer">
//                 What about sensitive data?
//               </summary>
//               <p className="text-gray-300 text-sm mt-2">
//                 PII is masked and encrypted server-side. Roles ensure proper access control and audits.
//               </p>
//             </details>
//           </div>
//         </section>

//         {/* CTA */}
//         <section className="bg-[#05141c] border border-[#12303b] p-10 rounded-2xl text-center">
//           <h3 className="text-2xl font-semibold mb-3">
//             Enhance your support with intelligent automation
//           </h3>
//           <p className="text-gray-300 mb-6">
//             Upgrade customer engagement to respond at scale — without compromising personalization.
//           </p>
//           <button className="bg-blue-500 hover:bg-blue-600 text-black px-6 py-3 rounded-full font-semibold">
//             Book Consultation
//           </button>
//         </section>
//       </div>
//     </main>
//   );
// }









import React from "react";

const FeatureCard: React.FC<{
  title: string;
  desc: string;
  img: string;
}> = ({ title, desc, img }) => (
  <div className="bg-white border border-blue-200 rounded-xl overflow-hidden hover:shadow-md transition">
    <img src={img} alt={title} className="w-full h-44 object-cover" />
    <div className="p-6">
      <h4 className="text-lg font-semibold text-blue-800 mb-2">{title}</h4>
      <p className="text-gray-700 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default function AIChatAssistant() {
  return (
    <main className="bg-gradient-to-b from-blue-50 via-white to-blue-100 text-gray-900 min-h-screen py-32 px-4">
      <div className="max-w-7xl mx-auto">

        {/* HERO */}
        <section className="grid gap-10 lg:grid-cols-2 items-center mb-20">
          <div>
            <span className="text-sm bg-blue-100 text-blue-700 rounded-full px-4 py-1 inline-block mb-4 font-medium">
              AI · Case Study
            </span>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-blue-900">
              AI-Powered Chat Assistant
            </h1>

            <p className="text-lg text-gray-700 max-w-xl leading-relaxed mb-8">
              A multilingual AI assistant that automates customer support with smart
              routing, sentiment insights, and personalized responses — driving faster
              resolution and higher satisfaction.
            </p>

            <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-6 py-3 rounded-xl text-white font-semibold shadow-md">
              Try the Demo
            </button>
          </div>

          <img
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=60&w=1000"
            alt="AI chat"
            className="rounded-2xl shadow-lg w-full h-80 object-cover"
          />
        </section>

        {/* IMPACT STATS */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center mb-16">
          {[
            { label: "Resolution Time", value: "-62%" },
            { label: "Ticket Deflection", value: "45%" },
            { label: "Supported Languages", value: "89+" },
            { label: "Customer Satisfaction", value: "4.7/5 avg" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold text-blue-700">{stat.value}</p>
              <p className="text-xs text-gray-600">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* OVERVIEW */}
        <section className="grid gap-10 lg:grid-cols-3 mb-20">
          <div className="lg:col-span-2 bg-white border border-blue-200 p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">Project Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              This intelligent automation platform combines natural language
              understanding, personalization models, and proactive support flows
              to remove friction from customer service. It delivers contextual,
              human-like responses while freeing agents for higher-value work.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 p-6 rounded-2xl shadow-sm">
            <h3 className="text-lg font-semibold mb-3 text-blue-800">Quick Facts</h3>
            <p className="text-sm text-gray-700 mb-1">Industry: Support Automation</p>
            <p className="text-sm text-gray-700 mb-1">Team: 5 AI Engineers, 4 Developers</p>
            <p className="text-sm text-gray-700 mb-1">Stack: Python · React · PostgreSQL · Rasa · AWS</p>
          </div>
        </section>

        {/* FEATURES */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-8 text-blue-800">Core Features</h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="Intent Recognition"
              desc="NLU models classify user purpose accurately within milliseconds."
              img="https://plus.unsplash.com/premium_photo-1677094310918-cc302203b21c?auto=format&fit=crop&q=60&w=1000"
            />
            <FeatureCard
              title="Emotion Awareness"
              desc="Sentiment scoring enables escalation on frustration or negative tone."
              img="https://plus.unsplash.com/premium_photo-1677269465314-d5d2247a0b0c?auto=format&fit=crop&q=60&w=1000"
            />
            <FeatureCard
              title="Smart Knowledge Retrieval"
              desc="Embedding search pulls answers from docs, FAQs, and chat history."
              img="https://plus.unsplash.com/premium_photo-1677094310956-7f88ae5f5c6b?auto=format&fit=crop&q=60&w=1000"
            />
            <FeatureCard
              title="Human Handoff"
              desc="Seamless transfer to live reps with context and sentiment memory."
              img="https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=1200&auto=format&fit=crop"
            />
            <FeatureCard
              title="Personalization Engine"
              desc="Responses adapt to user profile, product usage, and conversation history."
              img="https://plus.unsplash.com/premium_photo-1675793714962-a2413250c490?auto=format&fit=crop&q=60&w=1000"
            />
            <FeatureCard
              title="Omnichannel Support"
              desc="Works seamlessly across chat, WhatsApp, mobile, and email."
              img="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=1200&auto=format&fit=crop"
            />
          </div>
        </section>

        {/* RESULTS */}
        <section className="grid gap-10 lg:grid-cols-2 items-center mb-20">
          <img
            src="https://plus.unsplash.com/premium_photo-1677094310893-0d6594c211ea?auto=format&fit=crop&q=60&w=1000"
            alt="data results"
            className="rounded-2xl shadow-md w-full h-80 object-cover"
          />

          <div>
            <h3 className="text-2xl font-semibold mb-3 text-blue-900">Measurable Success</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Automation frees up agent bandwidth and allows global scaling without
              expanding headcount.
            </p>

            <ul className="list-disc ml-5 text-gray-600 space-y-2 text-sm">
              <li>Reduced escalations via proactive guidance</li>
              <li>Automated troubleshooting flows</li>
              <li>Higher satisfaction via instant responses</li>
            </ul>
          </div>
        </section>

        {/* TECH STACK */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-5 text-blue-800">Technology Stack</h2>

          <div className="flex gap-3 flex-wrap">
            {[
              "Python",
              "Rasa",
              "React",
              "Node.js",
              "PostgreSQL",
              "ElasticSearch",
              "Docker",
              "AWS",
              "LangChain",
              "NLU Models",
            ].map((t) => (
              <span
                key={t}
                className="px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-sm text-blue-700"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-6 text-blue-800">Client Feedback</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <blockquote className="bg-white border border-blue-200 p-6 rounded-2xl shadow-sm">
              <p className="italic text-gray-700 mb-4">
                "We automated over 40% of our tickets within one quarter.
                The multilingual support is incredible."
              </p>
              <footer className="text-sm text-blue-700">— Director of Support</footer>
            </blockquote>
            <blockquote className="bg-white border border-blue-200 p-6 rounded-2xl shadow-sm">
              <p className="italic text-gray-700 mb-4">
                "Customer satisfaction scores improved consistently —
                our team now focuses on high-value interactions."
              </p>
              <footer className="text-sm text-blue-700">— CX Lead</footer>
            </blockquote>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-6 text-blue-800">FAQs</h2>
          <div className="space-y-3">
            <details className="bg-blue-50 border border-blue-200 p-4 rounded-xl">
              <summary className="font-medium text-blue-800 cursor-pointer">
                Does it support custom models?
              </summary>
              <p className="text-gray-700 text-sm mt-2">
                Yes — companies can integrate their own finetuned models via a modular ML API.
              </p>
            </details>

            <details className="bg-blue-50 border border-blue-200 p-4 rounded-xl">
              <summary className="font-medium text-blue-800 cursor-pointer">
                How is sensitive data handled?
              </summary>
              <p className="text-gray-700 text-sm mt-2">
                PII is encrypted server-side, with strict access roles and audit logs for compliance.
              </p>
            </details>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white border border-blue-200 p-10 rounded-2xl text-center shadow-sm">
          <h3 className="text-2xl font-semibold mb-3 text-blue-900">
            Enhance your support with intelligent automation
          </h3>
          <p className="text-gray-700 mb-6">
            Deliver faster, smarter, and more personalized assistance across all channels.
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-md">
            Book Consultation
          </button>
        </section>
      </div>
    </main>
  );
}
