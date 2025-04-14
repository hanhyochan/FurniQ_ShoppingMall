import bodyText from './bodyText';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof bodyText> = {
  title: 'bodyText',
  component: bodyText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
    className: { control: 'text' },
  },
} satisfies Meta<typeof bodyText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Welcome to Our Site',
  },
};