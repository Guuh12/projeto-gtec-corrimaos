'use client';

import Image from 'next/image';
import {Header} from '@/components/header';
import {Footer} from '@/components/footer';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';

export default function Contact() {
  return (
    <>
      <Header/>
      <main className="container mx-auto px-4 py-8">
        <section className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold">Contato - Tire suas dúvidas</h1>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <form action="mailto:contato@gteccorrimaos.com.br" method="post" encType="text/plain">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground">
                  Nome
                </label>
                <Input type="text" id="name" name="name" className="mt-1"/>
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">
                  Email
                </label>
                <Input type="email" id="email" name="email" className="mt-1"/>
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground">
                  Assunto
                </label>
                <Input type="text" id="subject" name="subject" className="mt-1"/>
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground">
                  Número
                </label>
                <Input type="tel" id="phone" name="phone" className="mt-1"/>
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground">
                  Mensagem
                </label>
                <Textarea id="message" name="message" rows={4} className="mt-1"/>
              </div>
              <Button type="submit">Enviar</Button>
            </form>
          </div>

          {/* Contact Information Card */}
          <div className="rounded-lg shadow-md p-6 bg-card">
            <h2 className="text-xl font-semibold mb-4">Informação de Contato</h2>
            <p className="text-muted-foreground mb-2">
              Endereço:
              <br/>
              R. Manoel Ribas, 15 - Vila Jussara, Carapicuíba - SP, 06321-190
            </p>
            <p className="text-muted-foreground mb-2">
              Número de Telefone:
              <br/>
              11 9400-9084
            </p>
            <p className="text-muted-foreground mb-2">
              Horário de Trabalho:
              <br/>
              Segunda a Sexta, das 8am a 5pm
            </p>
            <p className="text-muted-foreground mb-2">
              Email:
              <br/>
              <a href="mailto:contato@gteccorrimaos.com.br" className="text-primary">
                contato@gteccorrimaos.com.br
              </a>
            </p>
            <p className="text-sm text-muted-foreground">Envie-nos um e-mail a qualquer momento!</p>
          </div>
        </div>

        {/* Google Maps Embed */}
        <section className="mt-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.048957497079!2d-46.84104162474138!3d-23.59908877882343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cfa703c080a29d%3A0x9884319b543b4552!2sR.%20Manoel%20Ribas%2C%2015%20-%20Vila%20Jussara%2C%20Carapicu%C3%ADba%20-%20SP%2C%2006321-190!5e0!3m2!1spt-BR!2sbr!4v1725961781916!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            style={{border: 0}}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </main>
      <Footer/>
    </>
  );
}
