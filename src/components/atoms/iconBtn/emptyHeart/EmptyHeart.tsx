import Image from 'next/image';
import BtnBg from '../../BtnBg';

const EmptyHeart = () => {
  return (
    <BtnBg>
      <Image src="/icons/emptyHeart.svg" alt="emptyHeart" width={17} height={16} />
    </BtnBg>
  );
};

export default EmptyHeart;
