import daniel from "/public/daniel.jpeg";
import { motion, useMotionValue, animate } from "framer-motion";
import { useState, useEffect } from "react";

const Hero = () => {
  const rotate = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);
  const [hasInitialRotation, setHasInitialRotation] = useState(false);

  useEffect(() => {
    // Wait for the rise animation to complete (0.3s) then do one rotation
    const timer = setTimeout(() => {
      if (!hasInitialRotation) {
        animate(rotate, 180, {
          duration: 1,
          ease: "linear",
          onComplete: () => setHasInitialRotation(true),
        });
      }
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const handleHoverStart = () => {
    setIsHovering(true);
    const startRotation = rotate.get();
    animate(rotate, startRotation + 360, {
      duration: 4,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
      onComplete: () => {
        if (!isHovering) {
          rotate.stop();
        }
      },
    });
  };

  const handleHoverEnd = () => {
    setIsHovering(false);
    rotate.stop();
  };

  return (
    <div
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center px-16 pb-16 pt-28 md:px-32"
    >
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center"
        >
          <h1 className="text-4xl font-light bg-gradient-to-r text-transparent bg-clip-text to-teal-400 from-cyan-600 md:text-5xl">
            Daniel Ravelo
          </h1>
          <h3 className="bg-gradient-to-r from-teal-400 to-cyan-600 bg-clip-text text-transparent text-xl md:text-2xl">
            Software Developer
          </h3>
          <p className="text-gray-400 text-sm md:text-base text-pretty">
            Hi, I'm a software developer currently based in Mexico City.
          </p>

          <p className="text-gray-400 text-sm md:text-base text-pretty">
          I specialize in web development and have over 6 years of experience
            using tools like Angular, React and Node.js / Express to build
            single page applications and RESTful APIs.
          </p>
          <p className="text-gray-400 text-sm md:text-base text-pretty">
            I'm currently open to new opportunities both in frontend and
            full-stack roles. Feel free to reach out if you think I'd be a good
            fit for your team 😄.
          </p>
        </motion.div>
        <div className="p-8">
          <motion.div
            style={{ rotate }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-fit"
          >
            <motion.img
              src={daniel}
              alt=""
              onHoverStart={handleHoverStart}
              onHoverEnd={handleHoverEnd}
              className="w-[300px] cursor-pointer rounded-full shadow-[0_0_45px_rgba(6,182,212,0.6)] transition-all duration-300 hover:shadow-[0_0_35px_20px_rgba(6,182,212,0.5)]"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
