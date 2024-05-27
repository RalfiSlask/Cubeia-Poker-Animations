import card from '../assets/icons/card.png';

const Cards = () => {
  return (
    <div className="flex absolute bottom-[70px]">
      <img src={card} alt="card icon left" width="60" height="60" />
      <img src={card} alt="card icon left" width="60" height="60" />
    </div>
  );
};

export default Cards;
