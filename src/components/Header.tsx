import { Search, Menu, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  return (
    <header className="bg-white text-gray-800 shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-4">
             <a href="#" className="flex items-center gap-2 group">
              <span className="text-3xl font-bold text-primary font-headline tracking-tighter">
                Receitas de Natal Lucrativas
              </span>
            </a>
          </div>
          
          <div className="flex items-center gap-2">
            <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Abrir Menu">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="bg-white text-gray-800 w-[280px]">
                  <nav className="flex flex-col gap-6 mt-8 text-lg p-4">
                      <a href="#" className="hover:text-primary transition-colors font-semibold">Cadastre-se</a>
                      <a href="#" className="hover:text-primary transition-colors font-semibold">Login</a>
                  </nav>
                </SheetContent>
              </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
