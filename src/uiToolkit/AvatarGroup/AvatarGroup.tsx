import styled from '@emotion/styled';
import Avatar, { AvatarProps } from '@uiToolkit/Avatar';
import { TextBodySmall } from '@uiToolkit/Typography';
import React, { FC } from 'react';

const Wrapper = styled.div`
  padding: 8px 10px 8px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export interface AvatarGroupProps {
  avatars: AvatarProps[];
  max?: number;
}

export const AvatarGroup: FC<AvatarGroupProps> = ({ avatars, max = 3 }) => {
  const formattedMax = Math.max(1, max);
  const hiddenAvatars = avatars.length - formattedMax;

  return (
    <Wrapper>
      {avatars.slice(0, formattedMax).map((item, index) => (
        <Avatar key={index} {...item} />
      ))}
      <TextBodySmall fontWeight={500}>{hiddenAvatars > 0 && `+${hiddenAvatars}`}</TextBodySmall>
    </Wrapper>
  );
};
