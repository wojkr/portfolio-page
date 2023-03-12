import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import LineGradient from "../components/LineGradient";

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
          <p className="font-playfair text-sm mt-5 mb-10">
            Animi exercitationem hic dolorem, laudantium architecto eligendi,
            nam libero repellat aperiam placeat.
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
      <section className="md:flex justify-between md:items-start md:h-full mt-32 md:gap-16">
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
            <p className="font-playfair font-semibold text-4xl mb-2">01</p>
            <p className="font-playfair font-semibold text-4xl mb-2 drop-shadow-accent ">
              Experience
            </p>
          </div>
          <p className="font-playfair text-sm my-5">
            {" "}
            Fugit adipisci ipsam sint tempora tempore commodi repellendus
            repellat exercitationem impedit et! Consequatur aut est nulla
            tenetur aliquid fugit voluptatibus non eos.
          </p>
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
            <p className="font-playfair font-semibold text-4xl mb-2">02</p>
            <p className="font-playfair font-semibold text-4xl mb-2 drop-shadow-accent ">
              Innovative
            </p>
          </div>
          <p className="font-playfair  text-sm my-5">
            {" "}
            Provident asperiores hic, dolorum in corporis inventore sed fugit
            sint ratione illo cumque necessitatibus assumenda? Voluptates,
            possimus.
          </p>
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
            <p className="font-playfair font-semibold text-4xl mb-2">03</p>
            <p className="font-playfair font-semibold text-4xl mb-2 drop-shadow-accent ">
              Imaginative
            </p>
          </div>
          <p className="font-playfair  text-sm my-5">
            {" "}
            Officiis vero dolores animi impedit, molestiae aliquam? Deleniti
            quisquam aut numquam pariatur ratione autem, tenetur ducimus.
          </p>
        </motion.div>
      </section>
    </section>
  );
};

export default MySkills;
