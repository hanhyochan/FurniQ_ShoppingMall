import BodyText from './bodyText';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BodyText> = {
  title: 'BodyText',
  component: BodyText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
    className: { control: 'text' },
  },
} satisfies Meta<typeof BodyText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Welcome to Our Site',
  },
};
