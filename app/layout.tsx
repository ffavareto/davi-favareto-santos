import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ovos Frescos | Direto do Produtor - Qualidade e Frescor',
  description: 'Ovos caipiras frescos, colhidos diariamente. 100% naturais, livres de gaiola e sem hormônios. Entrega semanal na região.',
  keywords: ['ovos frescos', 'ovos caipira', 'ovos livres de gaiola', 'ovos naturais', 'comprar ovos'],
  openGraph: {
    title: 'Ovos Frescos | Direto do Produtor',
    description: 'Ovos caipiras frescos, colhidos diariamente e livres de gaiolas. Sabor de verdade e gemas douradas.',
    type: 'website',
    locale: 'pt_BR',
    url: 'https://davi-favareto-santos.vercel.app/', // TODO: Substitua pelo seu domínio
    siteName: 'Ovos do [Nome]',
    images: [
      {
        url: 'https://github.com/ffavareto/images/blob/main/IMG_0165.JPEG?raw=true',
        width: 1200,
        height: 630,
        alt: 'Ovos caipiras frescos do galinheiro',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ovos Frescos | Direto do Produtor',
    description: 'Ovos caipiras frescos, colhidos diariamente e livres de gaiolas.',
    images: ['https://github.com/ffavareto/images/blob/main/IMG_0165.JPEG?raw=true'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://davi-favareto-santos.vercel.app/', // TODO: Substitua pelo seu domínio
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
