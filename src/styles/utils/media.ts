// media.ts
import breakpoints from '@/constants/breakpoints';

export const media = {
  tablet: (styles: TemplateStringsArray) => `
    @media (max-width: ${breakpoints.smDesktopMax}) and (min-width: ${breakpoints.tabletMin}) {
      ${styles}
    }
  `,
};
