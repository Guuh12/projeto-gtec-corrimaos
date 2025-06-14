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
            <>
              {/* Backdrop */}
              <div
                className="fixed inset-0 bg-black bg-opacity-40 z-40"
                onClick={() => setOpen(false)}
              />
              {/* Menu */}
              <div className="md:hidden fixed left-0 right-0 top-0 bg-white z-50 flex flex-col shadow-lg max-w-sm w-full mx-auto rounded-b-lg">
                <div className="flex items-center justify-between px-6 py-4 border-b">
                  <div className="text-lg font-bold">Menu</div>
                  <button
                    className="p-2 rounded-md hover:bg-gray-100 transition"
                    onClick={() => setOpen(false)}
                    aria-label="Fechar menu"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>
                <div className="grid gap-4 px-6 py-4">
                  {navigationLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="hover:text-primary transition-colors text-lg"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </>
          )}
        </Sheet>
      </div>
    </header>
  );
}


