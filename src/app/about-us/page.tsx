'use client';

import Image from 'next/image';
import {Mail, Instagram, Facebook} from 'lucide-react';

import {Header} from '@/components/header';
import {Footer} from '@/components/footer';

export default function AboutUs() {
  return (
    <>
      <Header/>
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-semibold mb-4">
            <span className="underline decoration-primary">Excelência, Segurança e Design em Soluções para Corrimãos</span>
          </h1>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <div className="md:order-1">
            <Image
              src="/images/Foto33.jpg"
              alt="GD Corrimão Team"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:order-2">
            <h2 className="text-2xl font-extrabold mb-4">Gtec Corrimão</h2>
            <p className="text-lg text-muted-foreground mb-4">
            Com mais de 20 anos de atuação no mercado, a Gtec Corrimãos se consolidou como uma referência nacional na 
            fabricação de corrimãos e guarda-corpos em aço inox, alumínio e ferro. Nosso compromisso com a qualidade, 
            segurança e design moderno nos tornou uma escolha confiável para projetos residenciais, comerciais, industriais e obras públicas.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
            Ao longo de duas décadas, buscamos constantemente a inovação e a melhoria contínua de nossos produtos e processos. 
            Desenvolvemos um rigoroso controle de qualidade e oferecemos soluções personalizadas que atendem às necessidades 
            específicas de cada cliente, sempre com foco na durabilidade, funcionalidade e estética.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
            Nossa linha de produtos inclui corrimãos para escadas, sacadas, mezaninos, decks e rampas, além de estruturas voltadas 
            à acessibilidade, garantindo conforto e segurança em todos os ambientes. Atendemos desde construtoras, comércios, indústrias 
            até obras residenciais, com agilidade na logística e um atendimento diferenciado que prioriza a satisfação do cliente e o cumprimento dos prazos.
            </p>
            <p className="text-lg text-muted-foreground">
            A competitividade do mercado e o desejo de entregar excelência em cada projeto nos motivam a seguir como líderes no setor, 
            oferecendo soluções arquitetônicas funcionais, elegantes e seguras em todo o território nacional.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-lg shadow-md p-6 bg-card">
            <h3 className="text-xl font-semibold mb-2 text-center">O que queremos</h3>
            <p className="text-muted-foreground text-center">
            Nossa missão é oferecer soluções em corrimãos e guarda-corpos com excelência, unindo segurança, 
            design e durabilidade, por meio de produtos personalizados e um atendimento comprometido com a 
            satisfação total de nossos clientes.
            </p>
          </div>
          <div className="rounded-lg shadow-md p-6 bg-card">
            <h3 className="text-xl font-semibold mb-2 text-center">Visão</h3>
            <p className="text-muted-foreground text-center">
            Ser reconhecida nacionalmente como a principal referência em soluções de corrimãos e guarda-corpos, 
            inovando continuamente para garantir segurança, qualidade e design em cada projeto.
            </p>
          </div>
          <div className="rounded-lg shadow-md p-6 bg-card">
            <h3 className="text-xl font-semibold mb-2 text-center">Nosso Valor</h3>
            <p className="text-muted-foreground text-center">
              Respeito
              <br/>
              Fidelidade ao nosso produto
              <br/>
              Comprometimento 
              <br/>
              Foco
              <br/>
              Ética e Transparência
              <br/>
              Pontualidade e Segurança
            </p>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
