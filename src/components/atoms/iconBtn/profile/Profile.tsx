import Image from 'next/image';
import BtnBg from '../../BtnBg';

interface ProfileProps {
  onClick: () => void;
}

const Profile = ({ onClick }: ProfileProps) => {
  return (
    <BtnBg>
      <Image
        src="/icons/profile.svg"
        alt="profile"
        width={19.67}
        height={19.67}
        onClick={onClick}
      />
    </BtnBg>
  );
};

export default Profile;
