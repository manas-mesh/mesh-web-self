import { Link, LinkProps } from '@chakra-ui/react';
import { useTheme } from '@emotion/react';
import { ThemeType } from '@themes/clients/baseTheme';

// created component for when possible variants are defined in design system.
// then the required styles and variants could be fixed here instead of adding them
// again and again in child component of Link
const TextLink = (props: LinkProps) => {
  const theme: ThemeType = useTheme();

  return <Link {...props} textDecoration="none" />;
};

export { TextLink };
