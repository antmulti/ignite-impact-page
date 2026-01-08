import { TrendingDown, Users, Target, DollarSign } from "lucide-react";

const metrics = [
  {
    icon: TrendingDown,
    value: "-68%",
    label: "Custo por Lead",
    description: "Redução média no CPL",
  },
  {
    icon: Users,
    value: "3.5x",
    label: "Taxa de Conversão",
    description: "Aumento médio em vendas",
  },
  {
    icon: Target,
    value: "< 2h",
    label: "Tempo de Resposta",
    description: "Média após otimização",
  },
  {
    icon: DollarSign,
    value: "412%",
    label: "ROI Médio",
    description: "Retorno sobre investimento",
  },
];

const ResultsSection = () => {
  return (
    <section id="resultados" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-pixel text-xs text-primary mb-4 tracking-wider">
            {'>'} PROVA SOCIAL
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Resultados que{' '}
            <span className="text-gradient-ignite">falam por si</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Métricas reais de clientes que aplicaram o Método Ignite em seus negócios.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="relative group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 text-center"
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <metric.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Value */}
                <p className="text-4xl font-bold text-gradient-ignite mb-1">
                  {metric.value}
                </p>

                {/* Label */}
                <p className="font-medium text-foreground mb-1">
                  {metric.label}
                </p>

                {/* Description */}
                <p className="text-sm text-muted-foreground">
                  {metric.description}
                </p>
              </div>

              {/* Pixel Corner */}
              <div className="absolute bottom-2 right-2">
                <div className="w-1 h-1 bg-primary/50" />
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial/Case Studies Placeholder */}
        <div className="max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl bg-card border border-border">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
                <span className="font-pixel text-xs text-primary">CASE EM DESTAQUE</span>
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                Loja de Veículos Seminovos
              </h3>
              
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                "Em 90 dias, reduzimos o custo por lead em 68% e aumentamos as vendas em 3.5x. 
                O diferencial foi a otimização do atendimento que fizeram junto com a gestão de tráfego."
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary">
                  <span className="text-muted-foreground">Investimento:</span>
                  <span className="text-foreground font-medium">R$ 15k/mês</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary">
                  <span className="text-muted-foreground">Faturamento:</span>
                  <span className="text-primary font-medium">+R$ 180k/mês</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Client Logos Placeholder */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-6">Empresas que confiam na Ignite Digital</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <div 
                key={index}
                className="w-24 h-12 rounded-lg bg-muted/50 border border-border flex items-center justify-center"
              >
                <span className="font-pixel text-[8px] text-muted-foreground">LOGO</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
