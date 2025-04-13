import Headings from './Headings';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Headings> = {
  title: 'Headings',
  component: Headings,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
    className: { control: 'text' },
  },
} satisfies Meta<typeof Headings>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Welcome to Our Site',
  },
};