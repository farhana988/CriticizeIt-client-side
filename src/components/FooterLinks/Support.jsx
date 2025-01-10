

const Support = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 py-12 px-6 sm:px-12">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Support</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Our support team is here to help. If you have any questions or need assistance, please reach out to us using one of the options below.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-6 mb-4">Contact Methods</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Email Support</h3>
            <p className="text-gray-700 dark:text-gray-300">You can reach us at support@example.com for any inquiries.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Phone Support</h3>
            <p className="text-gray-700 dark:text-gray-300">Call us at 1-800-123-4567 for immediate assistance.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Live Chat</h3>
            <p className="text-gray-700 dark:text-gray-300">You can chat with our team directly on our website during business hours.</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Support;
