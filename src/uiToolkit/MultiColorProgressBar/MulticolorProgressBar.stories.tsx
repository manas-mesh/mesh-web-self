/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import { MulticolorProgressBar } from './';

const MulticolorProgressBarStory = {
  title: 'Core Components/MulticolorProgressBar',
  component: MulticolorProgressBar,
};

const COLORS = [
  { value: '60%', color: 'red', name: 'On-track' },
  { value: '10%', color: 'blue', name: 'Off-track' },
  { value: '29%', color: 'green', name: 'At-riskk' },
  { value: '1%', color: 'yellow', name: 'Closed' },
];

export default MulticolorProgressBarStory;

export const Sample = () => (
  <div style={{ width: '300px' }}>
    <MulticolorProgressBar colors={COLORS} />;
  </div>
);
