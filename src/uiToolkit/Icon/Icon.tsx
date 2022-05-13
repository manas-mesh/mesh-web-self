import { SvgIcon, SvgIconProps } from '@mui/material';
import { SxProps } from '@mui/system';
import { useTheme } from '@emotion/react';
import { ICON_NAMES, ICONS } from '@constants/icons';
import React, { FunctionComponent } from 'react';
import { ThemeType } from '@themes/clients/baseTheme';

type Props = {
  name: ICON_NAMES;
  sx?: SxProps;
  svgProps?: SvgIconProps;
};

const Icon: FunctionComponent<Props> = ({ name, sx = {}, svgProps }) => {
  const theme: ThemeType = useTheme();
  return (
    <SvgIcon
      inheritViewBox
      component={ICONS[name]}
      // default color
      htmlColor={theme.colors.icon.black}
      sx={{ fontSize: 18, ...sx }}
      {...svgProps}
    />
  );
};

export default Icon;
