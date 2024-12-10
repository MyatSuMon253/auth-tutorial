'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="bg-secondary flex justify-between items-center p-4 rounded-xl w-[600px] shadow-sm">
      <div className="flex gap-x-2">
        <Button variant={pathname === '/server' ? 'default' : 'outline'} asChild>
          <Link href="/server">Server</Link>
        </Button>
        <Button variant={pathname === '/settings' ? 'default' : 'outline'} asChild>
          <Link href="/settings">Settings</Link>
        </Button>
      </div>
      <p>User Button</p>
    </div>
  );
};

export default Navbar;
