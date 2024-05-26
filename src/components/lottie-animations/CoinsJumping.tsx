import { useLottie } from 'lottie-react';
import animationData from '../../data/animations/coins-jumping.json';

const CoinsJumping = () => {
  const options = {
    animationData: animationData,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return <div className="bottom-40 absolute w-[125px] h-[100px] z-10">{View}</div>;
};

export default CoinsJumping;
