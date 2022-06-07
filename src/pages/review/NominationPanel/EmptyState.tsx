import React from 'react';
import { Box } from '@chakra-ui/react';
import { ThemeType } from '@themes/clients/baseTheme';
import { TextLabelLarge, TextBodyMedium } from '@uiToolkit/Typography';
import { ReviewEmptyState } from '@iconComponents';
import { useTheme } from '@emotion/react';

interface IProps {}

const EMPTY_STATES_CONSTANTS = {
  HEADING: 'No suggested reviewers to show.',
  DESC: 'Type a character or name to search relevant members.',
};

const EmptyState = ({}: IProps): JSX.Element => {
  const theme: ThemeType = useTheme();
  return (
    <Box
      background={theme.colors.surfaces.bg94}
      borderRadius={12}
      display="flex"
      flexDirection="column"
      alignItems="center"
      paddingTop="12px"
    >
      <ReviewEmptyState />
      <Box padding={'12px 16px'}>
        <TextLabelLarge>{EMPTY_STATES_CONSTANTS.HEADING}</TextLabelLarge>
        <TextBodyMedium marginTop={'4px'} textAlign="center">
          {EMPTY_STATES_CONSTANTS.DESC}
        </TextBodyMedium>
      </Box>
    </Box>
  );
};

export default EmptyState;
