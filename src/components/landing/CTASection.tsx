import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, Flame } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      {/* Animated Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[200px] animate-pulse-glow" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/30 mb-8 animate-glow">
            <Flame className="w-10 h-10 text-primary" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Pronto para dar a{' '}
            <span className="text-gradient-ignite">partida</span>{' '}
            nos seus resultados?
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Agende uma análise gratuita do seu negócio e descubra como o Método Ignite pode 
            transformar seus anúncios em vendas reais.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="ignite" size="xl" className="w-full sm:w-auto" asChild>
              <a 
                href="https://wa.me/5500000000000?text=Olá! Quero uma análise gratuita do meu negócio" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                Falar com especialista no WhatsApp agora
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>

          {/* Guarantee */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card border border-border">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Análise gratuita • Sem compromisso • Resposta em até 2h
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
