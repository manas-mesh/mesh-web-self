import React, { useState } from 'react';
import styled from '@emotion/styled';
import Avatar from '@uiToolkit/Avatar';
import ListItem from '@uiToolkit/Listitem';
import RadioButton from '@uiToolkit/RadioButton';

interface IProps {}

const Wrapper = styled.div``;

const Review = ({}: IProps) => {
  const [first, setfirst] = useState(0);

  const OPTIONS = [
    {
      value: '1',
      label: 'Delhi',
    },
    {
      value: '2',
      label: 'Bangalore',
    },
    {
      value: '3',
      label: 'Chennai',
    },
    {
      value: '4',
      label: 'Kolkata',
    },
  ];

  const handle = (value: any) => {
    console.log(value);
    setfirst(value);
  };

  return (
    <Wrapper style={{ marginLeft: '40px', marginTop: '40px' }}>
      <RadioButton options={OPTIONS} />
    </Wrapper>
  );
};

export default Review;
