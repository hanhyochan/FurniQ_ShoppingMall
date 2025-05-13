import Image from 'next/image';
import BtnBg from '../../BtnBg';

interface FilledHeartProps {
  onClick: () => void;
}

const FilledHeart = ({ onClick }: FilledHeartProps) => {
  return (
    <BtnBg>
      <Image
        src="/icons/filledHeart.svg"
        alt="filledHeart"
        width={17}
        height={16}
        onClick={onClick}
      />
    </BtnBg>
  );
};

export default FilledHeart;
