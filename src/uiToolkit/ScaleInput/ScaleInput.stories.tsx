import { TabBarValueType } from '@uiToolkit/TabBarSelect/TabBarSelect';
import React from 'react';

import { ScaleInput } from './ScaleInput';

const ScaleInputStory = {
  title: 'Core Components/ScaleInput',
  component: ScaleInput,
};

const options = [
  { value: 'one', label: 'one' },
  { value: 'two', label: 'two' },
  { value: 'three', label: 'three' },
];

const onChangeHandler = (newSelectedValue: TabBarValueType) =>
  console.log(`new selected value is: ${newSelectedValue}`);

export default ScaleInputStory;

export const WithBackground = () => (
  <ScaleInput options={options} value="two" onChange={onChangeHandler} startText="Low" endText="High" />
);

export const WithoutBackground = () => (
  <ScaleInput
    options={options}
    value="two"
    onChange={onChangeHandler}
    startText="Low"
    endText="High"
    withBackground={false}
  />
);

export const Required = () => (
  <ScaleInput
    options={options}
    onChange={onChangeHandler}
    startText="Low"
    endText="High"
    isRequired={true}
    enableValidation={true}
  />
);
