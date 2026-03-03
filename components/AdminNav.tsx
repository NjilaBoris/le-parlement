"use client";
import { LogoIcon } from "@/icons";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

import { Button } from "./ui/button";
import { IconMenu2 } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const AdminNav = () => {
  return (
    <div className="h-full w-full lg:hidden border-red-100 border-b py-5">
      <div className="flex items-center justify-between w-[90%] mx-auto h-full">
        <Link href="/">
          <div className="flex items-center   gap-1 font-inter">
            <LogoIcon className="size-10" />
            <p className="text-[1rem] font-bold md:text-[1.3rem] text-white  uppercase flex items-center">
              <span className={` transition duration-200 ease-in text-black`}>
                le parle
              </span>{" "}
              <span
                className={`opacity-100 transition duration-200 ease-in text-[#cc0000]`}
              >
                ment
              </span>
            </p>
          </div>
        </Link>
        <SheetDemo />
      </div>
    </div>
  );
};

export default AdminNav;

export function SheetDemo() {
  const pathname = usePathname();
  const sidebarLinks = [
    {
      label: "Create Post",
      route: "/create-post",
    },
    {
      label: "articles",
      route: "/articles",
    },
  ];
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="border-neutral-200">
          <IconMenu2 className="text-neutral-400" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>

        <SheetHeader>
          {sidebarLinks.map((item) => {
            const isActive =
              (pathname.includes(item.route) && item.route.length > 1) ||
              pathname === item.route;

            return (
              <>
                <SheetClose asChild>
                  <Link
                    key={item.label}
                    href={item.route}
                    className={cn(
                      "flex items-center rounded-sm px-4  py-3 text-sm transition-all duration-200",
                      isActive
                        ? "bg-blue-800 text-white font-semibold ring-1 ring-blue-200"
                        : "hover:bg-blue-50 hover:text-blue-800 text-blue-700 border  border-blue-50"
                    )}
                  >
                    <span className="tracking-wide capitalize">
                      {item.label}
                    </span>
                  </Link>
                </SheetClose>
              </>
            );
          })}
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
