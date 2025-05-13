import EmptyHeartBtn from './EmptyHeartBtn';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof EmptyHeartBtn> = {
  title: 'emptyHeartBtn',
  component: EmptyHeartBtn,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof EmptyHeartBtn>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
