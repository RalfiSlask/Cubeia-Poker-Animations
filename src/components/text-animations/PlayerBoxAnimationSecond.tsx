import { motion } from 'framer-motion';

const PlayerBoxAnimationSecond = () => {
  return (
    <motion.video
      className="uppercase absolute bottom-[-60px] w-[900px] h-[200px] z-20 flex items-center justify-center"
      initial={{ opacity: 0, filter: 'blur(4px)', scale: 1.5 }}
      animate={{
        opacity: [0, 1, 1, 0],
        filter: ['blur(1px)', 'blur(0px)', 'blur(0px)', 'blur(1px)'],
      }}
      transition={{
        opacity: { times: [0, 0.2, 0.95, 1], duration: 2, delay: 0.35 },
        filter: { times: [0, 0.2, 0.95, 1], duration: 2, delay: 0.35 },
      }}
      autoPlay
      loop
      muted
      style={{
        transformOrigin: 'center',
        textShadow: '0 0 10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 0, 0, 0.5)',
      }}
    >
      <source src="/Cubeia-Poker-Animations/playerboxstars.webm" type="video/webm" />
      Your browser does not support the video tag.
    </motion.video>
  );
};

export default PlayerBoxAnimationSecond;
