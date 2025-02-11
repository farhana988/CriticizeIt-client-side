import Heading from "../shared/Heading";

const Support = () => {
  return (
    <div className="min-h-screen py-10 container mx-auto px-6">
      <Heading title={"Support"} />
      <div className=" md:w-10/12 mx-auto space-y-6">
        <p className="text-xl font-medium mb-4">
          Our support team is here to help. If you have any questions or need
          assistance, please reach out to us using one of the options below.
        </p>

        <h2 className="text-3xl font-semibold  mb-4">Contact Methods</h2>

        <div className="space-y-6">
          {/* Email Support */}
          <div className=" bg-lCard dark:bg-dCard  p-6 rounded-xl shadow-md
           hover:bg-indigo-200 transition-all border-b-4 border-primary">
            <h3 className="text-2xl font-semibold ">Email Support</h3>
            <p className="mt-2">
              You can reach us at{" "}
              <a
                href="mailto:support@example.com"
                className="underline"
              >
                support@criticizeIt.com
              </a>{" "}
              for any inquiries.
            </p>
          </div>

          {/* Phone Support */}
          <div className="  bg-lCard dark:bg-dCard    p-6 rounded-xl shadow-md
            hover:bg-indigo-200 transition-all border-b-4 border-primary">
            <h3 className="text-2xl font-semibold ">Phone Support</h3>
            <p className="mt-2">
              Call us at{" "}
              <a href="tel:+18001234567" className="underline ">
                1-800-123-4567
              </a>{" "}
              for immediate assistance.
            </p>
          </div>

          {/* Live Chat */}
          <div className="  bg-lCard dark:bg-dCard    p-6 rounded-xl shadow-md
            hover:bg-indigo-200 transition-all border-b-4 border-primary">
            <h3 className="text-2xl font-semibold ">Live Chat</h3>
            <p className="mt-2">
              You can chat with our team directly on our website during business
              hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
