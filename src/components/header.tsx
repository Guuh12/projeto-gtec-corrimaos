"use client";

import {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {Button} from '@/components/ui/button';
import {Sheet, SheetClose, SheetContent, SheetTrigger} from '@/components/ui/sheet';
import {Menu} from 'lucide-react';
import {cn} from '@/lib/utils';

const navigationLinks = [
  {label: 'Home', href: '/'},
  {label: 'Quem Somos', href: '/about-us'},
  {label: 'Produtos', href: '/products'},
  {label: 'Contato', href: '/contact'},
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-background py-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="text-2xl font-semibold">
          <Image
            src="/images/LogoGtecMenor.png"
            alt="Gtec Corrimãos"
            width={120}
            height={40}
            priority
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {navigationLinks.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-primary transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
          <button className="p-2 rounded-md hover:bg-gray-100 transition">
            <Menu className="h-5 w-5" />
          </button>
          </SheetTrigger>
          {open && (
            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg sm:max-w-sm w-full px-6 py-4 z-50">
              <div className="grid gap-4">
                <div className="text-lg font-bold">Menu</div>
                {navigationLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="hover:text-primary transition-colors"
                    onClick={() => setOpen(false)} // fecha o menu ao clicar no link
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Sheet>
      </div>
    </header>
  );
}


