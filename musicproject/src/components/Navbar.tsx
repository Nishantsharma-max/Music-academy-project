"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";

export default function MyNavbar() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Our Courses">
        <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">All Coueses</HoveredLink>
            <HoveredLink href="/interface-design">Basic Music Theory</HoveredLink>
            <HoveredLink href="/seo">Advanced Composition</HoveredLink>
            <HoveredLink href="/branding">Songwriting</HoveredLink>
            <HoveredLink href="/branding">Music Production</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact Us">
         
        </MenuItem>
      </Menu>
    </div>
  );
}
