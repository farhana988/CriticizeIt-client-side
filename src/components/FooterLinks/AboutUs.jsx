import Heading from "../shared/Heading";

const AboutUs = () => {
  return (
    <section className="py-10 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Heading  */}
        <Heading title="About Us" />
        {/* who are we */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div className="text-justify">
            <h2 className="text-3xl font-semibold text-center">Who We Are</h2>
            <p className="mt-4 text-lg opacity-70">
              We are a passionate team dedicated to enhancing the lives of our
              customers with exceptional services in cleaning, training, and
              event planning. Founded to deliver high-quality solutions, we aim
              to make everyday life easier and more enjoyable. From spotless
              homes to helping clients achieve fitness goals and planning
              unforgettable events, we offer personalized services tailored to
              individual needs. We are committed to building lasting
              relationships based on trust, reliability, and outstanding
              service, continuously innovating to exceed expectations and make a
              positive impact on every client we serve.
            </p>
          </div>
          {/* Core Values */}
          <div className="text-justify">
            <h2 className="text-3xl font-semibold  text-center">
              Our Core Values
            </h2>
            <ul className="list-disc pl-8 mt-4 space-y-3 text-lg opacity-70">
              <li>Quality: We strive for excellence in everything we do.</li>
              <li>
                Integrity: We are committed to honesty and transparency in our
                services.
              </li>
              <li>
                Customer-Centric: Our clients are at the heart of our business,
                and we aim to exceed their expectations.
              </li>
              <li>
                Innovation: We continuously improve our offerings to meet the
                evolving needs of our customers.
              </li>
              <li>
                Teamwork: We believe in collaboration and working together to
                achieve common goals.
              </li>
            </ul>
          </div>
        </section>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div
            className="text-center bg-lCard dark:bg-dCard shadow-primary p-6
          rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold ">Our Mission</h3>
            <p className="mt-4 text-lg opacity-70">
              Our mission is to provide reliable and affordable services to help
              our clients live better, cleaner, and more organized lives. We
              focus on creating lasting relationships with our customers through
              exceptional service and quality.
            </p>
          </div>
          <div
            className="text-center bg-lCard dark:bg-dCard shadow-primary p-6
          rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold ">Our Vision</h3>
            <p className="mt-4 text-lg opacity-70">
              We envision a world where our services make everyday life easier
              for individuals and businesses alike. Our goal is to be the go-to
              provider for all home and personal service needs, delivering
              efficiency and satisfaction.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-14 text-center">
          <h2 className="text-3xl font-semibold ">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {/* Team Member 1 */}
            <div className="bg-lCard dark:bg-dCard shadow-primary p-6 rounded-lg shadow-lg">
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto"
              />
              <h4 className="mt-4 text-xl font-semibold ">John Doe</h4>
              <p className="mt-2 text-lg opacity-70">CEO & Founder</p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-lCard dark:bg-dCard shadow-primary p-6 rounded-lg shadow-lg">
              <img
                src="https://randomuser.me/api/portraits/women/1.jpg"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto"
              />
              <h4 className="mt-4 text-xl font-semibold ">Jane Smith</h4>
              <p className="mt-2 text-lg opacity-70">COO</p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-lCard dark:bg-dCard shadow-primary p-6 rounded-lg shadow-lg">
              <img
                src="https://randomuser.me/api/portraits/men/2.jpg"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto"
              />
              <h4 className="mt-4 text-xl font-semibold ">Michael Johnson</h4>
              <p className="mt-2 text-lg opacity-70">CTO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
