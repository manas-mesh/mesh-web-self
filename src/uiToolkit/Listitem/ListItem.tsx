import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@chakra-ui/react';

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
  background: ${({ theme, isDisabled }) => (isDisabled ? 'unset' : theme?.colors?.surfaces?.bg92)};
  border-radius: 8px;
  padding: 12px;
  border: 1px solid ${({ theme }) => theme?.colors?.border?.tw24};
  margin-bottom: 12px;
  &:hover {
    background: ${({ theme, isDisabled }) => (isDisabled ? 'unset' : theme?.colors?.surfaces?.bg96)};
    cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
  }
  &:active {
    background: ${({ theme }) => theme?.colors?.surfaces?.white};
  }
`;
const Listitem = ({
  rightComponent,
  leftComponent,
  className,
  subTitle,
  title,
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
      return <Box color={'text.bg40'}>{subTitle}</Box>;
    }
  };

  const renderTitle = (): JSX.Element | undefined => {
    if (title) {
      return <div>{title}</div>;
    }
  };

  const renderOtherInfo = (): JSX.Element => (
    <Box marginLeft={8}>
      {renderTitle()}
      {renderSubtitle()}
    </Box>
  );

  const handleOnClick = (): void => {
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
    <Wrapper isDisabled={isDisabled} active={active} onClick={handleOnClick}>
      <Box display={'flex'}>
        {renderLeftComponent()}
        {renderOtherInfo()}
      </Box>
      {renderActionItems()}
    </Wrapper>
  );
};

export default Listitem;
