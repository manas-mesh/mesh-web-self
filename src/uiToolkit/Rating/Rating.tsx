import React, { useState, useRef, useEffect } from 'react';
import { StarIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';
import { baseTheme } from '@themes/clients/baseTheme';
import { TextLabelSmall } from '@uiToolkit/Typography';
import { EmptyStar } from '../../assets/iconComponents/EmptyStar';
import { FilledStar } from '../../assets/iconComponents/FilledStar';

interface RatingProps {
  precision?: number;
  maxRating?: number;
  emptyIcon?: any;
  filledIcon?: any;
  rating: number;
  interactive?: boolean;
  label?: string;
}
export const Rating = ({ precision = 1, maxRating = 5, filledIcon, emptyIcon, rating, label = '' }: RatingProps) => {
  const [activeStar, setActiveStar] = useState<number>(rating);
  useEffect(() => {
    setActiveStar(rating);
  }, [rating]);

  const [hoverActiveStar, setHoverActiveStar] = useState(-1);
  const [isHovered, setIsHovered] = useState(false);
  const ratingContainerRef = useRef(null);

  const calculateRating = (e: React.MouseEvent) => {
    const { width, left } = (ratingContainerRef.current as any).getBoundingClientRect();
    const percent = (e.clientX - left) / width;
    const numberInStars = percent * maxRating;
    const nearestNumber = Math.round((numberInStars + precision / 2) / precision) * precision;
    return Number(nearestNumber.toFixed(precision.toString().split('.')[1]?.length || 0));
  };

  const handleClick = (e: React.MouseEvent) => {
    setIsHovered(false);
    setActiveStar(calculateRating(e));
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    setIsHovered(true);
    setHoverActiveStar(calculateRating(e));
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    setHoverActiveStar(-1); // Reset to default state
    setIsHovered(false);
  };

  const FilledIcon = filledIcon;
  const EmptyIcon = filledIcon;

  return (
    <Box
      sx={{ background: baseTheme.colors.surfaces.bg92, padding: '12px', borderRadius: '8px', width: 'fit-content' }}
    >
      <TextLabelSmall>{label}</TextLabelSmall>
      <Box
        sx={{
          display: 'inline-flex',
          gap: '6px',
          //   position: 'relative',
          //   cursor: 'pointer',
          //   textAlign: 'left',
        }}
        onClick={handleClick}
        onMouseMoveCapture={handleMouseMove}
        onMouseOut={handleMouseLeave}
        ref={ratingContainerRef}
      >
        {[...new Array(maxRating)].map((arr, index) => {
          const activeState = isHovered ? hoverActiveStar : activeStar;
          const showEmptyIcon = activeState === -1 || activeState < index + 1;
          const isActiveRating = activeState !== 1;
          const isRatingWithPrecision = activeState % 1 !== 0;
          const isRatingEqualToIndex = Math.ceil(activeState) === index + 1;
          //   const showRatingWithPrecision = isActiveRating && isRatingWithPrecision && isRatingEqualToIndex;

          return (
            <Box sx={{ fill: baseTheme.colors.surfaces.bg40 }} key={index}>
              {' '}
              {/* {filledIcon} */}
              {
                showEmptyIcon
                  ? emptyIcon
                  : // <EmptyStar sx={{ fill: baseTheme.colors.surfaces.bg40 }} />
                    filledIcon
                // <FilledStar sx={{ fill: baseTheme.colors.surfaces.bg40 }} />
              }
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
