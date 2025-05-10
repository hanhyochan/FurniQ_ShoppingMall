import styled from '@emotion/styled';
import media from '@/styles/utils/media';

export const Container = styled.div`
  width: 100vw;
  height: 12.4rem;
  background: #ffffff;
  padding: 0 12rem;
  border-bottom: 1px solid #333333;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${media.tablet`
    padding: 0 4rem;
  `}

  // 로고와 로그인 버튼 컨테이너
  .headerWrapper {
    width: 100%;
    height: 50%;
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

  // 카테고리 부분 컨테이너
  .categoryWrapper {
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .mainMenuContainer {
      width: 82%;
      display: flex;
      justify-content: center;

      ${media.tablet`
            width: 82%;
  `}

      .mainMenuWrapper {
        width: 100%;
        display: flex;
        justify-content: space-between;

        .mainMenu {
          cursor: pointer;
        }
      }
    }

    .HeaderIconsWrapper {
      width: 14rem;
      display: flex;
      justify-content: space-between;

      ${media.tablet`
            width: 11rem;
  `}

      .HeaderIcons {
        cursor: pointer;
      }
    }
  }
`;
