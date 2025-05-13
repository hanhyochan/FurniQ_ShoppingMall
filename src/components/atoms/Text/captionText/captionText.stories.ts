import CaptionText from './CaptionText';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CaptionText> = {
  title: 'CaptionText',
  component: CaptionText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
    className: { control: 'text' },
  },
} satisfies Meta<typeof CaptionText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Welcome to Our Site',
  },
};
