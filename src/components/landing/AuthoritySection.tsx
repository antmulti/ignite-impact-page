import { CheckCircle, Linkedin, Instagram } from "lucide-react";
import andreVictor from "@/assets/andre-victor.jpg";

const credentials = [
  "Especialista em estratégias digitais de alta performance",
  "Foco em resolver gargalos operacionais que agências comuns ignoram",
  "Experiência comprovada com negócios de ticket médio e alto",
  "Abordagem integrada: tráfego + processos + vendas",
];

const AuthoritySection = () => {
  return (
    <section id="sobre" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <div className="relative">
              <div className="relative max-w-sm mx-auto lg:mx-0">
                {/* Pixel Border Frame */}
                <div className="absolute -inset-4 border-2 border-dashed border-primary/30 rounded-2xl" />
                
                {/* Main Image */}
                <div className="relative rounded-xl overflow-hidden border-2 border-primary/50 shadow-[0_0_40px_hsl(var(--primary)/0.2)]">
                  <img 
                    src={andreVictor} 
                    alt="André Victor - CEO Ignite Digital"
                    className="w-full aspect-[4/5] object-cover"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  
                  {/* Name Badge */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-card/90 backdrop-blur-sm border border-border rounded-lg p-3">
                      <p className="font-bold text-lg">André Victor</p>
                      <p className="text-sm text-primary">CEO & Estrategista Digital</p>
                    </div>
                  </div>
                </div>

                {/* Pixel Decoration */}
                <div className="absolute -bottom-2 -right-2 w-8 h-8">
                  <div className="w-2 h-2 bg-primary absolute bottom-0 right-0" />
                  <div className="w-2 h-2 bg-primary/60 absolute bottom-2 right-0" />
                  <div className="w-2 h-2 bg-primary/60 absolute bottom-0 right-2" />
                  <div className="w-2 h-2 bg-primary/30 absolute bottom-4 right-0" />
                  <div className="w-2 h-2 bg-primary/30 absolute bottom-0 right-4" />
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div>
              <span className="inline-block font-pixel text-xs text-primary mb-4 tracking-wider">
                {'>'} QUEM COMANDA
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Quem comanda a{' '}
                <span className="text-gradient-ignite">estratégia</span>
              </h2>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Na Ignite Digital, acreditamos que o sucesso de uma campanha não termina no clique. 
                É por isso que entramos na operação do cliente para resolver o que realmente impede 
                as vendas de acontecerem: atendimento lento, falta de CRM, scripts ineficientes.
              </p>

              {/* Credentials */}
              <div className="space-y-4 mb-8">
                {credentials.map((credential, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{credential}</span>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">Conecte-se:</span>
                <a 
                  href="https://instagram.com/ignitedigitalbr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
