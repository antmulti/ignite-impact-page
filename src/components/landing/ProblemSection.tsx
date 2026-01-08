import { AlertTriangle, Clock, DollarSign, UserX } from "lucide-react";

const problems = [
  {
    icon: UserX,
    title: "Leads frios que só perguntam preço",
    description: "Sua caixa de entrada está cheia de curiosos, não compradores qualificados prontos para fechar.",
  },
  {
    icon: Clock,
    title: "Equipe de vendas que demora a responder",
    description: "Leads quentes esfriam em minutos. Uma resposta lenta é uma venda perdida para a concorrência.",
  },
  {
    icon: DollarSign,
    title: "Investimento que não retorna ao caixa",
    description: "Você gasta em anúncios, recebe leads, mas no final do mês o resultado não aparece na conta.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Pixel Art Decoration */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-destructive/10 border border-destructive/30 mb-6">
            <AlertTriangle className="w-8 h-8 text-destructive" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Cansado de agências que entregam{' '}
            <span className="text-destructive">leads, mas não vendas</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            O tráfego pago é só o começo. Se o processo de vendas não funciona, todo investimento vai pelo ralo.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="group relative p-6 rounded-xl bg-card border border-border hover:border-destructive/50 transition-all duration-300"
            >
              {/* Pixel Corner */}
              <div className="absolute top-0 right-0 w-4 h-4">
                <div className="absolute top-0 right-0 w-2 h-2 bg-destructive/50" />
                <div className="absolute top-2 right-0 w-2 h-2 bg-destructive/30" />
                <div className="absolute top-0 right-2 w-2 h-2 bg-destructive/30" />
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-destructive/10 border border-destructive/30 flex items-center justify-center group-hover:bg-destructive/20 transition-colors">
                  <problem.icon className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-destructive transition-colors">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {problem.description}
                  </p>
                </div>
              </div>

              {/* Pixel Index */}
              <div className="absolute bottom-4 right-4 font-pixel text-xs text-muted-foreground/30">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <p className="text-center mt-12 text-muted-foreground">
          Se você se identificou com algum desses problemas,{' '}
          <span className="text-primary font-medium">está na hora de mudar de abordagem</span>.
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;
