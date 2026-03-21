import { coreValues, mission, teamMembers } from "../../data/aboutData";
import Heading from "../shared/Heading";

const AboutUs = () => {
  return (
    <section>
      {/* Heading */}
      <Heading title="About Us" />

      {/* Who We Are + Core Values */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <div className="text-justify">
          <h2 className="text-xl font-semibold text-center">Who We Are</h2>
          <p className="mt-4 text-xs opacity-70">
            We are a passionate team dedicated to enhancing the lives of our
            customers with exceptional services in cleaning, training, and event
            planning. Founded to deliver high-quality solutions, we aim to make
            everyday life easier and more enjoyable.
          </p>
        </div>

        <div className="text-justify">
          <h2 className="text-xl font-semibold text-center">Our Core Values</h2>
          <ul className="list-disc pl-4 md:pl-8 mt-4 space-y-1 text-xs opacity-70">
            {coreValues.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {mission.map((item, index) => (
          <div
            key={index}
            className="text-center bg-lCard dark:bg-dCard shadow-primary p-6 
            rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="mt-4 text-xs opacity-70">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Team Section */}
      <div className="mt-14 text-center">
        <h2 className="text-3xl font-semibold">Meet the Team</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-lCard dark:bg-dCard shadow-primary p-6 rounded-lg 
              shadow-md"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-20 h-20 rounded-full mx-auto"
              />
              <h4 className="mt-4 font-semibold">{member.name}</h4>
              <p className="mt-1 text-xs opacity-70">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
