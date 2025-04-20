import Image from 'next/image';
import styles from '@/styles/utils/hoverShadow.module.css';
import directLinkBtnStyles from './directLinkStyle.module.css';

const DirectLinkArrow = () => {
  return (
    <div className={`${directLinkBtnStyles.container} ${styles.hoverShadow}`}>
      <Image src="/arrowBtn/directLink.svg" alt="directLink" width={28} height={33} />
    </div>
  );
};

export default DirectLinkArrow;
