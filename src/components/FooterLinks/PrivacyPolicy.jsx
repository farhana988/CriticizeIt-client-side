

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 py-12 px-6 sm:px-12">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Privacy Policy</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          We value your privacy and are committed to protecting your personal information. This privacy policy outlines how we collect, use, and protect your data when using our services.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-6 mb-4">1. Information We Collect</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          We collect information you provide directly to us, including when you create an account, use our services, and communicate with us. This includes:
        </p>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
          <li>Personal details (e.g., name, email address)</li>
          <li>Payment information</li>
          <li>Service usage data</li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-6 mb-4">2. How We Use Your Information</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The information we collect is used to provide and improve our services, process payments, and communicate with you. We may also use your data for marketing purposes, such as sending promotional offers.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-6 mb-4">3. How We Protect Your Information</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          We use industry-standard security measures to protect your information, including encryption and secure servers.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
