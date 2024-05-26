import { useLottie } from 'lottie-react';
import animationData from '../../data/animations/stars-fading.json';

const StarsFadingAnimation = () => {
  const options = {
    animationData: animationData,
    loop: true,
    autoplay: true,
  };

  const { View: View1 } = useLottie(options);

  return (
    <div className="ml-6 flex items-center justify-between absolute bottom-20">
      <div className="w-[250px] h-[150px] z-10">{View1}</div>
    </div>
  );
};

export default StarsFadingAnimation;
