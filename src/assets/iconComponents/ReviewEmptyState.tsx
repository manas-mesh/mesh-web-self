import { Icon } from '@chakra-ui/react';

  export interface Dictionary<T> {
    [Key: string]: T
  }
  export const ReviewEmptyState = (props: Dictionary<any>) => (
    <Icon viewBox="0 0 24 24" {...props}>
<path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.17L4 17.17V4H20V16Z" fill="black"/>
<path d="M12 15L13.57 11.57L17 10L13.57 8.43L12 5L10.43 8.43L7 10L10.43 11.57L12 15Z" fill="black"/>
</Icon>
    );
