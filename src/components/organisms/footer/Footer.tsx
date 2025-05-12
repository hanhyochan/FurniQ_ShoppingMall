import { Container } from './Footer.styled';
import Heading from '@/components/atoms/text/Headings/Headings';
import HeroText from '@/components/atoms/text/HeroText/HeroText';
import BodyText from '@/components/atoms/text/bodyText/BodyText';

const Footer = () => {
  return (
    <Container>
      <div className="logoContainer">
        <Heading tag="heading2_m">Unique Interior</Heading>
        <HeroText onClick={() => alert('함수')}>FurniQ</HeroText>
      </div>
      <div className="infoContainer">
        {/* 정보 1 */}
        <div className="infoItems">
          <Heading tag="heading2_sb">FurniQ</Heading>
          <div>
            <BodyText tag="body2_r" className="bodyText">
              Company: FurniQ
            </BodyText>
            <BodyText tag="body2_r" className="bodyText">
              CEO: HAN HYOCHAN
            </BodyText>
            <BodyText tag="body2_r" className="bodyText">
              BRN: 123-12-12345
            </BodyText>
            <BodyText tag="body2_r" className="bodyText">
              Address: KOREA
            </BodyText>
          </div>
        </div>
        {/* 정보 2 */}
        <div className="ContactUsWrapper">
          <div className="infoItems">
            <Heading tag="heading2_sb">Contact Us</Heading>

            <div>
              <BodyText
                tag="body2_r"
                onClick={() => navigator.clipboard.writeText('010-2760-4606')}
                className="bodyText"
              >
                Mobile: 010-2760-4606
              </BodyText>
              <BodyText
                tag="body2_r"
                onClick={() => navigator.clipboard.writeText('hcartist569@gmail.com')}
                className="bodyText"
              >
                E-Mail: hcartist569@gmail.com
              </BodyText>
              <BodyText tag="body2_r" className="bodyText">
                <a href="https://velog.io/@hcartist/series">
                  Velog: https://velog.io/@hcartist/series
                </a>
              </BodyText>
            </div>
          </div>
        </div>
        {/* 정보 3 */}
        <div className="infoItems">
          <Heading tag="heading2_sb">Follow Us</Heading>
          <div>
            <BodyText tag="body2_r" className="bodyText">
              Instagram
            </BodyText>
            <BodyText tag="body2_r" className="bodyText">
              Youtube
            </BodyText>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
