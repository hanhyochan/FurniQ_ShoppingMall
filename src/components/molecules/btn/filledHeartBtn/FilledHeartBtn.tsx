import filledHeartBtnStyles from './filledHeartBtnStyle.module.css';
import Image from 'next/image';

const BlackBtn = () => {
  return (
    <button className={filledHeartBtnStyles.container}>
      <Image src="/icons/filledHeart.svg" alt="filledHeart" width={37} height={34} />
    </button>
  );
};

export default BlackBtn;
