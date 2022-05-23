import React, { ChangeEvent, useState } from 'react';
import styled from '@emotion/styled';
import { TextLabelLarge } from '@uiToolkit/Typography';
import { ThemeType } from '@themes/clients/baseTheme';

interface ICheckbox {
  onChange?: () => void;
  value?: any;
  options?: any;
}

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

interface InputTypes {
  theme?: ThemeType;
}

const getBackgroundColor = (theme: ThemeType) => {
  const hslaColor = theme.colors.surfaces.bg40.split(',');
  hslaColor[3] = '0.3';
  return hslaColor.join() + ')';
};

const Input = styled.input<InputTypes>`
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  cursor: pointer;
  margin: 0;
  margin-right: 8px;
  font: inherit;
  width: 1.15em;
  height: 1.15em;
  background: ${({ theme }) => getBackgroundColor(theme)};
  border: 0.15em solid ${({ theme }) => theme.colors.surfaces.bg40};
  border-radius: 0.15em;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;
  ::before {
    content: '';
    width: 0.65em;
    height: 0.65em;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em ${({ theme }) => theme.colors.surfaces.bg40};
    transform-origin: bottom left;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  }
  :checked::before {
    transform: scale(1);
  }
`;

export const Checkbox = ({ options, onChange }: ICheckbox) => {
  const [val, setVal] = React.useState('');

  const handleOnChange = (e: any) => {
    console.log(e.target.value, 'ass');
    setVal(e.target.value);
    if (onChange) {
      onChange();
    }
  };

  return (
    <Wrapper>
      <Input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" onChange={handleOnChange} />
      <StyledLabel htmlFor="vehicle1"> I have a bike</StyledLabel>
    </Wrapper>
  );
};
