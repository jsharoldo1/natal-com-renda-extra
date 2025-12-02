const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="bg-foreground text-background/70">
        <div className="container mx-auto px-4 py-8 text-center text-sm">
          <p>&copy; {currentYear} Receitas de Natal Lucrativas. Todos os direitos reservados.</p>
          <p className="mt-2">Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="hover:text-background">Termos de Uso</a>
            <a href="#" className="hover:text-background">Política de Privacidade</a>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
