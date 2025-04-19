import Image from 'next/image';
import BtnBg from '../../BtnBg';

const magnifier = () => {
  return (
    <BtnBg>
      <Image src="/icons/magnifier.svg" alt="magnifier" width={17} height={17} />
    </BtnBg>
  );
};

export default magnifier;
