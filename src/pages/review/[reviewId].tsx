import React from 'react';
import styled from '@emotion/styled';
import ListItem from '../../uiToolkit/Listitem';

interface IProps {}

const Wrapper = styled.div``;

const Review = ({}: IProps) => (
  <Wrapper>
    <ListItem title={'title'} subTitle={'subTitle'} />
  </Wrapper>
);

export default Review;
