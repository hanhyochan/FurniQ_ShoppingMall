import Image from 'next/image';
import BtnBg from '../../BtnBg';

const Profile = () => {
  return (
    <BtnBg>
      <Image src="/icons/profile.svg" alt="profile" width={19.67} height={19.67} />
    </BtnBg>
  );
};

export default Profile;
