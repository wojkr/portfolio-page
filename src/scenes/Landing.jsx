import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/SocialMediaIcons";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery(`(min-width:1060px)`);
  // alert("CHECK THE PACKAGE JSON FOR THE NAME OF REPO");
  return (
    <section
      id="home"
      className="md:flex justify-between md:items-center md:h-full gap-16 py-10"
    >
      {/* IMAGE */}
      <motion.div
        onViewportEnter={() => setSelectedPage("home")}
        className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32 "
      >
        {isAboveMediumScreens ? (
          <div className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-[400px] before:w-full before:max-w-[400px] before:h-full before:max-h-[400px] md:before:max-w-[600px] md:before:max-h-[600px] before:border-2 before:border-primary-1 before:z-[-1]">
            <img
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px] rounded-full "
              src="/assets/profile-image.png"
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px] rounded-full "
            src="/assets/profile-image.png"
          />
        )}
      </motion.div>
      {/* MAIN SECTION */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} //half div in view
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-5xl font-playfair text-center md:text-start xs:whitespace-nowrap">
            <span className="text-6xl">W</span>OJCIECH{" "}
            <span className="xs:relative xs:text-dark-1 xs:font-semibold z-20 xs:before:content-brush before:absolute before:-left-[35px] before:-top-[40px] before:z-[-10]">
              <span className="text-6xl z-30"> K</span>RUPA
            </span>
          </p>
          <p className="mt-10 mb-7 text-sm text-center md:text-start font-playfair">
            I am a passionate and motivated individual who is eager to kickstart
            my career in web development as a junior full-stack developer. I
            have a degree in aircraft engines and I am also a talented musician.
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} //half div in view
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-1 text-dark-1 py-3 px-7 font-semibold  hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounder-r-sm bg-gradient-1 py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-dark-1 hover:text-primary-2 transition duration-500 w-full h-full flex items-center justify-center font-playfair px-10">
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} //half div in view
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
