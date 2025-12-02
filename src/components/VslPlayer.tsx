"use client";

import { useEffect, useState } from 'react';
import { PlayCircle, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const VslPlayer = () => {
  const [showButton, setShowButton] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const buttonTimer = setTimeout(() => {
      setShowButton(true);
    }, 8000); // Show button after 8 seconds

    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return prev + 1.25; // Reaches 100% in ~8 seconds
      });
    }, 100);

    return () => {
      clearTimeout(buttonTimer);
      clearInterval(progressTimer);
    };
  }, []);

  return (
    <div className="bg-black p-1 md:p-2 rounded-b-lg">
      <div className="relative aspect-video w-full">
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center rounded-md overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/natal/1280/720')] bg-cover bg-center opacity-30 blur-sm" data-ai-hint="christmas cookies"></div>
          <PlayCircle className="w-20 h-20 text-white/50 z-10" />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 bg-gradient-to-t from-black/80 to-transparent">
            <Progress value={progress} className="h-1.5 [&>div]:bg-primary" />
        </div>
      </div>
       
       {showButton && (
        <div className="my-6 animate-fade-in-up">
          <Button
            size="lg"
            className="w-full md:w-auto md:max-w-md mx-auto flex items-center justify-center gap-3 text-lg md:text-xl py-8 font-bold animate-pulse bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg shadow-lg"
            onClick={() => console.log('CTA clicked!')}
          >
            <Gift className="w-6 h-6"/>
            QUERO ACESSAR O MÉTODO AGORA
          </Button>
          <p className="text-center text-xs text-background/70 mt-3">Vagas limitadas. Compra 100% segura.</p>
        </div>
      )}
    </div>
  );
};

export default VslPlayer;
