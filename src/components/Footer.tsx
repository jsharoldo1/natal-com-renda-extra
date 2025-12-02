import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="bg-gray-200 text-gray-700 pt-12 mt-12">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-primary font-headline tracking-tighter mb-4">Receitas de Natal Lucrativas</h2>
            <div className="flex justify-center gap-4 mb-8">
                <a href="#" className="text-gray-500 hover:text-primary"><Facebook /></a>
                <a href="#" className="text-gray-500 hover:text-primary"><Instagram /></a>
                <a href="#" className="text-gray-500 hover:text-primary"><Youtube /></a>
                <a href="#" className="text-gray-500 hover:text-primary"><Twitter /></a>
            </div>

            <div className="text-xs text-gray-500 py-6 border-t border-gray-300">
              <p>&copy; {currentYear} Receitas de Natal Lucrativas. Todos os direitos reservados.</p>
              <p className="mt-2">Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site. Este site é um projeto de demonstração e não tem afiliação com o TudoGostoso.</p>
            </div>
        </div>
      </footer>
    );
};

export default Footer;
