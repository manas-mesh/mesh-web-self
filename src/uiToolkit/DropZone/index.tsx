import React, { useCallback } from 'react';
import styled from '@emotion/styled';

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
  border: 1px solid ${({ theme }) => theme.colors.surfaces.bg40};
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

  const onDragEnterHandler = useCallback((e: React.DragEvent) => {
    e.preventDefault();
  }, []);

  const renderLabel = () => {
    if (label) {
      return label;
    }
    return STATIC_LABEL;
  };

  return (
    <Wrapper onDragOver={onDragOverHandler} onDragEnter={onDragEnterHandler} onDrop={onDropHandler}>
      {/* <TextBodyMedium>{renderLabel()}</TextBodyMedium> */}
    </Wrapper>
  );
};
