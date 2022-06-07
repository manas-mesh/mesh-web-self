// @ts-nocheck
import React, { createRef, useEffect, useState } from 'react';

import { Box } from '@chakra-ui/react';
import { TabBarSelect } from '@uiToolkit/TabBarSelect';

const scrollToComponentTop = (ref) => {
  if (!ref) return;
  ref.current.scrollIntoView({
    behavior: 'smooth',
  });
};

const ScrollableSectionNav = ({ optionsLabels = [], selectedOptionLabel = optionsLabels[0], children = null }) => {
  const [selectedOptionValue, setSelectedOptionValue] = useState(selectedOptionLabel);
  const [navCompRefs, setNavCompRefs] = useState([]);

  const tabBarOptions = optionsLabels.map((label) => ({ value: label, label }));

  useEffect(() => {
    setNavCompRefs((refs) => {
      const newRefs = [];
      optionsLabels.forEach((_, index) => {
        newRefs[index] = refs[index] || createRef();
      });
      return newRefs;
    });
  }, [optionsLabels]);

  useEffect(() => {
    const selectedOptionLabelIndex = optionsLabels.findIndex((label) => label === selectedOptionLabel);
    scrollToComponentTop(navCompRefs?.[selectedOptionLabelIndex]);
  }, [navCompRefs, optionsLabels, selectedOptionLabel]);

  const onChangeHandler = (newSelectedValue: string) => {
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
          <Box ref={navCompRefs[index]}>{child}</Box>
        ))}
      </Box>
    </Box>
  );
};

export { ScrollableSectionNav };
