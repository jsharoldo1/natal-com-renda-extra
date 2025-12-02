import Header from '@/components/Header';
import VslPlayer from '@/components/VslPlayer';
import CommentSection from '@/components/CommentSection';
import Footer from '@/components/Footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


export default function Home() {

  const logosImage = PlaceHolderImages.find(p => p.id === 'logos');
  const anaConfeiteiraAvatar = PlaceHolderImages.find(p => p.id === 'ana-confeiteira-avatar');

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1 w-full max-w-4xl container mx-auto px-4 py-6">
        <div className="text-center mb-2">
          <p className="font-semibold text-xs text-primary uppercase">
            RECEITAS LUCRATIVAS • ESPECIAL DE NATAL
          </p>
        </div>
        <h1 className="font-headline text-[21px] md:text-4xl font-bold text-center text-foreground leading-tight mb-3">
          A Receita de "Panetone Trufado no Pote" que está fazendo donas de casa faturarem de R$ 150 a R$ 400 por dia neste fim de ano
        </h1>
        <p className="text-center text-base md:text-lg text-gray-600 mb-4">
          Veja o passo a passo de como essa simples adaptação na receita tradicional virou uma febre de vendas e como você pode copiar essa técnica na sua cozinha ainda hoje.
        </p>

        <div className="flex items-center justify-center flex-wrap gap-x-4 gap-y-2 text-gray-600 text-[11px] mb-4">
            <div className="flex items-center gap-1 text-yellow-500">
                <Star className="w-4 h-4" fill="currentColor" />
                <Star className="w-4 h-4" fill="currentColor" />
                <Star className="w-4 h-4" fill="currentColor" />
                <Star className="w-4 h-4" fill="currentColor" />
                <Star className="w-4 h-4" fill="currentColor" />
            </div>
            <span className="font-bold">4.9/5</span>
            <span className="hidden sm:inline">(12.403 votos)</span>
            <span className="text-gray-400 hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
                <Avatar className="w-6 h-6">
                    <AvatarImage src={anaConfeiteiraAvatar?.imageUrl} alt="Ana Confeiteira" />
                    <AvatarFallback>AC</AvatarFallback>
                </Avatar>
                <span>Por <strong>Ana Confeiteira</strong></span>
            </div>
        </div>
        
        <VslPlayer />

        <div className="my-6">
            <a href="https://pay.vitalprotocol.online/checkout?product=c06ed75a-8f77-11f0-b47c-46da4690ad53&utm_source=organic&utm_campaign=&utm_medium=&utm_content=&utm_term=" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="w-full md:w-auto md:max-w-md mx-auto flex items-center justify-center gap-3 text-lg md:text-xl py-8 font-bold pulsing-button bg-primary hover:bg-primary/90 text-white rounded-lg shadow-lg"
              >
                QUERO APRENDER A FATURAR
              </Button>
            </a>
          </div>

        <CommentSection />
      </main>
      <Footer />
    </div>
  );
}
