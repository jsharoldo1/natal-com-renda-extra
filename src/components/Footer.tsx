
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="bg-black text-gray-400 py-6">
        <div className="container mx-auto px-4 text-center text-sm">
            <p>&copy; {currentYear} All rights reserved</p>
        </div>
      </footer>
    );
};

export default Footer;
