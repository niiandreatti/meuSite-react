import React, { useEffect } from 'react';
import { Github as GitHub, Linkedin, Mail, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      {/* Header */}
      <header className="fixed w-full bg-slate-900/90 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text">
              NA
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#sobre" className="hover:text-teal-400 transition-colors">Sobre</a>
              <a href="#projetos" className="hover:text-teal-400 transition-colors">Projetos</a>
              <a href="#contato" className="hover:text-teal-400 transition-colors">Contato</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800">
            <a href="#sobre" className="block px-3 py-2 hover:bg-slate-700 rounded-md">Sobre</a>
            <a href="#projetos" className="block px-3 py-2 hover:bg-slate-700 rounded-md">Projetos</a>
            <a href="#contato" className="block px-3 py-2 hover:bg-slate-700 rounded-md">Contato</a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Desenvolvendo soluções digitais <span className="text-teal-400">inovadoras</span>
                </h1>
                <p className="text-slate-300 text-lg mb-8">
                  Especialista em backend com C#, desenvolvimento frontend com Angular, 
                  automações com Python e soluções em banco de dados.
                </p>
                <a 
                  href="#projetos"
                  className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full transition-colors"
                >
                  Ver Projetos
                </a>
              </div>
              <div className="animate-on-scroll opacity-0 translate-x-10 transition-all duration-700 delay-300">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800"
                  alt="Desenvolvimento"
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
              <h2 className="text-3xl font-bold mb-8 text-center">Sobre Mim</h2>
              <div className="max-w-3xl mx-auto space-y-6 text-slate-300">
                <p>
                  Meu nome é <strong>Nicolas Andreatti</strong> e sou um desenvolvedor de software apaixonado por criar soluções
                  inovadoras e eficientes. Tenho experiência em diversas tecnologias como <strong>C#, Python, SQL, Angular </strong> 
                  e estou sempre em busca de aprender novas ferramentas e técnicas para aprimorar meu trabalho.
                </p>
                <p>
                  Minha jornada como desenvolvedor começou durante meu tempo na Unicamp, onde fui desafiado a explorar 
                  diferentes áreas da tecnologia. Ao longo dos anos, me especializei em áreas como desenvolvimento backend, 
                  automação e integração de sistemas, e sou particularmente interessado em como a tecnologia pode melhorar 
                  processos do dia a dia, como no desenvolvimento de sistemas bancários e de gestão de dados.
                </p>
                <p>
                  Atualmente, estou focado no desenvolvimento de projetos como <strong> sistemas bancários </strong>, onde implemento 
                  funcionalidades robustas para transações financeiras, e <strong>sistemas de gestão de pacientes</strong>, com um foco 
                  especial na experiência do usuário e na segurança dos dados. Meu objetivo é sempre criar soluções práticas, 
                  escaláveis e de alta qualidade.
                </p>
                <p>
                  Fora do mundo da programação, sou uma pessoa curiosa, que adora explorar temas como <strong>astronomia</strong> e 
                  atividades físicas. Essas paixões me ajudam a manter um equilíbrio saudável e uma mente criativa, que se reflete 
                  diretamente no meu trabalho.
                </p>
                <p>
                  Estou sempre aberto a novos desafios e a colaborações que me permitam crescer e contribuir para a inovação 
                  tecnológica. Se você tem um projeto interessante, não hesite em entrar em contato!
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Projects Section */}
        <section id="projetos" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Projetos</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Sistema Bancário",
                  tech: "C# & Angular",
                  description: "Sistema bancário completo com funcionalidades de pagamento, transferência e consulta de saldo.",
                  link: "https://github.com/niiandreatti/Calculadora-C_sharp"
                },
                {
                  title: "Gestão de Pacientes",
                  tech: "Python & MySQL",
                  description: "Sistema de gestão de pacientes com cadastro e busca de informações médicas.",
                  link: "https://github.com/niiandreatti/Cadastro-de-Cliente"
                },
                {
                  title: "Site de Segurança",
                  tech: "Html & Css & Js",
                  description: "Site de prestadores de serviço de segurança",
                  link: "https://github.com/niiandreatti/Pelegrini"
                },
                {
                  title: "Repositório de Flores para alguém",
                  tech: "Html & Css & Js",
                  description: "Repositório de flores para sua pessoa especial",
                  link: "https://github.com/niiandreatti/flor-liana"
                },
                {
                  title: "Sistema de gerenciamento de funcionários",
                  tech: "Java",
                  description: "Este projeto tem como objetivo desenvolver um sistema de gerenciamento de funcionários utilizando Java, com uma estrutura modular e bem definida através de um diagrama de classes",
                  link: "https://github.com/niiandreatti/funcionario"
                },
                {
                  title: "Sistema de Cadastro",
                  tech: "Tkinter",
                  description: "Interface gráfica para cadastro de pessoas com armazenamento em Excel.",
                  link: "https://github.com/niiandreatti/Almavista"
                }
              ].map((project, index) => (
                <div 
                  key={index}
                  className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700"
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="bg-slate-800 rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-teal-400 text-sm mb-4">{project.tech}</p>
                    <p className="text-slate-300 mb-4">{project.description}</p>
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-400 hover:text-teal-300 inline-flex items-center gap-2"
                    >
                      Ver no GitHub <GitHub size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
              <h2 className="text-3xl font-bold mb-8">Contato</h2>
              <p className="text-slate-300 mb-8">
                Entre em contato para mais informações ou para discutir possíveis colaborações:
              </p>
              <div className="flex justify-center gap-8">
                <a 
                  href="https://github.com/niiandreatti" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 transition-colors"
                >
                  <GitHub size={24} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/niiandreatti/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="mailto:nicolas.andreatti@domain.com"
                  className="hover:text-teal-400 transition-colors"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-400">
          <p>© 2025 Nicolas Andreatti | Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;