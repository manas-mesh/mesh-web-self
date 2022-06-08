import { Icon } from '@chakra-ui/react';

  export interface Dictionary<T> {
    [Key: string]: T
  }
  export const ArrowLeft = (props: Dictionary<any>) => (
    <Icon viewBox="0 0 24 24" {...props}>
<path d="M14.2 6L8.20001 12L14.2 18L15.61 16.59L11.03 12L15.61 7.41L14.2 6Z" fill="currentColor"/>
</Icon>
    );
