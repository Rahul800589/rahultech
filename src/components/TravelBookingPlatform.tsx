// import React from "react";

// /**
//  * TravelBookingPlatform.tsx
//  * Dark Premium Theme — Travel Booking Platform page
//  * Drop into src/pages/TravelBookingPlatform.tsx
//  */

// const Card: React.FC<{
//   title: string;
//   subtitle?: string;
//   img: string;
//   children?: React.ReactNode;
// }> = ({ title, subtitle, img, children }) => (
//   <article className="bg-[#0b2632] border border-[#183642] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
//     <div className="h-44 overflow-hidden">
//       <img src={img} alt={title} className="w-full h-full object-cover" />
//     </div>
//     <div className="p-5">
//       <h4 className="text-lg font-semibold text-white">{title}</h4>
//       {subtitle && <p className="text-sm text-gray-300 mb-3">{subtitle}</p>}
//       <div className="text-sm text-gray-300">{children}</div>
//     </div>
//   </article>
// );

// // export default function TravelBookingPlatform(): JSX.Element {
// export default function TravelBookingPlatform() {
//   return (
//     <main className="min-h-screen bg-gradient-to-b from-[#04121a] to-[#0b2732] text-white py-32 px-4">
//       <div className="max-w-6xl mx-auto">

//         {/* HERO */}
//         <header className="grid gap-8 lg:grid-cols-2 items-center mb-16">
//           <div>
//             <span className="inline-block text-sm text-orange-300 bg-white/5 px-3 py-1 rounded-full mb-4">Case Study · Travel Tech</span>
//             <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
//               Travel Booking Platform
//             </h1>
//             <p className="text-gray-300 text-lg mb-6 max-w-xl">
//               A fast, flexible travel booking platform that unifies flights, hotels, and experiences with personalized recommendations and real-time pricing.
//             </p>

//             <div className="flex flex-wrap gap-3 mb-6">
//               <button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-5 py-3 rounded-2xl shadow">Request Demo</button>
//               <a href="#packages" className="inline-flex items-center gap-2 border border-white/10 px-4 py-3 rounded-2xl text-sm text-gray-200 hover:bg-white/5">See Packages</a>
//             </div>

//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
//               <div className="text-center">
//                 <p className="text-2xl font-bold">+48%</p>
//                 <p className="text-xs text-gray-400">Bookings YOY</p>
//               </div>
//               <div className="text-center">
//                 <p className="text-2xl font-bold">99.97%</p>
//                 <p className="text-xs text-gray-400">API Uptime</p>
//               </div>
//               <div className="text-center">
//                 <p className="text-2xl font-bold">$1.2M</p>
//                 <p className="text-xs text-gray-400">Revenue / month</p>
//               </div>
//               <div className="text-center">
//                 <p className="text-2xl font-bold">Real-time</p>
//                 <p className="text-xs text-gray-400">Pricing & Availability</p>
//               </div>
//             </div>
//           </div>

//           <div className="rounded-2xl overflow-hidden shadow-lg">
//             <img
//               src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400&auto=format&fit=crop"
//               alt="travel hero"
//               className="w-full h-80 object-cover"
//             />
//           </div>
//         </header>

//         {/* Quick Search Mock */}
//         <section className="bg-[#071c24] border border-[#15333d] rounded-2xl p-6 mb-12">
//           <div className="flex flex-col md:flex-row gap-3 items-center">
//             <input className="flex-1 bg-[#071722] border border-[#12303a] rounded-lg px-4 py-3 text-gray-200" placeholder="Where to?" />
//             <input className="w-40 bg-[#071722] border border-[#12303a] rounded-lg px-4 py-3 text-gray-200" placeholder="Check-in" />
//             <input className="w-40 bg-[#071722] border border-[#12303a] rounded-lg px-4 py-3 text-gray-200" placeholder="Check-out" />
//             <select className="w-36 bg-[#071722] border border-[#12303a] rounded-lg px-4 py-3 text-gray-200">
//               <option>1 guest</option>
//               <option>2 guests</option>
//               <option>3 guests</option>
//             </select>
//             <button className="bg-orange-500 px-5 py-3 rounded-lg text-black font-semibold">Search</button>
//           </div>
//         </section>

//         {/* Overview & Challenges */}
//         <section className="grid gap-8 lg:grid-cols-3 items-start mb-12">
//           <div className="lg:col-span-2 bg-[#071e28] border border-[#153642] rounded-2xl p-8">
//             <h2 className="text-2xl font-semibold mb-4">Overview</h2>
//             <p className="text-gray-300 leading-relaxed mb-4">
//               This project reimagined an online travel marketplace to reduce search latency, unify supply across global partners, and deliver contextual recommendations based on traveler intent and behavior.
//             </p>

