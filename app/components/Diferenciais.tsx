export function Diferenciais() {
  type Diferencial = {
    titulo: string;
    descricao: string;
    svg: string;
  };

  const diferenciais: Diferencial[] = [
    {
      titulo: '100% naturais',
      descricao: 'Sem hormônios ou antibióticos. Alimentação balanceada e natural.',
      svg: 'M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3C21,5,14,5.25,9,6.25C4,7.25,2,11.5,2,13.5C2,15.5,3.75,17.25,3.75,17.25C7,8,17,8,17,8Z'
    },
    {
      titulo: 'Livres de gaiola',
      descricao: 'Galinhas felizes, criadas soltas e com respeito ao bem-estar animal.',
      svg: 'M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,5.29C7.24,5.84 7.05,6.44 6.93,7.07L3.34,7M3.34,17L6.93,16.93C7.05,17.56 7.24,18.16 7.5,18.71L3.34,17M20.66,17L16.5,18.71C16.76,18.16 16.95,17.56 17.07,16.93L20.66,17M20.66,7L17.07,7.07C16.95,6.44 16.76,5.84 16.5,5.29L20.66,7M12,22L9.61,18.58C10.35,18.85 11.16,19 12,19C12.84,19 13.65,18.85 14.39,18.58L12,22Z'
    },
    {
      titulo: 'Colheita fresca',
      descricao: 'Ovos coletados e entregues na mesma semana. Frescor garantido.',
      svg: 'M18,18.5A1.5,1.5 0 0,1 16.5,17A1.5,1.5 0 0,1 18,15.5A1.5,1.5 0 0,1 19.5,17A1.5,1.5 0 0,1 18,18.5M19.5,9.5L21.46,12H17V9.5H19.5M6,18.5A1.5,1.5 0 0,1 4.5,17A1.5,1.5 0 0,1 6,15.5A1.5,1.5 0 0,1 7.5,17A1.5,1.5 0 0,1 6,18.5M20,8H17V4H3C1.89,4 1,4.89 1,6V17H3A3,3 0 0,0 6,20A3,3 0 0,0 9,17H15A3,3 0 0,0 18,20A3,3 0 0,0 21,17H23V12L20,8Z'
    }
  ];

  return (
    <section id="diferenciais" className="secao">
      <div className="container">
        <h2 className="titulo-secao">Por que nossos ovos?</h2>
        <p className="subtitulo-secao">Cuidamos de cada detalhe, desde a alimentação até a entrega, para garantir o melhor produto.</p>
        
        <div className="diferenciais-grid">
          {diferenciais.map((diferencial) => (
            <div key={diferencial.titulo} className="diferencial-card">
              <svg viewBox="0 0 24 24">
                <path d={diferencial.svg} />
              </svg>
              <h3>{diferencial.titulo}</h3>
              <p>{diferencial.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
