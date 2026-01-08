import { Zap, Settings, Rocket } from "lucide-react";

const pillars = [
  {
    icon: Zap,
    title: "Ignição",
    subtitle: "PILAR 1",
    description: "Atração de leads qualificados via Meta Ads e Google Ads. Campanhas otimizadas para trazer pessoas prontas para comprar, não curiosos.",
    color: "primary",
    pixelIcon: "⚡",
  },
  {
    icon: Settings,
    title: "Flow",
    subtitle: "PILAR 2",
    description: "Otimização do processo de atendimento e CRM. Respostas rápidas, scripts eficientes e acompanhamento que não deixa nenhum lead escapar.",
    color: "accent",
    pixelIcon: "⚙️",
  },
  {
    icon: Rocket,
    title: "Scale",
    subtitle: "PILAR 3",
    description: "Análise de dados para reduzir custo por venda e escalar. Métricas claras, decisões baseadas em dados, crescimento previsível.",
    color: "primary",
    pixelIcon: "🚀",
  },
];

const MethodSection = () => {
  return (
    <section id="metodo" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-pixel text-xs text-primary mb-4 tracking-wider">
            {'>'} COMO FUNCIONA
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Nosso método de{' '}
            <span className="text-gradient-ignite">3 pilares</span>{' '}
            para acelerar resultados
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma abordagem completa que vai além do tráfego: atraímos, convertemos e escalamos.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Connection Line (Desktop) */}
              {index < pillars.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}

              <div className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 h-full group-hover:shadow-[0_0_40px_hsl(var(--primary)/0.1)]">
                {/* Pixel Corner Decoration */}
                <div className="absolute top-0 left-0 w-6 h-6">
                  <div className="absolute top-0 left-0 w-2 h-2 bg-primary" />
                  <div className="absolute top-2 left-0 w-2 h-2 bg-primary/60" />
                  <div className="absolute top-0 left-2 w-2 h-2 bg-primary/60" />
                  <div className="absolute top-4 left-0 w-2 h-2 bg-primary/30" />
                  <div className="absolute top-0 left-4 w-2 h-2 bg-primary/30" />
                </div>

                {/* Subtitle */}
                <span className="inline-block font-pixel text-[10px] text-primary/70 mb-4 tracking-wider">
                  {pillar.subtitle}
                </span>

                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <pillar.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>

                {/* Index */}
                <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center">
                  <span className="font-pixel text-xs text-primary">0{index + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-2">
            Juntos, esses pilares criam um{' '}
            <span className="text-foreground font-medium">sistema de vendas completo</span>.
          </p>
          <p className="text-primary font-medium">
            Nada de peças soltas. Tudo integrado para maximizar seu ROI.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
