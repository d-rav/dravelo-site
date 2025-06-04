import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      company: "Sophos",
      role: "Software Engineer",
      location: "Vancouver, Canada (Remote)",
      period: "November 2021 - November 2024",
      description: [
        "Built the integrations dashboard and their create/edit workflows that allow the third-party products to send data to the Sophos Data Lake.",
        "Built the XDR Global Search page, enabling users to search the Sophos Data Lake using either a user-friendly query builder or free-text input for Lucene syntax queries.",
        "Used Jest and Jasmine to add unit test coverage for new frontend features."
      ]
    },
    {
      company: "Ziro (formerly Stack8)",
      role: "Frontend Developer",
      location: "Montréal, Canada (Remote)",
      period: "March 2020 - November 2021",
      description: [
        "Migrated SMACS, a Cisco UC provisioning tool, from AngularJS to Angular 9.",
        "Designed and developed custom reusable components in Angular used throughout the SMACS web application.",
        "Wrote unit and end-to-end tests in Java for the SMACS web app using Selenium and JUnit.",
      ]
    },
    {
      company: "Vitay",
      role: "Full-Stack Developer (Intern)",
      location: "Vancouver, Canada",
      period: "May 2018 - Dec. 2018",
      description: [
        "Joined the startup in its first year and built Vitay, an online tool for job recruiters and candidates that streamlines job search, reference checking and leads generation processes.",
        "Developed the Vitay frontend using Angular and the Vitay API backend using Ruby on Rails based on the JSON API spec.",
        "Helped grow the platform from 0 to over 100 customers and $4000+ CAD in monthly revenue during internship.",
        "Vitay was successfully acquired by Sureswift Capital in 2022."
      ]
    },
    {
      company: "AnalysisWorks",
      role: "Full-Stack Developer (Intern)",
      location: "Vancouver, Canada",
      period: "Sept. 2017 - Apr. 2018",
      description: [
        "Used Angular to develop new features for Lighthouse, a web app used by multiple health authorities across Canada for hospital data analytics and resource management.",
        "Refactored Lighthouse's RESTful API using Node.js / Express and added new endpoints.",
        "Wrote unit and integration tests for the API using Mocha/Chai/Sinon.JS.",
        "Improved the app's performance by adding Redis in-memory caching."
      ]
    }
  ];

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div
      id="experience"
      className="flex min-h-[20vh] w-full flex-col items-center justify-center py-16 scroll-mt-24"
    >
      <motion.h1
        initial="hidden"
        whileInView="visible"
        variants={variants}
        transition={{ duration: 0.5 }}
        className="mb-16 text-4xl font-light text-white md:text-5xl"
      >
        Experience
      </motion.h1>
      <div className="flex w-full max-w-4xl flex-col gap-8 px-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            variants={variants}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-lg border border-gray-800/50 bg-black/30 p-6 backdrop-blur-sm"
          >
            <div className="mb-4 flex flex-col justify-between gap-2 md:flex-row md:items-center">
              <div>
                <h3 className="bg-gradient-to-r from-cyan-600 to-teal-400 bg-clip-text text-xl font-semibold text-transparent">
                  {exp.role}
                </h3>
                <p className="text-lg text-white">{exp.company}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-400">{exp.location}</p>
                <p className="text-sm text-gray-400">{exp.period}</p>
              </div>
            </div>
            <ul className="ml-4 list-disc text-gray-300">
              {exp.description.map((point, idx) => (
                <li key={idx} className="mb-2 text-sm md:text-base">
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
