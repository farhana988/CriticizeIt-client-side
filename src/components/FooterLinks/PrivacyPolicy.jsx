import Heading from "../shared/Heading";

const PrivacyPolicy = () => {
  return (
    <div >
      <Heading title={"Privacy Policy"} />

      {/* Intro */}
      <div className="mt-6 space-y-4 text-sm">
        <p>
          We value your privacy and are committed to protecting your personal
          information. Your trust is our top priority, and we understand the
          importance of safeguarding your personal data.
        </p>

        <p>
          This Privacy Policy is designed to help you understand what
          information we collect, how we use it, and the steps we take to
          protect your data when you use our services.
        </p>

        <p>
          This policy also outlines the rights you have regarding your personal
          information, including how to access, update, and delete your data.
        </p>
      </div>

      {/* Grid Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">

        {/* Section */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
            1. Information We Collect
          </h2>

          <p className="mb-3 text-sm">
            We collect information you provide directly when creating an account
            or using our services.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li>Personal details (name, email address)</li>
            <li>Payment information</li>
            <li>Service usage data</li>
          </ul>
        </div>

        {/* Section */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
            2. How We Use Your Information
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li>Personalize your experience</li>
            <li>Improve service quality</li>
            <li>Provide customer support</li>
            <li>Process payments and prevent fraud</li>
          </ul>
        </div>

        {/* Section */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
            3. How We Protect Your Information
          </h2>

          <p className="text-sm">
            We use industry-standard security practices including encryption and
            secure servers to protect your data.
          </p>
        </div>

        {/* Section */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
            4. Sharing Your Information
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li>Trusted service providers assisting our platform</li>
            <li>Legal requirements or government requests</li>
            <li>Business transfers such as mergers</li>
          </ul>
        </div>

        {/* Section */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
            5. User Rights
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li>Access your personal data</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of marketing emails</li>
          </ul>
        </div>

        {/* Section */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
            6. Cookies & Tracking
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li>Cookies store user preferences</li>
            <li>You can disable cookies via browser settings</li>
          </ul>
        </div>

        {/* Section */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
            7. Third-Party Services
          </h2>

          <p className="text-sm">
            Some services may be provided by third-party platforms such as
            analytics tools or payment processors.
          </p>
        </div>

        {/* Section */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
            8. Changes to This Policy
          </h2>

          <p className="text-sm">
            We may update this policy periodically. Any changes will appear on
            this page.
          </p>
        </div>

      </div>

      {/* Contact */}
      <div className="mt-10 text-sm">
        <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
          9. Contact Us
        </h2>

        <p>
          If you have questions about this Privacy Policy, please contact our
          support team.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;