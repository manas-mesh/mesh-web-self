/* eslint-disable import/no-anonymous-default-export */

import RadioButton from './';

const RadioButtonStory = {
  title: 'Core Components/RadioButton',
  component: RadioButton,
};

const OPTIONS = [
  {
    value: '1',
    label: 'Delhi',
  },
  {
    value: '2',
    label: 'Bangalore',
  },
  {
    value: '3',
    label: 'Chennai',
  },
  {
    value: '4',
    label: 'Kolkata',
  },
];

export const Normal = () => <RadioButton options={OPTIONS} />;

export default RadioButtonStory;
