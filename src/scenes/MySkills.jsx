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
  SiNodedotjs,
  SiNpm,
  SiReact,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { TbClockPause, TbExchange } from "react-icons/tb";
const MySkills = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="skills" className="gap-16 py-10">
      {/* FIRST ROW */}
      <div className="md:flex justify-between md:items-start mt-32">
        <motion.div
          className="md:w-1/3  "
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
            MY <span className="text-red ">SKILLS</span>{" "}
          </p>
          <LineGradient width="w-1/4" />
          <p className="font-playfair font-extralight text-sm mt-5 mb-10">
            My background includes a bachelor's degree in mechanical
            engineering, which provided me with a deep understanding of design
            and problem-solving. Furthermore, I have honed my{" "}
            <span className="text-red ">creativity</span> as a talented
            musician, having taught drums for Yamaha Music Europe. With
            <span className="text-red "> experience </span>
            as a customer advisor in a finance company and currently working as
            an assistant manager in a hotel, I have excellent{" "}
            <span className="text-red ">communication skills </span> and I am
            great with customers.
            <br /> I am confident that my combination of technical{" "}
            <span className="text-red ">knowledge</span> and creativity, as well
            as my ability to communicate effectively, make me a{" "}
            <span className="text-red ">strong candidate</span> for junior web
            development position.
          </p>
        </motion.div>
        {/* /IMAGE */}
        <div className=" flex-grow-1 ">
          {isAboveMediumScreens ? (
            <motion.div className="relative before:absolute before:z-[-1] before:-top-[40px] before:-left-[60px] before:border-blue before:border-2 before:w-[100%] before:h-full">
              <img src="assets/skills-image.png" alt="" />
            </motion.div>
          ) : (
            <motion.div>
              <img src="assets/skills-image.png" alt="" />
            </motion.div>
          )}
        </div>
      </div>
      {/* SKILLS */}
      <section className="md:flex justify-between md:items-start md:h-full mt-32 md:gap-16 font-playfair text-sm">
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
          <div className="pb-2 relative before:absolute before:h-full before:bg-blue before:z-[-1] before:w-1/2 before:left-1/2 md:before:w-3/4 md:before:left-1/4">
            <p className="font-semibold text-4xl mb-2">01</p>
            <p className="font-semibold text-4xl mb-2 drop-shadow-accent ">
              <span className="text-blue ">Front</span> End:
            </p>
          </div>

          <div className="flex justify-evenly items-center my-5">
            <div className="flex flex-col justify-center items-center">
              {" "}
              <SiReact className="text-5xl text-blue" />
              React
            </div>
            <div className="flex flex-col justify-center items-center  text-center">
              <SiRedux className="text-5xl text-blue" />
              Redux <br /> Toolkit
            </div>
            <div className="flex flex-col justify-center items-center">
              <SiVite className="text-5xl text-blue" />
              Vite
            </div>
          </div>
          <div className="flex justify-evenly items-center my-5">
            <div className="flex flex-col justify-center items-center">
              <SiTailwindcss className="text-5xl text-blue" />
              Tailwind
            </div>
            <div className="flex flex-col justify-center items-center">
              <SiMui className="text-5xl text-blue" />
              MUI
            </div>
          </div>
          <div className="flex justify-evenly items-center my-5">
            <div className="flex flex-col justify-center items-center">
              <SiBootstrap className="text-5xl text-blue" />
              Bootstrap
            </div>
            <div className="flex flex-col justify-center items-center">
              <SiSass className="text-5xl text-blue" />
              SCSS{" "}
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
          <div className="pb-2 relative before:absolute before:h-full before:bg-red before:z-[-1] before:w-1/2 before:left-1/2 md:before:w-3/4 md:before:left-1/4">
            <p className=" font-semibold text-4xl mb-2">02</p>
            <p className="font-semibold text-4xl mb-2 drop-shadow-accent ">
              <span className="text-red ">Back</span> End:
            </p>
          </div>
          <div className="flex justify-evenly items-center my-5">
            <div className="flex flex-col justify-center items-center">
              <SiNodedotjs className="text-5xl text-red" />
              Node.js
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <SiNpm className="text-5xl text-red" />
              Node Package
              <br /> Manager
            </div>
          </div>
          <div className="flex justify-evenly items-center my-5">
            <div className="flex flex-col justify-center items-center">
              <SiExpress className="text-5xl text-red" />
              Express
            </div>
            <div className="flex flex-col justify-center items-center">
              <SiMongodb className="text-5xl text-red" />
              MongoDB
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
          <div className="pb-2 relative before:absolute before:h-full before:bg-yellow before:z-[-1] before:w-1/2 before:left-1/2 md:before:w-3/4 md:before:left-1/4">
            <p className="font-semibold text-4xl mb-2">03</p>
            <p className="font-semibold text-4xl mb-2 drop-shadow-accent ">
              And <span className="text-yellow ">More:</span>
            </p>
          </div>
          <div className="flex justify-evenly items-center my-5 text-center">
            <div className="flex flex-col justify-center items-center">
              {" "}
              <SiJavascript className="text-5xl text-yellow" />
              Javascript
            </div>
            <div className="flex flex-col justify-center items-center">
              <SiTypescript className="text-5xl text-yellow" />
              Typescript
            </div>
          </div>

          <div className="flex justify-evenly items-center my-5 ">
            <div className="flex flex-col justify-center items-center">
              <SiGit className="text-5xl text-yellow" />
              Git
            </div>
            <div className="flex flex-col justify-center items-center">
              <SiGithub className="text-5xl text-yellow" />
              GitHub
            </div>
          </div>
          <div className="flex justify-evenly items-center my-5 ">
            <div className="flex flex-col justify-center items-center">
              <SiHoppscotch className="text-5xl text-yellow" />
              Hoppscotch
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <TbExchange className="text-5xl text-yellow" />
              REST <br />
              API
            </div>
            <div className="flex flex-col justify-center items-center ">
              <TbClockPause className="text-5xl text-yellow " />
              AJAX
            </div>
          </div>
          <div className="flex justify-evenly items-center my-5 ">
            <div className="flex flex-col justify-center items-center">
              <SiFirebase className="text-5xl text-yellow" />
              Firebase
            </div>
            <div className="flex flex-col justify-center items-center">
              <SiGoogle className="text-5xl text-yellow" />
              Googling
            </div>
          </div>
        </motion.div>
      </section>
    </section>
  );
};

export default MySkills;
