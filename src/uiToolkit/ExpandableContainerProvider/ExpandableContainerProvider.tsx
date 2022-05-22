import styled from '@emotion/styled';
import { Box } from '@chakra-ui/react';

import { createContext, FC, ReactNode, useCallback, useContext, useRef, useState } from 'react';
import { Button } from 'uiToolkit/Button';
import { ThemeType } from '@themes/clients/baseTheme';

export interface ExpandableContainerI {
  isExpanded: boolean;
  onExpandClick: () => void;
  onShrinkClick: () => void;
}

const initialContextValue = {
  isExpanded: false,
  onExpandClick: () => {},
  onShrinkClick: () => {},
};
const ExpandableContainerContext = createContext<ExpandableContainerI>(initialContextValue);

type Props = {
  width: string | number;
  height: string | number;
  yDistFromTop: string | number;
  theme: ThemeType;
};

const TransientProps = ['isExpanded', 'sx', 'width', 'height', 'yDistFromTop'];
const StyledExpandableContainer = styled('div', {
  shouldForwardProp: (prop: string) => !TransientProps.includes(prop),
})<Props>(
  ({ theme, width, height, yDistFromTop }) => `
    transition: all .3s cubic-bezier(0.22, 0.61, 0.36, 1);
    
    &.growAnimate {
      position: fixed;
      width: calc(${theme.layout.colWidth} * 15 - 12px);
      height: calc(100vh - ${theme.layout.colWidth} - 12px);
      top: ${yDistFromTop};
      transform: translate( calc(-1 * 3 * ${theme.layout.colWidth} ),
      calc( ${theme.layout.colWidth} + 12px - ${yDistFromTop} ));

      & > div {
        height: 100%;
      }
      
    }

    &.sheetStyles {
      border-radius: 16px 16px 0 0;
      background-color: ${theme.colors.surfaces.g96};
      box-shadow: ${theme.shadows.dark};
      z-index: 1200; //same as material ui drawer
    }
    &.shrinkAnimate {
      animation: .3s shrinkAnimate;
      animation-fill-mode: forwards;
    }
    
    @keyframes &.shrinkAnimate {
      from {
        position: fixed;
        width: calc(${theme.layout.colWidth} * 16 - 24px);
        height: calc(100vh - ${theme.layout.colWidth} - 12px);
        top: ${yDistFromTop};
      }
      99% {
        position: fixed;
        width: ${width ? width + 'px' : 'auto'};
        height: ${height ? height + 'px' : 'auto'};
        top: ${yDistFromTop};
      }
      
      to {
        top: ${yDistFromTop};
        position: inherit;
        width: ${width ? width + 'px' : 'auto'};
        height: ${height ? height + 'px' : 'auto'};
      }
    }
    
    `,
);

const FloatingButton = styled(Button)`
  position: absolute;
  top: -60px;
  right: 0;
  z-index: 1200;
`;

type PositionPropTypes = {
  width: string | number;
  height: string | number;
  top: string;
};

const shrinkDomDataInitial: PositionPropTypes = {
  width: 'auto',
  height: 'auto',
  top: '0px',
};

export const ExpandableContainerProvider: FC<{ id: string; children: ReactNode }> = ({ children, id }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const dummyContainerRef = useRef<HTMLDivElement>(null);

  const [shrinkDomData, setShrinkDomData] = useState(shrinkDomDataInitial);
  const [className, setClassName] = useState('');

  const handleExpandClick = useCallback(() => {
    if (isExpanded) return;
    let boundingClientRect = {
      width: 0,
      height: 0,
      top: 0,
    };
    if (containerRef.current) {
      boundingClientRect = containerRef.current.getBoundingClientRect();
    }

    setShrinkDomData({
      width: boundingClientRect.width,
      height: boundingClientRect.height,
      top: boundingClientRect.top + 'px',
    });

    setIsExpanded(true);
    setClassName('growAnimate sheetStyles');
  }, [isExpanded]);

  const handleShrinkClick = () => {
    if (!isExpanded) return;
    let boundingClientRect = {
      width: 0,
      height: 0,
      top: 0,
    };
    if (dummyContainerRef.current) {
      boundingClientRect = dummyContainerRef.current.getBoundingClientRect();
    }

    setShrinkDomData(() => ({
      width: boundingClientRect.width,
      height: boundingClientRect.height,
      top: boundingClientRect.top + 'px',
    }));

    setIsExpanded(false);
    setClassName('shrinkAnimate');
  };

  const value: ExpandableContainerI = {
    isExpanded,
    onExpandClick: handleExpandClick,
    onShrinkClick: handleShrinkClick,
  };

  return (
    <ExpandableContainerContext.Provider value={value}>
      <Box sx={{ display: 'flex' }} key={id}>
        <StyledExpandableContainer
          className={className}
          ref={containerRef}
          sx={{ flexGrow: 1 }}
          width={shrinkDomData.width}
          height={shrinkDomData.height}
          yDistFromTop={shrinkDomData.top}
          key={id}
        >
          {isExpanded && (
            <FloatingButton startIconName="minimize" size="large" onClick={handleShrinkClick}>
              Minimize
            </FloatingButton>
          )}
          {children}
        </StyledExpandableContainer>

        {/* dummy container to fix height and prevent content jump while expanding main container */}
        <Box
          ref={dummyContainerRef}
          sx={{ height: shrinkDomData.height, width: isExpanded ? '100%' : 'auto' }}
          id={id}
        />
      </Box>
    </ExpandableContainerContext.Provider>
  );
};

export const useExpandableContainer = () => useContext(ExpandableContainerContext);
