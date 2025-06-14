"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center md:items-start">

          {/* Logo and Description */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <Image
              src="/images/LogoGtecMenor.png"
              alt="Company Logo"
              width={150}
              height={50}
              className="mb-4 mx-auto md:mx-0"
            />
            <p className="text-sm text-secondary-foreground">
              Com mais de 20 anos de atuação no mercado, a Gtec Corrimãos se consolidou como uma empresa referência em qualidade, segurança e excelência no segmento de corrimãos e estruturas metálicas.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-secondary-foreground mb-3">LINKS RÁPIDOS</h4>
            <ul className="text-sm text-secondary-foreground">
              <li className="mb-2"><Link href="/" className="hover:text-primary">Home</Link></li>
              <li className="mb-2"><Link href="/about-us" className="hover:text-primary">Quem Somos</Link></li>
              <li className="mb-2"><Link href="/products" className="hover:text-primary">Produtos</Link></li>
              <li className="mb-2"><Link href="#" className="hover:text-primary">Serviços</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Contato</Link></li>
            </ul>
          </div>

          {/* Phones */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-secondary-foreground mb-3">TELEFONES</h4>
            <div className="text-sm text-secondary-foreground flex justify-center md:justify-start items-center mb-2">
              <Phone className="h-4 w-4 mr-2 text-primary" />
              <a href="https://wa.me/11940029084" target="_blank" rel="noopener noreferrer">
                11 9400-9084
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-secondary-foreground mb-3">CONTATO</h4>
            <div className="text-sm text-secondary-foreground flex justify-center md:justify-start items-start mb-2">
              <MapPin className="h-4 w-4 mr-2 text-primary" />
              <span>R. Manoel Ribas, 15 - Vila Jussara, Carapicuíba - SP, 06321-190</span>
            </div>
            <div className="text-sm text-secondary-foreground flex justify-center md:justify-start items-center">
              <Mail className="h-4 w-4 mr-2 text-primary" />
              <a href="mailto:contato@gteccorrimaos.com.br">contato@gteccorrimaos.com.br</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center mt-8 pt-4 border-t border-secondary-foreground/20 text-center md:text-left">
          <p className="text-sm text-secondary-foreground mb-2 md:mb-0">
            &copy; {new Date().getFullYear()} Gtec Corrimãos. All rights reserved.
          </p>
          <div className="flex space-x-4 justify-center md:justify-start">
            <a
              href="https://wa.me/11940029084"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src="/icons/whatsapp.png"
                alt="WhatsApp"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://www.instagram.com/_gtec_corrimaos/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src="/icons/instagram.png"
                alt="Instagram"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}