import { useLottie } from 'lottie-react';
import animationData from '../../data/animations/coins-stacking-blinking.json';
import { motion } from 'framer-motion';

const CoinsStackingAnimation = () => {
  const options = {
    animationData: animationData,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return (
    <motion.div
      className="bottom-20 absolute w-[125px] h-[100px] z-20"
      initial={{ opacity: 0, filter: 'blur(2px)' }}
      animate={{
        opacity: [0, 1, 1, 0],
        filter: ['blur(2px)', 'blur(0px)', 'blur(0px)', 'blur(2px)'],
      }}
      transition={{
        opacity: { times: [0, 0.2, 0.9, 1], duration: 2.5 },
        filter: { times: [0, 0.2, 0.9, 1], duration: 2.5 },
      }}
      style={{
        transformOrigin: 'center',
        textShadow: '0 0 10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 0, 0, 0.5)',
      }}
    >
      {View}
    </motion.div>
  );
};

export default CoinsStackingAnimation;
