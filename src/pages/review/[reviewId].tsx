import React, { useState } from 'react';
import styled from '@emotion/styled';
import Avatar from '@uiToolkit/Avatar';
import { Listitem } from '@uiToolkit/Listitem';
import { Checkbox } from '@uiToolkit/Checkbox';
import NominationPanel from './NominationPanel';

interface IProps {}

const Wrapper = styled.div``;

const Review = ({}: IProps) => {
  const [open, setOpen] = useState(false);

  const handle = () => {
    setOpen(!open);
  };

  const openModal = () => {
    setOpen(true);
  };

  const subTitle = '';

  return (
    <Wrapper style={{ marginLeft: '40px', marginTop: '40px' }}>
      <button style={{ marginLeft: '40px', height: '100px', width: '100px', background: 'red' }} onClick={openModal}>
        Click
      </button>
      <NominationPanel isOpen={open} />
    </Wrapper>
  );
};

export default Review;
