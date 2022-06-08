import { noOp, noOpType } from '@constants/common';
import styled from '@emotion/styled';
import { Box, IconProps } from '@chakra-ui/react';
import { TextLabelLarge, TextLabelSmall } from 'uiToolkit/Typography';
import { ThemeProps } from '@themes/clients/baseTheme';
import { DisabledIcon } from '@assets/iconComponents';
import React from 'react';

const TransientProps = ['isDisabled'];

type ItemProps = {
  title: string;
  subTitle: string;
  actionIcon: React.FC<IconProps>;
};

export type PropTypes = {
  item: ItemProps;
  isDisabled: boolean;
  className: string;
  active: boolean;
  onClick: (() => void) | noOpType;
};

type TransientPropTypes = {
  isDisabled: boolean;
  className: string;
  onClick: (() => void) | noOpType;
};

const WrapperDiv = styled('div', {
  shouldForwardProp: (prop: string) => !TransientProps.includes(prop),
})(({ theme, isDisabled }: ThemeProps & TransientPropTypes) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: '8px',
  padding: '12px',
  borderColor: theme.colors.border.tw24,
  borderWidth: '1px',
  borderStyle: 'solid',
  backgroundColor: theme.colors.surfaces.bg92,
  marginBottom: '12px',
  '&:hover': {
    backgroundColor: isDisabled ? 'unset' : theme.colors.surfaces.bg96,
    cursor: isDisabled ? 'not-allowed' : 'pointer',
  },
  '&:active': {
    backgroundColor: theme.colors.surfaces.white,
  },
  '&.active': {
    backgroundColor: theme.colors.surfaces.white,
  },
}));

export const ReviewNavListItem = ({ item, isDisabled, className = '', active, onClick = noOp }: PropTypes) => {
  const renderMeta = () => {
    if (item.subTitle) {
      return <TextLabelSmall>{item.subTitle}</TextLabelSmall>;
    }
  };
  const renderOtherInfo = () => (
    <Box sx={{ marginLeft: '8px' }}>
      <TextLabelLarge>{item.title}</TextLabelLarge>
      {renderMeta()}
    </Box>
  );

  const Icon = item.actionIcon;

  const renderActionItems = () => {
    if (isDisabled) {
      return <DisabledIcon boxSize="20px" />;
    }
    if (!!item.actionIcon) {
      return <Icon boxSize="20px" />;
    }
  };

  return (
    <WrapperDiv className={`${className} ${active ? 'active' : ''}`} isDisabled={isDisabled} onClick={onClick}>
      <Box sx={{ display: 'flex' }}>{renderOtherInfo()}</Box>
      {renderActionItems()}
    </WrapperDiv>
  );
};
