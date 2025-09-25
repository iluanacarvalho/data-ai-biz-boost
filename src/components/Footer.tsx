const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">
            Mentoria Estratégica com Luana Carvalho
          </h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <div>
              <p className="text-primary-foreground/90">📧 luana@nexaigen.com.br</p>
            </div>
            <div>
              <p className="text-primary-foreground/90">📱 +55 (44) 3142-4835</p>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/70 text-sm">
              © 2024 Nexaigen & Academia dos Dados. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;