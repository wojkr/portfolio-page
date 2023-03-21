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

const Project = ({ title, name, desc }) => {
  const overlayStyles = `absolute  h-full w-full max-w-[400px] opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center text-sm md:text-base md:p-10  p-0 text-dark-1`;

  const projectTitle = title
    .trim()
    .trimLeft()
    .split(" ")
    .join("-")
    .toLowerCase();
  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair ">{name}</p>
        <p className=" mt-7 sm:mt-0 lg:mt-7  font-playfair">{desc}</p>
      </div>
      <img src={`assets/${projectTitle}.jpg`} alt={name} />
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
            className="flex justify-center text-center items-center py-16 bg-primary-2
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            <p className="">
              FRONT-END <br />
              <span className="font-thin text-xl italic">
                Visually Stunning UI
              </span>
            </p>
          </div>
          <Project
            title="Project 6"
            name="CardioLab Fitness"
            desc="This project is front-end focused, with a priority on custom-made PNGs and UX design. CardioLab Fitness website was built using React, TypeScript, framer-motion, tailwindcss, vite and Photopea."
          />
          <Project
            title="Project 5"
            name="Rokku Social app"
            desc='"Rokku" is a dynamic full-stack social media platform that offers users a customized experience with its light/dark mode feature. Built using MERN, Redux, and other technologies including formik, yup, bcrypt, cors, dotenv, express, helmet, jsonwebtoken, mongoose, morgan, and multer.'
          />
          <Project
            title="Project 3"
            name="pureCSS Solar System"
            desc="The solar system animation project features all planets and some moons, with no use of JS. First time using SASS. Initially intending to maintain true planet-to-orbit diameter ratios; rescaled for better visual impact."
          />
          <Project
            title="Project 1"
            name="CoffeeHouse"
            desc="Website with social media features using React, including a working email contact form, full auth with confirmation (Userfront), user accounts (CRUD), and a comment section (CRUD) with ratings and votes."
          />
          <Project
            title="Project 4"
            name="SweetApp"
            desc="The pudding rating website - my first full-stack project, and features an interactive map. I focused on the backend: NodeJS Express, MongoDB, full Passport Auth with confirmation. In the project also: EJS for rendering views, Cloudinary for uploading images, Helmet for security, and Joi for validation."
          />
          <Project
            title="Project 2"
            name="Block Breaker"
            desc="I created a game from scratch using VanillaJS and CSS, which includes 10 levels, 11 bonuses, 7 game modes, and control buttons for touchscreen devices. I continue to make incremental improvements to the project over time."
          />
          <Project
            title="Project 7"
            name="Wojciech Krupa"
            desc="The portfolio website that you are currently viewing was developed using a modern technology stack, which includes React, Tailwind, and Framer-Motion. My objective was to create a visually appealing design that highlights my work and skills in a professional and engaging manner."
          />
          <div
            className="flex justify-center text-center items-center py-16 bg-primary-2
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            <p className="">
              BACK-END <br />
              <span className="font-thin text-xl italic">
                Refined, smooth UX
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
