import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function PokedexNavbar() {
  const location = useLocation();
  const pathname = location.pathname;

  const navItems = [
    { title: "HOME", href: "/" },
    { title: "ABILITIES", href: "/abilities" },
    { title: "ELEMENTS", href: "/elements" },
  ];

  return (
    <div className="w-full flex justify-center mb-6">
      <NavigationMenu className="font-['Press_Start_2P']">
        <NavigationMenuList className="flex gap-4">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/" || pathname.startsWith("/pokemon")
                : pathname.startsWith(item.href);

            return (
              <NavigationMenuItem key={item.title}>
                <Link
                  to={item.href}
                  className={cn(
                    "flex h-10 items-center justify-center px-6 py-2 text-[20px] transition-all",
                    "border-b-4 border-r-4 border-[#303030] active:translate-y-[1px] active:border-b-2 active:border-r-2",
                    isActive
                      ? "bg-[#3D7DCA] text-white shadow-[inset_-3px_-3px_0px_white]"
                      : "bg-[#D1C1F0] text-[#303030] hover:bg-[#C0B0E0] shadow-[inset_-3px_-3px_0px_rgba(255,255,255,0.4)]"
                  )}
                >
                  {item.title}
                </Link>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
