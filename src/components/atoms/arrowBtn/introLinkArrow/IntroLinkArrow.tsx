import Image from 'next/image';
import BtnBg from '../../BtnBg';

const IntroLinkArrow = () => {
  return (
    <BtnBg>
      <Image src="/arrowBtn/introLinkArrow.svg" alt="introLinkArrow" width={84} height={143} />
    </BtnBg>
  );
};

export default IntroLinkArrow;
