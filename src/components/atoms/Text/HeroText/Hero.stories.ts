import HeroText from './HeroText';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof HeroText> = {
  title: 'HeroText',
  component: HeroText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
  },
} satisfies Meta<typeof HeroText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Welcome to Our Site',
  },
};
