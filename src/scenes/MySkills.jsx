import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import LineGradient from "../components/LineGradient";
import {
  SiBootstrap,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGoogle,
  SiHoppscotch,
  SiJavascript,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiPhotopea,
  SiPrisma,
  SiReact,
  SiRedux,
  SiSass,
  SiStrapi,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbClockPause, TbExchange } from "react-icons/tb";

import skillsImage from "../assets/skills-image.png";

const MySkills = ({ setSelectedPage }) => {
  const isAboveMediumLargeScreens = useMediaQuery("(min-width:1300px)");
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="skills" className="gap-16 py-10">
      {/* FIRST ROW */}
      <div className="md:flex justify-between md:text-start text-center md:items-start mt-32 gap-20">
        <motion.div
          className="lg:w-1/3 md:w-1/2 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          onViewportEnter={() => setSelectedPage("skills")}
        >
          {/* /MY SKILLS COLUMN */}
          <p className="font-playfair mb-2 font-semibold text-4xl">
            MY <span className="text-primary-2 ">SKILLS</span>{" "}
          </p>{" "}
          <div className="flex justify-center md:justify-start my-5">
            <LineGradient width="w-1/4" />
          </div>
          <p className="font-playfair font-extralight text-sm mt-5 mb-10  drop-shadow-accent ">
            My background includes a bachelor's degree in mechanical
            engineering, which provided me with a deep understanding of design
            and problem-solving. Furthermore, I have honed my{" "}
            <span className="text-primary-2 ">creativity</span> as a talented
            musician, having taught drums for Yamaha Music Europe. With
            <span className="text-primary-2 "> experience </span>
            as a customer advisor in a finance company and currently working as
            an assistant manager in a hotel, I have excellent{" "}
            <span className="text-primary-2 ">communication skills </span> and I
            am great with customers.
            <br /> I am confident that my combination of technical{" "}
            <span className="text-primary-2 ">knowledge</span> and creativity,
            as well as my ability to communicate effectively, make me a{" "}
            <span className="text-primary-2 ">strong candidate</span> for junior
            web development position.
          </p>
        </motion.div>
        {/* /IMAGE */}
        <div
          className={isAboveMediumLargeScreens ? "flex-grow-1" : "w-50 m-auto"}
        >
          {isAboveMediumScreens ? (
            <motion.div>
              <img src={skillsImage} alt="" className="mx-auto " />
            </motion.div>
          ) : (
            <motion.div>
              <img src={skillsImage} alt="" className="mx-auto" />
            </motion.div>
          )}
        </div>
      </div>
      {/* SKILLS */}
      <section className="md:flex justify-between md:items-start md:h-full mt-32 md:gap-16 font-playfair text-sm">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }} //~half div in view
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:w-1/4 mb-16"
        >
          <div className="pb-2 relative before:absolute before:h-full before:bg-primary-1 before:z-[-1] before:w-1/2 before:left-1/2 md:before:w-3/4 md:before:left-1/4">
            <p className="font-semibold text-4xl mb-2">01</p>
            <p className="font-semibold text-4xl mb-2 drop-shadow-accent">
              <span className="md:text-primary-light-1 text-primary-1 ">
                Front
              </span>{" "}
              End:
            </p>
          </div>

          <div className="flex justify-evenly items-center my-5">
            <div className="flex flex-col justify-center items-center">
              {" "}
              <SiReact className="text-5xl text-primary-1" />
              React
            </div>
            <div className="flex flex-col justify-center items-center  text-center">
              <SiRedux className="text-5xl text-primary-1" />
              Redux <br /> Toolkit
            </div>
            <div className="flex flex-col justify-center items-center">
              <SiNextdotjs className="text-5xl text-primary-1" />
              Next
            </div>
          </div>
          <div className="flex justify-evenly items-center my-5">
            <div className="flex flex-col justify-center items-center">
              <SiTailwindcss className="text-5xl text-primary-1" />
              Tailwind
            </div>
            <div className="flex flex-col justify-center items-center">
              <SiMui className="text-5xl text-primary-1" />
              MUI
            </div>
            <div className="flex flex-col justify-center items-center">
              <SiBootstrap className="text-5xl text-primary-1" />
              Bootstrap
            </div>
          </div>
          <div className="flex justify-evenly items-center my-5">
            <div className="flex flex-col justify-center items-center">
              <SiSass className="text-5xl text-primary-1" />
              SCSS{" "}
            </div>
            <div className="flex flex-col justify-center items-center">
              <SiPhotopea className="text-5xl text-primary-1" />
              Photopea
            </div>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} //half div in view
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:w-1/4 mb-16"
        >
          <div className="pb-2 relative before:absolute before:h-full before:bg-primary-2 before:z-[-1] before:w-1/2 before:left-1/2 md:before:w-3/4 md:before:left-1/4">
            <p className=" font-semibold text-4xl mb-2">02</p>
            <p className="font-semibold text-4xl mb-2 drop-shadow-accent ">
              <span className="md:text-primary-light-2 text-primary-2 ">
                Back
              </span>{" "}
              End:
            </p>
          </div>
          <div className="flex justify-evenly items-center my-5">
            <div className="flex flex-col justify-center items-center">
              <SiNodedotjs className="text-5xl text-primary-2" />
              Node.js
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <SiNpm className="text-5xl text-primary-2" />
              Node Package
              <br /> Manager
            </div>
          </div>
          <div className="flex justify-evenly items-center my-5">
            <div className="flex flex-col justify-center items-center">
              <SiExpress className="text-5xl text-primary-2" />
              Express
            </div>
            <div className="flex flex-col justify-center items-center">
              <SiMongodb className="text-5xl text-primary-2" />
              MongoDB
            </div>
          </div>
          <div className="flex justify-evenly items-center my-5">
            <div className="flex flex-col justify-center items-center">
              <SiPrisma className="text-5xl text-primary-2" />
              Prisma
            </div>
            <div className="flex flex-col justify-center items-center">
              <SiStrapi className="text-5xl text-primary-2" />
              Strapi
            </div>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} //half div in view
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:w-1/4 mb-16"
        >
          <div className="pb-2 relative before:absolute before:h-full before:bg-primary-3 before:z-[-1] before:w-1/2 before:left-1/2 md:before:w-3/4 md:before:left-1/4">
            <p className="font-semibold text-4xl mb-2">03</p>
            <p className="font-semibold text-4xl mb-2 drop-shadow-accent ">
              <span className="md:text-primary-light-3 text-primary-3">
                And
              </span>{" "}
              More:
            </p>
          </div>
          <div className="flex justify-evenly items-center my-5 text-center">
            <div className="flex flex-col justify-center items-center">
              {" "}
              <SiJavascript className="text-5xl text-primary-3" />
              Javascript
            </div>
            <div className="flex flex-col justify-center items-center">
              <SiTypescript className="text-5xl text-primary-3" />
              Typescript
            </div>
          </div>

          <div className="flex justify-evenly items-center my-5 ">
            <div className="flex flex-col justify-center items-center">
              <SiGit className="text-5xl text-primary-3" />
              Git
            </div>
            <div className="flex flex-col justify-center items-center">
              <SiGithub className="text-5xl text-primary-3" />
              GitHub
            </div>
          </div>
          <div className="flex justify-evenly items-center my-5 ">
            <div className="flex flex-col justify-center items-center">
              <SiHoppscotch className="text-5xl text-primary-3" />
              Hoppscotch
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <TbExchange className="text-5xl text-primary-3" />
              REST <br />
              API
            </div>
            <div className="flex flex-col justify-center items-center ">
              <TbClockPause className="text-5xl text-primary-3 " />
              AJAX
            </div>
          </div>
          <div className="flex justify-evenly items-center my-5 ">
            <div className="flex flex-col justify-center items-center">
              <SiFirebase className="text-5xl text-primary-3" />
              Firebase
            </div>
            <div className="flex flex-col justify-center items-center">
              <SiGoogle className="text-5xl text-primary-3" />
              Googling
            </div>
          </div>
        </motion.div>
      </section>
    </section>
  );
};

export default MySkills;
