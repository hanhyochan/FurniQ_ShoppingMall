import { Container } from './Gnb.styled';
import Heading from '@/components/atoms/text/Headings/Headings';
import BodyText from '@/components/atoms/text/bodyText/BodyText';
import { mainMenu, headerMenuIcons } from '@/constants/navItems';
import Image from 'next/image';

const Gnb = () => {
  return (
    <Container>
      {/* 로고와 로그인 버튼 컨테이너 */}
      <div className="headerWrapper">
        <div className="logoWrapper">
          <Heading tag="heading2_sb">FurniQ</Heading>
        </div>
        <BodyText tag="body2" className="loginBtn">
          Login
        </BodyText>
      </div>
      {/* 카테고리 부분 컨테이너 */}
      <div className="categoryWrapper">
        <div className="mainMenuContainer">
          <div className="mainMenuWrapper">
            {mainMenu.map(mainItem => (
              <BodyText tag="body1" className="mainMenu" key={mainItem.id}>
                {mainItem.name}
              </BodyText>
            ))}
          </div>
        </div>
        <div className="HeaderIconsWrapper">
          {headerMenuIcons.map(icon => (
            <Image
              key={icon.id}
              src={`/icons/${icon.name}.svg`}
              alt={icon.name}
              width={18}
              height={18}
              className="HeaderIcons"
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Gnb;
