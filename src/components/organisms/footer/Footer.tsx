import { useState } from 'react';
import { Container } from './Footer.styled';
import Heading from '@/components/atoms/text/Headings/Headings';
import HeroText from '@/components/atoms/text/HeroText/HeroText';
import BodyText from '@/components/atoms/text/bodyText/BodyText';
import Toast from '@/components/atoms/toast/Toast';

const Footer = () => {
  const [showToast, setShowToast] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <Container>
      <div className="logoContainer">
        <Heading tag="heading2_m" className="subTitle">
          Unique Interior
        </Heading>
        <HeroText onClick={() => alert('함수')} className="heroText">
          FurniQ
        </HeroText>
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
                onClick={() => handleCopy('010-2760-4606')}
                className="bodyTextCursorPointer"
              >
                Mobile: 010-2760-4606
              </BodyText>
              <BodyText
                tag="body2_r"
                onClick={() => handleCopy('hcartist569@gmail.com')}
                className="bodyTextCursorPointer"
              >
                E-Mail: hcartist569@gmail.com
              </BodyText>
              <BodyText tag="body2_r" className="bodyText">
                <a
                  href="https://velog.io/@hcartist/series"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
              <a href="http://www.google.com">Instagram</a>
            </BodyText>
            <BodyText tag="body2_r" className="bodyText">
              <a href="http://www.google.com">Youtube</a>
            </BodyText>
          </div>
        </div>
      </div>

      {showToast && <Toast message="복사되었습니다!" />}
    </Container>
  );
};

export default Footer;
