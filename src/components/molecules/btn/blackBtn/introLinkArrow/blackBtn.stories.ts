import BlackBtn from './BlackBtn';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BlackBtn> = {
  title: 'blackBtn',
  component: BlackBtn,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BlackBtn>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
// 찜버튼 컴포넌트 만드셈..
