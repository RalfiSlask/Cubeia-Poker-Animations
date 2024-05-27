import { motion } from 'framer-motion';

const SaberText: React.FC<{ color: string }> = ({ color }) => {
  return (
    <motion.video
      className={`${color === 'gold' ? 'mr-[18px]' : ''} uppercase absolute bottom-4 w-[400px] h-[200px] z-20 flex`}
      initial={{ opacity: 0, filter: 'blur(4px)' }}
      animate={{
        opacity: [0, 1, 1, 0],
        scale: [1.5],
        filter: ['blur(1px)', 'blur(0px)', 'blur(0px)', 'blur(1px)'],
      }}
      transition={{
        opacity: { times: [0, 0.2, 0.95, 1], duration: 3 },
        filter: { times: [0, 0.2, 0.95, 1], duration: 3 },
      }}
      autoPlay
      loop
      muted
      style={{
        transformOrigin: 'center',
        textShadow: '0 0 10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 0, 0, 0.5)',
      }}
    >
      <source src={`/saber-${color.toLowerCase()}.webm`} type="video/webm" />
      Your browser does not support the video tag.
    </motion.video>
  );
};

export default SaberText;
