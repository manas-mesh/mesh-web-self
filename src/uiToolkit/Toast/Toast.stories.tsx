/* eslint-disable import/no-anonymous-default-export */
import { useToast } from '@hooks/useToastHook';

const ToastStory = {
  title: 'Core Components/Toast',
};

export const Normal = () => {
  const toast = useToast();

  const handle = () => {
    toast({ title: 'Hi am done', status: 'error' });
  };

  return (
    <>
      <div onClick={handle} style={{ background: 'red', height: '100px', width: '100px' }}>
        click
      </div>
    </>
  );
};

export default ToastStory;
