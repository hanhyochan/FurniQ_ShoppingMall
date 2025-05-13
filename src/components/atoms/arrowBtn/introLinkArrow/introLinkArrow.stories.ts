import IntroLinkArrow from './IntroLinkArrow';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof IntroLinkArrow> = {
  title: 'introLinkArrow',
  component: IntroLinkArrow,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof IntroLinkArrow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
