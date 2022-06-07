import { useTheme } from '@emotion/react';

import { FONT_SIZE_VARIANTS, FONT_VARIANTS, FONT_WEIGHT_VARIANTS, ThemeType } from '@themes/clients/baseTheme';
import { ComponentType, FC, ReactNode } from 'react';
import { Text, TextProps, StyleProps } from '@chakra-ui/react';

const TransientProps = ['fontSize', 'lineHeight', 'fontWeight', 'textColor', 'letterSpacing', 'sx'];

// **************** Main component- start *******************

export interface TypographyPropTypes {
  size?: FONT_SIZE_VARIANTS;
  lineHeight?: string;
  weight?: FONT_WEIGHT_VARIANTS;
  color?: string;
  as?: ComponentType;
  variant?: FONT_VARIANTS;
  children?: ReactNode | null;
}

export const Typography: FC<TypographyPropTypes & StyleProps> = ({
  children = null,
  as,
  variant = FONT_VARIANTS.body,
  size = FONT_SIZE_VARIANTS.medium,
  lineHeight = '16px',
  weight = FONT_WEIGHT_VARIANTS.regular,
  color,
  ...styleProps
}) => {
  const theme: ThemeType = useTheme();
  const fontSize = theme.fonts.size[variant][size];
  const fontWeight = theme.fonts.weight[weight] ?? theme.fonts.weight.regular;
  const textColor = color ?? theme.colors.text.bg20;
  const letterSpacing = theme.fonts.letterSpacing[variant][size];

  return (
    <Text
      as={as}
      fontSize={fontSize}
      lineHeight={lineHeight}
      fontWeight={fontWeight}
      textColor={textColor}
      letterSpacing={letterSpacing}
      {...styleProps}
    >
      {children}
    </Text>
  );
};
// **************** Main component- end *******************

export const TextDisplayLarge = (props: TypographyPropTypes & StyleProps) => (
  <Typography variant={FONT_VARIANTS.display} size={FONT_SIZE_VARIANTS.large} lineHeight={'64px'} {...props} />
);
export const TextDisplayMedium = (props: TypographyPropTypes & StyleProps) => (
  <Typography variant={FONT_VARIANTS.display} size={FONT_SIZE_VARIANTS.medium} lineHeight={'52px'} {...props} />
);
export const TextDisplaySmall = (props: TypographyPropTypes & StyleProps) => (
  <Typography variant={FONT_VARIANTS.display} size={FONT_SIZE_VARIANTS.small} lineHeight={'44px'} {...props} />
);

export const TextHeadlineLarge = (props: TypographyPropTypes & StyleProps) => (
  <Typography variant={FONT_VARIANTS.headline} size={FONT_SIZE_VARIANTS.large} lineHeight={'40px'} {...props} />
);
export const TextHeadlineMedium = (props: TypographyPropTypes & StyleProps) => (
  <Typography variant={FONT_VARIANTS.headline} size={FONT_SIZE_VARIANTS.medium} lineHeight={'36px'} {...props} />
);
export const TextHeadlineSmall = (props: TypographyPropTypes & StyleProps) => (
  <Typography variant={FONT_VARIANTS.headline} size={FONT_SIZE_VARIANTS.small} lineHeight={'32px'} {...props} />
);

export const TextTitleLarge = (props: TypographyPropTypes & StyleProps) => (
  <Typography variant={FONT_VARIANTS.title} size={FONT_SIZE_VARIANTS.large} lineHeight={'28px'} {...props} />
);
export const TextTitleMedium = (props: TypographyPropTypes & StyleProps) => (
  <Typography
    variant={FONT_VARIANTS.title}
    size={FONT_SIZE_VARIANTS.medium}
    lineHeight={'24px'}
    weight={FONT_WEIGHT_VARIANTS.medium}
    {...props}
  />
);
export const TextTitleSmall = (props: TypographyPropTypes & StyleProps) => (
  <Typography
    variant={FONT_VARIANTS.title}
    size={FONT_SIZE_VARIANTS.small}
    lineHeight={'20px'}
    weight={FONT_WEIGHT_VARIANTS.medium}
    {...props}
  />
);

export const TextLabelLarge = (props: TypographyPropTypes & StyleProps) => (
  <Typography
    variant={FONT_VARIANTS.label}
    size={FONT_SIZE_VARIANTS.large}
    lineHeight={'20px'}
    weight={FONT_WEIGHT_VARIANTS.medium}
    {...props}
  />
);
export const TextLabelMedium = (props: TypographyPropTypes & StyleProps) => (
  <Typography
    variant={FONT_VARIANTS.label}
    size={FONT_SIZE_VARIANTS.medium}
    lineHeight={'16px'}
    weight={FONT_WEIGHT_VARIANTS.medium}
    {...props}
  />
);
export const TextLabelSmall = (props: TypographyPropTypes & StyleProps) => {
  const theme: ThemeType = useTheme();
  return (
    <Typography
      variant={FONT_VARIANTS.label}
      size={FONT_SIZE_VARIANTS.small}
      lineHeight={'16px'}
      weight={FONT_WEIGHT_VARIANTS.medium}
      color={theme.colors.text.bg40}
      {...props}
    />
  );
};

export const TextBodyLarge = (props: TypographyPropTypes & StyleProps) => (
  <Typography variant={FONT_VARIANTS.body} size={FONT_SIZE_VARIANTS.large} lineHeight={'24px'} {...props} />
);
export const TextBodyLargeBold = (props: TypographyPropTypes & StyleProps) => (
  <TextBodyLarge weight={FONT_WEIGHT_VARIANTS.medium} {...props} />
);

export const TextBodyMedium = (props: TypographyPropTypes & StyleProps) => (
  <Typography variant={FONT_VARIANTS.body} size={FONT_SIZE_VARIANTS.medium} lineHeight={'20px'} {...props} />
);
export const TextBodyMediumBold = (props: TypographyPropTypes & StyleProps) => (
  <TextBodyMedium weight={FONT_WEIGHT_VARIANTS.medium} {...props} />
);

export const TextBodySmall = (props: TypographyPropTypes & StyleProps) => (
  <Typography variant={FONT_VARIANTS.body} size={FONT_SIZE_VARIANTS.small} lineHeight={'16px'} {...props} />
);
export const TextBodySmallBold = (props: TypographyPropTypes & StyleProps) => (
  <TextBodySmall weight={FONT_WEIGHT_VARIANTS.medium} {...props} />
);
