import Image from 'next/image';
import BtnBg from '../../BtnBg';

interface EmptyHeartProps {
  onClick: () => void;
}

const EmptyHeart = ({ onClick }: EmptyHeartProps) => {
  return (
    <BtnBg>
      <Image
        src="/icons/emptyHeart.svg"
        alt="emptyHeart"
        width={17}
        height={16}
        onClick={onClick}
      />
    </BtnBg>
  );
};

export default EmptyHeart;
