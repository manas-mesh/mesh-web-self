import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import { TextBodyLargeBold } from '@uiToolkit/Typography/Typography';
import { FAQ_URL, SUPPORT_EMAIL } from 'constants/projectConstants';
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { noOp } from 'constants/common';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  eventId: string | number | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { eventId: null, hasError: false };
  }

  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {}

  render() {
    if (this.state.hasError) {
      //render fallback UI
      return (
        <StyledDialog closeOnEsc={false} aria-labelledby="simple-dialog-title" isOpen={true} onClose={noOp}>
          <DialogContainer>
            <div>
              <TextBodyLargeBold>For some reason, Mesh couldn’t process 😢</TextBodyLargeBold>
            </div>
            <DialogContent>
              We are sorry about this. Please try the following:
              <List>
                <li>
                  <Link onClick={() => window.location.reload()}>Reload your page</Link> and try again.
                </li>
                <li>Verify your connection or security software.</li>
                <li>
                  Go back to <Link onClick={() => window.open('/', '_self')}>Homepage</Link>
                </li>
              </List>
              <Link onClick={() => window.open(FAQ_URL, '_blank')}>Check our help center</Link> for more details or{' '}
              <Link href={`mailto:${SUPPORT_EMAIL}`}>drop us a line</Link>.
            </DialogContent>
          </DialogContainer>
        </StyledDialog>
      );
    }

    //when there's not an error, render children untouched
    return this.props.children;
  }
}

const StyledDialog = styled(Modal)`
  font-size: 1rem;
  .MuiBackdrop-root {
    background-color: #ddd;
  }
  h5 {
    font-size: 1.6em;
  }
`;

const DialogContainer = styled('div')`
  padding: 1.2rem 1.7rem;
`;

const DialogContent = styled('div')`
  padding: 0.75rem 0 0.75rem 0;
`;

const List = styled('ul')`
  list-style-position: inside;
  padding-left: 3px;
`;

const Link = styled('a')`
  cursor: pointer;
  color: #0992f0;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default ErrorBoundary;
