import React from "react";

interface Experience {
  heading: string;
  timeline: string;
  techStack: string;
  points: string[];
}

interface Props {
  experiences: Experience[];
}

const ExperienceSection: React.FC<Props> = ({ experiences }) => {
  return (
    <section className="mt-8 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
        Background
      </h2>

      <div className="mb-8">
        <h3 className="text-xl font-medium mb-4 text-gray-800 dark:text-gray-200">
          Experience
        </h3>

        {experiences.map((exp, index) => (
          <div key={index} className="mb-6">
            <h4 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200">
              {exp.heading}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              {exp.timeline}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              {exp.techStack}
            </p>
            <ul className="list-disc pl-6 text-sm text-gray-600 dark:text-gray-400">
              {exp.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
