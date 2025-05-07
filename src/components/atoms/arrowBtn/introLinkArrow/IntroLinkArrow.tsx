import Image from 'next/image';
import BtnBg from '../../BtnBg';

interface IntroLinkArrowProps {
  onClick: () => void;
}

const IntroLinkArrow = ({ onClick }: IntroLinkArrowProps) => {
  return (
    <BtnBg>
      <Image
        src="/arrowBtn/introLinkArrow.svg"
        alt="introLinkArrow"
        width={84}
        height={143}
        onClick={onClick}
      />
    </BtnBg>
  );
};

export default IntroLinkArrow;
