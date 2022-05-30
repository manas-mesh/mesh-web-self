import React from 'react';
import styled from '@emotion/styled';
import Image, { StaticImageData } from 'next/image';
import { Box } from '@chakra-ui/react';

import StarIcon from './StarIcon';

const Wrapper = styled(Box)`
  display: inline-flex;
  position: relative;
`;

const StyledNextImage = styled(Image)`
  user-drag: none;
  user-select: none;
  border-radius: 4px;
  border: 1px solid #f0b51e !important;
  box-sizing: border-box !important;
`;

export interface AvatarProps {
  size: string;
  src: string | StaticImageData;
  showStarIcon?: boolean;
}

interface Size {
  height: string;
  width: string;
}

interface IAvatarSize {
  [key: string]: Size;
}

const AVATAR_SIZE: IAvatarSize = {
  small: {
    height: '18px',
    width: '18px',
  },
  medium: {
    height: '32px',
    width: '32px',
  },
  large: {
    height: '40px',
    width: '40px',
  },
};

const Avatar = ({ size, src, showStarIcon = false, ...rest }: AvatarProps) => {
  const dimension: Size = AVATAR_SIZE[size];

  const renderOwnerMark = () => (
    <Box sx={{ position: 'absolute', display: 'flex', right: '-7px', bottom: '-5px' }}>
      <StarIcon />
    </Box>
  );

  return (
    <Wrapper mr={showStarIcon ? '5px' : '0px'}>
      <StyledNextImage
        src={src}
        alt="avatar"
        layout={'fixed'}
        height={dimension.height}
        width={dimension.height}
        {...rest}
      />
      {showStarIcon && renderOwnerMark()}
    </Wrapper>
  );
};
export default Avatar;
