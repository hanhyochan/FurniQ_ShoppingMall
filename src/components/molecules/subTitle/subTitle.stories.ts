import SubTitle from './SubTitle';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SubTitle> = {
  title: 'subTitle',
  component: SubTitle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SubTitle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
// 찜 버튼 컴포넌트 만드셈..
