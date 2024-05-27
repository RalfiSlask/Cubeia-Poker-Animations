import React from 'react';
import { motion } from 'framer-motion';

const ScaleText: React.FC<{ text: string }> = ({ text }) => {
  return (
    <motion.div
      className="eurostile text-5xl w-full shadow-black font-bold text-purple-400 uppercase absolute bottom-24 z-20 flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.1, filter: 'blur(2px)' }}
      animate={{
        opacity: [0, 1, 1, 0],
        scale: [0.1, 1, 1, 0.1],
        filter: ['blur(2px)', 'blur(0px)', 'blur(0px)', 'blur(2px)'],
      }}
      transition={{
        opacity: { times: [0, 0.2, 0.9, 1], duration: 2.75 },
        scale: { times: [0, 0.2, 0.8, 1], duration: 2.75 },
        filter: { times: [0, 0.2, 0.9, 1], duration: 2.75 },
      }}
      style={{
        transformOrigin: 'center',
        textShadow: '0 0 10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 0, 0, 0.5)',
      }}
    >
      {text}
    </motion.div>
  );
};

export default ScaleText;
