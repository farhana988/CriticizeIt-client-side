import Heading from "../shared/Heading";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen py-9 container mx-auto px-6">
      <div>
        <Heading title={"Privacy Policy"} />

        <p className="">
          We value your privacy and are committed to protecting your personal
          information. Your trust is our top priority, and we understand the
          importance of safeguarding your personal data. This Privacy Policy is
          designed to help you understand what information we collect, how we
          use it, and the steps we take to protect your data when you use our
          services.
        </p>

        <p className="my-4">
          As part of our commitment to transparency, this policy explains our
          data collection practices, how we handle your information, and the
          security measures we implement to ensure your data is protected. By
          accessing or using our website or services, you agree to the terms of
          this policy. If you do not agree with this policy, we recommend that
          you do not use our services.
        </p>

        <p className="mb-4">
          This policy also outlines the rights you have regarding your personal
          information, including how to access, update, and delete your data. We
          strive to be compliant with privacy laws and regulations, including
          data protection laws, to ensure that your information is handled
          responsibly and securely.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">
          1. Information We Collect
        </h2>
        <p className="mb-4">
          We collect information you provide directly to us, including when you
          create an account, use our services, and communicate with us. This
          includes:
        </p>
        <ul className="list-disc pl-6">
          <li>Personal details (e.g., name, email address)</li>
          <li>Payment information</li>
          <li>Service usage data (e.g., frequency of use, interactions)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">
          2. How We Use Your Information
        </h2>
        <p className="mb-4">
          The information we collect is used to provide and improve our
          services, process payments, and communicate with you. We may also use
          your data for marketing purposes, such as sending promotional offers.
        </p>
        <ul className="list-disc pl-6">
          <li>
            To personalize your experience and provide content tailored to you
          </li>
          <li>To improve our services and ensure their quality</li>
          <li>For customer support and responding to inquiries</li>
          <li>For processing payments and preventing fraud</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">
          3. How We Protect Your Information
        </h2>
        <p className="mb-4">
          We use industry-standard security measures to protect your
          information, including encryption and secure servers. However, please
          note that no method of transmission over the Internet or electronic
          storage is 100% secure. While we strive to protect your personal data,
          we cannot guarantee its absolute security.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">
          4. Sharing Your Information
        </h2>
        <p className="mb-4">
          We do not sell, rent, or share your personal data with third parties
          without your consent, except in the following cases:
        </p>
        <ul className="list-disc pl-6">
          <li>
            With trusted third-party service providers who assist us in
            operating our services, such as payment processors, email services,
            or customer support platforms
          </li>
          <li>
            When required by law or to comply with legal obligations (e.g., in
            response to a subpoena or government request)
          </li>
          <li>
            In case of a merger, acquisition, or sale of our business assets, in
            which case your data may be transferred
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">5. User Rights</h2>
        <p className="mb-4">
          You have the following rights regarding your personal data:
        </p>
        <ul className="list-disc pl-6">
          <li>
            Access to your personal data: You can request a copy of the
            information we hold about you.
          </li>
          <li>
            Rectification: You can request correction of inaccurate or
            incomplete data.
          </li>
          <li>
            Erasure: You can request the deletion of your data, subject to
            certain exceptions (e.g., legal obligations).
          </li>
          <li>
            Opt-out of marketing communications: You can choose not to receive
            promotional emails by unsubscribing from our mailing list.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">
          6. Cookies and Tracking Technologies
        </h2>
        <p className="mb-4">
          We use cookies and other tracking technologies (such as web beacons
          and pixel tags) to collect information about your activities on our
          website. This helps us enhance your experience and provide
          personalized content.
        </p>
        <ul className="list-disc pl-6">
          <li>
            Cookies are small text files that are stored on your device and help
            us remember your preferences.
          </li>
          <li>
            You can manage your cookie preferences through your browser
            settings, but disabling certain cookies may impact your experience
            with our website.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">
          7. Third-Party Services
        </h2>
        <p className="mb-4">
          We may use third-party services to assist in delivering our services,
          such as payment processors, analytics tools, or marketing platforms.
          These third-party services may have access to your data, but they are
          obligated not to disclose or use it for any other purposes.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">
          8. Changes to This Privacy Policy
        </h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. When we do, we
          will notify you by updating the “last updated” date at the top of this
          page. We encourage you to review this policy periodically to stay
          informed about how we protect your information.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">9. Contact Us</h2>
        <p className="mb-4">
          If you have any questions or concerns about this Privacy Policy,
          please contact us at support.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
