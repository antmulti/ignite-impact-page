import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-card border-t border-border relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pixel-grid opacity-5" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center mb-4">
              <img 
                src={logo} 
                alt="Ignite Digital" 
                className="h-10 w-auto"
              />
            </a>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Tráfego pago de alta performance + consultoria de processos de vendas. 
              Transformamos anúncios em lucro real para o seu negócio.
            </p>
            <div className="flex items-center gap-3">
              <a 
                href="https://instagram.com/ignitedigitalbr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#metodo" className="text-muted-foreground hover:text-primary transition-colors">
                  Método Ignite
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#resultados" className="text-muted-foreground hover:text-primary transition-colors">
                  Resultados
                </a>
              </li>
              <li>
                <a href="https://wa.me/5500000000000" className="text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>(00) 00000-0000</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>contato@ignitedigital.com.br</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Atendimento 100% digital em todo Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Ignite Digital. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="font-pixel text-[8px] text-primary">▸▸▸</span>
            <span>@ignitedigitalbr</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
