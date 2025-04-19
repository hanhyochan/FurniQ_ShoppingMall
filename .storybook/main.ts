// import type { StorybookConfig } from "@storybook/experimental-nextjs-vite";

// const config: StorybookConfig = {
//   "stories": [
//     "../src/**/*.mdx",
//     "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
//   ],
//   "addons": [
//     "@storybook/addon-essentials",
//     "@storybook/addon-onboarding",
//     "@chromatic-com/storybook",
//     "@storybook/experimental-addon-test"
//   ],
//   "framework": {
//     "name": "@storybook/experimental-nextjs-vite",
//     "options": {}
//   },
//   "staticDirs": [
//     "..\\public"
//   ]
// };
// export default config;

// .storybook/main.ts
import { StorybookConfig } from '@storybook/experimental-nextjs-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@chromatic-com/storybook',
    '@storybook/experimental-addon-test',
  ],
  framework: {
    name: '@storybook/experimental-nextjs-vite',
    options: {},
  },
  staticDirs: ['..\\public'],
  viteFinal: config => {
    // Vite에서 CSS 처리 설정 추가
    config.css = {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "src/styles/variables.scss";`, // SCSS 변수 추가 예시
        },
      },
    };
    return config;
  },
};

export default config;
