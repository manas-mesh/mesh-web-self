import { ICON_NAMES } from '@constants/icons';
import { useTheme } from '@emotion/react';
import { ThemeType } from '@themes/clients/baseTheme';

import Icon from './Icon';

const IconStory = {
  title: 'Core Components/Icon',
  component: Icon,
};

export default IconStory;

export const Primary = () => <Icon name={ICON_NAMES.testIcon} />;

// use sx prop with theme colors
export const Colored = () => {
  const theme: ThemeType = useTheme();
  return <Icon name={ICON_NAMES.testIcon} sx={{ color: theme.colors.icon.red400 }} />;
};

export const Size = () => <Icon name={ICON_NAMES.testIcon} sx={{ fontSize: '56px' }} />;
