import FilledHeart from './FilledHeart';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FilledHeart> = {
  title: 'filledHeart',
  component: FilledHeart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FilledHeart>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
