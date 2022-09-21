import { PropsWithChildren } from 'react';

export const Wrapper: React.FC<PropsWithChildren> = ({ children }) => (
  <div
    className="
    w-screen h-screen 
    m-0 p-0
    overflow-auto
    bg-image bg-bottom bg-no-repeat bg-cover 
    "
  >
    {children}
  </div>
);
