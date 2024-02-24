"use client";

import { HomeIcon, Plus, Settings } from "lucide-react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const routes = [
    {
      icon: <HomeIcon className="h-5 w-5" />,
      href: "/",
      label: "Home",
      pro: false,
    },
    {
      icon: <Plus className="h-5 w-5" />,
      href: "/companion/new",
      label: "Create",
      pro: true,
    },
    {
      icon: <Settings className="h-5 w-5" />,
      href: "/settings",
      label: "Settings",
      pro: false,
    },
  ];

  const onNavigate = (url: string, pro: boolean) => {
    // TODO: CHECK IF PRO

    return router.push(url);
  };

  return (
    <div className="space-y-4 flex flex-col h-full text-primary bg-secondary">
      <div className="p-3 flex-1 flex justify-center">
        <div className="space-y-2">
          {routes.map((route) => {
            return (
              <div
                onClick={() => onNavigate(route.href, route.pro)}
                key={route.href}
                className={cn(
                  "text-muted-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                  pathname === route.href && "bg-primary/10 text-primary "
                )}
              >
                <div className="flex flex-col gap-y-2 items-center flex-1">
                  {route.icon} {route.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
