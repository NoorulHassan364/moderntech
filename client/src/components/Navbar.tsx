import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ThemeToggle from "./ThemeToggle";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/">
          <a className="flex items-center space-x-2">
            <span className="font-bold text-xl">TechCo</span>
          </a>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a className="text-sm font-medium transition-colors hover:text-primary">
                {item.label}
              </a>
            </Link>
          ))}
          {isMounted && <ThemeToggle />}
        </nav>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <div className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <a className="text-sm font-medium transition-colors hover:text-primary">
                    {item.label}
                  </a>
                </Link>
              ))}
              {isMounted && <ThemeToggle />}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
