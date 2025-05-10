// src/styles/media.ts
import breakpoints from '@/constants/breakpoints';

const media = {
  tablet: (styles: TemplateStringsArray) => `
    @media (max-width: ${breakpoints.tabletMax}) and (min-width: ${breakpoints.tabletMin}) {
      ${styles}
    }
  `,
};

export default media;
