import { termsData } from "../../data/termsdata";
import Heading from "../shared/Heading";

const TermsOfService = () => {
  return (
    <div>
      <Heading title={"Terms of Service"} />

      <p className="max-w-3xl text-sm text-gray-600 dark:text-gray-300 mt-6 mb-10">
        By using our services, you agree to the following terms and conditions.
        Please read them carefully to understand your rights and
        responsibilities when using our platform.
      </p>

      {/* Terms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {termsData.map((term, index) => (
          <div
            key={index}
            className="bg-lCard dark:bg-dCard p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
              {term.title}
            </h2>

            {term.content.map((paragraph, i) => (
              <p
                key={i}
                className="text-xs text-gray-600 dark:text-gray-300 mb-2"
              >
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TermsOfService;
