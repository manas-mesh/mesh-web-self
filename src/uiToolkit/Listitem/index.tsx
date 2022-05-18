import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@mui/system';

interface ListitemProps {
  className?: string;
  isDisabled?: boolean;
  active?: boolean;
  title: string;
  subTitle?: string | undefined;
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
  onClick?: () => {};
}

type WrapperTypes = {
  theme?: any;
  isDisabled: boolean | undefined;
  active: boolean | undefined;
};

const Wrapper = styled.div<WrapperTypes>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme, isDisabled }) => (isDisabled ? 'unset' : theme.colors.surfaces.bg92)};
  border-radius: 8px;
  padding: 12px;
  border-width: 1px solid ${({ theme }) => theme.colors.border.tw24};
  margin-bottom: 12px;
  &:hover {
    background: ${({ theme, isDisabled }) => (isDisabled ? 'unset' : theme.colors.surfaces.bg96)};
    cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
  }
  &:active {
    background: ${({ theme }) => theme.colors.surfaces.white};
  }
`;
let kolla;

const Listitem = ({
  rightComponent,
  leftComponent,
  className,
  subTitle,
  title = 'ok',
  onClick,
  isDisabled,
  active,
}: ListitemProps) => {
  const renderLeftComponent = (): JSX.Element | undefined => {
    if (leftComponent) {
      return <>{leftComponent}</>;
    }
  };

  const renderSubtitle = (): JSX.Element | undefined => {
    if (subTitle) {
      return <Box sx={{ color: 'text.bg40' }}>{subTitle}</Box>;
    }
  };

  const renderTitle = (): JSX.Element | undefined => {
    if (title) {
      return <div>{title}</div>;
    }
  };

  const renderOtherInfo = (): JSX.Element => (
    <Box sx={{ marginLeft: '8px' }}>
      {renderTitle()}
      {renderSubtitle()}
    </Box>
  );

  const hanldeOnClick = (): void => {
    if (onClick) {
      onClick();
    }
  };

  const renderActionItems = (): JSX.Element | undefined => {
    if (isDisabled) {
      //   return <MeshIcon name={'disabledIcon'} />;
    }
    if (rightComponent) {
      return <>{rightComponent}</>;
    }
  };

  return (
    <Wrapper isDisabled={isDisabled} active={active} onClick={hanldeOnClick}>
      <Box sx={{ display: 'flex' }}>
        {renderLeftComponent()}
        {renderOtherInfo()}
      </Box>
      {renderActionItems()}
    </Wrapper>
  );
};

export default Listitem;
