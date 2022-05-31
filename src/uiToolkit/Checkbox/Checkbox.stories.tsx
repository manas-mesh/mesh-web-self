/* eslint-disable import/no-anonymous-default-export */

import { Checkbox } from './';

const RadioButtonStory = {
  title: 'Core Components/Checkbox',
  component: Checkbox,
};

const options = {
  label: 'delhi',
  uid: 1,
};

export const Normal = () => <Checkbox onChange={(value: string) => {}} value={''} options={options} />;

export default RadioButtonStory;
