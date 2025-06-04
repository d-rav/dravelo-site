import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full py-8 text-center text-gray-400"
    >
      <p className="text-sm">
        © {currentYear} Daniel Ravelo. All rights reserved.
      </p>
    </motion.footer>
  );
};

export default Footer; 