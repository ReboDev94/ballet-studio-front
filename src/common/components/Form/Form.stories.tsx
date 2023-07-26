import { Meta, StoryFn as Story } from '@storybook/react';
import Form, { FormProps } from '.';
import Input from '../Input';

export default {
  title: 'UI/Form',
  component: Form,
} satisfies Meta<typeof Form>;

export const Default: Story<FormProps> = args => {
  return (
    <Form {...args}>
      <div className="w-96">
        <Form.Label title="Correo electrónico" />
        <Input type="text" variant="primary" />
      </div>
    </Form>
  );
};
