import { Building, GraduationCap, Award, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Por que Luana Carvalho?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A mesma visão estratégica que guia a formação de profissionais de elite 
            é a que você terá acesso direto.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-8">
              <Card className="p-6 bg-card shadow-card border-0">
                <div className="flex items-center mb-4">
                  <Building className="h-8 w-8 text-primary mr-4" />
                  <h3 className="text-xl font-semibold text-foreground">Fundadora da Nexaigen</h3>
                </div>
                <p className="text-muted-foreground">
                  Já ajudou instituições financeiras, seguradoras e cooperativas a estruturarem 
                  IA e Big Data com resultados reais e mensuráveis.
                </p>
              </Card>

              <Card className="p-6 bg-card shadow-card border-0">
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-8 w-8 text-accent mr-4" />
                  <h3 className="text-xl font-semibold text-foreground">Fundadora da Academia dos Dados</h3>
                </div>
                <p className="text-muted-foreground">
                  Plataforma de formação que desenvolve profissionais de elite em dados e IA, 
                  com metodologia prática e orientada a resultados.
                </p>
              </Card>

              <Card className="p-6 bg-card shadow-card border-0">
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 text-success mr-4" />
                  <h3 className="text-xl font-semibold text-foreground">Experiência Comprovada</h3>
                </div>
                <p className="text-muted-foreground">
                  Anos de experiência no mercado, com track record comprovado em implementações 
                  de IA e formação de profissionais de alta performance.
                </p>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-card rounded-2xl p-8 border border-border shadow-premium">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Autoridade Reconhecida no Mercado
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Users className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Projetos Empresariais</h4>
                  <p className="text-muted-foreground">
                    Implementação de soluções de IA e Big Data em grandes corporações, 
                    gerando valor mensurável e transformação digital real.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <GraduationCap className="h-6 w-6 text-accent mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Formação de Talentos</h4>
                  <p className="text-muted-foreground">
                    Desenvolveu metodologia única para acelerar a carreira de profissionais 
                    em dados e IA, com foco em aplicação prática.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Award className="h-6 w-6 text-success mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Visão Estratégica</h4>
                  <p className="text-muted-foreground">
                    Capacidade única de traduzir tendências tecnológicas em oportunidades 
                    concretas de negócio e carreira.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;