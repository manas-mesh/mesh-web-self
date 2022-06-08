import { Box } from '@chakra-ui/react';
import { ScrollableSectionNav } from './ScrollableSectionNav';

const ScrollableSectionNavStory = {
  title: 'Core Components/ScrollableSectionNav',
  component: ScrollableSectionNav,
};

const optionsLabels = ['Red', 'Blue', 'Green'];

export default ScrollableSectionNavStory;

const BigDiv = ({ color }: { color: string }) => <Box w={'100%'} h={400} bg={color} />;

export const Primary = () => (
  <Box w="600px" h="600px">
    <ScrollableSectionNav optionsLabels={optionsLabels}>
      <BigDiv color="red" />
      <BigDiv color="blue" />
      <BigDiv color="green" />
    </ScrollableSectionNav>
  </Box>
);

export const PreSelectedOption = () => (
  <Box w="600px" h="600px">
    <ScrollableSectionNav optionsLabels={optionsLabels} selectedOptionLabel="Blue">
      <BigDiv color="red" />
      <BigDiv color="blue" />
      <BigDiv color="green" />
    </ScrollableSectionNav>
  </Box>
);
