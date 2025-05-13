import Image from 'next/image';
import BtnBg from '../../BtnBg';

interface MagnifierProps {
  onClick: () => void;
}

const magnifier = ({ onClick }: MagnifierProps) => {
  return (
    <BtnBg>
      <Image src="/icons/magnifier.svg" alt="magnifier" width={17} height={17} onClick={onClick} />
    </BtnBg>
  );
};

export default magnifier;
