import { StyleProps } from '@chakra-ui/react';
import { Skeleton } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import React from 'react';

const SkeletonContainer = (props: { children: React.ReactNode } & StyleProps) => (
  <Box display="flex" flexDirection="column" p={4} {...props} />
);
export const SkeletonLoader = ({
  skeletons = ['100%', '80%', '100%', '80%'], // array of numbers, numbers stands for width
}) => (
  <SkeletonContainer>
    {skeletons.map((width, index) => (
      <Skeleton width={width} key={index} />
    ))}
  </SkeletonContainer>
);
