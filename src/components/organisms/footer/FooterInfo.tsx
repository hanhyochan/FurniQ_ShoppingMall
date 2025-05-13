import Heading from '@/components/atoms/text/Headings/Headings';
import BodyText from '@/components/atoms/text/bodyText/BodyText';
import { footerInfo } from '@/constants/FooterInfoItems';

const FooterInfo = () => {
  return (
    <div className="infoItems">
      <Heading tag="heading2_sb">FurniQ</Heading>
      <div>
        <BodyText tag="body2_r" className="bodyText">
          Company: FurniQ
        </BodyText>
      </div>
    </div>
  );
};

export default FooterInfo;
