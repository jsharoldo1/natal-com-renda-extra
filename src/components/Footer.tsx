const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="bg-gray-100 text-gray-600 py-8">
        <div className="container mx-auto px-4 text-center text-sm">
            <p>&copy; {currentYear} All rights reserved</p>
        </div>
      </footer>
    );
};

export default Footer;
