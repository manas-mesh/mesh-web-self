import { Icon } from '@chakra-ui/react';

  export interface Dictionary<T> {
    [Key: string]: T
  }
  export const DoubleTick = (props: Dictionary<any>) => (
    <Icon viewBox="0 0 24 24" {...props}>
<path d="M17.965 6.70504L16.555 5.29504L10.215 11.635L11.625 13.045L17.965 6.70504ZM22.205 5.29504L11.625 15.875L7.445 11.705L6.035 13.115L11.625 18.705L23.625 6.70504L22.205 5.29504ZM0.375 13.115L5.965 18.705L7.375 17.295L1.795 11.705L0.375 13.115Z" fill="black"/>
</Icon>
    );
