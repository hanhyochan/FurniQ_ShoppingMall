import styled from '@emotion/styled';
import { media } from '@/styles/utils/media';

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  background: #ffffff;
  padding: 0 12rem;
  border-bottom: 2px solid #333333;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${media.tablet`
    padding: 0 4rem;
  `}

  // 로고 컨테이너
  .headerContainer {
    width: 100%;
    height: 6.2rem;
    display: flex;
    align-items: center;

    .logoWrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }

    .loginBtn {
      cursor: pointer;
    }
  }

  // 카테고리 컨테이너
  .categoryContainer {
    width: 100%;
    min-height: 6.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1.5rem;

    ${media.tablet`
        padding-top: 1.5rem;
        align-items: flex-end;
  `}

    .mainMenuContainer {
      width: 75%;
      display: flex;
      justify-content: center;

      .mainMenuWrapper {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        column-gap: 6rem;
        row-gap: 0.7rem;

        .mainMenu {
          cursor: pointer;
        }
      }
    }

    .HeaderIconsContainer {
      width: 14rem;
      display: flex;
      justify-content: space-between;

      ${media.tablet`
        padding-bottom: 0.5rem;
  `}

      .HeaderIcons {
        cursor: pointer;
      }
    }
  }

  // 카테고리 컨테이너
  .subMenuContainer {
    border-top: 0.5px solid #333333;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    display: flex;
    column-gap: 5rem;
    row-gap: 0.7rem;
    flex-wrap: wrap;

    .subMenu {
      cursor: pointer;
    }
  }
`;
