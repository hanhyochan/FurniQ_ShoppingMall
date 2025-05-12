import breakpoints from '@/constants/breakpoints';

export const media = {
  breakPoint_1: (styles: TemplateStringsArray) => `
    @media (max-width: ${breakpoints.smDesktopMax}) and (min-width: ${breakpoints.tabletMin}) {
      ${styles}
    }
  `,
};
