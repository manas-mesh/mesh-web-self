import React from 'react';

import { Button, BUTTON_SIZE, BUTTON_VARIANT } from './Button';
import { AppNavigationOutlined as DemoIcon } from '@iconComponents';

const ButtonStory = {
  title: 'Core Components/Button',
  component: Button,
};

export default ButtonStory;

export const Primary = () => <Button>Hello</Button>;

export const PrimaryWithStartIcon = () => <Button StartIcon={DemoIcon}>Hello</Button>;

export const PrimaryDisabledWithStartIcon = () => (
  <Button isDisabled StartIcon={DemoIcon}>
    Hello
  </Button>
);

export const PrimaryWithEndIcon = () => <Button EndIcon={DemoIcon}>Hello</Button>;

export const PrimaryLarge = () => <Button size={BUTTON_SIZE.large}>Hello</Button>;

export const PrimaryLargeWithStartIcon = () => (
  <Button StartIcon={DemoIcon} size={BUTTON_SIZE.large}>
    Hello
  </Button>
);

export const PrimaryLargeWithEndIcon = () => (
  <Button EndIcon={DemoIcon} size={BUTTON_SIZE.large}>
    Hello
  </Button>
);

export const Disabled = () => <Button isDisabled>Hello</Button>;

export const Outlined = () => <Button variant={BUTTON_VARIANT.outlined}>Hello</Button>;

export const OutlinedWithStartIcon = () => (
  <Button variant={BUTTON_VARIANT.outlined} StartIcon={DemoIcon}>
    Hello
  </Button>
);
export const OutlinedLarge = () => (
  <Button size={BUTTON_SIZE.large} variant={BUTTON_VARIANT.outlined}>
    Hello
  </Button>
);

export const OutlinedDisabled = () => (
  <Button variant={BUTTON_VARIANT.outlined} isDisabled>
    Hello
  </Button>
);

export const Text = () => <Button variant={BUTTON_VARIANT.ghost}>Hello</Button>;

export const TextWithStartIcon = () => (
  <Button variant={BUTTON_VARIANT.ghost} StartIcon={DemoIcon}>
    Hello
  </Button>
);

export const TextLarge = () => (
  <Button size={BUTTON_SIZE.large} variant={BUTTON_VARIANT.ghost}>
    Hello
  </Button>
);

export const TextDisabled = () => (
  <Button variant={BUTTON_VARIANT.ghost} isDisabled>
    Hello
  </Button>
);

export const IconOnlySmall = () => <Button EndIcon={DemoIcon}></Button>;

export const WithoutBackgroundPrimary = () => <Button withBackground={false}>Hello</Button>;

export const WithoutBackgroundWithStartIcon = () => (
  <Button withBackground={false} StartIcon={DemoIcon}>
    Hello
  </Button>
);

export const WithoutBackgroundWithEndIcon = () => (
  <Button withBackground={false} EndIcon={DemoIcon}>
    Hello
  </Button>
);

export const WithoutBackgroundIconOnly = () => <Button withBackground={false} StartIcon={DemoIcon} />;
