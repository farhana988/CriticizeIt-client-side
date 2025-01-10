

const TermsOfService = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 py-12 px-6 sm:px-12">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Terms of Service</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          By using our services, you agree to the following terms and conditions.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-6 mb-4">1. Service Usage</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          You are responsible for using our services in a manner that complies with all applicable laws and regulations.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-6 mb-4">2. Payment and Billing</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Payments must be made in advance for all services. We accept various payment methods, including credit cards and PayPal.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-6 mb-4">3. Termination</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          We reserve the right to terminate your account if you violate our terms of service. We may also suspend your services for any reason at any time.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
