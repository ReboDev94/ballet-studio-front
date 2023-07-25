import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from '@/common/components';
import { boolean } from 'yup';

const meta = {
  title: 'UI/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    right: false,
  },
};
