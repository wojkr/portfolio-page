import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";

import contactImage from "../assets/contact-image.jpg";

const Contact = ({ setSelectedPage }) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    console.log("~ e", e);
    const isValid = await trigger();
    e.preventDefault();
    if (!isValid) {
    } else {
      fetch("https://formsubmit.co/ajax/2dfe1cb18982311021ec0a63158f3740", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));

      // alert("hey up", e.target);
      // console.log(
      //   "hey up",
      //   e.target[0].name,
      //   e.target[0].value,
      //   Object.fromEntries(new FormData(e.target))
      // );
    }
  };

  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");

  return (
    <section id="contact" className="py-48">
      {/* HEADING */}
      <motion.div
        className="flex justify-center md:justify-end w-full  "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        onViewportEnter={() => setSelectedPage("contact")}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-primary-3 ">CONTACT</span> ME
          </p>
          <div className="flex justify-center md:justify-end my-5">
            <LineGradient width="w-1/2" />
          </div>
        </div>
      </motion.div>

      {/* FORM & IMAGE */}
      <div className="md:flex md:justify-between gap-32 mt-5">
        <motion.div
          className="basis-1/2 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {isAboveMediumScreen ? (
            <div className="relative before:absolute md:before:border-2  before:border-primary-2 before:-right-20 before:-top-20  before:w-full  before:z-[-1] before:h-full ">
              <img src={contactImage} alt="contact" />
            </div>
          ) : (
            <img src={contactImage} alt="contact" />
          )}
        </motion.div>

        {/* FORM SECTION */}
        <motion.div
          className="basis-1/2 mt-10 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {/* FORM */}
          <form
            // target="_blank"
            onSubmit={onSubmit}
            // method="POST"
          >
            {/* NAME */}
            <div className="mb-4">
              <input
                className="w-full bg-primary-1 font-semibold placeholder-opaque-black p-3"
                placeholder="NAME"
                type="text"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                  pattern: /^[A-Za-z]+$/i,
                })}
              />
              {errors.name && (
                <p className="text-primary-2 mt-1 text-right drop-shadow-accent">
                  {errors.name.type === "required" && "This field is required"}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 char."}
                  {errors.name.type === "pattern" && "Restricted chars."}
                </p>
              )}
            </div>

            {/* EMAIL */}
            <div className="my-4">
              <input
                className="w-full bg-primary-1 font-semibold placeholder-opaque-black p-3"
                placeholder="EMAIL"
                type="email"
                {...register("email", {
                  required: true,
                  pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
                })}
              />
              {errors.email && (
                <p className="text-primary-2 mt-1 text-right drop-shadow-accent">
                  {errors.email.type === "required" && "This field is required"}
                  {errors.email.type === "pattern" && "Invalid email address"}
                </p>
              )}
            </div>

            {/* MESSAGE */}
            <div className="my-4">
              <textarea
                className="w-full bg-primary-1 font-semibold placeholder-opaque-black p-3 resize-none "
                placeholder="MESSAGE"
                rows="7"
                {...register("message", { required: true })}
              ></textarea>
              {errors.message && (
                <p className="text-primary-2 mt-1 text-right drop-shadow-accent">
                  {errors.message.type === "required" &&
                    "This field is required"}
                  {errors.message.type === "maxLength" &&
                    "Max length is  2000 char."}
                </p>
              )}
            </div>

            <button
              className="p-5 bg-primary-3 font-semibold  text-deep-primary1bg-primary-1 mt-5 hover:bg-primary-2 hover:text-white transition duration-500"
              type="submit"
            >
              SEND ME A MESSAGE
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
