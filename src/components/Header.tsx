import Image from 'next/image';
import { Search, UserCircle, Menu } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  const navItems = [
    { name: 'CEIA DE NATAL', highlight: true },
    { name: 'CANAIS ESPECIAIS' },
    { name: 'NOTÍCIAS' },
    { name: 'BOLOS E TORTAS' },
    { name: 'CARNES' },
    { name: 'AVES' },
    { name: 'PEIXES E FRUTOS DO MAR' },
    { name: 'SALADAS E MOLHOS' },
    { name: 'SOPAS' },
    { name: 'MASSAS' },
    { name: 'BEBIDAS' },
    { name: 'DOCES E SOBREMESAS' },
    { name: 'LANCHES' },
    { name: 'ALIMENTAÇÃO SAUDÁVEL' },
    { name: 'TODAS AS RECEITAS' },
  ];

  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-24 relative lg:gap-8">
          <div className="absolute left-4 lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <div role="button" aria-label="Abrir Menu" className="text-gray-600 cursor-pointer">
                  <Menu className="h-6 w-6" />
                </div>
              </SheetTrigger>
              <SheetContent side="left" className="bg-white text-gray-800 w-[280px]">
                <nav className="flex flex-col gap-6 mt-8 text-lg p-4">
                  <span className="hover:text-primary transition-colors font-semibold cursor-pointer">
                    Cadastre-se
                  </span>
                  <span className="hover:text-primary transition-colors font-semibold cursor-pointer">
                    Login
                  </span>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          <div className="flex-shrink-0">
            <Image
              src="https://i.postimg.cc/k48zD98V/Design-sem-nome-(5).png"
              alt="TudoGostoso Logo"
              width={200}
              height={50}
              className="h-12 w-auto"
            />
          </div>

          <div className="hidden lg:flex flex-1 items-center justify-center max-w-lg">
            <div className="relative w-full">
              <Input
                type="search"
                placeholder="Procure uma receita, um ingrediente..."
                className="bg-white border-2 border-orange-200 rounded-full pl-4 pr-24 h-12 w-full focus:ring-primary focus:border-primary"
              />
              <div
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-primary text-white rounded-full h-10 px-6 flex items-center justify-center cursor-pointer"
              >
                Procurar
              </div>
            </div>
          </div>
          
          <div className="absolute right-4 flex items-center lg:static lg:right-auto">
             <div className="flex items-center">
                <div role="button" aria-label="Search" className="lg:hidden text-gray-600 cursor-pointer">
                    <Search className="h-6 w-6" />
                </div>
                <UserCircle className="h-8 w-8 text-gray-400 ml-4 hidden lg:block" />
            </div>
          </div>
        </div>
      </div>
      <nav className="hidden lg:flex justify-center border-t py-2">
        <ul className="flex items-center space-x-4">
          {navItems.map((item, index) => (
            <li key={index}>
              <span
                className={`text-xs font-bold uppercase cursor-pointer ${
                  item.highlight ? 'text-primary' : 'text-gray-600'
                }`}
              >
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
