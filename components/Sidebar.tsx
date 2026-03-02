"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
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
    <div className="hidden md:flex h-screen w-64 flex-col border-r border-gray-200 bg-white p-6">
      <nav className="flex flex-col gap-3 mt-4">
        {sidebarLinks.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;

          return (
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
              <span className="tracking-wide capitalize">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
