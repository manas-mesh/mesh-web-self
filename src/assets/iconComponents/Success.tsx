import { Icon } from '@chakra-ui/react';

  export interface Dictionary<T> {
    [Key: string]: T
  }
  export const Success = (props: Dictionary<any>) => (
    <Icon viewBox="0 0 36 36" {...props}>
<path opacity="0.3" d="M18 6C11.385 6 6 11.385 6 18C6 24.615 11.385 30 18 30C24.615 30 30 24.615 30 18C30 11.385 24.615 6 18 6ZM15 25.5L9 19.5L11.115 17.385L15 21.255L24.885 11.37L27 13.5L15 25.5Z" fill="#69BA6E"/>
<path d="M18 3C9.72 3 3 9.72 3 18C3 26.28 9.72 33 18 33C26.28 33 33 26.28 33 18C33 9.72 26.28 3 18 3ZM18 30C11.385 30 6 24.615 6 18C6 11.385 11.385 6 18 6C24.615 6 30 11.385 30 18C30 24.615 24.615 30 18 30ZM24.885 11.37L15 21.255L11.115 17.385L9 19.5L15 25.5L27 13.5L24.885 11.37Z" fill="#69BA6E"/>
</Icon>
    );
