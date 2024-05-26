import { useLottie } from 'lottie-react';
import animationData from '../../data/animations/purple-lightning.json';

const LightningAnimation = () => {
  const optionsLeft = {
    animationData: animationData,
    loop: true,
    autoplay: true,
  };

  const optionsRight = {
    animationData: animationData,
    loop: true,
    autoplay: true,
  };

  const { View: View1 } = useLottie(optionsLeft);
  const { View: View2 } = useLottie(optionsRight);

  return (
    <div className="bottom-0 w-full h-[85px] absolute z-10 flex justify-between">
      <div className={`left-0 bottom-20 absolute w-[85px] h-[85px] z-10`}>{View1}</div>
      <div className={`right-0 rotate-180 bottom-20 absolute w-[85px] h-[85px] z-10`}>{View2}</div>
    </div>
  );
};

export default LightningAnimation;
