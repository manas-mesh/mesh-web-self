import React, { HTMLAttributes, ReactNode } from 'react';

interface buttonInterface extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: 'primary' | 'secondary';
}

export const Buttons = ({ children, ...props }: buttonInterface) => {
  const b = 1;
  return <button {...props}>{children}</button>;
};
