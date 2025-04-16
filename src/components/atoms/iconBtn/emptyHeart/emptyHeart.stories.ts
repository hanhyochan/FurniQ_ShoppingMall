import EmptyHeart from './EmptyHeart';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof EmptyHeart> = {
  title: 'emptyHeart',
  component: EmptyHeart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof EmptyHeart>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
