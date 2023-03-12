import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Contact = ({ setSelectedPage }) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    console.log("~ e", e);
    alert("change EMAIL IN THE FORM! GET THE LINK FROM ACTIVATION LINK ");
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="py-48">
      {/* HEADING */}
      <motion.div
        className="flex justify-end w-full  "
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
            <span className="text-yellow ">CONTACT</span> ME
          </p>
          <div className="flex md:justify-end my-5">
            <LineGradient width="w-1/2" />
          </div>
        </div>
      </motion.div>

      {/* FORM & IMAGE */}
      <div className="md:flex md:justify-between gap-16 mt-5">
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
          <img src="assets/contact-image.jpeg" alt="contact" />
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
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/test.wojkr@gmail.com"
            method="POST"
          >
            {/* NAME */}
            <div className="my-4">
              <input
                className="w-full bg-blue font-semibold placeholder-opaque-black p-3"
                placeholder="NAME"
                type="text"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                  pattern: /^[A-Za-z]+$/i,
                })}
              />
              {errors.name && (
                <p className="text-red mt-1">
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
                className="w-full bg-blue font-semibold placeholder-opaque-black p-3"
                placeholder="EMAIL"
                type="email"
                {...register("email", {
                  required: true,
                  pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
                })}
              />
              {errors.email && (
                <p className="text-red mt-1">
                  {errors.email.type === "required" && "This field is required"}
                  {errors.email.type === "pattern" && "Invalid email address"}
                </p>
              )}
            </div>

            {/* MESSAGE */}
            <div className="my-4">
              <textarea
                className="w-full bg-blue font-semibold placeholder-opaque-black p-3"
                placeholder="MESSAGE"
                {...register("message", { required: true })}
              ></textarea>
              {errors.message && (
                <p className="text-red mt-1">
                  {errors.message.type === "required" &&
                    "This field is required"}
                  {errors.message.type === "maxLength" &&
                    "Max length is  2000 char."}
                </p>
              )}
            </div>

            <button
              className="p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500"
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
