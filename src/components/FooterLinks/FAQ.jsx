const FAQ = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 py-12 px-6 sm:px-12">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          Frequently Asked Questions
        </h1>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              What is your return policy?
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              We offer a 30-day return policy for all services. If youre not
              satisfied with your service, simply reach out to our support team
              for assistance.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              How do I cancel a service?
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              You can cancel any service through your account dashboard. Just go
              to the Services section, find the service, and click Cancel.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Do you offer support on weekends?
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Yes, our support team is available 7 days a week, from 9 AM to 6
              PM.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