//             <h3 className="text-lg font-semibold mb-2">Key Challenges</h3>
//             <ul className="list-disc pl-5 text-gray-300 space-y-2">
//               <li>Fragmented supplier APIs with inconsistent data formats.</li>
//               <li>High latency for multi-leg itinerary pricing calls.</li>
//               <li>Limited personalization for mid-trip cross-sell of experiences.</li>
//               <li>Complex rate rules and cancellation policies to manage.</li>
//             </ul>
//           </div>

//           <aside className="bg-[#071722] border border-[#12303a] rounded-2xl p-6">
//             <h4 className="text-xl font-semibold mb-3">Project Snapshot</h4>
//             <div className="space-y-2 text-sm text-gray-300">
//               <div><strong>Duration:</strong> 7 months</div>
//               <div><strong>Team:</strong> 11 engineers, 2 data scientists, 1 PM</div>
//               <div><strong>Stack:</strong> React, Node.js, Redis, ElasticSearch, Kubernetes</div>
//               <div><strong>Partners:</strong> GDS, Local OTAs, Experience Providers</div>
//             </div>
//           </aside>
//         </section>

//         {/* Feature Grid */}
//         <section className="mb-12">
//           <h2 className="text-2xl font-semibold mb-6">Platform Features</h2>

//           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//             <Card
//               title="Unified Inventory"
//               subtitle="Aggregate suppliers"
//               img="https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000"
//             >
//               Consolidated search across airlines, hotels and local providers with normalization and caching to reduce API calls.
//             </Card>

//             <Card
//               title="Dynamic Pricing Engine"
//               subtitle="Real-time fare aggregation"
//               img="https://images.unsplash.com/photo-1509475826633-fed577a2c71b?q=80&w=1200&auto=format&fit=crop"
//             >
//               Intelligent pricing that factors inventory, demand, loyalty tiers, and promotional campaigns for optimized margins.
//             </Card>

//             <Card
//               title="Personalized Recommendations"
//               subtitle="Contextual suggestions"
//               img="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop"
//             >
//               Cross-sell activities and accommodations based on itinerary, travel purpose, and history.
//             </Card>

//             <Card
//               title="Fast Multi-Leg Quotes"
//               subtitle="Parallel pricing"
//               img="https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?q=80&w=1200&auto=format&fit=crop"
//             >
//               Parallelized supplier queries and smart caching for multi-leg trips to return results in under two seconds.
//             </Card>

//             <Card
//               title="Traveler Wallet & Loyalty"
//               subtitle="Integrated payments"
//               img="https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000"
//             >
//               Stored payment methods, refund flows, and loyalty points to boost repeat bookings.
//             </Card>

//             <Card
//               title="Experience Marketplace"
//               subtitle="Local tours & events"
//               img="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop"
//             >
//               Curated local offerings with instant booking and voucher delivery via email and mobile.
//             </Card>
//           </div>
//         </section>

//         {/* Visual + Merchandising */}
//         <section className="mb-12 grid gap-6 lg:grid-cols-2 items-center">
//           <div className="rounded-2xl overflow-hidden shadow-lg">
//             <img
//               src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200&auto=format&fit=crop"
//               alt="search results"
//               className="w-full h-80 object-cover"
//             />
//           </div>

//           <div>
//             <h3 className="text-2xl font-semibold mb-3">Merchandising & Offers</h3>
//             <p className="text-gray-300 mb-4 leading-relaxed">
//               Merchants and partners can create dynamic bundles and flash sales that target travelers by intent, region, and loyalty status.
//             </p>

//             <div className="grid gap-4 sm:grid-cols-2">
//               <div className="bg-[#071221] p-4 rounded-lg border border-[#12303a]">
//                 <p className="text-xs text-gray-400">Avg. Booking Value</p>
//                 <p className="text-xl font-bold">$764</p>
//               </div>
//               <div className="bg-[#071221] p-4 rounded-lg border border-[#12303a]">
//                 <p className="text-xs text-gray-400">Repeat Rate</p>
//                 <p className="text-xl font-bold">68%</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Partners strip */}
//         <section className="mb-12">
//           <h2 className="text-2xl font-semibold mb-6">Selected Partners</h2>
//           <div className="flex items-center gap-6 overflow-x-auto pb-3">
//             {[
//               "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=600&auto=format&fit=crop",
//               "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=600&auto=format&fit=crop",
//               "https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000",
//               "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop",
//             ].map((url, i) => (
//               <div key={i} className="flex-shrink-0 bg-[#071722] border border-[#12303a] rounded-lg p-3">
//                 <img src={url} alt={`partner-${i}`} className="w-32 h-16 object-cover rounded" />
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Tech stack */}
//         <section className="mb-12">
//           <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
//           <div className="flex flex-wrap gap-3">
//             {["React", "Node.js", "Redis", "ElasticSearch", "Postgres", "Kubernetes", "Docker", "AWS"].map((t) => (
//               <span key={t} className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-200">{t}</span>
//             ))}
//           </div>
//         </section>

