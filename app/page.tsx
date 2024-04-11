import Image from "next/image";
import avatar from "./avatar.png";
import { FaTwitter, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Page() {
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
          <p>Currently, MTS @Oracle.</p>
          <div className="flex mt-4">
            <a
              href="mailto:jaimingajjar01@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4"
            >
              <FaEnvelope size={24} />{" "}
            </a>
            <a
              href="https://twitter.com/jaiminsg"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4"
            >
              <FaTwitter size={24} />
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
    </div>
  );
}
