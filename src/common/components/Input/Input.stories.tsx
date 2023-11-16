import { Meta, StoryFn as Story } from '@storybook/react';
import Input, { IInput } from '.';

export default {
  title: 'UI/Input',
  component: Input,
} satisfies Meta<typeof Input>;

export const Default: Story<IInput> = args => {
  return <Input type="email" placeholder="admin@admin.com" {...args} />;
};
