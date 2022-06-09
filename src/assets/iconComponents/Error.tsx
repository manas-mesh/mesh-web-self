import { Icon } from '@chakra-ui/react';

  export interface Dictionary<T> {
    [Key: string]: T
  }
  export const Error = (props: Dictionary<any>) => (
    <Icon viewBox="0 0 36 36" {...props}>
<path d="M17.985 3C9.705 3 3 9.72 3 18C3 26.28 9.705 33 17.985 33C26.28 33 33 26.28 33 18C33 9.72 26.28 3 17.985 3ZM18 30C11.37 30 6 24.63 6 18C6 11.37 11.37 6 18 6C24.63 6 30 11.37 30 18C30 24.63 24.63 30 18 30ZM16.5 22.5H19.5V25.5H16.5V22.5ZM16.5 10.5H19.5V19.5H16.5V10.5Z" fill="#CF6679"/>
</Icon>
    );
