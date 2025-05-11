import { Container } from './Gnb.styled';
import Heading from '@/components/atoms/text/Headings/Headings';
import BodyText from '@/components/atoms/text/bodyText/BodyText';
import { mainMenu, headerMenuIcons, subMenuItems } from '@/constants/navItems';
import Image from 'next/image';
import { useState } from 'react';

const Gnb = () => {
  const [subMenu, setSubMenu] = useState<{ id: string; menu: string[] } | null>(null);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubMenu = (id: string) => {
    const subMenuList = subMenuItems.find(item => item.id === id);
    setSubMenu(subMenuList ?? null);
    setIsSubMenuOpen();
    // 서브메뉴 토글 고민
  };

  return (
    <Container>
      {/* 로고 컨테이너 */}
      <div className="headerContainer">
        <div className="logoWrapper">
          <Heading tag="heading2_sb">FurniQ</Heading>
        </div>
        <BodyText tag="body2" className="loginBtn">
          Login
        </BodyText>
      </div>
      {/* 카테고리 컨테이너 */}
      <div className="categoryContainer">
        <div className="mainMenuContainer">
          <div className="mainMenuWrapper">
            {mainMenu.map(mainItem => (
              <BodyText
                tag="body1"
                className="mainMenu"
                onClick={() => toggleSubMenu(mainItem.id)}
                key={mainItem.id}
              >
                {mainItem.name}
              </BodyText>
            ))}
          </div>
        </div>
        <div className="HeaderIconsContainer">
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
      {/* 서브메뉴 컨테이너 */}
      <div className="subMenuContainer">
        {subMenu?.menu.map((subItem, index) => (
          <BodyText
            tag="body2"
            key={subItem + index}
            onClick={() => console.log(`/${subMenu.id}/${subItem}`)}
            className="subMenu"
          >
            {subItem}
          </BodyText>
        ))}
      </div>
    </Container>
  );
};

export default Gnb;
