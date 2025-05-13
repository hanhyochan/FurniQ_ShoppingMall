import Toast from './Toast';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Toast> = {
  title: 'toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Welcome to Our Site',
  },
};
