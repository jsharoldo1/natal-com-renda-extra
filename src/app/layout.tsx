import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Natal com Renda Extra',
  description: 'Descubra quais são os doces mais procurados deste ano e como transformar sua cozinha em uma fonte de renda em menos de 30 dias.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="player-optimizer" strategy="beforeInteractive">
          {`!function(i,n){i._plt=i._plt||(n&&n.timeOrigin?n.timeOrigin+n.now():Date.now())}(window,performance);`}
        </Script>
        <link rel="preload" href="https://scripts.converteai.net/f3999572-e8c8-47d0-baa8-d351efd4ece8/players/6931f267c5a3364c781260da/v4/player.js" as="script" />
        <link rel="preload" href="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js" as="script" />
        <link rel="preload" href="https://cdn.converteai.net/f3999572-e8c8-47d0-baa8-d351efd4ece8/6931f2343700e023519547bb/main.m3u8" as="fetch" />
        <link rel="dns-prefetch" href="https://cdn.converteai.net" />
        <link rel="dns-prefetch" href="https://scripts.converteai.net" />
        <link rel="dns-prefetch" href="https://images.converteai.net" />
        <link rel="dns-prefetch" href="https://api.vturb.com.br" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
        <style>{`.hide { display: none; }`}</style>
      </head>
      <body className={cn('font-body antialiased')}>
        {children}
        <Toaster />
        <Script id="vturb-player-script" strategy="afterInteractive">
          {`
            var s=document.createElement("script");
            s.src="https://scripts.converteai.net/f3999572-e8c8-47d0-baa8-d351efd4ece8/players/6931f267c5a3364c781260da/v4/player.js";
            s.async=true;
            document.head.appendChild(s);
          `}
        </Script>
        <Script id="delay-script" strategy="afterInteractive">
          {`
            var delaySeconds = 40;
            var interval = setInterval(function() {
              var player = document.querySelector("vturb-smartplayer");
              if (player) {
                player.addEventListener("player:ready", function() {
                  player.displayHiddenElements(delaySeconds, [".hide"], { persist: true });
                });
                clearInterval(interval);
              }
            }, 100);
          `}
        </Script>
      </body>
    </html>
  );
}
