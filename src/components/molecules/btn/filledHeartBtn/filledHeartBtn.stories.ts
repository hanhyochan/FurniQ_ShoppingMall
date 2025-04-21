import FilledHeartBtn from './FilledHeartBtn';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FilledHeartBtn> = {
  title: 'filledHeartBtn',
  component: FilledHeartBtn,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FilledHeartBtn>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
