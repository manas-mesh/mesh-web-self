import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';

export interface PropsI {
  readOnly?: boolean;
  isError?: boolean;
  isSelected?: boolean;
  clickHandler?: (() => void) | undefined;
  children?: React.ReactNode;
}

export const StyledBox = styled(Box, {
  shouldForwardProp: (prop: string) => !['overrideBG', 'clickable'].includes(prop),
})(
  ({ theme, ...props }) => `
  cursor: ${props.clickable ? 'pointer' : 'inherit'};
  background-color: ${props.overrideBG ? props.overrideBG : theme.colors.surfaces.g94};
  border-radius: 12px;
  padding: 12px;
  margin-bottom: 12px;

  ${props.overrideBG ? '' : `&:hover {background-color:${theme.colors.surfaces.g96}`}}

`,
);

export const InteractionContainer: React.FC<PropsI> = ({
  children,
  readOnly = false,
  isError = false,
  isSelected = false,
  clickHandler = undefined,
}) => {
  let overrideBG = '';
  if (readOnly) {
    overrideBG = 'transparent';
  }
  if (isSelected || isError) {
    overrideBG = 'white';
  }

  return (
    <StyledBox overrideBG={overrideBG} onClick={clickHandler} clickable={!readOnly && !!clickHandler}>
      {children}
    </StyledBox>
  );
};
