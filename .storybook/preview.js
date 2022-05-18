import { addDecorator } from '@storybook/react';
import decorators from './decorators';

import * as NextImage from 'next/image';

// This is required because storybook isn't aware of the fancy ways nextJS does image optimization
// so we are not concerned with image optimization in storybook and just override nextJS images to be always
// unoptimized in storybook
// https://storybook.js.org/blog/get-started-with-storybook-and-next-js/
const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(decorators);
