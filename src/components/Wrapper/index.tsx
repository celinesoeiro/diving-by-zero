import { PropsWithChildren } from 'react';

export const Wrapper: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="w-screen h-screen m-0 p-0 overflow-hidden">
    <div className="bg-image bg-bottom bg-no-repeat bg-cover flex w-full h-full py-10 px-20 sm:p-20 items-center content-center justify-center overflow-auto">
      {children}
    </div>
  </div>
);
