import blackBtnStyles from './blackBtnStyle.module.css';
import BodyText from '@/components/atoms/text/bodyText/BodyText';
import styles from '@/styles/utils/hoverShadow.module.css';

interface BlackBtnProps {
  children: React.ReactNode;
}

const BlackBtn = ({ children }: BlackBtnProps) => {
  return (
    <button className={`${blackBtnStyles.container} ${styles.hoverShadow}`}>
      <BodyText tag="body1" className={blackBtnStyles.text}>
        {children}
      </BodyText>
    </button>
  );
};

export default BlackBtn;
