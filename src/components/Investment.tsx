import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Calendar, CreditCard, MessageCircle } from "lucide-react";

const Investment = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Investimento e Como Funciona
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Um investimento que se paga nas primeiras decisões certas que você tomar
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Pricing Card */}
          <Card className="p-8 bg-gradient-card border border-border shadow-premium text-center">
            <div className="mb-8">
              <div className="text-6xl font-bold text-foreground mb-2">R$ 1.000</div>
              <div className="text-xl text-muted-foreground">por 1 hora de mentoria</div>
            </div>
            
            <div className="space-y-4 mb-8 text-left">
              <div className="flex items-center">
                <Check className="h-5 w-5 text-success mr-3" />
                <span className="text-foreground">1 hora de mentoria individualizada</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-success mr-3" />
                <span className="text-foreground">Plano estratégico personalizado para 12 meses</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-success mr-3" />
                <span className="text-foreground">Análise de oportunidades específicas do seu perfil</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-success mr-3" />
                <span className="text-foreground">Orientação sobre próximos passos práticos</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-success mr-3" />
                <span className="text-foreground">Evite anos de tentativas e erros custosos</span>
              </div>
            </div>

            <div className="bg-accent/10 rounded-lg p-4 mb-8">
              <p className="text-accent font-semibold">
                💰 Pagamento via Pix ou PayPal antes do agendamento
              </p>
            </div>

            <Button variant="hero" size="lg" className="w-full text-lg py-4">
              Quero Agendar Minha Mentoria
            </Button>
          </Card>

          {/* Process */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Como Funciona o Processo
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-gradient-primary rounded-full p-3 mr-4 flex-shrink-0">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">1. Entre em Contato</h4>
                  <p className="text-muted-foreground mb-2">
                    Solicite sua agenda através do email ou WhatsApp
                  </p>
                  <div className="bg-secondary rounded-lg p-3">
                    <p className="text-foreground font-medium">📧 luana@nexaigen.com.br</p>
                    <p className="text-foreground font-medium">📱 +55 (44) 3142-4835</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gradient-accent rounded-full p-3 mr-4 flex-shrink-0">
                  <CreditCard className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">2. Realize o Pagamento</h4>
                  <p className="text-muted-foreground">
                    Confirme sua vaga com o pagamento via Pix ou PayPal. 
                    Isso garante que sua mentoria seja reservada exclusivamente para você.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gradient-primary rounded-full p-3 mr-4 flex-shrink-0">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">3. Receba o Link da Chamada</h4>
                  <p className="text-muted-foreground">
                    Após a confirmação do pagamento, você receberá todas as informações 
                    para a sua sessão de mentoria por email ou WhatsApp.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-card rounded-xl p-6 border border-border">
              <h4 className="text-lg font-semibold text-foreground mb-3">
                ⚡ Vagas Limitadas
              </h4>
              <p className="text-muted-foreground">
                Apenas 5 vagas individuais de mentoria por mês. Depois disso, a agenda fecha. 
                Meu foco principal está na Nexaigen e Academia dos Dados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investment;