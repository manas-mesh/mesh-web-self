import { UseToastOptions, useToast as useChakraToast } from '@chakra-ui/react';
import { Toast } from '@uiToolkit/Toast';

const DEFAULT_DURATION = 4000;
const DEFAULT_POSITION = 'bottom-left';

export const useToast = () => {
  const toast = useChakraToast();

  const returnFunction = (options: UseToastOptions) =>
    toast({
      position: options?.position ?? DEFAULT_POSITION,
      duration: options?.duration ?? DEFAULT_DURATION,
      render: () => <Toast {...options} {...toast} />,
      ...options,
    });

  return Object.assign(returnFunction, toast);
};
