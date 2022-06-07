import styled from '@emotion/styled';
import React from 'react';
import { useTheme } from '@emotion/react';
import { TextLabelSmall } from 'uiToolkit/Typography';
import { ThemeType } from '@themes/clients/baseTheme';

interface IProps {
  isSelected: boolean;
  onClick: (index: number) => void;
  item: any;
  addMarginTop: boolean;
  index: number;
}

type WrapperTypes = {
  addMarginTop: boolean;
  isSelected: boolean;
};

const Wrapper = styled.div<WrapperTypes>`
  display: flex;
  border-radius: 4px;
  cursor: pointer;
  padding: 6px 8px;
  margin-right: 12px;
  background: ${({ theme, isSelected }) => (isSelected ? '#FCC664' : theme.colors.surfaces.white)};
  margin-top: ${({ addMarginTop }) => (addMarginTop ? '12px' : 'unset')};
`;

export const Filter = ({ isSelected, onClick, item, addMarginTop, index }: IProps): JSX.Element => {
  const theme: ThemeType = useTheme();

  const onClickHandler = (): void => {
    if (onClick) {
      onClick(index);
    }
  };
  return (
    <Wrapper onClick={onClickHandler} isSelected={isSelected} addMarginTop={true}>
      <TextLabelSmall color={theme.colors.surfaces.g20}>{item.name}</TextLabelSmall>
    </Wrapper>
  );
};

export default Filter;
