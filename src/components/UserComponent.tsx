import Avatar from './Avatar';
import Cards from './Cards';
import UserContainer from './UserContainer';
import { useState } from 'react';
import LightningAnimation from './lottie-animations/LightningAnimation';
import BlinkingPurpleStarsAnimation from './lottie-animations/BlinkingPurpleStarsAnimation';
import BlinkingStarsAnimation from './lottie-animations/BlinkingStarsAnimation';
import CoinsJumping from './lottie-animations/CoinsJumping';
import CoinsStackingAnimation from './lottie-animations/CoinsStackingAnimation';
import ConfettiAnimation from './lottie-animations/ConfettiAnimation';
import ConfettiLargeAnimation from './lottie-animations/ConfettiLargeAnimation';
import ShootingStarAnimation from './lottie-animations/ShootingStarAnimation';
import StarsFadingAnimation from './lottie-animations/StarsFadingAnimation';
import { v4 as uuidv4 } from 'uuid';
import TextAnimations from './TextAnimations';
import { IButtonType } from '../utils/types/types';
import ParticleAnimation from './lottie-animations/ParticleAnimation';

const UserComponent = () => {
  const [textAnimations, setTextAnimations] = useState([
    { id: 1, type: 'scale', active: false },
    { id: 2, type: 'side', active: false },
    { id: 3, type: 'vertical', active: false },
    { id: 4, type: 'retro', active: false },
    { id: 5, type: 'saber-purple', active: false },
    { id: 6, type: 'saber-gold', active: false },
    { id: 7, type: 'win', active: false },
    { id: 8, type: 'confetti', active: false },
    { id: 9, type: 'confetti-large', active: false },
    { id: 10, type: 'shooting', active: false },
    { id: 11, type: 'bronze', active: false },
    { id: 12, type: 'player box', active: false },
    { id: 13, type: 'filling', active: false },
    { id: 14, type: 'particles', active: false },
    { id: 15, type: 'energy', active: false },
    { id: 16, type: 'circle', active: false },
    { id: 17, type: 'gold', active: false },
    { id: 18, type: 'player box stars', active: false },
    { id: 19, type: 'collapsing', active: false },
    { id: 20, type: 'bouncy', active: false },
  ]);
  const [animations, setAnimations] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
  });

  const playAnimationOnClick = (animationInfo: IButtonType) => {
    const { animationId, textId, start, end } = animationInfo;

    const updatedTextAnimations = textAnimations.map(text => ({
      ...text,
      active: false,
    }));

    const textAnimationIndex = updatedTextAnimations.findIndex(text => text.id === textId);
    if (textAnimationIndex !== -1) {
      updatedTextAnimations[textAnimationIndex].active = true;
    }

    setTextAnimations(updatedTextAnimations);

    setTimeout(() => {
      if (animationId) {
        setAnimations(prev => ({ ...prev, [animationId]: true }));
      }
    }, start);

    setTimeout(() => {
      setTextAnimations(prev => prev.map(text => ({ ...text, active: false })));
    }, 4000);
    setTimeout(() => {
      if (animationId) {
        setAnimations(prev => ({ ...prev, [animationId]: false }));
      }
    }, end);
  };

  let buttons: IButtonType[] = [
    { animationId: 1, textId: 1, start: 600, end: 1500, title: 'Purple Stars' },
    { animationId: 2, textId: 1, start: 600, end: 1500, title: 'Purple Lightning' },
    { animationId: 3, textId: 2, start: 200, end: 2000, title: 'Coins Jump' },
    { animationId: 4, textId: 3, start: 600, end: 1500, title: 'Blinking Stars' },
    { animationId: 5, textId: 7, start: 600, end: 3000, title: 'Coins Stack' },
    { animationId: 6, textId: 8, start: 600, end: 3000, title: 'Confetti' },
    { animationId: 7, textId: 9, start: 200, end: 1800, title: 'Confetti Large' },
    { animationId: 8, textId: 10, start: 600, end: 2300, title: 'Shooting Star' },
    { animationId: 9, textId: 11, start: 0, end: 3000, title: 'Stars Fading' },
    { animationId: 10, textId: 7, start: 0, end: 3000, title: 'Particle sweep' },
    { textId: 4, title: 'Retro' },
    { textId: 5, title: 'Saber Purple' },
    { textId: 6, title: 'Saber Gold' },
    { textId: 12, title: 'Player box' },
    { textId: 13, title: 'Filling' },
    { textId: 14, title: 'Sand stars' },
    { textId: 15, title: 'Energy circle' },
    { textId: 16, title: 'Circle star' },
    { textId: 17, title: 'Gold' },
    { textId: 18, title: 'Player box stars' },
    { textId: 19, title: 'Collapsing stars' },
    { textId: 20, title: 'Bouncy Text' },
  ];

  const anyAnimationActive =
    textAnimations.some(animation => animation.active) || Object.values(animations).some(active => active);

  return (
    <div className="flex flex-col gap-10 items-center">
      <div className="flex flex-col items-center gap-10 w-[300px]">
        <div className="relative w-[300px] h-[250px] flex flex-col items-center">
          <Avatar />
          <Cards />
          <UserContainer zindex="20" />
          {animations[1] && <BlinkingPurpleStarsAnimation />}
          {animations[2] && <LightningAnimation />}
          {animations[3] && <CoinsJumping />}
          {animations[4] && <BlinkingStarsAnimation />}
          {animations[5] && <CoinsStackingAnimation />}
          {animations[6] && <ConfettiAnimation />}
          {animations[7] && <ConfettiLargeAnimation />}
          {animations[8] && <ShootingStarAnimation />}
          {animations[9] && <StarsFadingAnimation />}
          {animations[10] && <ParticleAnimation />}
          <TextAnimations textAnimations={textAnimations} />
        </div>
      </div>
      <div className="flex flex-wrap gap-10 max-w-[800px] justify-center">
        {buttons.map(animationInfo => {
          return (
            <button
              disabled={anyAnimationActive}
              key={uuidv4()}
              onClick={() => {
                playAnimationOnClick(animationInfo);
              }}
              className={`${
                anyAnimationActive ? 'bg-gray-500 hover:bg-gray-500' : 'bg-gray-300 hover:bg-gray-200'
              } text-black font-bold uppercase rounded-lg px-4 py-2 `}
            >
              {animationInfo.title}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default UserComponent;
