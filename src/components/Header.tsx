import Image from 'next/image';
import { Search, UserCircle, Menu } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  const navItems = [
    { name: 'Bolos e Tortas' },
    { name: 'Carnes' },
    { name: 'Aves' },
    { name: 'Peixes e Frutos do Mar' },
    { name: 'Saladas' },
    { name: 'Massas' },
    { name: 'Sobremesas' },
    { name: 'Todas as Receitas' },
  ];

  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between lg:justify-center h-24 relative lg:gap-4">
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Abrir Menu">
                  <Menu className="h-6 w-6 text-gray-600" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-white text-gray-800 w-[280px]">
                <nav className="flex flex-col gap-4 mt-8 text-base p-4">
                  <span className="font-semibold cursor-pointer border-b pb-2">Login</span>
                  <span className="font-semibold cursor-pointer border-b pb-2">Cadastre-se</span>
                  {navItems.map((item) => (
                    <span key={item.name} className="cursor-pointer border-b pb-2">
                      {item.name}
                    </span>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          <div className="flex-shrink-0">
            <Image
              src="https://i.postimg.cc/k48zD98V/Design-sem-nome-(5).png"
              alt="TudoGostoso Logo"
              width={180}
              height={45}
              className="h-11 w-auto"
            />
          </div>

          <div className="hidden lg:flex flex-1 items-center justify-center max-w-xl">
            <div className="relative w-full">
              <Input
                type="search"
                placeholder="Procure uma receita, um ingrediente..."
                className="bg-white border-2 border-orange-200 rounded-full pl-5 pr-28 h-12 w-full focus:ring-primary focus:border-primary"
              />
              <Button
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-primary text-white rounded-full h-10 px-6 flex items-center justify-center cursor-pointer hover:bg-primary/90"
              >
                Procurar
              </Button>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
             <Button variant="ghost" size="icon" aria-label="Search" className="lg:hidden">
                <Search className="h-6 w-6 text-gray-600" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden lg:flex">
                <UserCircle className="h-8 w-8 text-gray-400" />
            </Button>
          </div>
        </div>
      </div>
      <nav className="hidden lg:flex justify-center border-t py-2">
        <ul className="flex items-center space-x-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <span className="text-sm font-bold uppercase cursor-pointer text-gray-600 hover:text-primary transition-colors">
                {item.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
