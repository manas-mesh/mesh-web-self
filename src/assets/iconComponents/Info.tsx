import { Icon } from '@chakra-ui/react';

  export interface Dictionary<T> {
    [Key: string]: T
  }
  export const Info = (props: Dictionary<any>) => (
    <Icon viewBox="0 0 36 36" {...props}>
<path opacity="0.3" d="M18 6C11.385 6 6 11.385 6 18C6 24.615 11.385 30 18 30C24.615 30 30 24.615 30 18C30 11.385 24.615 6 18 6ZM19.5 25.5H16.5V16.5H19.5V25.5ZM19.5 13.5H16.5V10.5H19.5V13.5Z" fill="#61799E"/>
<path d="M16.5 10.5H19.5V13.5H16.5V10.5ZM16.5 16.5H19.5V25.5H16.5V16.5ZM18 3C9.72 3 3 9.72 3 18C3 26.28 9.72 33 18 33C26.28 33 33 26.28 33 18C33 9.72 26.28 3 18 3ZM18 30C11.385 30 6 24.615 6 18C6 11.385 11.385 6 18 6C24.615 6 30 11.385 30 18C30 24.615 24.615 30 18 30Z" fill="#4E617E"/>
</Icon>
    );
