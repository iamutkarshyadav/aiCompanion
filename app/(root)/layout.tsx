import React from 'react';  

import Sidebar from '@/components/Sidebar';  
import Navbar from '@/components/navbar';  

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="h-full flex flex-col">
      <Navbar />
      <div className="hidden md:flex mt-16 w-20 flex-col">
        <Sidebar />
      </div>
      <main className="md:pl-20 pt-16 flex-1">
        {children}
      </main>
    </div>
  );
};

export default RootLayout;

