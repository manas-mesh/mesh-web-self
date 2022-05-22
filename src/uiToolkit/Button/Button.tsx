import styled from '@emotion/styled';
import React, { FC, ReactNode, useMemo } from 'react';
import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react';
import { ThemeProps, ThemeType } from '@themes/clients/baseTheme';

import { TextLabelLarge, TextLabelSmall } from 'uiToolkit/Typography';
import { useTheme } from '@emotion/react';

export enum BUTTON_VARIANT {
  solid = 'solid',
  outlined = 'outlined',
  ghost = 'ghost',
  link = 'link',
}

export enum BUTTON_SIZE {
  normal = 'normal',
  large = 'large',
}

const TransientProps = ['size', 'isIconOnlyButton', 'isLeftIcon', 'withBackground'];

export interface Dictionary<T> {
  [Key: string]: T;
}

type PropTypes = {
  size: BUTTON_SIZE;
  isIconOnlyButton: boolean;
  isLeftIcon: boolean;
  withBackground: boolean;
};

const getBaseButtonStyles = (theme: ThemeType, props: PropTypes) => ({
  boxShadow: 'none',
  height: !props.withBackground ? '24px' : props.size === BUTTON_SIZE.large ? '40px' : '28px',
  textTransform: 'none',
  padding: !props.withBackground ? '0' : props.size === BUTTON_SIZE.large ? '8px' : '4px',
  borderRadius: props.size === BUTTON_SIZE.large ? '8px' : '4px',
  border: 0,
  minWidth: 'auto',

  '& .chakra-button__icon': {
    margin: props.isIconOnlyButton ? '0' : props.isLeftIcon ? '0 4px 0 0' : '0 0 0 4px',
  },
  '&:hover:enabled': !props.withBackground
    ? {}
    : {
        cursor: 'pointer',
        backgroundColor: theme.colors.surfaces.bg96,
        '&>p': {
          color: theme.colors.text.bg40,
        },
        '& svg': {
          color: theme.colors.icon.bg40,
        },
      },

  '&:active:enabled, &.active-styles': !props.withBackground
    ? {}
    : {
        backgroundColor: theme.colors.surfaces.white,
        '&>p': {
          color: theme.colors.text.bg40,
        },
        '& svg': {
          color: theme.colors.icon.bg40,
        },
      },

  '&:disabled': {
    '&>*': {
      opacity: '50%',
    },
    cursor: 'not-allowed',
  },
});

const StyledButton = styled(ChakraButton, {
  shouldForwardProp: (prop: string) => !TransientProps.includes(prop),
})(
  ({ theme, ...props }: ThemeProps & PropTypes): Dictionary<any> => ({
    ...getBaseButtonStyles(theme, props),
    backgroundColor: theme.colors.surfaces.bg40,
  }),
);

const OutlineButton = styled(ChakraButton, {
  shouldForwardProp: (prop: string) => !TransientProps.includes(prop),
})(
  ({ theme, ...props }: ThemeProps & PropTypes): Dictionary<any> => ({
    ...getBaseButtonStyles(theme, props),

    backgroundColor: 'transparent',
    '&>p': {
      color: theme.colors.text.bg40,
    },
    border: `1px solid ${theme.colors.border.bg40}`,
    '&:active:enabled': {
      borderColor: 'transparent',
      backgroundColor: theme.colors.surfaces.white,
    },
    '& svg': {
      color: theme.colors.icon.bg40,
    },
  }),
);

const TextButton = styled(ChakraButton, {
  shouldForwardProp: (prop: string) => !TransientProps.includes(prop),
})(
  ({ theme, ...props }: ThemeProps & PropTypes): Dictionary<any> => ({
    ...getBaseButtonStyles(theme, props),

    backgroundColor: 'transparent',
    '&>p': {
      color: theme.colors.text.bg40,
    },
    '& svg': {
      color: theme.colors.icon.bg40,
    },
  }),
);

const BaseButton = styled(ChakraButton, {
  shouldForwardProp: (prop: string) => !TransientProps.includes(prop),
})(
  ({ theme, ...props }: ThemeProps & PropTypes): Dictionary<any> => ({
    ...getBaseButtonStyles(theme, props),

    backgroundColor: 'transparent',
    '&>p': {
      color: theme.colors.text.bg40,
    },
    '& svg': {
      color: theme.colors.icon.bg40,
    },
  }),
);

type AdditionalButtonProps = {
  children?: ReactNode;
  variant?: BUTTON_VARIANT;
  size?: BUTTON_SIZE | undefined;
  StartIcon?: FC<any> | undefined;
  EndIcon?: FC<any> | undefined;
  selected?: boolean;
  className?: string;
  withBackground?: boolean;
};

export const Button: FC<ButtonProps & AdditionalButtonProps> = ({
  children,
  variant = BUTTON_VARIANT.solid,
  size = BUTTON_SIZE.normal,
  StartIcon,
  EndIcon,
  // selected means render in active state, used in TabBarSelect
  selected = false,
  className = '',
  withBackground = true,
  ...props
}) => {
  // for without background button variant will be 'link'
  if (!withBackground) {
    variant = BUTTON_VARIANT.link;
  }

  let ButtonComp = null;
  let StartIconComp = undefined;
  let EndIconComp = undefined;
  const isIconOnlyButton = !children;
  const isLeftIcon = !!StartIcon;
  const isTextOnlyButton = !StartIcon && !EndIcon;
  const theme = useTheme();

  switch (variant) {
    case BUTTON_VARIANT.outlined:
      ButtonComp = OutlineButton;
      break;
    case BUTTON_VARIANT.ghost:
      ButtonComp = TextButton;
      break;
    case BUTTON_VARIANT.link:
      ButtonComp = BaseButton;
      break;
    case BUTTON_VARIANT.solid:
    default:
      ButtonComp = StyledButton;
  }

  if (StartIcon) {
    StartIconComp = <StartIcon color={theme.colors.icon.white} boxSize={size === BUTTON_SIZE.large ? '24px' : '20'} />;
  }

  if (EndIcon) {
    EndIconComp = <EndIcon color={theme.colors.icon.white} boxSize={size === BUTTON_SIZE.large ? '24' : '20'} />;
  }

  let TextLabelComp = TextLabelSmall;
  if (size === BUTTON_SIZE.large) {
    TextLabelComp = TextLabelLarge;
  }

  const labelMargins = useMemo(() => {
    if (!children) {
      // in case of icon only button
      return 0;
    }
    if (isTextOnlyButton) {
      // in case of text only button
      return size === BUTTON_SIZE.large ? '0 8px' : '0 4px';
    }
    if (StartIcon) {
      return size === BUTTON_SIZE.large ? '0 8px 0 0' : '0 4px 0 0';
    }
    // EndIcon case
    return size === BUTTON_SIZE.large ? '0 0 0 8px' : '0 0 0 4px';
  }, [children, isTextOnlyButton, size, StartIcon]);
  return (
    <ButtonComp
      {...props}
      size={size}
      leftIcon={StartIconComp}
      rightIcon={EndIconComp}
      isIconOnlyButton={isIconOnlyButton}
      isLeftIcon={isLeftIcon}
      className={selected ? className + ' active-styles' : className}
      withBackground={withBackground}
    >
      <TextLabelComp color="white" m={labelMargins}>
        {children}
      </TextLabelComp>
    </ButtonComp>
  );
};
