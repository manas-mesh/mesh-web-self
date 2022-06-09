import React from 'react';
import { Box, UseToastOptions } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { Error, Info, Success } from '@assets/iconComponents';

const Label = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  letter-spacing: 0.25px;
  color: #27313f;
  margin-left: 8px;
`;

export const Toast = ({ status, title }: UseToastOptions) => {
  const renderIcon = () => {
    if (status === 'success') return <Success />;
    if (status === 'error') return <Error />;
    if (status === 'warning') return <div></div>;
    if (status === 'info') return <Info />;
  };

  return (
    <Box display="flex" background="#DFE4EC" alignItems="center" padding="12px" borderRadius="4px">
      <>
        {renderIcon()}
        <Label>{title}</Label>
      </>
    </Box>
  );
};
