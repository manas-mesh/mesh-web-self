import { Box } from '@chakra-ui/react';
import { ScrollableSectionNav } from './ScrollableSectionNav';

const ScrollableSectionNavStory = {
  title: 'Core Components/ScrollableSectionNav',
  component: ScrollableSectionNav,
};

const options = [
  { value: 'one', label: 'one' },
  { value: 'two', label: 'two' },
  { value: 'three', label: 'three' },
];

const optionsLabels = ['Red', 'Blue', 'Green'];

const onChangeHandler = (newSelectedValue: TabBarValueType) =>
  console.log(`new selected value is: ${newSelectedValue}`);

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
