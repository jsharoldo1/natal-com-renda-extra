import Header from '@/components/Header';
import VslPlayer from '@/components/VslPlayer';
import CommentSection from '@/components/CommentSection';
import Footer from '@/components/Footer';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Clock } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';

export default function Home() {
  const authorImage = PlaceHolderImages.find(p => p.id === 'author-maria-avatar');
  const staticDate = '12 de Julho de 2024';

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1 w-full">
        <section className="container mx-auto max-w-4xl py-8 px-4">
          <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 space-y-6">
            <div className="text-center">
              <p className="font-bold text-primary animate-pulse text-lg">
                ATENÇÃO: ASSISTA O VÍDEO ANTES QUE SAIA DO AR!
              </p>
            </div>

            <h1 className="font-headline text-3xl md:text-4xl font-bold text-center text-foreground leading-tight">
              <span className="text-primary">URGENTE:</span> Segredo de Confeiteira Europeia Vaza e Permite que Brasileiras Comuns Faturem R$5.000 ou Mais Com Doces de Natal
            </h1>

            <p className="text-center text-lg text-muted-foreground">
              Mais de 1.437 pessoas já estão usando esse método simples para criar uma fonte de renda extra para o final de ano, começando com o que já tem em casa.
            </p>

            <div className="flex items-center justify-center gap-4 border-t pt-6">
              <Avatar>
                {authorImage && <AvatarImage src={authorImage.imageUrl} alt="Maria da Paz" data-ai-hint={authorImage.imageHint} />}
                <AvatarFallback>MP</AvatarFallback>
              </Avatar>
              <div className="flex-grow">
                <p className="font-semibold text-foreground">Por Maria da Paz</p>
                <p className="text-sm text-muted-foreground">Especialista em Confeitaria Festiva</p>
              </div>
              <div className="hidden sm:flex ml-auto text-sm text-muted-foreground items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{staticDate}</span>
              </div>
            </div>

            <VslPlayer />
          </div>

          <CommentSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}
