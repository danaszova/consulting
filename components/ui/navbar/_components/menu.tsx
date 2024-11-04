"use client";

import ContentMenu from "./content-menu";

import React, { useState } from "react";

import {
  AlignJustify,
  BarChart,
  Building2,
  Camera,
  ChevronDown,
  Code,
  Code2Icon,
  DollarSign,
  Download,
  GraduationCap,
  Headphones,
  Home,
  Info,
  LibrarySquare,
  LifeBuoy,
  Lock,
  Hammer,
  Newspaper,
  Compass,
  Settings,
  Smile,
  Sparkles,
  UserCircle2,
  UserPlus,
} from "lucide-react";

interface MenuItem {
  title: string;
  menu: string;
  options: { label: string; emoji: React.ReactElement; href: string }[];
}

const items: MenuItem[] = [
  {
    title: "Use Cases",
    menu: "use-cases",
    options: [
      {
        label: "Staffing",
        emoji: <UserPlus className="text-grey-500" />,
        href: "/team-alignment",
      },
       {
        label: "Engineering",
        emoji: <Code className="text-blue-500" />,
        href: "/engineering",
      },

   
    ],
  },

  {
    title: "For Business",
    menu: "for-business",
    options: [
      {
        label: "Automation",
        emoji: <Sparkles className="text-indigo-500" />,
        href: "/bird-ai",
      },
      {
        label: "Infrastructure",
        emoji: <Building2 className="text-green-500" />,
        href: "/enterprise",
      },
      {
        label: "Strategy",
        emoji: <Compass className="text-blue-500" />,
        href: "/",
      },
  
    ],
  },
  {
    title: "Resources",
    menu: "resources",
    options: [
      {
        label: "Blog",
        emoji: <AlignJustify className="text-blue-500" />,
        href: "/",
      },
      {
        label: "Support",
        emoji: <Headphones className="text-black-500" />,
        href: "/screen-recorder",
      },
      {
        label: "Tools",
        emoji: <Hammer className="text-green-500" />,
        href: "/",
      },
    ],
  },
  {
    title: "Company",
    menu: "company",
    options: [
      {
        label: "About Us",
        emoji: <Info className="text-purple-500" />,
        href: "/about-us",
      },
      {
        label: "Jobs",
        emoji: <UserCircle2 className="text-green-500" />,
        href: "/careers",
      },
      {
        label: "News",
        emoji: <Newspaper className="text-blue-500" />,
        href: "/newsroom",
      },
    ],
  },
];

export function NavigationMenuBar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMouseEnter = (menu: string) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const renderMenu = (item: MenuItem) => {
    const { title, menu, options } = item;

    return (
      <div
        className="
         flex
         items-center
         relative
         "
        onMouseEnter={() => handleMouseEnter(menu)}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex items-center">
          <div className="w-24">{title}</div>
          <div>
            <ChevronDown className="relative top-[1px] h-3 w-3" />
          </div>
          <div className="mt-20">
            {activeMenu === menu && (
              <ContentMenu
                options={options.map((option, index) => ({
                  ...option,
                  href: option.href,
                }))}
              />
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className="
        hidden
        text-md
        font-light
        space-x-4
        w-full 
        items-center
        xl:flex
        h-24
        
        "
    >
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <div className="cursor-pointer hidden xl:block">
            {renderMenu(item)}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
