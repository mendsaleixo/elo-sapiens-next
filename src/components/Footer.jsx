// src/components/Footer.jsx
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-nevoa text-pedra py-6 mt-12 border-t border-pedra/30">
      <div className="container mx-auto max-w-7xl text-center">
        <p>&copy; {currentYear} Elo Sapiens - Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
