"use client";

import React from 'react';
import { Menu, Sparkle } from 'lucide-react';
import Link from 'next/link';
import { Poppins } from 'next/font/google';
import { UserButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';

import { cn } from '@/lib/utils';
import { ModeToggle } from './mode-toggle';
import { MobileSidebar } from './mobile-sidebar';
import { useProModal } from '@/hooks/use-pro-modal';



const font = Poppins({ weight: "600", subsets: ["latin"] });
interface NavbarProps {
  isPro: boolean;
}
const Navbar = ({
  isPro
}: NavbarProps) => {
  const proModal = useProModal();

  return ( 
    <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 h-16 border-b border-primary/10 bg-secondary">
      <div className="flex items-center">
        <MobileSidebar isPro={isPro} />
        <Link href="/">
          <h1 className={cn("hidden md:block text-xl md:text-3xl font-bold text-primary", font.className)}>
            companion.ai
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-x-3">
        {!isPro && (
          <Button onClick={proModal.onOpen} size="sm" variant="premium">
            Upgrade
            <Sparkle className="h-4 w-4 fill-white text-white ml-2" />
          </Button>
        )}
        <ModeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}
export default Navbar;