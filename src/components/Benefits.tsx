import { CheckCircle, Clock, DollarSign, Target } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Target,
      title: "Clareza absoluta sobre seus próximos passos",
      description: "Seja para a carreira ou para um negócio, você sairá sabendo exatamente o que fazer"
    },
    {
      icon: CheckCircle,
      title: "Estratégias práticas baseadas em experiência real",
      description: "No mercado de IA e Big Data, com resultados comprovados em grandes empresas"
    },
    {
      icon: Clock,
      title: "Economia de tempo e dinheiro",
      description: "Evitando os erros mais comuns que travam profissionais e empreendedores iniciantes"
    },
    {
      icon: DollarSign,
      title: "Plano personalizado para sair da estagnação",
      description: "E começar a gerar resultados concretos nos próximos 12 meses"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            O que você vai conquistar em apenas 1 hora
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma decisão errada pode custar meses de atraso ou milhares de reais desperdiçados. 
            Com 1 hora, você evita esse preço invisível e já sai no caminho certo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-card group-hover:shadow-premium transition-all duration-300">
                <benefit.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-card rounded-2xl p-8 max-w-4xl mx-auto border border-border shadow-card">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              O custo real de não agir agora
            </h3>
            <p className="text-lg text-muted-foreground">
              Enquanto você hesita, o mercado de IA e dados está crescendo exponencialmente. 
              Cada mês perdido é uma oportunidade que não volta. Esta mentoria não é um gasto, 
              é um investimento que se paga nas primeiras decisões certas que você tomar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;