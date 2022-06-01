import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@chakra-ui/react';
import { ThemeType } from '@themes/clients/baseTheme';
import { useTheme } from '@emotion/react';

interface InfoItemProps {
  item: any;
  index: number;
  length: number;
}

const InfoItem = ({ item, index, length }: InfoItemProps) => {
  const theme: ThemeType = useTheme();
  const renderBullet = (): JSX.Element | undefined => {
    if (index !== length - 1) {
      return (
        <Box
          bg={theme.colors.surfaces.bg60}
          sx={{
            height: '4px',
            width: '4px',
            display: 'flex',
            borderRadius: '50%',
            mx: '4px',
          }}
        ></Box>
      );
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {/* <TextLabelSmall sx={{ color: 'text.bg60' }}>{item.name}: 1</TextLabelSmall> */}
      <Box>{item.name}</Box>
      {renderBullet()}
    </div>
  );
};

export default InfoItem;
