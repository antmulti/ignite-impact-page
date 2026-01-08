import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      </div>

      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 bg-pixel-grid opacity-20" />

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-[100px] animate-pulse-glow" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-primary font-medium">Agência de Performance + Consultoria de Vendas</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Transformamos anúncios em{' '}
            <span className="text-gradient-ignite">lucro real</span>.{' '}
            <br className="hidden md:block" />
            Sem desculpas, apenas{' '}
            <span className="relative inline-block">
              estoque girando
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path d="M2 6C50 2 150 2 198 6" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>.
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Na Ignite Digital, não entregamos apenas cliques. Unimos{' '}
            <span className="text-foreground font-medium">tráfego pago</span> com{' '}
            <span className="text-foreground font-medium">otimização de processos de vendas</span>{' '}
            para o seu negócio escalar de verdade.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button variant="ignite" size="xl" className="w-full sm:w-auto" asChild>
              <a 
                href="https://wa.me/5500000000000?text=Olá! Quero uma análise do meu negócio" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Quero uma análise do meu negócio
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            
            <Button variant="ignite-outline" size="xl" className="w-full sm:w-auto" asChild>
              <a href="#metodo">
                <Play className="w-5 h-5" />
                Ver como funciona
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-border/50 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-muted-foreground text-sm mb-4">Especialistas em negócios de alto ticket</p>
            <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground/60">
              <div className="flex items-center gap-2">
                <span className="font-pixel text-xs text-primary">▸</span>
                <span>Lojas de Veículos</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-pixel text-xs text-primary">▸</span>
                <span>Clínicas Premium</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-pixel text-xs text-primary">▸</span>
                <span>Serviços de Alto Valor</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
