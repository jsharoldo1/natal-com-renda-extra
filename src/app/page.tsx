import Header from '@/components/Header';
import VslPlayer from '@/components/VslPlayer';
import CommentSection from '@/components/CommentSection';
import Footer from '@/components/Footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Home() {

  const logosImage = PlaceHolderImages.find(p => p.id === 'logos');

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1 w-full max-w-4xl container mx-auto px-4 py-8">
        <div className="text-center mb-4">
          <h1 className="font-bold text-red-600 text-lg text-center bg-yellow-200 py-2">
            THIS VIDEO WILL NO LONGER BE AVAILABLE IN 27:36
          </h1>
        </div>
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center text-black leading-tight mb-4">
          <span className="text-red-600">URGENT:</span> 3,000-year-old manuscript reveals King David's "Secret Chant" for Wealth that the elites don't want you to hear
        </h2>
        <p className="text-center text-lg text-gray-600 mb-6">
          Over 54,000 ordinary people have activated unexpected financial blessings in their lives with this 2-minute morning ritual
        </p>

        <div className="text-center text-sm text-gray-600 mb-4">
          <p>By <strong>Daniel</strong> - 12/09/2025</p>
        </div>
        
        {logosImage && (
            <div className="flex justify-center my-6 px-4">
                <Image
                    src={logosImage.imageUrl}
                    alt="Logos"
                    width={500}
                    height={30}
                    className="max-w-full h-auto"
                    data-ai-hint={logosImage.imageHint}
                />
            </div>
        )}
        

        <VslPlayer />

        <div className="my-6">
            <a href="https://pay.vitalprotocol.online/checkout?product=c06ed75a-8f77-11f0-b47c-46da4690ad53&utm_source=organic&utm_campaign=&utm_medium=&utm_content=&utm_term=" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="w-full md:w-auto md:max-w-md mx-auto flex items-center justify-center gap-3 text-lg md:text-xl py-8 font-bold pulsing-button bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-lg"
              >
                I WANT MY MEMORY PULSE NOW
              </Button>
            </a>
          </div>

        <CommentSection />
      </main>
      <Footer />
    </div>
  );
}
