'use client';

const PHONE_NUMBER = '5511956506867';

export function usePedirNoZap() {
  return (mensagem: string) => {
    const textoCodificado = encodeURIComponent(mensagem);
    const url = `https://wa.me/${PHONE_NUMBER}?text=${textoCodificado}`;
    window.open(url, '_blank');
  };
}
