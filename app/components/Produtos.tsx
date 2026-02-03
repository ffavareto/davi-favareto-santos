'use client';

import { usePedirNoZap } from '@/app/hooks/usePedirNoZap';

type Produto = {
  id: number;
  tag: string;
  titulo: string;
  descricao: string;
  preco: string;
  imagem: string;
  mensagem: string;
  destaque: boolean;
  buttonText: string;
};

export function Produtos() {
  const pedirNoZap = usePedirNoZap();

  const produtos: Produto[] = [
    {
      id: 1,
      tag: 'Para experimentar',
      titulo: 'Pente avulso',
      descricao: 'Ideal para quem quer conhecer. Pente com 30 ovos selecionados tamanho extra.',
      preco: 'A partir de R$ 18,00',
      imagem: 'https://github.com/ffavareto/images/blob/main/IMG_0149.JPEG?raw=true',
      mensagem: 'Gostaria de pedir um pente avulso de ovos.',
      destaque: false,
      buttonText: 'Pedir agora'
    },
    {
      id: 2,
      tag: 'Mais Popular',
      titulo: 'Clube da assinatura',
      descricao: 'Receba toda semana ou quinzena. Sem preocupação e com desconto especial.',
      preco: 'Frete Grátis na região',
      imagem: 'https://github.com/ffavareto/images/blob/main/IMG_0150.JPEG?raw=true',
      mensagem: 'Tenho interesse na assinatura de ovos.',
      destaque: true,
      buttonText: 'Assinar'
    },
    {
      id: 3,
      tag: 'Atacado',
      titulo: 'Para comércios',
      descricao: 'Caixas com 360 ovos para padarias, restaurantes e mercados. Preço diferenciado.',
      preco: 'Consulte condições',
      imagem: 'https://github.com/ffavareto/images/blob/main/comercio.png?raw=true',
      mensagem: 'Tenho um comércio e gostaria de cotar ovos em atacado.',
      destaque: false,
      buttonText: 'Cotar agora'
    }
  ];

  return (
    <section id="produtos" className="secao produtos">
      <div className="container">
        <h2 className="titulo-secao">Nossas opções</h2>
        <p className="subtitulo-secao">Escolha a melhor forma de receber saúde na sua casa ou comércio.</p>

        <div className="produtos-grid">
          {produtos.map((produto) => (
            <div 
              key={produto.id} 
              className={`produto-card ${produto.destaque ? 'destaque' : ''}`}
            >
              <img 
                className="produto-img" 
                src={produto.imagem}
                alt={produto.titulo}
              />
              <div className="produto-info">
                <span className="tag">{produto.tag}</span>
                <h3 className="produto-titulo">{produto.titulo}</h3>
                <p className="produto-desc">{produto.descricao}</p>
                <span className="preco-destaque">{produto.preco}</span>
                <button 
                  className={`btn ${produto.destaque ? 'btn-secundario' : 'btn-primario'}`}
                  onClick={() => pedirNoZap(produto.mensagem)}
                >
                  {produto.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