//         {/* Testimonials */}
//         <section className="mb-12">
//           <h2 className="text-2xl font-semibold mb-6">Customer Testimonials</h2>
//           <div className="grid md:grid-cols-2 gap-6">
//             <div className="bg-[#071722] p-6 rounded-2xl border border-[#12303a]">
//               <p className="italic text-gray-300 mb-4">
//                 "Search response times dropped from 6 seconds to below 1 second. Conversion increased across all channels."
//               </p>
//               <p className="text-sm font-medium">— Head of Product, Global OTA</p>
//             </div>
//             <div className="bg-[#071722] p-6 rounded-2xl border border-[#12303a]">
//               <p className="italic text-gray-300 mb-4">
//                 "The experience marketplace added a new revenue stream and improved guest satisfaction on trips."
//               </p>
//               <p className="text-sm font-medium">— VP Partnerships</p>
//             </div>
//           </div>
//         </section>

//         {/* FAQ */}
//         <section className="mb-12">
//           <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
//           <div className="space-y-4">
//             <details className="bg-[#071b24] p-4 rounded-lg border border-[#12303a]">
//               <summary className="font-medium cursor-pointer">How are supplier APIs normalized?</summary>
//               <div className="mt-2 text-gray-300 text-sm">
//                 We use a canonical data model and adapter layer. Providers are normalized into unified schemas and validated before indexing.
//               </div>
//             </details>

//             <details className="bg-[#071b24] p-4 rounded-lg border border-[#12303a]">
//               <summary className="font-medium cursor-pointer">Can we integrate our loyalty program?</summary>
//               <div className="mt-2 text-gray-300 text-sm">
//                 Yes. The platform supports custom loyalty mappings, point accruals, and redemption flows through the wallet module.
//               </div>
//             </details>
//           </div>
//         </section>

//         {/* CTA Footer */}
//         <footer className="bg-[#06121a] border border-[#103039] rounded-2xl p-8 text-center">
//           <h3 className="text-2xl font-semibold mb-3">Launch a modern travel experience</h3>
//           <p className="text-gray-300 mb-6">Book a technical workshop and prototype your core booking flows with our engineers.</p>
//           <div className="flex flex-col sm:flex-row gap-3 justify-center">
//             <button className="bg-orange-500 px-6 py-3 rounded-full font-semibold text-black hover:bg-orange-600">Schedule Workshop</button>
//             <a href="/projects" className="px-6 py-3 rounded-full border border-white/10 text-sm text-gray-200 hover:bg-white/5">View More Projects</a>
//           </div>
//         </footer>

//       </div>
//     </main>
//   );
// }










import React from "react";

const Card: React.FC<{
  title: string;
  subtitle?: string;
  img: string;
  children?: React.ReactNode;
}> = ({ title, subtitle, img, children }) => (
  <article className="bg-white border border-orange-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
    <div className="h-44 overflow-hidden">
      <img src={img} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-5">
      <h4 className="text-lg font-semibold text-orange-800">{title}</h4>
      {subtitle && <p className="text-sm text-orange-600 mb-3">{subtitle}</p>}
      <div className="text-sm text-gray-700">{children}</div>
    </div>
  </article>
);

