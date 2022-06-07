import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import { TextBodyMedium } from '@uiToolkit/Typography';

const STATIC_LABEL = 'Drag and drop zone';

type WrapperTypes = {
  theme?: any;
};

interface DropZoneProps {
  label?: string;
  onDrop?: (data: any) => void;
}

const Wrapper = styled.div<WrapperTypes>`
  display: flex;
  border-radius: 8px;
  border: 1px dashed ${({ theme }) => theme.colors.surfaces.bg40};
  padding: 10px;
`;

export const DropZone = ({ onDrop, label }: DropZoneProps) => {
  const onDragOverHandler = useCallback((e: React.SyntheticEvent) => {
    e.preventDefault();
  }, []);

  const onDropHandler = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const parsedData = JSON.parse(e.dataTransfer.getData('data'));
      if (onDrop) {
        onDrop(parsedData);
      }
    },
    [onDrop],
  );

  const onDragEnter = useCallback((e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log('onDragEnter');
  }, []);

  const onDragLeave = useCallback((e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log('onDragLeave');
  }, []);

  const renderLabel = () => {
    if (label) {
      return label;
    }
    return STATIC_LABEL;
  };

  return (
    <Wrapper onDragOver={onDragOverHandler} onDrop={onDropHandler} onDragEnter={onDragEnter} onDragLeave={onDragLeave}>
      <TextBodyMedium>{renderLabel()}</TextBodyMedium>
    </Wrapper>
  );
};
