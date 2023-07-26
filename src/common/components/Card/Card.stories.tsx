import { Meta, StoryFn as Story } from '@storybook/react';
import Card, { CardProps } from '.';

export default {
  title: 'UI/Card',
  component: Card,
} satisfies Meta<typeof Card>;

export const Default: Story<CardProps> = args => {
  return (
    <Card {...args}>
      <Card.Body>
        <h1 className="font-semibold text-2xl">Hola mundo</h1>
      </Card.Body>
    </Card>
  );
};
