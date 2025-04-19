import Image from 'next/image';
import BtnBg from '../../BtnBg';

const FilledHeart = () => {
  return (
    <BtnBg>
      <Image src="/icons/filledHeart.svg" alt="filledHeart" width={17} height={16} />
    </BtnBg>
  );
};

export default FilledHeart;
