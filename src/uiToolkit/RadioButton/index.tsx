import React, { ChangeEvent, useState } from 'react';
import styled from '@emotion/styled';
import { TextLabelLarge } from '@uiToolkit/Typography';
import { ThemeType } from '@themes/clients/baseTheme';

interface IRadioButton {
  onChange?: () => void;
  value?: any;
  options?: any;
}

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 8px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

interface InputTypes {
  theme?: ThemeType;
}

const Radio = styled.input<InputTypes>`
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  margin-right: 8px;
  width: 20px;
  height: 20px;
  border: 0.15em solid ${({ theme }) => theme.colors.surfaces.bg40};
  border-radius: 50%;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;
  cursor: pointer;
  ::before {
    content: '';
    width: 0.65em;
    height: 0.65em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em ${({ theme }) => theme.colors.surfaces.bg40};
  }
  :checked::before {
    transform: scale(1);
  }
`;

const RadioButton = ({ options, onChange }: IRadioButton) => {
  const [val, setVal] = React.useState('');

  const handleOnChange = (e: any) => {
    setVal(e.target.value);
    if (onChange) {
      onChange();
    }
  };

  const renderRadio = () =>
    options.map((item: any, index: number) => (
      <StyledLabel key={index}>
        <Radio type="radio" value={item.label} checked={val === item.label} onChange={handleOnChange} />
        <TextLabelLarge>{item.label}</TextLabelLarge>
      </StyledLabel>
    ));

  return <Wrapper>{renderRadio()}</Wrapper>;
};

export default RadioButton;
