import { Users, Briefcase, TrendingUp, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

const Audiences = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Esta mentoria foi criada para duas audiências principais
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Orientação estratégica personalizada para acelerar sua jornada, seja na carreira ou no empreendedorismo
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Profissionais */}
          <Card className="p-8 bg-card shadow-card hover:shadow-premium transition-all duration-300 border-0">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-primary rounded-full p-3 mr-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Profissionais em Transição
              </h3>
            </div>
            <p className="text-lg text-muted-foreground mb-6">
              Profissionais que querem entrar na área de Dados e Inteligência Artificial
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <Target className="h-5 w-5 text-accent mt-1 mr-3 flex-shrink-0" />
                <p className="text-foreground">
                  Orientação sobre como iniciar na carreira, quais trilhas seguir e como se diferenciar no mercado
                </p>
              </div>
              <div className="flex items-start">
                <TrendingUp className="h-5 w-5 text-accent mt-1 mr-3 flex-shrink-0" />
                <p className="text-foreground">
                  Direcionamento prático para acelerar sua evolução sem perder tempo em cursos ou caminhos aleatórios
                </p>
              </div>
            </div>
          </Card>

          {/* Empreendedores */}
          <Card className="p-8 bg-card shadow-card hover:shadow-premium transition-all duration-300 border-0">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-accent rounded-full p-3 mr-4">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Empreendedores Visionários
              </h3>
            </div>
            <p className="text-lg text-muted-foreground mb-6">
              Empreendedores que querem criar um negócio de tecnologia, mas não sabem por onde começar
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <Target className="h-5 w-5 text-accent mt-1 mr-3 flex-shrink-0" />
                <p className="text-foreground">
                  Estruturação da ideia em um modelo viável e sustentável
                </p>
              </div>
              <div className="flex items-start">
                <TrendingUp className="h-5 w-5 text-accent mt-1 mr-3 flex-shrink-0" />
                <p className="text-foreground">
                  Clareza sobre oportunidades, riscos e primeiros passos para transformar o conceito em projeto real
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Audiences;