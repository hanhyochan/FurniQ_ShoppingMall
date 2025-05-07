import gnbStyles from './gnbStyle.module.css';
import Heading from '@/components/atoms/text/Headings/Headings';
import BodyText from '@/components/atoms/text/bodyText/BodyText';

const Gnb = () => {
  return (
    <div className={gnbStyles.container}>
      <div className={gnbStyles.headerWrapper}>
        <div className={gnbStyles.logoWrapper}>
          <Heading tag="heading2_sb">FurniQ</Heading>
        </div>
        <BodyText tag="body2" className={gnbStyles.loginBtn}>
          Login
        </BodyText>
      </div>
    </div>
  );
};

export default Gnb;
// gnb 마저 다 하기
