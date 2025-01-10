import Heading from "../shared/Heading";

const FAQ = () => {
  return (
    <div className="min-h-screen py-9 container mx-auto px-6">
        <Heading title={"Frequently Asked Questions"} />
      <div className="md:w-10/12 mx-auto">
      
        {/* accordion */}
        <div className="collapse collapse-arrow bg-lCard dark:bg-dCard mb-4 border-b-4 border-primary">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            How do I cancel a service?
          </div>
          <div className="collapse-content">
            <p>
              You can cancel any service through your account dashboard. Just go
              to the Services section, find the service, and click Cancel.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-lCard dark:bg-dCard mb-4 border-b-4 border-primary">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Do you offer support on weekends?
          </div>
          <div className="collapse-content">
            <p>
              Yes, our support team is available 7 days a week, from 9 AM to 6
              PM.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-lCard dark:bg-dCard mb-4 border-b-4 border-primary">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            What is your return policy?
          </div>
          <div className="collapse-content">
            <p>
              We offer a 30-day return policy for all services. If you are not
              satisfied with your service, simply reach out to our support team
              for assistance.
            </p>
          </div>
        </div>
        {/* Additional Questions */}
        <div className="collapse collapse-arrow bg-lCard dark:bg-dCard mb-4 border-b-4 border-primary">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            How can I update my payment details?
          </div>
          <div className="collapse-content">
            <p>
              You can update your payment details under the Payment Settings
              section in your account dashboard. Simply click Update Payment
              Method to make changes.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-lCard dark:bg-dCard mb-4 border-b-4 border-primary">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Are your services available in my location?
          </div>
          <div className="collapse-content">
            <p>
              We offer services in multiple locations. Please check our Service
              Availability page to see if your location is covered.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-lCard dark:bg-dCard mb-4 border-b-4 border-primary">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            How can I contact customer support?
          </div>
          <div className="collapse-content">
            <p>
              You can reach our customer support team by visiting our Contact Us
              page or by emailing us at support@yourservice.com.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-lCard dark:bg-dCard mb-4 border-b-4 border-primary">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Can I change my service plan?
          </div>
          <div className="collapse-content">
            <p>
              Yes, you can change your service plan at any time through your
              account dashboard. Just go to the Service Plans section to make
              the switch.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
