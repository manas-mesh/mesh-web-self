/* eslint-disable react/jsx-key */
import { createIcon } from '@chakra-ui/react';

const StarIcon = createIcon({
  displayName: 'StarIcon',
  viewBox: '0 0 24 24',
  path: [
    <path
      opacity="0.3"
      d="M12 4C7.59 4 4 7.59 4 12C4 16.41 7.59 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4ZM12 15L8 11H16L12 15Z"
      fill="black"
    />,
    <path
      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 15L16 11H8L12 15Z"
      fill="black"
    />,
  ],
});

export default StarIcon;
