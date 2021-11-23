import { ComponentStory, ComponentMeta } from '@storybook/react';

import ToggleButtons from './ToggleButtons';

export default {
  title: 'Inputs/Button',
  component: ToggleButtons,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    buttonColor: { control: 'color' },
  },
} as ComponentMeta<typeof ToggleButtons>;

const Template: ComponentStory<typeof ToggleButtons> = (args) => <ToggleButtons {...args} />;

export const Main = Template.bind({});
Main.args = {
  color: '#21a5ef',
};