import { Stack } from '@chakra-ui/react';
import { Skeleton } from '@chakra-ui/react';
import { useTheme } from '@emotion/react';
import { ThemeType } from '@themes/clients/baseTheme';

export const SkeletonLoader = ({ skeletons = ['10px', '10px', '10px', '10px'] }) => {
  const theme: ThemeType = useTheme();
  return (
    <Stack>
      {skeletons.map((height, index) => (
        <Skeleton height={height} key={index} startColor="transparent" endColor={theme.colors.surfaces.bg40} />
      ))}
    </Stack>
  );
};
