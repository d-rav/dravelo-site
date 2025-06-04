import { motion } from "framer-motion";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div
      id="contact"
      className="flex min-h-[20vh] w-full flex-col items-center justify-center py-16 scroll-mt-24"
    >
      <motion.h1
        initial="hidden"
        whileInView="visible"
        variants={variants}
        transition={{ duration: 0.5 }}
        className="mb-16 text-4xl font-light text-white md:text-5xl"
      >
        Get in touch
      </motion.h1>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={variants}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col items-center gap-4 text-center"
      >
        <p className="text-gray-400 text-sm md:text-base">
          Feel free to shoot me an e-mail and I'll get back to you as soon as possible.
        </p>
        <a
          href="mailto:daniel@dravelo.com"
          className="group flex items-center gap-2 rounded-lg border border-gray-800/50 bg-black/30 px-6 py-3 backdrop-blur-sm transition-all duration-300 hover:border-cyan-600/50 hover:bg-black/50"
        >
          <HiOutlineMail className="text-xl text-cyan-600" />
          <span className="bg-gradient-to-r from-cyan-600 to-teal-400 bg-clip-text text-transparent">
            daniel@dravelo.com
          </span>
        </a>
      </motion.div>
    </div>
  );
};

export default Contact; 