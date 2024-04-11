import Image from "next/image";
import avatar from "./avatar.png";
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import ExperienceSection from "./components/experience";

export default function Page() {
  const experiences = [
    {
      heading: "Oracle Corporation - Project Intern",
      timeline: "May 2023 – July 2023",
      techStack:
        "Flask, SQL Developer, Data Analysis tools (pandas, scipy, prophet, etc)",
      points: [
        "Server Farm Job Queue Analysis, Modeling, and Simulation over 10 million data points, from 80+ attributes.",
        "Thorough analysis to devise optimization methods, leading to proper resource management and allocation which increased efficiency.",
        "Developed an internal tool using time series and regressive modeling to simulate 'What-if' scenarios when machines for certain OS /OS flavor /regions /RAM range are changed and intersections among them.",
      ],
    },
    {
      heading: "Microsoft Cybersecurity Engage",
      timeline: "May 2022 – June 2022",
      techStack:
        "MITRE ATT&CK, Autopsy, Scripting, IDS, Firewalls, Iptables Cybersecurity",
      points: [
        "Implemented raid-bot to secure any critical infrastructure in case of any False Data Injection Attack (FDIA) and By-pass Logic Attack by using SHA256 cryptographic hash function and data consistency rules.",
      ],
    },
  ];

  return (
    <div>
      <section className="flex items-center">
        <div className="mr-8">
          <Image
            alt="Jaimin Gajjar"
            src={avatar}
            height={64}
            width={64}
            className="h-48 w-48 rounded-full border border-neutral-200 dark:border-neutral-900"
          />
        </div>
        <div>
          <h1 className="font-medium text-2xl mb-2 tracking-tighter">
            Jaimin Gajjar
          </h1>
          <p className="prose prose-neutral dark:prose-invert mb-2">
            Not so interesting curious guy.
          </p>
          <p>Mostly experimenting with developer stuff, GenAI, etc.</p>
          <p>Also, MTS @Oracle.</p>
          <div className="flex mt-4">
            <a
              href="https://twitter.com/jaiminsg"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com/jaimin002"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://github.com/jaimin001"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/jaimin-gajjar-0386b31b9/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </section>
      <hr className="my-8 border-t border-neutral-200 dark:border-neutral-700" />
      <ExperienceSection experiences={experiences} />

      <div className="mt-8 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Education</h3>
        <div className="mb-4">
          <h4 className="text-base font-medium">
            Indian Institute of Technology, Jodhpur
          </h4>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Nov. 2020 – May 2024
          </p>
          <p className="text-sm">
            B.Tech. in Artificial Intelligence and Data Science
          </p>
        </div>
      </div>
    </div>
  );
}
