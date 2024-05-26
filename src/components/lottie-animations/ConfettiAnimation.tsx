import { useLottie } from 'lottie-react';
import animationData from '../../data/animations/confetti.json';

const ConfettiAnimation = () => {
  const options = {
    animationData: animationData,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return <div className="bottom-30 absolute w-[250px] h-[100px] z-10">{View}</div>;
};

export default ConfettiAnimation;
