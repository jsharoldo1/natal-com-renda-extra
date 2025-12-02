import { Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  return (
    <header className="bg-red-700 text-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" aria-label="Search" className="text-white">
              <Search className="h-6 w-6" />
            </Button>
          </div>
          
          <div className="absolute left-1/2 -translate-x-1/2">
            <a href="#" className="flex items-center gap-2 group">
              <span className="text-xl font-bold font-headline tracking-tighter text-white">
                Business
              </span>
            </a>
          </div>
          
          <div className="flex items-center gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Abrir Menu" className="text-white">
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
