/* eslint-disable import/no-anonymous-default-export */
import { DropZone } from './';

export default {
  title: 'Core Components/DropZone',
  component: DropZone,
  argTypes: { onDrop: { action: 'handle drop' } },
};

const Template = (args: any) => <DropZone {...args} />;
export const Sample = Template.bind({});
Sample.args = {
  label: 'Drop Zone',
};
