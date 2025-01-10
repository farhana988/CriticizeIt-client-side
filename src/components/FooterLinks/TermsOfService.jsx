import Heading from "../shared/Heading";

const TermsOfService = () => {
  return (
    <div className="min-h-screen py-9 container mx-auto px-6">
      <Heading title={"Terms of Service"} />
      <div className="">
        <p className="mb-4">
          By using our services, you agree to the following terms and
          conditions. Please read them carefully.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">1. Service Usage</h2>
        <p className="mb-4">
          You are responsible for using our services in a manner that complies
          with all applicable laws and regulations. You agree not to misuse or
          abuse our platform in any way, including but not limited to engaging
          in any illegal, fraudulent, or harmful activities.
        </p>
        <p className="mb-4">
          You also agree to not interfere with or disrupt the integrity of our
          services or servers. Any attempt to bypass security measures is
          strictly prohibited.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">
          2. Payment and Billing
        </h2>
        <p className="mb-4">
          Payments must be made in advance for all services. We accept various
          payment methods, including credit cards and PayPal. All billing
          information you provide must be accurate and up to date.
        </p>
        <p className="mb-4">
          Charges are subject to change at our discretion, and you will be
          notified of any changes in pricing via email or through our platform.
          You are responsible for ensuring that all payment details are correct.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">3. Termination</h2>
        <p className="mb-4">
          We reserve the right to terminate your account if you violate our
          terms of service. This includes, but is not limited to, any activities
          that involve fraudulent transactions or the misuse of our services.
        </p>
        <p className="mb-4">
          We may also suspend or terminate your services at our discretion,
          either temporarily or permanently, without notice or liability, for
          reasons such as non-payment, suspicious activity, or failure to comply
          with our policies.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">
          4. Privacy and Data Security
        </h2>
        <p className="mb-4">
          We are committed to protecting your personal data in accordance with
          our Privacy Policy. By using our services, you agree to the collection
          and use of your information as outlined in our Privacy Policy.
        </p>
        <p className="mb-4">
          You agree to take appropriate measures to protect your account and
          password information. We will not be held responsible for any
          unauthorized access or misuse of your account resulting from your
          failure to protect your login credentials.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">
          5. Limitation of Liability
        </h2>
        <p className="mb-4">
          To the fullest extent permitted by law, we shall not be liable for any
          indirect, incidental, or consequential damages arising from the use of
          our services. This includes, but is not limited to, damages resulting
          from loss of data, service interruptions, or errors in performance.
        </p>
        <p className="mb-4">
          Our total liability to you, under any circumstances, will be limited
          to the amount you have paid for the specific service causing the
          liability, within the preceding 12-month period.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">
          6. Changes to Terms
        </h2>
        <p className="mb-4">
          We reserve the right to modify or update these Terms of Service at any
          time. Any changes to these terms will be effective immediately upon
          posting on our platform. You are responsible for reviewing these terms
          periodically to stay informed about any changes.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">7. Governing Law</h2>
        <p className="mb-4">
          These Terms of Service are governed by and construed in accordance
          with the laws of the jurisdiction in which our company is based,
          without regard to its conflict of law principles. Any disputes arising
          from or related to these terms shall be resolved exclusively in the
          courts located within that jurisdiction.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
