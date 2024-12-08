import { motion, AnimatePresence } from "framer-motion";

export const Creatives = () => {
  return (
    <div className="min-h-screen flex flex-col w-1/2 text-black pb-8 px-8 overflow-y-auto max-h-screen">
      <AnimatePresence mode="wait">
        <motion.div className="pt-10">
          <h1>Seventyfour Creatives</h1>
          <p className="italic font-medium pt-2">Join our team</p>
          <p className="italic font-medium">
            Contact us: seventyfourcollective@gmail.com
          </p>
          <div></div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
