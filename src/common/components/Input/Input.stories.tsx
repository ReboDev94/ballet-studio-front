import { Meta, StoryFn as Story } from '@storybook/react';
import Input, { InputProps } from '.';

export default {
  title: 'UI/Input',
  component: Input,
} satisfies Meta<typeof Input>;

export const Default: Story<InputProps> = args => {
  return <Input type="email" placeholder="admin@admin.com" {...args} />;
};
