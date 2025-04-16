import Cart from './Cart';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Cart> = {
  title: 'cart',
  component: Cart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Cart>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
