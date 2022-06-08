import { useTheme } from '@emotion/react';
import { ThemeType } from '@themes/clients/baseTheme';
import { AppNavigationOutlined as DemoIcon } from '@iconComponents';

const IconStory = {
  title: 'Core Components/Icon',
  component: DemoIcon,
};

export default IconStory;

export const Primary = () => <DemoIcon />;

// use sx prop with theme colors
export const Colored = () => {
  const theme: ThemeType = useTheme();
  return <DemoIcon color={theme.colors.icon.red400} />;
};

export const Size = () => <DemoIcon boxSize="56px" />;
