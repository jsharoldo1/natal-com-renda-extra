import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import { Chatbot } from '@/components/Chatbot';
import './globals.css';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Receitas de Natal Lucrativas',
  description: 'Aprenda a fazer doces incríveis e faturar alto neste Natal!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased')}>
        {children}
        <Toaster />
        <Chatbot />
      </body>
    </html>
  );
}
