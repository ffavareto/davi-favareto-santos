'use client';

export function Hero() {
  return (
    <section className="hero">
      <div 
        className="hero-bg" 
        style={{
          backgroundImage: "url('https://github.com/ffavareto/images/blob/main/IMG_0165.JPEG?raw=true')"
        }}
      />
      
      <div className="container hero-content">
        <h1>Do galinheiro para<br />sua mesa.</h1>
        <p>Ovos caipiras frescos, colhidos diariamente e livres de gaiolas. Sabor de verdade e gemas douradas.</p>
        <button 
          className="btn btn-secundario"
          onClick={() => {
            document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Ver opções
        </button>
      </div>
    </section>
  );
}
