import { useLottie } from 'lottie-react';
import { useState, useEffect } from 'react';

const LottieAnimation: React.FC<{ animationName: string }> = ({ animationName }) => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    import(`../../data/animations/${animationName}.json`)
      .then(data => {
        setAnimationData(data.default);
      })
      .catch(error => {
        console.log(error, 'error loading animation');
      });
  });
  const options = {
    animationData: animationData,
    loop: true,
    autoplay: true,
  };

  const { View: View1 } = useLottie(options);

  return (
    <div className="ml-6 flex items-center justify-between absolute bottom-20">
      <div className="w-[250px] h-[150px] z-10">{animationData && View1}</div>
    </div>
  );
};

export default LottieAnimation;
