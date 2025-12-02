import { Search, Menu, UtensilsCrossed } from 'lucide-react';
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
    <header className="bg-primary text-primary-foreground shadow-lg sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="flex items-center gap-2 group">
            <UtensilsCrossed className="h-7 w-7 sm:h-8 sm:w-8 group-hover:animate-pulse" />
            <span className="text-lg sm:text-xl md:text-2xl font-bold font-headline tracking-tight whitespace-nowrap group-hover:text-yellow-300 transition-colors">
              Receitas de Natal
            </span>
          </a>

          <div className="hidden lg:flex flex-1 justify-center px-8">
            <div className="relative w-full max-w-lg">
              <Input
                type="search"
                placeholder="O que você quer cozinhar hoje?"
                className="bg-white/90 text-gray-800 placeholder:text-gray-500 border-0 h-10 focus-visible:ring-offset-primary focus-visible:ring-white pr-10"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <nav className="hidden md:flex items-center gap-4 text-sm font-semibold">
                <a href="#" className="hover:text-accent transition-colors">Cadastre-se</a>
                <a href="#" className="hover:text-accent transition-colors">Login</a>
            </nav>
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Abrir Menu">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-primary text-primary-foreground w-[250px]">
                  <nav className="flex flex-col gap-6 mt-8 text-lg p-4">
                      <a href="#" className="hover:text-accent transition-colors">Cadastre-se</a>
                      <a href="#" className="hover:text-accent transition-colors">Login</a>
                      <a href="#" className="hover:text-accent transition-colors">Enviar sua receita</a>
                      <div className='border-t border-primary-foreground/20 pt-6 mt-4 space-y-4'>
                        {navLinks.slice(0,4).map(link => (
                            <a key={link.name} href={link.href} className="block hover:text-accent transition-colors">{link.name}</a>
                        ))}
                      </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
       <div className="bg-primary/95 hidden lg:block backdrop-blur-sm border-t border-primary-foreground/20">
        <div className="container mx-auto px-4">
            <nav className="flex justify-center items-center gap-x-6 xl:gap-x-8 h-10 text-sm font-semibold">
                {navLinks.map(link => (
                    <a key={link.name} href={link.href} className="hover:text-accent transition-colors">{link.name}</a>
                ))}
            </nav>
        </div>
       </div>
    </header>
  );
};

export default Header;
