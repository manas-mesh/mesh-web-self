import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useToast } from '@hooks/useToastHook';
import { useTheme } from '@emotion/react';
import { ThemeType } from '@themes/clients/baseTheme';

interface IProps {}

const Wrapper = styled.div``;

const Review = ({}: IProps) => {
  const [first, setfirst] = useState(0);
  const theme: ThemeType = useTheme();

  const task = useToast();

  const handle = (value: any) => {
    task({ title: 'Hi am done', status: 'error' });
  };

  return (
    <Wrapper style={{ marginLeft: '40px', marginTop: '40px', flexDirection: 'column' }}>
      <div onClick={handle} style={{ background: 'red', height: '100px', width: '100px' }}>
        click
      </div>
    </Wrapper>
  );
};

export default Review;
