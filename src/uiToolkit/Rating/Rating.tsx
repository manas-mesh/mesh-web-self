// import React, { useState } from 'react';
// import { StarIcon, CheckIcon } from '@chakra-ui/icons';

// interface RatingProps {
//   maxRating: number;
//   label: string;
//   handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
// }

// export const Rating = ({ maxRating, label = '' }: RatingProps) => {
//   const [start, setStart] = useState(Array(maxRating).fill(1));
//   return (
//     <div>
//       {start.map((s) => (
//         <StarIcon />
//       ))}
//     </div>
//   );
// };/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/no-static-element-interactions */

import React, { useState, useRef, useEffect } from 'react';
import { StarIcon, CheckIcon } from '@chakra-ui/icons';
// import StarBorderIcon from "@mui/icons-material/StarBorder";

export const Rating = ({
  precision = 1,
  totalStars = 5,
  filledIcon = StarIcon,
  averageScore,
  interactive,
}: {
  precision?: number;
  totalStars?: number;
  emptyIcon?: any;
  filledIcon?: any;
  averageScore: number;
  interactive?: boolean;
}) => {
  const [activeStar, setActiveStar] = useState<number>(averageScore);
  useEffect(() => {
    setActiveStar(averageScore);
  }, [averageScore]);

  const [hoverActiveStar, setHoverActiveStar] = useState(-1);
  const [isHovered, setIsHovered] = useState(false);
  const ratingContainerRef = useRef(null);

  const calculateRating = (e: any) => {
    const { width, left } = (ratingContainerRef.current as any).getBoundingClientRect();
    const percent = (e.clientX - left) / width;
    const numberInStars = percent * totalStars;
    const nearestNumber = Math.round((numberInStars + precision / 2) / precision) * precision;

    return Number(nearestNumber.toFixed(precision.toString().split('.')[1]?.length || 0));
  };

  const handleClick = (e: any) => {
    console.log('click');

    setIsHovered(false);
    setActiveStar(calculateRating(e));
  };

  const handleMouseMove = (e: any) => {
    setIsHovered(true);
    setHoverActiveStar(calculateRating(e));
  };

  const handleMouseLeave = (e: any) => {
    setHoverActiveStar(-1); // Reset to default state
    setIsHovered(false);
  };
  const FilledIcon = filledIcon;

  console.log('is hove', isHovered);

  return (
    <div
      style={{
        display: 'inline-flex',
        position: 'relative',
        cursor: 'pointer',
        textAlign: 'left',
      }}
      onClick={handleClick}
      //   onMouseMove={handleMouseMove}
      //   onMouseLeave={handleMouseLeave}
      onMouseMoveCapture={handleMouseMove}
      onMouseOut={handleMouseMove}
      ref={ratingContainerRef}
    >
      {[...new Array(totalStars)].map((arr, index) => {
        const activeState = isHovered ? hoverActiveStar : activeStar;

        const showEmptyIcon = activeState === -1 || activeState < index + 1;

        const isActiveRating = activeState !== 1;
        const isRatingWithPrecision = activeState % 1 !== 0;
        const isRatingEqualToIndex = Math.ceil(activeState) === index + 1;
        const showRatingWithPrecision = isActiveRating && isRatingWithPrecision && isRatingEqualToIndex;

        return (
          <div
            style={{
              cursor: 'pointer',
              position: 'relative',
            }}
            key={index}
          >
            <div
              style={{
                width: showRatingWithPrecision ? `${(activeState % 1) * 100}%` : '0%',
                overflow: 'hidden',
                position: 'absolute',
              }}
            >
              <FilledIcon sx={{ color: '#F8C51B', width: '0.6667em' }} />
            </div>
            {/*Note here */}
            <div
              style={{
                color: showEmptyIcon ? '#D5DADD' : 'inherit',
              }}
            >
              {showEmptyIcon ? (
                <FilledIcon sx={{ color: '#D5DADD', width: '0.6667em' }} />
              ) : (
                <FilledIcon sx={{ color: '#F8C51B', width: '0.6667em' }} />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
