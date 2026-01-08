import { Button } from "@/components/ui/button";
import { Flame, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative">
            <Flame className="w-8 h-8 text-primary transition-all duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="font-bold text-xl text-foreground">
            Ignite<span className="text-primary">Digital</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#metodo" className="text-muted-foreground hover:text-primary transition-colors">
            Método
          </a>
          <a href="#sobre" className="text-muted-foreground hover:text-primary transition-colors">
            Sobre
          </a>
          <a href="#resultados" className="text-muted-foreground hover:text-primary transition-colors">
            Resultados
          </a>
          <Button 
            variant="ignite" 
            size="lg"
            asChild
          >
            <a href="https://wa.me/5500000000000?text=Olá! Quero uma análise do meu negócio" target="_blank" rel="noopener noreferrer">
              Fale Conosco
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-4 animate-fade-in">
          <nav className="flex flex-col gap-4">
            <a 
              href="#metodo" 
              className="text-muted-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Método
            </a>
            <a 
              href="#sobre" 
              className="text-muted-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </a>
            <a 
              href="#resultados" 
              className="text-muted-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Resultados
            </a>
            <Button variant="ignite" size="lg" className="w-full" asChild>
              <a href="https://wa.me/5500000000000?text=Olá! Quero uma análise do meu negócio" target="_blank" rel="noopener noreferrer">
                Fale Conosco
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
