import Gnb from './Gnb';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Gnb> = {
  title: 'gnb',
  component: Gnb,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Gnb>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
