'use client';

import { usePedirNoZap } from '@/app/hooks/usePedirNoZap';

export function CTA() {
  const pedirNoZap = usePedirNoZap();

  return (
    <section id="contato" className="secao cta-section">
      <div className="container">
        <h2 className="titulo-secao">Ainda com dúvida?</h2>
        <p>Fale diretamente comigo pelo WhatsApp. Atendimento pessoal.</p>
        <br />
        <button 
          className="btn btn-secundario"
          onClick={() => pedirNoZap('Olá, tenho uma dúvida sobre os ovos.')}
        >
          Falar no WhatsApp
        </button>
      </div>
    </section>
  );
}
