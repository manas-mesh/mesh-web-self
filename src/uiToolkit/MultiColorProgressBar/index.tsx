import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@chakra-ui/react';
import InfoItem from './Infoitem';

interface MulticolorProgressBarProps {
  colors: any[];
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  border-radius: 4px;
`;

export const MulticolorProgressBar = ({ colors }: MulticolorProgressBarProps) => {
  const renderColors = (): JSX.Element[] =>
    colors.map((item, index) => (
      <Box
        sx={{
          background: item.color,
          width: item.value,
          borderRadius: 'inherit',
          borderTopLeftRadius: index === 0 ? '4px' : 'unset',
          borderBottomLeftRadius: index === 0 ? '4px' : 'unset',
          borderTopRightRadius: index === colors.length - 1 ? '4px' : 'unset',
          borderBottomRightRadius: index === colors.length - 1 ? '4px' : 'unset',
          height: '20px',
        }}
        key={index}
      ></Box>
    ));

  const renderInfo = (): JSX.Element => <div></div>;
  //<TextBodyMedium sx={{ ml: '8px' }}>{'66%'}</TextBodyMedium>;

  const renderMeta = (): JSX.Element[] =>
    colors.map((item, index) => <InfoItem key={index} item={item} index={index} length={colors.length} />);

  return (
    <Wrapper>
      <Box style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <Box sx={{ display: 'flex' }}>{renderColors()}</Box>
        <Box sx={{ display: 'flex' }}>{renderMeta()}</Box>
      </Box>
      {renderInfo()}
    </Wrapper>
  );
};