export default function TravelBookingPlatform() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-100 text-gray-900 py-32 px-4">
      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <header className="grid gap-8 lg:grid-cols-2 items-center mb-16">
          <div>
            <span className="inline-block text-sm text-orange-700 bg-orange-100 px-3 py-1 rounded-full mb-4 font-medium">
              Case Study · Travel Tech
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-orange-900">
              Travel Booking Platform
            </h1>
            <p className="text-gray-700 text-lg mb-6 max-w-xl">
              A fast, flexible travel booking platform that unifies flights, hotels,
              and experiences — with personalized recommendations and real-time pricing.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-5 py-3 rounded-2xl shadow-md">
                Request Demo
              </button>
              <a
                href="#packages"
                className="inline-flex items-center gap-2 border border-orange-300 px-4 py-3 rounded-2xl text-sm text-orange-700 hover:bg-orange-50 transition"
              >
                See Packages
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
              {[
                { value: "+48%", label: "Bookings YOY" },
                { value: "99.97%", label: "API Uptime" },
                { value: "$1.2M", label: "Revenue / month" },
                { value: "Real-time", label: "Pricing & Availability" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl font-bold text-orange-800">{stat.value}</p>
                  <p className="text-xs text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400&auto=format&fit=crop"
              alt="travel hero"
              className="w-full h-80 object-cover"
            />
          </div>
        </header>

        {/* Quick Search Mock */}
        <section className="bg-white border border-orange-200 rounded-2xl p-6 mb-12 shadow-sm">
          <div className="flex flex-col md:flex-row gap-3 items-center">
            <input
              className="flex-1 bg-orange-50 border border-orange-200 rounded-lg px-4 py-3 text-gray-700"
              placeholder="Where to?"
            />
            <input
              className="w-40 bg-orange-50 border border-orange-200 rounded-lg px-4 py-3 text-gray-700"
              placeholder="Check-in"
            />
            <input
              className="w-40 bg-orange-50 border border-orange-200 rounded-lg px-4 py-3 text-gray-700"
              placeholder="Check-out"
            />
            <select className="w-36 bg-orange-50 border border-orange-200 rounded-lg px-4 py-3 text-gray-700">
              <option>1 guest</option>
              <option>2 guests</option>
              <option>3 guests</option>
            </select>
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-3 rounded-lg font-semibold shadow-md">
              Search
            </button>
          </div>
        </section>

        {/* Overview & Challenges */}
        <section className="grid gap-8 lg:grid-cols-3 items-start mb-12">
          <div className="lg:col-span-2 bg-white border border-orange-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-orange-800">Overview</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              This project reimagined an online travel marketplace to reduce search latency,
              unify supply across partners, and deliver contextual recommendations for travelers.
            </p>

            <h3 className="text-lg font-semibold mb-2 text-orange-800">Key Challenges</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Fragmented supplier APIs with inconsistent data formats.</li>
              <li>High latency for multi-leg itinerary pricing calls.</li>
              <li>Limited personalization for mid-trip cross-sell of experiences.</li>
              <li>Complex rate rules and cancellation policies to manage.</li>
            </ul>
          </div>

          <aside className="bg-orange-50 border border-orange-200 rounded-2xl p-6 shadow-sm">
            <h4 className="text-xl font-semibold mb-3 text-orange-800">
              Project Snapshot
            </h4>
            <div className="space-y-2 text-sm text-gray-700">
              <div><strong>Duration:</strong> 7 months</div>
              <div><strong>Team:</strong> 11 engineers, 2 data scientists, 1 PM</div>
              <div><strong>Stack:</strong> React, Node.js, Redis, ElasticSearch, Kubernetes</div>
              <div><strong>Partners:</strong> GDS, Local OTAs, Experience Providers</div>
            </div>
          </aside>
        </section>

        {/* Feature Grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-orange-800">Platform Features</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card
              title="Unified Inventory"
              subtitle="Aggregate suppliers"
              img="https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&q=60&w=1000"
            >
              Consolidated search across airlines, hotels, and local providers — reducing API calls with caching and normalization.
            </Card>

            <Card
              title="Dynamic Pricing Engine"
              subtitle="Real-time fare aggregation"
              img="https://images.unsplash.com/photo-1509475826633-fed577a2c71b?q=80&w=1200&auto=format&fit=crop"
            >
              Intelligent pricing that factors demand, loyalty tiers, and promotions for optimized margins.
            </Card>

            <Card
              title="Personalized Recommendations"
              subtitle="Contextual suggestions"
              img="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop"
            >
              Cross-sell activities and accommodations based on itinerary and travel history.
            </Card>

            <Card
              title="Fast Multi-Leg Quotes"
              subtitle="Parallel pricing"
              img="https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?q=80&w=1200&auto=format&fit=crop"
            >
              Parallel supplier queries and smart caching return multi-leg trips in under two seconds.
            </Card>

            <Card
              title="Traveler Wallet & Loyalty"
              subtitle="Integrated payments"
              img="https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&q=60&w=1000"
            >
              Stored payment methods, refund flows, and loyalty points boost repeat bookings.
            </Card>

            <Card
              title="Experience Marketplace"
              subtitle="Local tours & events"
              img="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop"
            >
              Curated local offerings with instant booking and mobile voucher delivery.
            </Card>
          </div>
        </section>

        {/* CTA Footer */}
        <footer className="bg-orange-50 border border-orange-200 rounded-2xl p-8 text-center shadow-sm">
          <h3 className="text-2xl font-semibold mb-3 text-orange-800">
            Launch a modern travel experience
          </h3>
          <p className="text-gray-700 mb-6">
            Book a technical workshop and prototype your core booking flows with our engineers.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 rounded-full font-semibold text-white hover:from-orange-600 hover:to-orange-700 shadow-md">
              Schedule Workshop
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
