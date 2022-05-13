import { SxProps } from '@mui/material';
import { useTheme } from '@emotion/react';
import styled, { StyledComponent } from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';

import { FONT_SIZE_VARIANTS, FONT_VARIANTS, FONT_WEIGHT_VARIANTS, ThemeType } from '@themes/clients/baseTheme';
import { FC, ReactNode } from 'react';

const TransientProps = ['fontSize', 'lineHeight', 'fontWeight', 'textColor', 'letterSpacing', 'sx'];

type TransientPropTypes = {
  fontSize: string;
  lineHeight: string;
  fontWeight: string | number;
  textColor: string;
  letterSpacing: string;
};

const TypographyWrapper: StyledComponent<TransientPropTypes> = styled('p', {
  shouldForwardProp: (prop: any) => isPropValid(prop) && !TransientProps.includes(prop),
})(
  ({ fontSize, lineHeight, fontWeight, textColor, letterSpacing }: TransientPropTypes) => `
  color: ${textColor};
  font-size: ${fontSize};
  line-height: ${lineHeight};
  font-weight: ${fontWeight};
  letter-spacing: ${letterSpacing};
  margin: 0;
`,
);

// **************** Main component- start *******************

export interface TypographyPropTypes {
  size?: FONT_SIZE_VARIANTS;
  lineHeight?: string;
  weight?: FONT_WEIGHT_VARIANTS;
  color?: string;
  sx?: SxProps;
  as?: string;
  variant?: FONT_VARIANTS;
  children?: ReactNode | null;
}

export const Typography: FC<TypographyPropTypes> = ({
  children = null,
  as,
  sx,
  variant = FONT_VARIANTS.body,
  size = FONT_SIZE_VARIANTS.medium,
  lineHeight = '16px',
  weight = FONT_WEIGHT_VARIANTS.regular,
  color,
}) => {
  const theme: ThemeType = useTheme();
  const fontSize = theme.fonts.size[variant][size];
  const fontWeight = theme.fonts.weight[weight] ?? theme.fonts.weight.regular;
  const textColor = color ?? theme.colors.text.bg20;
  const letterSpacing = theme.fonts.letterSpacing[variant][size];

  return (
    <TypographyWrapper
      as={as}
      fontSize={fontSize}
      lineHeight={lineHeight}
      fontWeight={fontWeight}
      textColor={textColor}
      letterSpacing={letterSpacing}
      sx={sx}
    >
      {children}
    </TypographyWrapper>
  );
};
// **************** Main component- end *******************

export const TextDisplayLarge = (props: TypographyPropTypes) => (
  <Typography variant={FONT_VARIANTS.display} size={FONT_SIZE_VARIANTS.large} lineHeight={'64px'} {...props} />
);
export const TextDisplayMedium = (props: TypographyPropTypes) => (
  <Typography variant={FONT_VARIANTS.display} size={FONT_SIZE_VARIANTS.medium} lineHeight={'52px'} {...props} />
);
export const TextDisplaySmall = (props: TypographyPropTypes) => (
  <Typography variant={FONT_VARIANTS.display} size={FONT_SIZE_VARIANTS.small} lineHeight={'44px'} {...props} />
);

export const TextHeadlineLarge = (props: TypographyPropTypes) => (
  <Typography variant={FONT_VARIANTS.headline} size={FONT_SIZE_VARIANTS.large} lineHeight={'40px'} {...props} />
);
export const TextHeadlineMedium = (props: TypographyPropTypes) => (
  <Typography variant={FONT_VARIANTS.headline} size={FONT_SIZE_VARIANTS.medium} lineHeight={'36px'} {...props} />
);
export const TextHeadlineSmall = (props: TypographyPropTypes) => (
  <Typography variant={FONT_VARIANTS.headline} size={FONT_SIZE_VARIANTS.small} lineHeight={'32px'} {...props} />
);

export const TextTitleLarge = (props: TypographyPropTypes) => (
  <Typography variant={FONT_VARIANTS.title} size={FONT_SIZE_VARIANTS.large} lineHeight={'28px'} {...props} />
);
export const TextTitleMedium = (props: TypographyPropTypes) => (
  <Typography
    variant={FONT_VARIANTS.title}
    size={FONT_SIZE_VARIANTS.medium}
    lineHeight={'24px'}
    weight={FONT_WEIGHT_VARIANTS.bold}
    {...props}
  />
);
export const TextTitleSmall = (props: TypographyPropTypes) => (
  <Typography
    variant={FONT_VARIANTS.title}
    size={FONT_SIZE_VARIANTS.small}
    lineHeight={'20px'}
    weight={FONT_WEIGHT_VARIANTS.bold}
    {...props}
  />
);

export const TextLabelLarge = (props: TypographyPropTypes) => (
  <Typography
    variant={FONT_VARIANTS.label}
    size={FONT_SIZE_VARIANTS.large}
    lineHeight={'20px'}
    weight={FONT_WEIGHT_VARIANTS.bold}
    {...props}
  />
);
export const TextLabelMedium = (props: TypographyPropTypes) => (
  <Typography
    variant={FONT_VARIANTS.label}
    size={FONT_SIZE_VARIANTS.medium}
    lineHeight={'16px'}
    weight={FONT_WEIGHT_VARIANTS.bold}
    {...props}
  />
);
export const TextLabelSmall = (props: TypographyPropTypes) => {
  const theme: ThemeType = useTheme();
  return (
    <Typography
      variant={FONT_VARIANTS.label}
      size={FONT_SIZE_VARIANTS.small}
      lineHeight={'16px'}
      weight={FONT_WEIGHT_VARIANTS.bold}
      color={theme.colors.text.bg40}
      {...props}
    />
  );
};

export const TextBodyLarge = (props: TypographyPropTypes) => (
  <Typography variant={FONT_VARIANTS.body} size={FONT_SIZE_VARIANTS.large} lineHeight={'24px'} {...props} />
);
export const TextBodyLargeBold = (props: TypographyPropTypes) => (
  <TextBodyLarge weight={FONT_WEIGHT_VARIANTS.bold} {...props} />
);

export const TextBodyMedium = (props: TypographyPropTypes) => (
  <Typography variant={FONT_VARIANTS.body} size={FONT_SIZE_VARIANTS.medium} lineHeight={'20px'} {...props} />
);
export const TextBodyMediumBold = (props: TypographyPropTypes) => (
  <TextBodyMedium weight={FONT_WEIGHT_VARIANTS.bold} {...props} />
);

export const TextBodySmall = (props: TypographyPropTypes) => (
  <Typography variant={FONT_VARIANTS.body} size={FONT_SIZE_VARIANTS.small} lineHeight={'16px'} {...props} />
);
export const TextBodySmallBold = (props: TypographyPropTypes) => (
  <TextBodySmall weight={FONT_WEIGHT_VARIANTS.bold} {...props} />
);
