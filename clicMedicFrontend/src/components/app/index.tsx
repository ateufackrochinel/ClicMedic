import './app-layout.css';
import React, { PropsWithChildren } from 'react';

const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="AppLayout-container">{children}</div>;
};

export default AppLayout;
