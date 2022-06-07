import React, { useState } from 'react';
import { Progress } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { ThemeType } from '@themes/clients/baseTheme';
import { Input } from '@uiToolkit/Input';
import { Box } from '@chakra-ui/react';
import { TextBodyMedium } from '@uiToolkit/Typography';
import { useTheme } from '@emotion/react';

interface Iprops {
  renderElement: string;
  showLabel?: boolean;
  supportingText?: string;
  label?: string;
  value: number;
  onChange?: (e: any) => void;
}

type WrapperTypes = {};

const Wrapper = styled.div<WrapperTypes>`
  display: flex;
  margin: 0 36px;
  margin-top: 16px;
  margin-bottom: 12px;
  flex: 1;
`;

export const StyledProgressBar = styled(Progress)`
  height: 20px;
  background: ${({ theme }) => theme.colors.border.tw24};
  border-radius: 4px;
  > div {
    background: ${({ theme }) => theme.colors.surfaces.gr100};
  }
`;

export const ProgressBar = ({ label, renderElement, showLabel, supportingText, value, onChange }: Iprops) => {
  const theme: ThemeType = useTheme();
  const renderLabel = () => {
    if (showLabel) {
      return <div>{label}</div>;
    }
  };

  const handleChange = (e: React.ChangeEvent) => {
    if (onChange) {
      onChange(e?.target?.value);
    }
  };

  const renderTextField = (): JSX.Element | undefined => {
    if (renderElement === 'input') {
      return <Input placeholder={'0'} handleChange={handleChange} value={value.toString()} withBackground={false} />;
    } else if (renderElement === 'text') {
      return <TextBodyMedium color={theme.colors.text.bg20}>{supportingText}</TextBodyMedium>;
    }
  };

  return (
    <Wrapper>
      <Box display="flex" justifyContent="center" flexDirection="column" width="100%">
        {renderLabel()}
        <StyledProgressBar value={value} />
      </Box>
      <Box width="48px">{renderTextField()}</Box>
    </Wrapper>
  );
};
