import { Story } from '@storybook/react';
import React from 'react';

import {
  TextBodyLarge,
  TextBodyLargeBold,
  TextBodyMedium,
  TextBodyMediumBold,
  TextBodySmall,
  TextBodySmallBold,
  // TextDisplayLarge,
  // TextDisplayMedium,
  // TextDisplaySmall,
  TextHeadlineLarge,
  TextHeadlineMedium,
  TextHeadlineSmall,
  TextLabelLarge,
  TextLabelMedium,
  TextLabelSmall,
  TextTitleLarge,
  TextTitleMedium,
  TextTitleSmall,
  Typography,
  TypographyPropTypes,
} from './Typography';

const TypographyStory = {
  title: 'Typography/Typography',
  component: Typography,
};

const Template: Story<TypographyPropTypes> = (args) => <Typography {...args} />;
export const Primary = Template.bind({});

Primary.decorators = [
  () => (
    <>
      {/* uncomment if ever needed in project */}
      {/* <TextDisplayLarge sx={{ mb: 2 }}>
          TextDisplayLarge ---- Display Large - Roboto 57/64 . 0
        </TextDisplayLarge>
        <TextDisplayMedium sx={{ mb: 2 }}>
          TextDisplayMedium ---- Display Medium - Roboto 45/52 . 0
        </TextDisplayMedium>
        <TextDisplaySmall sx={{ mb: 2 }}>
          TextDisplaySmall ---- Display Small - Roboto 36/44 . 0
        </TextDisplaySmall> */}

      <TextHeadlineLarge sx={{ mb: 2 }}>TextHeadlineLarge ---- Headline Large - Roboto 32/40 . 0</TextHeadlineLarge>
      <TextHeadlineMedium sx={{ mb: 2 }}>TextHeadlineMedium ---- Headline Medium - Roboto 28/36 . 0</TextHeadlineMedium>
      <TextHeadlineSmall sx={{ mb: 2 }}>TextHeadlineSmall ---- Headline Small - Roboto 24/32 . 0</TextHeadlineSmall>

      <TextTitleLarge sx={{ mb: 2 }}>TextTitleLarge ---- Title Large - Roboto Medium 22/28 . +0.15</TextTitleLarge>
      <TextTitleMedium sx={{ mb: 2 }}>TextTitleMedium ---- Title Medium - Roboto Medium 16/24 . +0.1</TextTitleMedium>
      <TextTitleSmall sx={{ mb: 2 }}>TextTitleSmall ---- Title Small - Roboto Medium 14/20 . +0.1</TextTitleSmall>

      <TextLabelLarge sx={{ mb: 2 }}>TextLabelLarge ---- Label Large - Roboto Medium 14/20 . +0.1</TextLabelLarge>
      <TextLabelMedium sx={{ mb: 2 }}>TextLabelMedium ---- Label Medium - Roboto Medium 12/16 . +0.5</TextLabelMedium>
      <TextLabelSmall sx={{ mb: 2 }}>TextLabelSmall ---- Label Small - Roboto Medium 11/16 . +0.5</TextLabelSmall>

      <TextBodyLarge sx={{ mb: 2 }}>TextBodyLarge ---- Body Large - Roboto 16/24 . +0.15</TextBodyLarge>
      <TextBodyLargeBold sx={{ mb: 2 }}>TextBodyLargeBold ---- Body Large - Roboto 16/24 . +0.15</TextBodyLargeBold>
      <TextBodyMedium sx={{ mb: 2 }}>TextBodyMedium ---- Body Medium - Roboto 14/20 . +0.25</TextBodyMedium>
      <TextBodyMediumBold sx={{ mb: 2 }}>TextBodyMediumBold ---- Body Medium - Roboto 14/20 . +0.25</TextBodyMediumBold>
      <TextBodySmall sx={{ mb: 2 }}>TextBodySmall ---- Body Small - Roboto 12/16 . +0.4</TextBodySmall>
      <TextBodySmallBold sx={{ mb: 2 }}>TextBodySmallBold ---- Body Small - Roboto 12/16 . +0.4</TextBodySmallBold>
    </>
  ),
];

export default TypographyStory;
