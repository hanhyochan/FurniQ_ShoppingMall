import DirectLinkArrow from './DirectLinkArrow';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DirectLinkArrow> = {
  title: 'directLinkArrow',
  component: DirectLinkArrow,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DirectLinkArrow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
