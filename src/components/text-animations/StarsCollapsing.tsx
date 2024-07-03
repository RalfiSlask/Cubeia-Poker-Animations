import { motion } from 'framer-motion';

const StarsCollapsing = () => {
  return (
    <motion.video
      className="uppercase absolute bottom-[15px] w-[900px] h-[200px] left-2 z-20 flex items-center justify-center"
      initial={{ opacity: 0, filter: 'blur(4px)' }}
      animate={{
        opacity: [0, 1, 1, 0],
        scale: 1.5,
        filter: ['blur(1px)', 'blur(0px)', 'blur(0px)', 'blur(1px)'],
      }}
      transition={{
        opacity: { times: [0, 0.2, 0.95, 1], duration: 5 },
        filter: { times: [0, 0.2, 0.95, 1], duration: 5 },
      }}
      autoPlay
      loop
      muted
      style={{
        transformOrigin: 'center',
        textShadow: '0 0 10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 0, 0, 0.5)',
      }}
    >
      <source src="/Cubeia-Poker-Animations/starscollapsing.webm" type="video/webm" />
      Your browser does not support the video tag.
    </motion.video>
  );
};

export default StarsCollapsing;
