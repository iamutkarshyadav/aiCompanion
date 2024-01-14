"use client"
import { cn } from '@/lib/utils';

import { Home, Plus, Settings } from 'lucide-react';
import { usePathname } from 'next/navigation';
import React from 'react';  

const Sidebar = () => {
  const pathname = usePathname();;
  const routes = [
    {
      icon: Home,
      href: '/',
      label: 'Home',
      pro: false,
    },
    {
      icon: Plus,
      href: '/companies/new',
      label: 'Create',
      pro: false,
    },
    {
      icon: Settings,
      href: '/settings',
      label: 'Settings',
      pro: false,
    }
  ];
  
  return (
    <div className="flex flex-col h-full text-primary bg-secondary">
      <div className="p-3 flex-1 justify-center overflow-y-auto">
        <div className="space-y-2">
          {routes.map((route, i) => (
            <div
              key={route.href}
              className={cn(
                "text-muted-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                pathname === route.href && "bg-primary/10 text-primary"
              )}
            >
              <div className="flex flex-col gap-y-2 items-center flex-1">
                {/* Add any components or content you want here */}
              </div>
              <route.icon className="h-5 w-5" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
