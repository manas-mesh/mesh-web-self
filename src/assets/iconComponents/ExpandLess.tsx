import { Icon } from '@chakra-ui/react';

  export interface Dictionary<T> {
    [Key: string]: T
  }
  export const ExpandLess = (props: Dictionary<any>) => (
    <Icon viewBox="0 0 24 24" {...props}>
<path d="M12 8L6 14L7.41 15.41L12 10.83L16.59 15.41L18 14L12 8Z" fill="currentColor"/>
</Icon>
    );
