import styled from '@emotion/styled';
import { media } from '@/styles/utils/media';

export const Container = styled.div`
  width: 100vw;
  height: 40.8rem;
  border: 2px solid #333333;
  padding: 5.6rem 12rem;
  display: flex;

  ${media.breakPoint_1`
      padding: 2rem 4rem;
    flex-direction: column;

      .subTitle {
      display: none;
      }
    `}

  .logoContainer {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .heroText {
      cursor: pointer;
    }
  }

  .infoContainer {
    width: 60%;
    display: flex;
    gap: clamp(1rem, 5vw, 6rem);

    ${media.breakPoint_1`
      width: 68rem;
      margin-top: 1.5rem;
      justify-content: space-between;
      gap: 2rem;
    `}

    .bodyText {
      line-height: 3rem;

      ${media.breakPoint_1`
      line-height: 2.5rem;
    `}
    }

    .bodyTextCursorPointer {
      line-height: 3rem;
      cursor: pointer;

      ${media.breakPoint_1`
      line-height: 2.5rem;
    `}
    }

    .infoItems {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .ContactUsWrapper {
      display: flex;
      align-items: flex-end;

      ${media.breakPoint_1`
      align-items: flex-start;
    `}
    }
  }
`;
