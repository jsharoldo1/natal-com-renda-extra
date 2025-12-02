import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="bg-gray-100 text-gray-600 py-8">
        <div className="container mx-auto px-4 text-center text-sm">
          <div className="flex justify-center gap-4 mb-4">
            <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-primary">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-primary">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" aria-label="YouTube" className="text-gray-500 hover:text-primary">
              <Youtube className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-primary">
              <Twitter className="h-6 w-6" />
            </a>
          </div>
          <p className="mb-2">Receitas de Natal Lucrativas</p>
          <p>&copy; {currentYear} All rights reserved</p>
        </div>
      </footer>
    );
};

export default Footer;
