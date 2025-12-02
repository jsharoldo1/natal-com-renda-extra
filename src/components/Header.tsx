import { Search, Menu, User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
    { name: 'Bolos e Tortas', href: '#' },
    { name: 'Carnes', href: '#' },
    { name: 'Aves', href: '#' },
    { name: 'Peixes', href: '#' },
    { name: 'Saladas', href: '#' },
    { name: 'Sobremesas', href: '#' },
    { name: 'Bebidas', href: '#' },
];


const Header = () => {
  return (
    <header className="bg-white text-gray-800 shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-4">
            <div className="md:hidden">
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
                      <div className='border-t border-gray-200 pt-6 mt-4 space-y-4'>
                        {navLinks.map(link => (
                            <a key={link.name} href={link.href} className="block hover:text-primary transition-colors">{link.name}</a>
                        ))}
                      </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
            <a href="#" className="flex items-center gap-2 group">
              <span className="text-3xl font-bold text-primary font-headline tracking-tighter">
                TudoGostoso
              </span>
            </a>
          </div>

          <div className="hidden lg:flex flex-1 justify-center px-8">
            <div className="relative w-full max-w-2xl">
              <Input
                type="search"
                placeholder="Procure uma receita, um ingrediente..."
                className="bg-gray-100 border-gray-300 h-12 text-base focus-visible:ring-primary pr-12"
              />
              <Button size="icon" className="absolute right-1 top-1/2 -translate-y-1/2 h-10 w-10 bg-primary hover:bg-primary/90">
                 <Search className="h-5 w-5 text-white" />
              </Button>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <nav className="hidden md:flex items-center gap-4 text-sm font-semibold">
                <a href="#" className="hover:text-primary transition-colors">Cadastre-se</a>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">Login</Button>
            </nav>
          </div>
        </div>
      </div>
       <div className="bg-white hidden lg:block border-t border-gray-200">
        <div className="container mx-auto px-4">
            <nav className="flex justify-center items-center gap-x-8 h-12 text-base font-semibold">
                {navLinks.map(link => (
                    <a key={link.name} href={link.href} className="hover:text-primary transition-colors">{link.name}</a>
                ))}
            </nav>
        </div>
       </div>
    </header>
  );
};

export default Header;
