import { Button } from "@/components/ui/button";
import { Clock, ArrowRight, Zap } from "lucide-react";
import techBackground from "@/assets/tech-background.jpg";

const CTA = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={techBackground}
          alt="Tech Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Clock className="h-8 w-8 text-white mr-3" />
            <span className="text-xl text-white/90 font-medium">Não espere mais</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Pare de desperdiçar tempo em{" "}
            <span className="text-accent-glow">tentativas aleatórias</span>
          </h2>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Enquanto você hesita, o mercado de IA e dados está crescendo exponencialmente. 
            Cada mês perdido é uma oportunidade que não volta.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Zap className="h-8 w-8 text-accent-glow mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Resultados Imediatos</h3>
              <p className="text-white/80 text-sm">
                Saia da mentoria sabendo exatamente o que fazer nos próximos 12 meses
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <ArrowRight className="h-8 w-8 text-accent-glow mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Sem Enrolação</h3>
              <p className="text-white/80 text-sm">
                Estratégias práticas baseadas em experiência real no mercado
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Clock className="h-8 w-8 text-accent-glow mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Economia de Tempo</h3>
              <p className="text-white/80 text-sm">
                Evite anos de tentativas e erros que custam caro
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-accent/20 backdrop-blur-sm rounded-lg p-6 border border-accent/30 max-w-2xl mx-auto">
              <p className="text-white font-semibold text-lg mb-2">
                ⚡ Apenas 5 vagas por mês
              </p>
              <p className="text-white/90">
                A agenda fecha quando as vagas esgotam. Não deixe para depois.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Quero Minha Vaga Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <div className="text-center">
                <p className="text-white/80 text-sm mb-2">Contatos para agendamento:</p>
                <div className="space-y-1">
                  <p className="text-white font-medium">📧 luana@nexaigen.com.br</p>
                  <p className="text-white font-medium">📱 +55 (44) 3142-4835</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;