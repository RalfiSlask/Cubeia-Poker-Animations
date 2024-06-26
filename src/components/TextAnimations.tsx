import { ITextAnimationType } from '../utils/types/types';
import RetroText from './text-animations/RetroText';
import TeleportFromSidesText from './text-animations/TeleportFromSidesText';
import WinText from './text-animations/WinText';
import SaberText from './text-animations/SaberText';
import VerticalTeleportText from './text-animations/VerticalTeleportText';
import ScaleText from './text-animations/ScaleText';
import ConfettiText from './text-animations/ConfettiText';
import ConfettiLargeText from './text-animations/ConfettiLargeText';
import ShootingText from './text-animations/ShootingText';
import BronzeText from './text-animations/BronzeText';
import PlayerBoxAnimation from './text-animations/PlayerBoxAnimation';
import GoldStars from './text-animations/GoldStars';
import FillingText from './text-animations/FillingText';
import StarsParticles from './text-animations/StarsParticles';
import EnergyCircleText from './text-animations/EnergyCircletext';

const TextAnimations: React.FC<{ textAnimations: ITextAnimationType[] }> = ({ textAnimations }) => {
  return (
    <>
      {textAnimations.find(text => text.type === 'retro' && text.active === true) && <RetroText />}
      {textAnimations.find(text => text.type === 'side' && text.active === true) && <TeleportFromSidesText />}
      {textAnimations.find(text => text.type === 'vertical' && text.active === true) && (
        <VerticalTeleportText text="Winning" />
      )}
      {textAnimations.find(text => text.type === 'scale' && text.active === true) && <ScaleText text={'Winner'} />}
      {textAnimations.find(text => text.type === 'saber-gold' && text.active === true) && <SaberText color="gold" />}
      {textAnimations.find(text => text.type === 'saber-purple' && text.active === true) && (
        <SaberText color="purple" />
      )}
      {textAnimations.find(text => text.type === 'win' && text.active === true) && <WinText />}
      {textAnimations.find(text => text.type === 'confetti' && text.active === true) && (
        <ConfettiText text={'Winner'} />
      )}
      {textAnimations.find(text => text.type === 'confetti-large' && text.active === true) && (
        <ConfettiLargeText text={'Winner'} />
      )}
      {textAnimations.find(text => text.type === 'shooting' && text.active === true) && <ShootingText />}
      {textAnimations.find(text => text.type === 'bronze' && text.active === true) && <BronzeText />}
      {textAnimations.find(text => text.type === 'player box' && text.active === true) && (
        <>
          <GoldStars />
          <PlayerBoxAnimation />
        </>
      )}
      {textAnimations.find(text => text.type === 'filling' && text.active === true) && (
        <>
          <FillingText />
        </>
      )}
      {textAnimations.find(text => text.type === 'particles' && text.active === true) && (
        <>
          <StarsParticles />
        </>
      )}
      {textAnimations.find(text => text.type === 'energy' && text.active === true) && (
        <>
          <EnergyCircleText />
        </>
      )}
    </>
  );
};

export default TextAnimations;
