import { faqData } from "../../data/faqData";
import Heading from "../shared/Heading";

const FAQ = () => {
  return (
    <div className="min-h-screen container mx-auto px-6 py-10">
      <Heading title={"Frequently Asked Questions"} />

      <div className="md:w-10/12 mx-auto mt-8">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="collapse collapse-arrow bg-lCard dark:bg-dCard mb-4 border-b-4 border-primary"
          >
            <input
              type="radio"
              name="faq-accordion"
              defaultChecked={index === 0}
            />

            <div className="collapse-title font-medium">{faq.question}</div>

            <div className="collapse-content text-xs">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
