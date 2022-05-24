import React, { useState, useRef, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { baseTheme } from '@themes/clients/baseTheme';
import { TextLabelSmall } from '@uiToolkit/Typography';
import { EmptyStar, FilledStar } from '@assets/iconComponents';

interface IRatingProps {
  precision?: number;
  maxRating: number;
  emptyIcon?: React.ReactNode;
  filledIcon?: React.ReactNode;
  rating: number;
  label?: string;
  disabled?: boolean;
  enableValidation?: boolean;
  isRequired?: boolean;
}
export const BaseStarRating = ({
  precision = 1,
  maxRating = 5,
  filledIcon = <FilledStar />,
  emptyIcon = <EmptyStar />,
  rating,
  label = '',
  disabled = false,
  isRequired = false,
  enableValidation = false,
}: IRatingProps) => {
  const [activeStar, setActiveStar] = useState<number>(rating);

  const validationErrorText = enableValidation && isRequired ? `${label} (Required)` : '';

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
    if (!disabled) {
      setIsHovered(false);
      setActiveStar(calculateRating(e));
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!disabled) {
      setIsHovered(true);
      setHoverActiveStar(calculateRating(e));
    }
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    if (!disabled) {
      setHoverActiveStar(-1); // Reset to default state
      setIsHovered(false);
    }
  };

  return (
    <Box>
      <TextLabelSmall color={validationErrorText ? baseTheme.colors.errors.fields : baseTheme.colors.text.bg40}>
        {validationErrorText ? validationErrorText : label}
      </TextLabelSmall>
      <Box
        sx={{
          display: 'inline-flex',
          gap: '6px',
        }}
        onClick={handleClick}
        onMouseMoveCapture={handleMouseMove}
        onMouseOut={handleMouseLeave}
        ref={ratingContainerRef}
      >
        {[...new Array(maxRating)].map((arr, index) => {
          const activeState = isHovered ? hoverActiveStar : activeStar;
          const showEmptyIcon = activeState === -1 || activeState < index + 1;

          return (
            <Box sx={{ fill: baseTheme.colors.surfaces.bg40 }} key={index}>
              {' '}
              {showEmptyIcon ? emptyIcon : filledIcon}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
