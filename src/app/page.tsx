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
      <main className="flex-1 w-full container mx-auto px-4 py-8">
        <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-700">Bem-vindo ao Receitas de Natal Lucrativas! O seu portal de receitas para um fim de ano delicioso.</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                    <p className="font-bold text-primary animate-pulse text-lg text-center mb-4">
                        ATENÇÃO: ASSISTA O VÍDEO ANTES QUE SAIA DO AR!
                    </p>
                    <h2 className="font-headline text-3xl md:text-4xl font-bold text-center text-foreground leading-tight mb-4">
                        <span className="text-primary">URGENTE:</span> Segredo de Confeiteira Europeia Vaza e Permite que Brasileiras Comuns Faturem R$5.000 ou Mais Com Doces de Natal
                    </h2>
                    <p className="text-center text-lg text-muted-foreground mb-6">
                        Mais de 1.437 pessoas já estão usando esse método simples para criar uma fonte de renda extra para o final de ano, começando com o que já tem em casa.
                    </p>
                </div>
                <VslPlayer />
             </div>
             <CommentSection />
          </div>

          <aside className="space-y-8">
            <Card>
                <div className="p-6 bg-amber-100 rounded-lg text-center">
                    <h3 className="text-xl font-bold text-orange-600 mb-2">TudoGostoso 20 ANOS</h3>
                    <p className="text-gray-700 mb-4">CLIQUE E CONFIRA</p>
                    <div className='flex justify-center items-center gap-4'>
                        <span className="text-5xl">🎉</span>
                        <span className="text-5xl">🎂</span>
                    </div>
                </div>
            </Card>
            <div className="flex items-center justify-center gap-4 border-t border-b py-4">
                <Avatar className="w-16 h-16">
                    {authorImage && <AvatarImage src={authorImage.imageUrl} alt="Maria da Paz" data-ai-hint={authorImage.imageHint} />}
                    <AvatarFallback>MP</AvatarFallback>
                </Avatar>
                <div>
                    <p className="font-semibold text-foreground">Por Maria da Paz</p>
                    <p className="text-sm text-muted-foreground">Especialista em Confeitaria Festiva</p>
                </div>
            </div>
             <div className="flex sm:flex text-sm text-muted-foreground items-center gap-2 justify-center">
                <Clock className="w-4 h-4" />
                <span>{staticDate}</span>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
