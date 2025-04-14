import Magnifier from './magnifier';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Magnifier> = {
  title: 'Magnifier',
  component: Magnifier,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Magnifier>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
