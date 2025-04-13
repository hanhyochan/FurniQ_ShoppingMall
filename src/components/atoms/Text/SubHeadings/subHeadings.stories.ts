import subHeading from './subHeading';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof subHeading> = {
  title: 'subHeading',
  component: subHeading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
    className: { control: 'text' },
  },
} satisfies Meta<typeof subHeading>;

export default meta;

type Story = StoryObj<typeof subHeading>;

export const Default: Story = {
  args: {
    children: 'Welcome to Our Site',
  },
};