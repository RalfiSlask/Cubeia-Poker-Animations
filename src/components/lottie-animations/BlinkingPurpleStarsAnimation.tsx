import { useLottie } from 'lottie-react';
import animationData from '../../data/animations/purple-blinking-star.json';

const BlinkingPurpleStarsAnimation = () => {
  const options = {
    animationData: animationData,
    loop: true,
    autoplay: true,
  };

  const options2 = {
    animationData: animationData,
    loop: true,
    autoplay: true,
  };

  const { View: View1 } = useLottie(options);
  const { View: View2 } = useLottie(options2);

  return (
    <div className="flex w-[90%] items-center justify-between absolute bottom-[100px]">
      <div className="w-[45px] h-[45px] z-10">{View1}</div>
      <div className="w-[45px] h-[45px] rotate-[270deg] z-10">{View2}</div>
    </div>
  );
};

export default BlinkingPurpleStarsAnimation;
