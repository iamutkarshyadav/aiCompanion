// Make sure to import React
"use client"
import React from 'react';  // Make sure to import React

const Sidebar = () => {
  return (
    <div className="flex flex-col h-full text-primary bg-secondary">
      <div className="p-3 flex-1 justify-center">
        <div className="space-y-2">
          {/* Content of your Sidebar, e.g., routes */}
          Routes
        </div>
      </div>
    </div>
  );
};

export default Sidebar;  // Export the component
