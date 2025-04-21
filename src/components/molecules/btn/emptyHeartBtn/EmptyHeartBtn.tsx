import emptyHeartBtnStyles from './emptyHeartBtnStyle.module.css';
import Image from 'next/image';

const EmptyHeartBtn = () => {
  return (
    <button className={emptyHeartBtnStyles.container}>
      <Image src="/icons/emptyHeart.svg" alt="emptyHeart" width={37} height={34} />
    </button>
  );
};

export default EmptyHeartBtn;
