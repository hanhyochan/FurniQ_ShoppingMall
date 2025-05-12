import styled from '@emotion/styled';
import { media } from '@/styles/utils/media';

export const Container = styled.div`
  width: 100vw;
  height: 40.8rem;
  border: 2px solid #333333;
  padding: 5.6rem 12rem;
  display: flex;

  ${media.breakPoint_1`
      padding: 5.6rem 4rem;
    `}

  .logoContainer {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .infoContainer {
    width: 60%;
    display: flex;
    gap: clamp(1rem, 5vw, 6rem);

    .bodyText {
      line-height: 3rem;
    }

    .infoItems {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .ContactUsWrapper {
      display: flex;
      align-items: flex-end;
    }
  }
`;
