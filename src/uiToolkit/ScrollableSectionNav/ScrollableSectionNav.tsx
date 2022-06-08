import React, { createRef, useEffect, useState } from 'react';

import { Box } from '@chakra-ui/react';
import { TabBarSelect } from '@uiToolkit/TabBarSelect';
import { TabBarValueType } from '@uiToolkit/TabBarSelect/TabBarSelect';

type divRefType = React.RefObject<HTMLDivElement>;

const scrollToComponentTop = (ref: divRefType | undefined) => {
  if (!ref) return;
  ref.current?.scrollIntoView({
    behavior: 'smooth',
  });
};

interface PropsI {
  optionsLabels: string[];
  selectedOptionLabel?: string | undefined;
  children: React.ReactNode;
}

const ScrollableSectionNav: React.FC<PropsI> = ({
  optionsLabels = [],
  selectedOptionLabel = optionsLabels[0],
  children = null,
}) => {
  const [selectedOptionValue, setSelectedOptionValue] = useState(selectedOptionLabel);
  const [navCompRefs, setNavCompRefs] = useState<divRefType[]>([]);

  const tabBarOptions = optionsLabels.map((label) => ({ value: label, label }));

  useEffect(() => {
    setNavCompRefs((refs: divRefType[]) => {
      const newRefs: divRefType[] = [];
      optionsLabels.forEach((_, index) => {
        newRefs[index] = refs[index] || createRef<HTMLDivElement>();
      });
      return newRefs;
    });
  }, [optionsLabels]);

  useEffect(() => {
    const selectedOptionLabelIndex = optionsLabels.findIndex((label) => label === selectedOptionLabel);
    scrollToComponentTop(navCompRefs?.[selectedOptionLabelIndex]);
  }, [navCompRefs, optionsLabels, selectedOptionLabel]);

  const onChangeHandler = (newSelectedValue: TabBarValueType) => {
    setSelectedOptionValue(newSelectedValue);
    const selectedOptionLabelIndex = optionsLabels.findIndex((label) => label === newSelectedValue);
    scrollToComponentTop(navCompRefs?.[selectedOptionLabelIndex]);
  };

  return (
    <Box h={'100%'}>
      <TabBarSelect
        options={tabBarOptions}
        value={selectedOptionValue}
        onChange={onChangeHandler}
        withBackground
        fullWidth
        buttonFullWidth={false}
      />
      <Box h={'100%'} overflowY="auto">
        {React.Children.map(children, (child, index) => (
          <div ref={navCompRefs[index]}>{child}</div>
        ))}
      </Box>
    </Box>
  );
};

export { ScrollableSectionNav };
