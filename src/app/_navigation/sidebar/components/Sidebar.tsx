"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { navItems } from "../constants";
import SidebarItem from "./SidebarItem";
import useAuth from "@/features/auth/hooks/use-auth";
import { usePathname } from "next/navigation";
import { getActivePath } from "@/utils/get-active-path";
import { signInPath, signUpPath } from "@/paths";

const Sidebar = () => {
  const { user, isFetched } = useAuth();
  const pathname = usePathname();

  const { activeIndex } = getActivePath(
    pathname,
    navItems.map((navItem) => navItem.href),
    [signInPath(), signUpPath()]
  );

  const [isTransition, setTransition] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const handleToggle = (open: boolean) => {
    setTransition(true);
    setOpen(open);
    setTimeout(() => setTransition(false), 200);
  };

  if (!user || !isFetched) {
    return <div className="w-[78px] bg-secondary/20" />;
  }

  return (
    <nav
      className={cn(
        "animate-sidebar-from-left",
        "h-screen border-r pt-24",
        isTransition && "duration-200",
        isOpen ? "md:w-60 w-[78px]" : "w-[78px]"
      )}
      onMouseEnter={() => handleToggle(true)}
      onMouseLeave={() => handleToggle(false)}
    >
      <div className="px-3 py-2">
        <nav className="space-y-2">
          {navItems.map((navItem, index) => (
            <SidebarItem
              key={navItem.title}
              isActive={activeIndex === index}
              isOpen={isOpen}
              navItem={navItem}
            />
          ))}
        </nav>
      </div>
    </nav>
  );
};

export default Sidebar;
