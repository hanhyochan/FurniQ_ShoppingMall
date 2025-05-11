import { Container } from './Gnb.styled';
import Heading from '@/components/atoms/text/Headings/Headings';
import BodyText from '@/components/atoms/text/bodyText/BodyText';
import { mainMenu, headerMenuIcons, subMenuItems } from '@/constants/navItems';
import Image from 'next/image';
import { useState } from 'react';

const Gnb = () => {
  // 서브메뉴 데이터
  const [subMenu, setSubMenu] = useState<{ id: string; menu: string[] } | null>(null);
  // 서브메뉴 렌더링 여부
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  // 비선택 메인메뉴 회색처리
  const [selectedMainMenu, setSelectedMainMenu] = useState<string | null>(null);

  const shouldCloseMenu = (id: string): boolean => {
    return isSubMenuOpen && selectedMainMenu === id;
  };

  const setUpSubMenu = (mainMenuId: string) => {
    const subMenuList = subMenuItems.find(item => item.id === mainMenuId);
    if (subMenuList) {
      setSubMenu(subMenuList);
      setIsSubMenuOpen(true);
    } else {
      setSubMenu(null);
      setIsSubMenuOpen(false);
    }
  };

  const handleMainMenuClick = (mainItem: { id: string }) => {
    if (shouldCloseMenu(mainItem.id)) {
      setIsSubMenuOpen(false);
      setSelectedMainMenu(null);
      return;
    }
    setSelectedMainMenu(mainItem.id);
    setUpSubMenu(mainItem.id);
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
                tag={
                  selectedMainMenu === null || selectedMainMenu === mainItem.id
                    ? 'body1'
                    : 'body1_gray'
                }
                className="mainMenu"
                onClick={() => handleMainMenuClick(mainItem)}
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
      {isSubMenuOpen && subMenu && (
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
      )}
    </Container>
  );
};

export default Gnb;
