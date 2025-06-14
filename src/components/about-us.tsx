import Image from 'next/image';

export function AboutUs() {
  return (
    <section id="about" className="py-12 bg-muted">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="md:order-2">
          <Image
            src="/images/Foto35.jpg"
            alt="About Us Image"
            width={500}
            height={300}
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="md:order-1 text-center md:text-left">
          <h2 className="text-3xl font-extrabold mb-4">Sobre Gtec Corrimãos</h2>
          <p className="text-lg text-muted-foreground">
          A Gtec Corrimãos é uma empresa que atua no mercado a mais de 20 anos.
          Trabalhamos com fabricação de corrimãos de escadas e guarda corpos, de inox, alumínio e ferro.
          A competitividade no mercado e o desejo de satisfazer integralmente os clientes levaram a empresa a 
          desenvolver um rígido e eficiente controle de qualidade para a produção e elaboração de projetos arquitetônicos.
          </p>
        </div>
      </div>
    </section>
  );
}
