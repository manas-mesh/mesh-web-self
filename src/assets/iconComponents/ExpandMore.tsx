import { Icon } from '@chakra-ui/react';

  export interface Dictionary<T> {
    [Key: string]: T
  }
  export const ExpandMore = (props: Dictionary<any>) => (
    <Icon viewBox="0 0 24 24" {...props}>
<path d="M16.59 8.58984L12 13.1698L7.41 8.58984L6 9.99984L12 15.9998L18 9.99984L16.59 8.58984Z" fill="currentColor"/>
</Icon>
    );
