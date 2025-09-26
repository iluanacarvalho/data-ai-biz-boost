import { Button } from "@/components/ui/button";
import userPhoto from "@/assets/user-photo.jpg";

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
            <div>
              <Button variant="hero" size="lg" className="text-lg px-12 py-4 bg-primary hover:bg-primary-glow">
                AGENDE AGORA MESMO
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-premium">
              <img
                src={userPhoto}
                alt="Luana Carvalho - Especialista em IA e Dados"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;