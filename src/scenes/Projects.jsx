import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title }) => {
  const overlayStyles = `absolute  h-full w-full max-w-[400px] opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center  p-16 text-dark-1`;

  const projectTitle = title
    .trim()
    .trimLeft()
    .split(" ")
    .join("-")
    .toLowerCase();
  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7 ">
          Eum laboriosam officia sequi, ex ad nesciunt alias unde quas tenetur,
          aut laborum iure vitae accusamus molestiae asperiores.
        </p>
      </div>
      <img src={`assets/${projectTitle}.jpg`} alt={projectTitle} />
    </motion.div>
  );
};
const Projects = ({ setSelectedPage }) => {
  return (
    <section id="projects" className="pt-48 pb-48">
      <motion.div
        className="md:w-2/5 mx-auto text-center  "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
        onViewportEnter={() => setSelectedPage("projects")}
      >
        <p className="font-playfair mb-2 font-semibold text-4xl">
          <span className="text-primary-1">PRO</span>JECTS
        </p>
        <div className="flex justify-center mt-5">
          <LineGradient width="w-1/3" />
        </div>
        <p className="font-playfair text-sm mt-10 mb-2 ">
          I am constantly expanding my{" "}
          <span className="text-primary-1">knowledge</span> in my spare time
          after my job. Each project presented unique challenges that I was able
          to overcome through <span className="text-primary-1">creativity</span>{" "}
          and <span className="text-primary-1">problem-solving</span> skills.
        </p>
        <p className="font-playfair text-sm mb-7 ">
          Through my training in various technologies, I have developed the
          following projects:
        </p>
      </motion.div>

      {/* PROJCECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
          onViewportEnter={() => setSelectedPage("projects")}
        >
          <div
            className="flex justify-center text-center items-center p-10 bg-primary-2
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project title="Project 1" />
          <Project title="Project 2" />
          <Project title="Project 3" />
          <Project title="Project 4" />
          <Project title="Project 5" />
          <Project title="Project 6" />
          <Project title="Project 7" />
          <div
            className="flex justify-center text-center items-center p-10 bg-primary-2
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPIRIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
