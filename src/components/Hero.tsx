import { Button } from "@/components/ui/button";
import luanaHero from "@/assets/luana-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Mentoria Estratégica em{" "}
              <span className="bg-gradient-to-r from-accent-glow to-white bg-clip-text text-transparent">
                Dados, IA e Negócios
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-4 leading-relaxed">
              Com Luana Carvalho – Fundadora da Nexaigen e da Academia dos Dados
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 border border-white/20">
              <p className="text-lg text-white font-medium">
                Em 1 hora você vai sair com clareza sobre o que fazer nos próximos 12 meses, 
                sem desperdiçar anos em tentativas aleatórias e cursos genéricos.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Agendar Mentoria Agora
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10">
                Saiba Mais
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-premium">
              <img
                src={luanaHero}
                alt="Luana Carvalho - Especialista em IA e Dados"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="absolute -top-4 -right-4 bg-accent rounded-full p-4 shadow-glow">
              <div className="text-white text-center">
                <div className="text-2xl font-bold">R$ 1.000</div>
                <div className="text-sm opacity-90">por 1 hora</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;