import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen pt-28 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-orange-500 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600">
            Last updated: November 11, 2025 | ATS GLOBAL TECH, India
          </p>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center mb-12">
          <img
            src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
            alt="Privacy Illustration"
            className="w-full md:w-3/4 rounded-2xl shadow-lg"
          />
        </div>

        {/* Section Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-3 text-orange-500">
              Information We Collect
            </h2>
            <p className="text-gray-600">
              We collect information such as your name, email, phone number, and
              browsing behavior to improve our services. Cookies and analytics
              tools are used to enhance your experience.
            </p>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-3 text-orange-500">
              How We Use Your Data
            </h2>
            <p className="text-gray-600">
              Your data helps us personalize our website, provide customer
              support, and send updates. We never sell or rent your personal
              information to third parties.
            </p>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-3 text-orange-500">
              Security Measures
            </h2>
            <p className="text-gray-600">
              We implement strict data protection measures including encryption,
              firewalls, and secure data storage to safeguard your personal
              information.
            </p>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-3 text-orange-500">
              Your Rights
            </h2>
            <p className="text-gray-600">
              You can request data access, corrections, or deletion by emailing
              us at{" "}
              <span className="text-orange-600 font-medium">
                info@atsglobaltech.in
              </span>
              .
            </p>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-16">
          <p className="text-gray-500 text-sm">
            For more information, contact us at{" "}
            <span className="text-orange-600">info@atsglobaltech.in</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
