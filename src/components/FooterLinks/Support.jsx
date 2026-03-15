import Heading from "../shared/Heading";

const contactMethods = [
  {
    title: "Email Support",
    content: "You can reach us at support@criticizeIt.com for any inquiries.",
    link: "mailto:support@criticizeIt.com",
  },
  {
    title: "Phone Support",
    content: "Call us at 1-800-123-4567 for immediate assistance.",
    link: "tel:+18001234567",
  },
  {
    title: "Live Chat",
    content:
      "You can chat with our team directly on our website during business hours.",
    link: null,
  },
];

const Support = () => {
  return (
    <div className="container mx-auto">
      <Heading title={"Support"} />
      <p className="text-sm font-medium mb-4 md:w-2/3 xl:w-1/2">
        Our support team is here to help. If you have any questions or need
        assistance, please reach out to us using one of the options below.
      </p>
      <div className="md:w-10/12 mx-auto space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Contact Methods</h2>
        <div className="space-y-6">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="bg-lCard dark:bg-dCard p-6 rounded-xl shadow-md hover:bg-indigo-200 transition-all border-b-4 border-primary"
            >
              <h3 className="text-xl font-semibold">{method.title}</h3>
              <p className="mt-2 text-xs">
                {method.link ? (
                  <a href={method.link} className="underline">
                    {method.content}
                  </a>
                ) : (
                  method.content
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Support;
