import { useLottie } from 'lottie-react';
import animationData from '../../data/animations/coins-stacking-blinking.json';

const CoinsStackingAnimation = () => {
  const options = {
    animationData: animationData,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return <div className="bottom-20 absolute w-[125px] h-[100px] z-20">{View}</div>;
};

export default CoinsStackingAnimation;
